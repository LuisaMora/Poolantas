import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginAutenticacionComponent } from './login-autenticacion/login-autenticacion.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { LoginHomepageComponent } from './login-homepage/login-homepage.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import {ComponentesModule} from "../../componentes/componentes.module";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    LoginAutenticacionComponent,
    LoginHomepageComponent,
    LoginRegistroComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatNativeDateModule,
        ComponentesModule
    ]
})
export class LoginModule { }
