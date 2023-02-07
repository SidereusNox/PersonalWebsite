import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { AppLoginComponent } from './app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppWelcomeComponent,
    EducationCardComponent,
    AppLoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
