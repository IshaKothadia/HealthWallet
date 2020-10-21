import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';

const routes: Routes = [
  { path : '', redirectTo :'/home' , pathMatch:'full'},
  { path : 'home', component : HomeComponent},
  { path: 'signup', component : SignupformComponent},
  { path : 'login', component : LoginformComponent}
  { path : 'login', component : LoginformComponent},
  { path : 'underwork', component : ConstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }