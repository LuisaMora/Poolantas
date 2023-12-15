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
export class AnfitrionRegistroComponent implements OnInit, AfterViewInit {

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
  ngAfterViewInit(): void {
    this.initMap();
  }
  //**************************mapa*********************************

  private initMap(): void {
    this.map = L.map('map', {
      center: [-17.3952, -66.1391],
      zoom: 5
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      //apiKey: 'c0ead6ff69144f128ef1263a54b4ee12'
    });
    tiles.addTo(this.map);
    // Agrega un escuchador de eventos de clic al mapa
    this.map.on('click', (event: any) => {
      this.updateMarkerPosition(event.latlng.lat, event.latlng.lng);
    });
    // Crea el marcador y agrégalo al mapa inicialmente
    this.marker = L.marker([-17.3952, -66.1391], { draggable: true }).addTo(this.map);
    this.updateMarkerPosition(-17.3952, -66.1391);
    this.marker.bindPopup('¡Estás en Cochabamba!').openPopup();
  }

  private updateMarkerPosition(lat: number, lng: number): void {
    // Actualiza la posición del marcador
    this.marker.setLatLng([lat, lng]);
    // Obtener la dirección basada en la nueva posición
    this.getAddress(lat, lng);
    // Actualizar la propiedad direccion con la dirección
    this.direccion = this.adress ? this.adress.display_name : '';
  }

  private getAddress(lat: number, lng: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    this.http.get(url).subscribe((data: any) => {
      var objectDireccion = data.address;
      objectDireccion.latitude = lat;
      objectDireccion.longitude = lng;
      this.adress = objectDireccion;
      const streetName = objectDireccion.road !== undefined ? objectDireccion.road :
        (objectDireccion.city !== undefined ? objectDireccion.city : objectDireccion.state);
      this.marker.bindPopup('¡Estás en ' + streetName).openPopup()+'!.';
    }, error => {
      console.error('Error al obtener la dirección:', error);
    });
  }
  inputApariencia = INPUT_APARIENCIA;
  //fin mapa


  //************** control del file input *****************
  public onFileChange(event: any): void {
    const files: FileList = event.target.files;
    // Limpiar la vista previa de imágenes
    this.limpiarVistaPrevia();
    // Procesar y mostrar las imágenes
    this.procesarImagenes(files);
    // Mostrar u ocultar mensaje de error
    this.manejarMensajeError(files);
  }

  private limpiarVistaPrevia(): void {
    const divInputFotos = document.getElementById("input-fotos-preview");
    if (divInputFotos) {
      while (divInputFotos.firstChild) {
        divInputFotos.removeChild(divInputFotos.firstChild);
      }
    }
  }

  private procesarImagenes(files: FileList): void {
    this.selectedFiles = [];
    const divInputFotos = document.getElementById("input-fotos-preview");
    if (divInputFotos) {
      for (let i = 0; i < files.length && files.length === 2; i++) {
        this.selectedFiles.push(files[i]);
        const file: File = files[i];
        const img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
        img.height = 60;
        img.width = 60;
        img.style.margin = "5px";
        img.className = "input-fotos-files";
        divInputFotos.appendChild(img);
      }
    }
  }

  private manejarMensajeError(files: FileList): void {
    const error = document.getElementById("input-fotos-error");
    if (files.length !== 2) {
      error?.style.setProperty("display", "block");
    } else {
      error?.style.setProperty("display", "none");
    }
  }

  public selectFiles(): void {
    this.fileInput.nativeElement.click();
  }
  //fin file input

  public abrirModalRegistrar() {
    const dialogRef = this.dialog.open(ModalRegistrarComponent, {
      width: '400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.formRegistro.valid && this.selectedFiles.length === 2) {
          const datosFormulario = this.formRegistro.value;
          datosFormulario.inputPhotos = this.selectedFiles;
          datosFormulario.propertyAddress = this.adress;
          console.log('Datos del formulario:', datosFormulario);

          // Aquí puedes realizar otras acciones, como enviar los datos al servidor, etc.
        }else{
          console.log('Datos del formulario:', "no valido");
        }
        // Aquí puedes realizar otras acciones, como enviar los datos al servidor, etc.
      }
    });
  }

  //Validaciones, necesito separarlas en otro archivo
  public propertyDescriptionErrorMessage(formControlName: string): string | null {
    const control = this.formRegistro.get(formControlName);

    if (!control) return null;
    if (control.hasError('required')) return 'La descripción es requerida.';

    const maxLength = control.getError('maxlength')?.requiredLength;
    if (maxLength) return `La descripción no puede tener más de ${maxLength} caracteres.`;

    const minLength = control.getError('minlength')?.requiredLength;
    if (minLength) return `La descripción debe tener al menos ${minLength} caracteres.`;

    return null;
  }
  guardarDatos() {
    if (this.formRegistro.valid) {
      const datosFormulario = this.formRegistro.value;
      console.log('Datos del formulario:', datosFormulario);

      // Aquí puedes realizar otras acciones, como enviar los datos al servidor, etc.
    }
  }

// Cambia el tipo del objeto $event.target a HTMLInputElement
  buscarDireccion(event: KeyboardEvent): void {
    const direccion = (event.target as HTMLInputElement).value;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${direccion}`;

    this.http.get(url).subscribe((data: any) => {
      if (data && data.length > 0) {
        const resultado = data[0];
        const lat = parseFloat(resultado.lat);
        const lng = parseFloat(resultado.lon);
        this.updateMarkerPosition(lat, lng);
        this.map.panTo([lat, lng]);
      } else {
        console.error('No se encontraron resultados para la dirección:', direccion);
      }
    }, error => {
      console.error('Error al buscar la dirección:', error);
    });
  }

}
// {
//   AireAcondicionado: true
// Cocina: true
// DetectorHumo: true
// EquipamientoEjercicio: ""
// EstacionamientoEquipado: true
// Jacuzzi: ""
// Lavadora: ""
// Parrillero: ""
// Piscina: true
// TvCable: ""
// Wifi: true
// inputPhotos: "C:\\fakepath\\Screenshot_20231126_164833.png"-----------
// numberBathrooms: 5
// numberBedRooms: 2
// numberBeds: 3
// numberGuests: 1
// propertyAddress: "La Paz"--------------
// propertyAddressDescript: "asdaf"
// propertyDescription: "una linda casita"
// propertyDisposition: "option1"
// propertyName: "la casita"
// propertyType: "Casa"
// rentPrice: 345
// }
