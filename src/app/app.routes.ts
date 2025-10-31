import { Routes } from '@angular/router';
import { HomepageComponent } from '@pages/homepage/homepage.component';
import { MainLayoutComponent } from '@app/core/layouts/main-layout-component/main-layout-component.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
    ],
  },
];
