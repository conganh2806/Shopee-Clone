import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@core/header/header.component';

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {}
