import { Component, OnInit } from '@angular/core';
import { Plantas } from 'src/app/modelos/plantas';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalle-planta',
  templateUrl: './detalle-planta.component.html',
  styleUrls: ['./detalle-planta.component.scss']
})
export class DetallePlantaComponent implements OnInit {
  base_backend_url: string = environment.backendStorageUrl;
  plant:Plantas = JSON.parse(localStorage.getItem('planta') || '{}');
  constructor() { }

  ngOnInit(): void {
  }

}
