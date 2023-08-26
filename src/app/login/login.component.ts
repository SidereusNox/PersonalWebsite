import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  invalidCredentials: boolean = false;

  constructor(private authService: AuthenticationService) {}

  async login(): Promise<void> {
    if(!this.credentialsComplete()){
      return;
    }

    let success = await this.authService.tryLogin(this.username, this.password);

    if(success){
      window.location.href = '/home';
    } else {
      this.invalidCredentials = true;
    }
  }

  credentialsComplete() : boolean{
    return this.username !== '' && this.password !== '';
  }
}
