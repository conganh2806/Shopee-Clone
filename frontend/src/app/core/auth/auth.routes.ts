import { Routes } from '@angular/router';
import { publicGuard } from './auth-guard';

import { RegisterComponent } from '@app/core/auth/pages/register/register.component';
import { LoginComponent } from '@app/core/auth/pages/login/login.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [publicGuard],
    data: { title: 'Đăng Nhập' },
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [publicGuard],
    data: { title: 'Đăng Ký' },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
