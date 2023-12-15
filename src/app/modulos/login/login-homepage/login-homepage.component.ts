import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INPUT_APARIENCIA} from "../../../config/constantes";

@Component({
  selector: 'app-login-homepage',
  templateUrl: './login-homepage.component.html',
  styleUrls: ['./login-homepage.component.scss']
})
export class LoginHomepageComponent implements OnInit {

  formulario: FormGroup;
  hide = true;

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
