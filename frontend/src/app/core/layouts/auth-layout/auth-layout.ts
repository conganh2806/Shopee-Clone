import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '@app/core/layouts/auth-layout/header/header';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, Header],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayoutComponent {}
