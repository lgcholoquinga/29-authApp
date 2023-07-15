import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { AuthStatus, User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl;
  private readonly http = inject(HttpClient);
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  login(email: string, password: string): Observable<boolean> {
    // return this.http.post<any>(`${this.baseUrl}/auth/login`, {
    //   email,
    //   password,
    // });

    return of(true);
  }
}
