import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, pass: password , };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      tap((response: any) => {
        if (response.token) {
          this.cookieService.set('auth_token', response.token);
          this.cookieService.set('email', email);
          this.cookieService.set('userId', response.userId);
        }
      })
    );
  }

  logout(): void {
    this.cookieService.delete('auth_token');
    this.cookieService.delete('email');
    this.cookieService.delete('userId');
  }

  getToken(): string {
    return this.cookieService.get('auth_token');
  }
  getEmail(): string {
    return this.cookieService.get('email');
  }

  getUserId(): string {
    return this.cookieService.get('userId');
  }
  isAuthenticated(): boolean {
    const authToken = this.getToken();
    return !!authToken;
  }

}
