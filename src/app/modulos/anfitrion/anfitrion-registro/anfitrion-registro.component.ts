import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { INPUT_APARIENCIA } from "../../../config/constantes";
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ModalRegistrarComponent } from './modal-registrar/modal-registrar.component';
import { MatDialog } from '@angular/material/dialog';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-anfitrion-registro',
  templateUrl: './anfitrion-registro.component.html',
  styleUrls: ['./anfitrion-registro.component.scss']
})
export class AnfitrionRegistroComponent implements OnInit {

  formRegistro: FormGroup;
  selectedFiles: File[] = [];
  direccion: string = '';

//variabels para el mapa
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('inputFotos') fileInputFotos: any;
  private marker: any;
  private map: any;
  private adress: any;
// fin variables para el mapa

  constructor(private fb: FormBuilder, private http: HttpClient, public dialog: MatDialog) {
    const commonFields = ['propertyType','propertyDisposition','propertyAddressDescript',
      'numberGuests','numberBedRooms','numberBeds','numberBathrooms','Wifi','TvCable','Cocina','Lavadora',
      'AireAcondicionado','Piscina','Jacuzzi','EquipamientoEjercicio','DetectorHumo','Parrillero',
      'EstacionamientoEquipado','inputPhotos', 'rentPrice'
    ];
    this.formRegistro = this.fb.group({
      propertyName: ['', [Validators.required, Validators.maxLength(32)]],
      propertyDescription: ['', [Validators.required, Validators.maxLength(256)]],
    });
    commonFields.forEach((field) => {
      this.formRegistro.addControl(field, this.fb.control(''));
    });
  }
  ngOnInit() {
  }
  guardarDatos() {
    if (this.formRegistro.valid) {
      const datosFormulario = this.formRegistro.value;
      console.log('Datos del formulario:', datosFormulario);

      // Aquí puedes realizar otras acciones, como enviar los datos al servidor, etc.
    }
  }

}

