import { Routes } from '@angular/router';
import { HomepageComponent } from '@features/homepage/homepage';
import { MainLayoutComponent } from '@app/core/layouts/main-layout-component/main-layout-component';
import { AuthLayoutComponent } from '@app/core/layouts/auth-layout/auth-layout';

export const routeConfig: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Shopee Việt Nam | Mua Sắm Online',
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
    ],
  },
  {
    path: 'buyer',
    component: AuthLayoutComponent,

    loadChildren: () => import('@app/core/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
];
