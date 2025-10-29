import { Component, signal } from '@angular/core';
import { Header } from '@core/header/header.component';
import { Homepage } from '@pages/homepage/homepage.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('shopee-clone');
}
