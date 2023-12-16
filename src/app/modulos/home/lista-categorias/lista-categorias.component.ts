import { Component, OnInit } from '@angular/core';
import { INPUT_APARIENCIA } from 'src/app/config/constantes';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit {
  apariencia = INPUT_APARIENCIA;
  constructor() { }

  ngOnInit(): void {
  }

}
