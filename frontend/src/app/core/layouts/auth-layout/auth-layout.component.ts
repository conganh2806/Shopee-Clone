import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '@core/layouts/auth-layout/header/header.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, Header],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayoutComponent {}
