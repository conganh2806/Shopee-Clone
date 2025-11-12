import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogService } from '@shared/components/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class DialogComponent {
  dialogService = inject(DialogService);

  config = this.dialogService.config;

  onButtonClick(value: string) {
    this.dialogService.close(value);
  }

  onCancel() {
    this.dialogService.close('cancel');
  }
}
