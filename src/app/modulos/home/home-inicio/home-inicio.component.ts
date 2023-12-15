import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INPUT_APARIENCIA} from "../../../config/constantes";

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.scss']
})
export class HomeInicioComponent implements OnInit {
  formulario: FormGroup;
  apariencia = INPUT_APARIENCIA;
  visible = false;


  constructor(private formBuilder: FormBuilder,) {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  login() {

  }
}
