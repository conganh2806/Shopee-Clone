import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from '@core/auth/auth-store';
import { AuthSuccessData, LoginPayload } from '@core/auth/auth.model';
import { TextInput } from '@app/shared/components/text-input/text-input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseResponse } from '@app/core/models/response.model';

@Component({
  selector: 'app-login',
  imports: [TextInput, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private authStore = inject(AuthStore);
  private router = inject(Router);
  private navigationTimer?: ReturnType<typeof setTimeout>;

  loading = signal(false);
  apiError = signal<string | null>(null);

  loginForm = this.formBuilder.group({
    phone: [
      '',
      [Validators.required, Validators.pattern(/(03|05|07|08|09|01[2|6|8|9])[0-9]{8}\b/)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get phone() {
    return this.loginForm.get('phone') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  private phoneStatus = toSignal(this.phone.valueChanges);
  private passwordStatus = toSignal(this.password.valueChanges);

  phoneErrorMessage = computed(() => {
    this.phoneStatus();
    const control = this.phone;
    if (!control.dirty && !control.touched) return null;

    if (control.hasError('required')) return 'Vui lòng nhập số điện thoại.';
    if (control.hasError('pattern')) return 'Số điện thoại không hợp lệ';

    return null;
  });

  passwordErrorMessage = computed(() => {
    this.passwordStatus();
    const control = this.password;
    if (!control.dirty && !control.touched) return null;

    if (control.hasError('required')) return 'Vui lòng nhập mật khẩu.';
    if (control.hasError('minlength')) return 'Mật khẩu phải có ít nhất 6 ký tự.';
    return null;
  });

  onSubmit() {
    this.apiError.set(null);
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    this.loading.set(true);
    const payload = this.loginForm.getRawValue() as LoginPayload;

    this.authStore.login(payload).subscribe({
      next: (response: BaseResponse<AuthSuccessData>) => {
        this.loading.set(false);
        console.log('Đăng nhập thành công!', response);

        this.navigationTimer = setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        const errorResponse: BaseResponse<any> = err.error;
        const errorMessage = errorResponse?.message || 'Số điện thoại hoặc mật khẩu không đúng.';
        this.apiError.set(errorMessage);
        console.error('Đăng nhập thất bại!', err);
      },
    });
  }
}
