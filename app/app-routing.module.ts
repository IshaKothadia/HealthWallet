import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';

const routes: Routes = [
  { path: 'signup', component : SignupformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
