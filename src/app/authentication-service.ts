import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loginTokenName: string = 'loginToken';

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean{
    let token = localStorage.getItem(this.loginTokenName);
    let isLoggedIn = token != null;
    return isLoggedIn;
  }

  async tryLogin(username: string, password: string): Promise<boolean> {
    const credentials = { username: username, password: password };

    try {
      const response = await lastValueFrom(this.http.post<any>('http://localhost:3000/login', credentials));

      localStorage.setItem(this.loginTokenName, response.token);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  logout(): void{
    localStorage.removeItem(this.loginTokenName);
  }
}
