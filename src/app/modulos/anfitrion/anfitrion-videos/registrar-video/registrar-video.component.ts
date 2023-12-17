import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VideoService } from 'src/app/service/video.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar-video',
  templateUrl: './registrar-video.component.html',
  styleUrls: ['./registrar-video.component.scss']
})
export class RegistrarVideoComponent implements OnInit {
  formRegistro: FormGroup;
  
  constructor(private videoService: VideoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.formRegistro = this.fb.group({
      iframe_code: ['', []],
    });

   }

  ngOnInit(): void {
  }

  guardarDatos() {
    console.log("Entra")
    if (this.formRegistro.valid) {
      const datosFormulario = new FormData();
      datosFormulario.append('iframe_code', this.formRegistro.get('iframe_code')?.value);
      console.log(this.formRegistro.value);
      this.videoService.store(datosFormulario).subscribe((data: any) => {
        if (data) {
          this.showSnackBar('Video registrado correctamente', 'success');
          // this.location.back();
        }else{
          this.showSnackBar('Error al registrar el video', 'error');
        }
      }, (error: any) => {
        console.log(error);
        this.showSnackBar('Error al registrar el video', 'error');
      }
      );
    }
  }

  private showSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [panelClass],
    });
  }

}
