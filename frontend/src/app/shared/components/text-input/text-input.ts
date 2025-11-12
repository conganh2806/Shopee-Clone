import { Component, computed, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput implements OnInit, OnDestroy {
  @Input() control!: FormControl;

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() autocomplete: string = '';

  @Input() errorMessage: string | null = null;
  @Input() showValidationSuccess: boolean = false;

  private controlStatus = signal<string | null>(null);
  private statusSub!: Subscription;

  faCircleCheck = faCheckCircle;

  ngOnInit(): void {
    this.controlStatus.set(this.control.status);

    this.statusSub = this.control.statusChanges.subscribe((status) => {
      this.controlStatus.set(status);
    });
  }

  showCheckmark = computed(() => {
    this.controlStatus();

    return (
      this.showValidationSuccess &&
      this.control.valid &&
      (this.control.dirty || this.control.touched)
    );
  });

  ngOnDestroy(): void {
    if (this.statusSub) {
      this.statusSub.unsubscribe();
    }
  }
}
