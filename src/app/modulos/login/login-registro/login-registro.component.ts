import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.scss']
})
export class LoginRegistroComponent {
  registroForm = this.fb.group({
    nombreCompleto: ['', [Validators.required, Validators.maxLength(200), Validators.pattern('[a-zA-Z ]*')]],
    telefonoCelular: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    correoElectronico: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
    confirmarContrasena: ['', Validators.required],
    fotoPerfil: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,  private router: Router) { }

  onSubmit() {
    if (this.registroForm.valid) {
      // Lógica de registro exitoso
      // Por ejemplo, enviar los datos a un servidor
    } else {
      this.markFormGroupTouched(this.registroForm);
    }
  }
  
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
}