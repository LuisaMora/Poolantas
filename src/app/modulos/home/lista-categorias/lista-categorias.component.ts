import { Component, OnInit } from '@angular/core';
import { INPUT_APARIENCIA } from 'src/app/config/constantes';
import { Plantas } from '../../../../../src/app/modelos/plantas';
import {AnfitrionService} from "../../../service/anfitrion.service";

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit {
  apariencia = INPUT_APARIENCIA;
  constructor(private anfitrionService: AnfitrionService,) { }
  categoria: Plantas[] = [];

  ngOnInit(): void { 
    this.getPropiedades();
  }
  getPropiedades() {
    this.anfitrionService.getCategorias().subscribe((data) => {
      this.categoria = data;
    });
  }

}
