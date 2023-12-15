import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  @ViewChild('cardsContainer') cardsContainer: ElementRef;
  cards = [
    {  content: 'Plantas Aromaticas', image: '/assets/sliderimagens/ima1.jpg',url: 'https://example1.com', },
    { url: 'https://example1.com', content: 'Plantas Frutales', image: '/assets/sliderimagens/ima1.jpg' },
    { url: 'https://example1.com', content: 'Plantas Ornamentales', image: '/assets/sliderimagens/ima2.jpg' },
    { url: 'https://example1.com', content: 'Plantas Medicianles', image: '/assets/sliderimagens/ima3.jpg' },
    { url: 'https://example1.com', content: 'Plantas Trepadoras', image: '/assets/sliderimagens/ima4.jpg' },
    { url: 'https://example1.com', content: 'Plantas insectívoras', image: '/assets/sliderimagens/ima5.jpg' },
    // ... Añade más tarjetas según sea necesario
  ];

  constructor() {
    // Aquí puedes inicializar cosas si es necesario en el constructor
  }

  ngOnInit() {
    // Aquí puedes poner la lógica de inicialización
    // Este método se ejecutará después de que Angular haya terminado de inicializar el componente
  }

  openUrl(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log('URL no definida');
      // O maneja la situación como consideres adecuado
    }
  }

  verMas(nombre: string) {
    console.log('Ver más sobre:', nombre);
  }

  // ... Puedes añadir más métodos según sea necesario ...
}
