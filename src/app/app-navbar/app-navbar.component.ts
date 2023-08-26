import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
})

export class AppNavbarComponent implements OnInit {
  authService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    window.location.href = '/home';
  }
}
