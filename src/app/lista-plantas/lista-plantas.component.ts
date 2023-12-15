
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent {
  openUrl(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log('URL no definida');
      // O maneja la situación como consideres adecuado
    }
  }
  
  
  @ViewChild('cardsContainer') cardsContainer: ElementRef;
  cards = [
    {  url: 'https://example1.com', content: 'Plantas Aromaticas', image: '/assets/sliderimagens/ima1.jpg' },
    {   url: 'https://example1.com',content: 'Plantas Frutales', image: '/assets/sliderimagens/ima1.jpg' },
    {   url: 'https://example1.com',content: 'Plantas Ornamentales', image: '/assets/sliderimagens/ima2.jpg' },
    { url: 'https://example1.com', content: 'Plantas Medicianles', image: '/assets/sliderimagens/ima3.jpg' },
    {   url: 'https://example1.com',content: 'Plantas Trepadoras', image: '/assets/sliderimagens/ima4.jpg' },
    { url: 'https://example1.com',title: '', subtitle: '', content: 'Plantas insectívoras', image: '/assets/sliderimagens/ima5.jpg' },
   
    // ... Añade más tarjetas según sea necesario
  ];

  verMas(nombre: string) {
    console.log('Ver más sobre:', nombre);
  }
}

