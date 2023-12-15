import { Component, OnInit } from '@angular/core';
import {Propiedad} from "../../../modelos/propiedad";
import {HuespedService} from "../../../service/huesped.service";
import {ModalContactoComponent} from "../huesped-ver-propiedad/modal-contacto/modal-contacto.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalCalificacionComponent} from "./modal-calificacion/modal-calificacion.component";

@Component({
  selector: 'app-huesped-resena',
  templateUrl: './huesped-resena.component.html',
  styleUrls: ['./huesped-resena.component.scss']
})
export class HuespedResenaComponent implements OnInit {
  propiedades: Propiedad[] = [];

  constructor(private huespedService: HuespedService,
              private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getPropiedades();
  }

  getPropiedades() {
    this.huespedService.getPropiedades().subscribe((data) => {
      this.propiedades = data;
    });
  }

  calificar(nombrePropiedad: string) {
    this.dialog.open(ModalCalificacionComponent,{
      width: '500px',
      data:{
        nombrePropiedad
      },
    })
  }
}
