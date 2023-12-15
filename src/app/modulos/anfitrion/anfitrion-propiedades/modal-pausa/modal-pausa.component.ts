import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {INPUT_APARIENCIA} from "../../../../config/constantes";

@Component({
  selector: 'app-modal-pausa',
  templateUrl: './modal-pausa.component.html',
  styleUrls: ['./modal-pausa.component.scss']
})
export class ModalPausaComponent implements OnInit {
  apariencia = INPUT_APARIENCIA;
  fechaInicio: any;
  fechaFin: any;
  constructor(private dialogRef: MatDialogRef<ModalPausaComponent>) { }

  ngOnInit(): void {
  }
  confirmarPausa() {
    // Aquí puedes hacer algo con las fechas, como enviarlas a un servicio o realizar alguna lógica.
    console.log('Fecha de Inicio:', this.fechaInicio);
    console.log('Fecha de Fin:', this.fechaFin);
    // También puedes cerrar el modal aquí si es necesario.
    if(this.fechaInicio && this.fechaFin){
      this.dialogRef.close(true);
    }else{
      this.dialogRef.close(false);
    }
  }

  cerrarModal(): void {
    // Cierra el modal sin confirmar la pausa
    this.dialogRef.close(false);
  }

}
