import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonDirection } from '@app/core/models/button-direction.type';

@Component({
  selector: 'app-carousel-nav-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './carousel-nav-button.html',
  styleUrl: './carousel-nav-button.scss',
})
export class CarouselNavButton {
  @Input() direction: ButtonDirection = 'right';

  @Input() disabled: boolean = false;

  @Input() visible: boolean = true;

  @Output() navigate = new EventEmitter<void>();

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  onClick(): void {
    if (!this.disabled) {
      this.navigate.emit();
    }
  }

  get arrowIcon(): IconDefinition {
    switch (this.direction) {
      case 'left':
        return this.faChevronLeft;
      case 'right':
        return this.faChevronRight;
      case 'up':
        return this.faChevronUp;
      case 'down':
        return this.faChevronDown;
      default:
        return this.faChevronRight;
    }
  }
}
