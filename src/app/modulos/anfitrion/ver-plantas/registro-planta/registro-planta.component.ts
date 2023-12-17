import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro-planta',
  templateUrl: './registro-planta.component.html',
  styleUrls: ['./registro-planta.component.scss']
})
export class RegistroPlantaComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  formRegistro: FormGroup; 
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.formRegistro = this.fb.group({
      propertyName: ['', [Validators.required, Validators.maxLength(32)]],
      propertyDescription: ['', [Validators.required, Validators.maxLength(256)]],
      image: [null, Validators.required], // Agrega un FormControl para la imagen
    });
   }

  ngOnInit(): void {
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.getBase64(file).then((data) => {
        this.previewUrl = data;
      });
    }
  }

  private getBase64(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  guardarDatos() {
    if (this.formRegistro.valid) {
      const datosFormulario = this.formRegistro.value;
      console.log('Datos del formulario:', datosFormulario);

      // También puedes enviar la imagen al servidor o realizar otras acciones aquí
    }
  }

}
