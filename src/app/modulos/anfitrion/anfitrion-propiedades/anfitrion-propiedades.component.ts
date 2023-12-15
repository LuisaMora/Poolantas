import { Component, OnInit } from '@angular/core';
import {Propiedad} from "../../../modelos/propiedad";
import {AnfitrionService} from "../../../service/anfitrion.service";
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../anfitrion-propiedades/modal-eliminar/modal-eliminar.component';
import { ModalPublicadoComponent } from '../anfitrion-propiedades/modal-publicado/modal-publicado.component';
import { ModalPausaComponent } from '../anfitrion-propiedades/modal-pausa/modal-pausa.component';
import { ModalReseniaComponent } from './modal-resenia/modal-resenia.component';
import {HuespedService} from "../../../service/huesped.service";

@Component({
  selector: 'app-anfitrion-propiedades',
  templateUrl: './anfitrion-propiedades.component.html',
  styleUrls: ['./anfitrion-propiedades.component.scss']
})
export class AnfitrionPropiedadesComponent implements OnInit {

  propiedades: Propiedad[] = [];

  constructor(private huespedService: HuespedService,
              public dialog: MatDialog ) {  }

  ngOnInit(): void {
    this.getPropiedades();
  }

  getPropiedades() {
    this.huespedService.getPropiedades().subscribe((data) => {
      this.propiedades = data;
    });
  }
  abrirModalEliminar() {
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      data: {} // pasar datos al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      // Puedes realizar acciones después de cerrar el modal si es necesario
      console.log('El modal se cerró');
    });
  }
  seleccionChange(selectedOption: string, id_propiedad: number): void {
    if (selectedOption === 'Publicado') {
      const dialogRef = this.dialog.open(ModalPublicadoComponent, {
        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe((confirmacion: boolean) => {
        if (confirmacion) {
          this.cambiarEstadoModal('Publicado', id_propiedad);
        }
      });
    } else if (selectedOption === 'Pausa') {
      const dialogRef = this.dialog.open(ModalPausaComponent, {
        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe((confirmacion: boolean) => {
        if (confirmacion) {
          this.cambiarEstadoModal('Pausa', id_propiedad);
        }
      });
    } else {
      console.log("Opción desconocida");
    }
  }
  cambiarEstadoModal(estado:string, id_propiedad:number): void {
    if (estado === 'Publicado') {
      console.log("La propiedad "+id_propiedad+" ha sido publicada");
    }
    if (estado === 'Pausa') {
      console.log("La propiedad "+id_propiedad+" ha sido pausada");
    }

  }
   
  abrirModalResenia(nombreHuesped: string) {
    if (nombreHuesped) {
      const dialogRef = this.dialog.open(ModalReseniaComponent, {
        width: '400px',
        data: {
          nombreHuesped: nombreHuesped
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        // Puedes realizar acciones después de cerrar el modal si es necesario
        console.log('El modal se cerró');
      });
    }
  }
  
}
