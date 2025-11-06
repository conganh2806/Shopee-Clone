import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  pageTitle = signal<string>('');

  private routerSub!: Subscription;

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(
        startWith(null),
        filter((event) => event === null || event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),

        filter((route) => !!route),

        switchMap((route) => route.data)
      )
      .subscribe((data: Data) => {
        this.pageTitle.set(data['title'] || '');
      });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
