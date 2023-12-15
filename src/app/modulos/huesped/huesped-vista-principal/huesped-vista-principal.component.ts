import {Component, OnInit, ViewChild} from '@angular/core';
import {Propiedad} from "../../../modelos/propiedad";
import {HuespedService} from "../../../service/huesped.service";
import {Router} from "@angular/router";
import { ModalFiltroComponent } from './modal-filtro/modal-filtro.component';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuTrigger} from "@angular/material/menu";
import * as moment from "moment";

@Component({
  selector: 'app-huesped-vista-principal',
  templateUrl: './huesped-vista-principal.component.html',
  styleUrls: ['./huesped-vista-principal.component.scss']
})
export class HuespedVistaPrincipalComponent implements OnInit {
  propiedades: Propiedad[] = [];
  ubicaciones: string[] = [];
  propiedadesFiltradas: Propiedad[] = [];
  selectedUbicacion: string | null = null;
  selectedLlegada: Date | null = null;
  selectedSalida: Date | null = null;
  mostrarBotones: boolean = false;
  busquedaRealizada: boolean = false;

  cantidadHuespedes: number = 1;
  @ViewChild(MatMenuTrigger) menuCuantosTrigger!: MatMenuTrigger;


  constructor(private huespedService: HuespedService,
              private router: Router,public dialog: MatDialog ) {
    this.selected = null;
  }

  ngOnInit(): void {
    this.getPropiedades();
    this.getUbicaciones();
  }

  selectedOption: string | null = null;
  selected: Date | null;
  

  selectOption(value: string): void {
    this.selectedOption = value;
  }
  seleccionarUbicacion(ubicacion: string | null) {
    this.selectedUbicacion = ubicacion;
    if(this.selectedUbicacion === null) {
      this.selectedLlegada = null;
      this.selectedSalida = null;
    this.buscarPropiedades(); // Llamar automáticamente a buscarPropiedades al seleccionar una ubicación
    }
  }

  getPropiedades() {
    this.huespedService.getPropiedades().subscribe((data) => {
      this.propiedades = data;
    });
  }
  getUbicaciones() {
    this.huespedService.getUbicaciones().subscribe((ubicaciones) => {
      this.ubicaciones = ubicaciones;
    });
  }

  buscarPropiedades() {
    console.log(this.propiedadesFiltradas)
    this.selectedLlegada = moment.isMoment(this.selectedLlegada)? this.selectedLlegada.toDate(): this.selectedLlegada;
    this.selectedSalida = moment.isMoment(this.selectedSalida)? this.selectedSalida.toDate(): this.selectedSalida;
   
    this.propiedadesFiltradas = this.propiedades.filter((propiedad) => {
      const ubicacionCoincide = !this.selectedUbicacion || propiedad.department.toLowerCase() === this.selectedUbicacion.toLowerCase();

      const llegadaCoincide = !this.selectedLlegada || propiedad.dateIni >= this.selectedLlegada ;

      const salidaCoincide = !this.selectedSalida || propiedad.dateFin <= this.selectedSalida;
      console.log(salidaCoincide)
      // Todas las condiciones deben cumplirse para que la propiedad pase el filtro
      return ubicacionCoincide && llegadaCoincide && salidaCoincide;
    }); 

    this.busquedaRealizada = true;
  }
}
