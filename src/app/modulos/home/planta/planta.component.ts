import { Component, OnInit } from '@angular/core';
import { Plantas } from '../../../../../src/app/modelos/plantas';
import {AnfitrionService} from "../../../service/anfitrion.service";
@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss']
})
export class PlantaComponent implements OnInit {
  constructor(private anfitrionService: AnfitrionService,) { }
  categoria: Plantas[] = [];

  ngOnInit(): void { 
    this.getPropiedades();
  }
  getPropiedades() {
    this.anfitrionService.getCategorias().subscribe((data) => {
      this.categoria = data;
    });
  }

}
