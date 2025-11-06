import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, DialogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
