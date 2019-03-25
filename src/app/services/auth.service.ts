import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../interface/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = {
      username: email,
      password
    };

    return this.http.post<LoginResponse>(`${environment.api}/login_check`, body)
    .pipe(
      tap(res => {
        const token = res.token;
        localStorage.setItem('token', token);
        const payload = atob(token.split('.')[1]);
        localStorage.setItem('token_payload', payload);
      })
    );
  }

  register(firstName: string, lastName: string, email: string, password: string) {
    const body = {firstName, lastName, email, password};

    return this.http.post(`${environment.api}/register`, body);
  }
}
