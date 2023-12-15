import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAutenticacionComponent } from './login-autenticacion/login-autenticacion.component';
import {LoginHomepageComponent} from "./login-homepage/login-homepage.component";
import {LoginRegistroComponent} from "./login-registro/login-registro.component";

const routes: Routes = [
  {
    path:'',
    component: LoginHomepageComponent,
  },
  {
    path:'autenticacion',
    component: LoginAutenticacionComponent,
  },
  {
    path:'registro',
    component: LoginRegistroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
