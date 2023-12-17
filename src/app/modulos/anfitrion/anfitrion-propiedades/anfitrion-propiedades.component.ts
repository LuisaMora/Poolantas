import { Component, OnInit } from '@angular/core';
import {Propiedad} from "../../../modelos/propiedad";
import {AnfitrionService} from "../../../service/anfitrion.service";
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../anfitrion-propiedades/modal-eliminar/modal-eliminar.component';
import { ModalPublicadoComponent } from '../anfitrion-propiedades/modal-publicado/modal-publicado.component';
//import { ModalPausaComponent } from '../anfitrion-propiedades/modal-pausa/modal-pausa.component';
//import { ModalReseniaComponent } from './modal-resenia/modal-resenia.component';
//import {HuespedService} from "../../../service/huesped.service";
import { Plantas } from 'src/app/modelos/plantas';

@Component({
  selector: 'app-anfitrion-propiedades',
  templateUrl: './anfitrion-propiedades.component.html',
  styleUrls: ['./anfitrion-propiedades.component.scss']
})
export class AnfitrionPropiedadesComponent implements OnInit {

  categoria: Plantas[] = [];

  constructor(private anfitrionService: AnfitrionService,
              public dialog: MatDialog ) {  }

  ngOnInit(): void {
    this.getPropiedades();
  }

  getPropiedades() {
    this.anfitrionService.getCategorias().subscribe((data) => {
      this.categoria = data;
    });
  }
  
}
