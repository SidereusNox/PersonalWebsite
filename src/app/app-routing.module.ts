import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: AppWelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: AppWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
