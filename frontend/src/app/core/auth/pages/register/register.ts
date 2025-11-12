import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { TextInput } from '@app/shared/components/text-input/text-input';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthSuccessData } from '@app/core/auth/auth.model';
import { DialogService } from '@app/shared/components/dialog/dialog.service';
import { BaseResponse } from '@app/core/models/response.model';
import { take } from 'rxjs';
import { AuthStore } from '@core/auth/auth-store';

export function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { passwordsMismatch: true };
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, TextInput],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnDestroy {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthStore);
  private dialogService = inject(DialogService);
  private navigationTimer?: ReturnType<typeof setTimeout>;

  currentStep = signal<'phone' | 'password' | 'success'>('phone');
  isSubmitted = signal(false);
  loading = signal(false);
  apiError = signal<string | null>(null);

  registerForm: FormGroup = this.formBuilder.group(
    {
      phone: [
        '',
        [Validators.required, Validators.pattern(/(03|05|07|08|09|01[2|6|8|9])[0-9]{8}\b/)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: passwordsMatchValidator,
    }
  );

  get phone() {
    return this.registerForm.get('phone') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  private phoneStatus = toSignal(this.phone.valueChanges, { initialValue: 'INVALID' });
  private passwordStatus = toSignal(this.password.valueChanges, { initialValue: 'INVALID' });
  private confirmPasswordStatus = toSignal(this.confirmPassword.valueChanges, {
    initialValue: 'INVALID',
  });
  private formStatus = toSignal(this.registerForm.statusChanges, { initialValue: 'INVALID' });

  phoneErrorMessage = computed(() => {
    this.phoneStatus();
    const control = this.phone;

    if (!control.dirty && !control.touched) return null;

    if (control.hasError('required')) return 'Vui lòng nhập số điện thoại.';
    if (control.hasError('pattern')) return 'Số điện thoại không hợp lệ';
    if (control.hasError('phoneExists')) return 'Số điện thoại đã được đăng ký.';
    return null;
  });

  passwordErrorMessage = computed(() => {
    this.passwordStatus();
    const control = this.password;
    if (!control.dirty && !control.touched && !this.isSubmitted()) return null;

    if (control.hasError('required')) return 'Vui lòng nhập mật khẩu.';
    if (control.hasError('minlength')) return 'Mật khẩu phải có ít nhất 6 ký tự.';
    return null;
  });

  confirmPasswordErrorMessage = computed(() => {
    this.confirmPasswordStatus();
    this.formStatus();
    const control = this.confirmPassword;

    if (!control.dirty && !control.touched && !this.isSubmitted()) return null;

    if (control.hasError('required')) return 'Vui lòng xác nhận mật khẩu.';
    if (this.registerForm.hasError('passwordsMismatch')) return 'Mật khẩu không khớp.';
    return null;
  });

  onSubmit() {
    const step = this.currentStep();
    this.apiError.set(null);

    if (step === 'phone') {
      this.handlePhoneStep();
    } else if (step === 'password') {
      this.handlePasswordStep();
    }
  }

  private handlePhoneStep() {
    this.phone.markAsTouched();
    this.phone.markAsDirty();

    if (this.phone.valid) {
      this.phone.disable();
      this.currentStep.set('password');
    }
  }

  private handlePasswordStep() {
    this.isSubmitted.set(true);
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) {
      return;
    }

    this.loading.set(true);

    const finalFormValue = this.registerForm.getRawValue();

    this.authService.register(finalFormValue).subscribe({
      next: (response: BaseResponse<AuthSuccessData>) => this.handleRegistrationSuccess(response),
      error: (err: HttpErrorResponse) => this.handleRegistrationError(err),
    });
  }

  private handleRegistrationSuccess(response: unknown) {
    this.loading.set(false);
    console.log('Đăng ký thành công!', response);

    this.currentStep.set('success');

    this.navigationTimer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

  private handleRegistrationError(err: HttpErrorResponse) {
    this.loading.set(false);

    const errorResponse: BaseResponse<any> = err.error;
    const errorMessage = errorResponse.message || 'Lỗi không xác định.';

    console.error('Đăng ký thất bại!', err);

    if (err.status === 409) {
      this.dialogService.open({
        title: 'Số điện thoại đã tồn tại',
        message: `SĐT ${this.phone.value} đã được đăng ký. Bạn có muốn đăng nhập với số này?`,
        buttons: [
          { text: 'Hủy', value: 'cancel', style: 'secondary' },
          { text: 'Đăng Nhập', value: 'login', style: 'primary' },
        ],
      });

      this.dialogService.onClose$.pipe(take(1)).subscribe((result) => {
        if (result === 'login') {
          this.router.navigate(['/buyer/login'], {
            queryParams: { phone: this.phone.value },
          });
        } else {
          this.currentStep.set('phone');
          this.phone.enable();
          this.phone.setErrors({ phoneExists: true });
        }
      });
    } else {
      this.apiError.set(errorMessage);
    }
  }

  ngOnDestroy() {
    if (this.navigationTimer) {
      clearTimeout(this.navigationTimer);
    }
  }
}
