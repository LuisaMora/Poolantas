import { Component, OnInit } from '@angular/core';
import {INPUT_APARIENCIA} from "../../../config/constantes";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../common/auth.service";

@Component({
  selector: 'app-login-autenticacion',
  templateUrl: './login-autenticacion.component.html',
  styleUrls: ['./login-autenticacion.component.scss']
})
export class LoginAutenticacionComponent implements OnInit {
  hide = true;
  formulario: FormGroup;

  apariencia = INPUT_APARIENCIA;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    const { email, password } = this.formulario.value;
    if (this.authService.login(email, password)) {
      // Inicio de sesión exitoso
      const token = this.authService.getToken();
      console.log('Token:', token);
      // Realiza la lógica adicional que necesitas con el token
    } else {
      // Inicio de sesión fallido
      console.log('Inicio de sesión fallido');
    }
  }
}
