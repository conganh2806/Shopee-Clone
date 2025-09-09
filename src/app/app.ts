import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Homepage } from './core/homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [Header, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopee-clone');
}
