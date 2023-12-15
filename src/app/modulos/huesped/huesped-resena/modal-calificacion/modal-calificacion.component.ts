import {Component, Inject, OnInit} from '@angular/core';
import {INPUT_APARIENCIA} from "../../../../config/constantes";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-calificacion',
  templateUrl: './modal-calificacion.component.html',
  styleUrls: ['./modal-calificacion.component.scss']
})
export class ModalCalificacionComponent implements OnInit {
  apariencia = INPUT_APARIENCIA;
  nombrePropiedad: string;
  constructor(@Inject(MAT_DIALOG_DATA)
              public data: { nombrePropiedad: string }) {
    this.nombrePropiedad = data.nombrePropiedad;
  }
  ngOnInit(): void {
  }

}
