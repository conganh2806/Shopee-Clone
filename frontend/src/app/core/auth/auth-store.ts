import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthSuccessData, LoginPayload, RegisterPayload, User } from '@core/auth/auth.model';
import { BaseResponse } from '@core/models/response.model';
import { environment } from '@env/environments.development';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = `${environment.apiUrl}/auth`;

  private readonly _currentUser = signal<User | null>(null);

  public readonly currentUser = this._currentUser.asReadonly();
  public readonly isAuthenticated = computed(() => !!this._currentUser());

  constructor() {
    this.checkAuthOnLoad();
  }

  checkAuthOnLoad() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getMe().subscribe({
        next: (user) => this._currentUser.set(user),
        error: () => this.clearAuthentication(),
      });
    }
  }

  getMe(): Observable<User> {
    return this.http
      .get<BaseResponse<User>>(`${this.apiUrl}/me`)
      .pipe(map((response) => response.data!));
  }

  login(payload: LoginPayload): Observable<BaseResponse<AuthSuccessData>> {
    return this.http.post<BaseResponse<AuthSuccessData>>(`${this.apiUrl}/login`, payload).pipe(
      tap((response) => {
        if (response.data) {
          this.setAuthentication(response.data);
        }
      })
    );
  }

  register(payload: RegisterPayload): Observable<BaseResponse<AuthSuccessData>> {
    return this.http.post<BaseResponse<AuthSuccessData>>(`${this.apiUrl}/register`, payload).pipe(
      tap((response) => {
        if (response.data) {
          this.setAuthentication(response.data);
        }
      })
    );
  }

  logout() {
    this.clearAuthentication();
    this.router.navigate(['/buyer/login']);
  }

  private setAuthentication(response: AuthSuccessData) {
    localStorage.setItem('token', response.token);
    this._currentUser.set(response.user);
  }

  private clearAuthentication() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
  }
}
