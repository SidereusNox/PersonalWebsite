import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  login() {
    const credentials = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:3000/login', credentials).subscribe(
      (response) => {
        // Save the token in local storage or session storage
        localStorage.setItem('token', response.token);
        window.location.href = '/home';
      },
      (error) => {
        console.error(error);
        // Handle login error
      }
    );
  }
}
