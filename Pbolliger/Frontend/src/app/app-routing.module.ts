import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { EducationCardComponent } from './education-card/education-card.component';

const routes: Routes = [
  { path: "home", component: AppWelcomeComponent },
  { path: "about", component: EducationCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
