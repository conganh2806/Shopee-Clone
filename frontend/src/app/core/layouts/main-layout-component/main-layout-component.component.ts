import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/core/layouts/main-layout-component/header/header.component';

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {}
