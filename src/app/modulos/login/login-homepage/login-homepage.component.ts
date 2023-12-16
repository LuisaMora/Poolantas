import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INPUT_APARIENCIA} from "../../../config/constantes";

@Component({
  selector: 'app-login-homepage',
  templateUrl: './login-homepage.component.html',
  styleUrls: ['./login-homepage.component.scss']
})
export class LoginHomepageComponent implements OnInit {

  carouselImages: string[] = [
    'assets/img/planta1.jpg',
    'assets/img/planta2.jpg',
    'assets/img/planta3.jpg',
    'assets/img/planta4.jpg',
    'assets/img/planta5.jpg',
    'assets/img/planta6.jpg',
  ]; 

  selectedImage: string | null = null;
  formulario: FormGroup;
  hide = true;
  currentIndex: number = 0;

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
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }
  updateSlide(index: number): void {
    this.currentIndex = index;
    this.selectedImage = this.carouselImages[index];
  }

}
