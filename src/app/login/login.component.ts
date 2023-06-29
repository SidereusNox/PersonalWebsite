import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    if(!this.credentialsComplete()){
      return;
    }

    const credentials = { username: this.username, password: this.password };

    //Todo: Abstract address to a provider that can give either debug or prod address
    let postRequest = this.http.post<any>(
      'http://localhost:3000/login',
      credentials
    );

    //Todo: Abstract http call
    postRequest.subscribe({
      next: (response) => {
        // Save the token in local storage or session storage
        console.log("reached next!")
        localStorage.setItem('token', response.token);
        window.location.href = '/home';
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  credentialsComplete() : boolean{
    return this.username !== '' && this.password !== '';
  }
}
