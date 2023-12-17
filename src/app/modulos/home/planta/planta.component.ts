import { Component, OnInit } from '@angular/core';
import { Plantas } from '../../../../../src/app/modelos/plantas';
import { AnfitrionService } from "../../../service/anfitrion.service";
import { environment } from 'src/environments/environment';
import { PlantService } from 'src/app/service/plant.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss']
})
export class PlantaComponent implements OnInit {
  constructor(private router: Router,
    private plantasService: PlantService,
    private activatedRoute: ActivatedRoute) { }
  plantas: Plantas[] = [];
  categoria_id: any;
  categoyInstance = new Subject();
  base_backend_url: string = environment.backendStorageUrl;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p: any) => {
      console.log(p);
      this.categoria_id = p.categoriaId;
    });
    this.cargarPlantas();
  }
  cargarPlantas() {
    if (this.categoria_id) {
      this.plantasService.get(this.categoria_id).pipe(takeUntil(this.categoyInstance)).subscribe((data: any) => {
        console.log(data);
        this.plantas = data;
      });
    } else {
      this.plantasService.getAll().pipe(takeUntil(this.categoyInstance)).subscribe((data: any) => {
        console.log(data);
        this.plantas = data;
      });
    }

  }

  verDetalle(id: number) {
    //buscardatos de la planta por id
    for (let i = 0; i < this.plantas.length; i++) {
      if (this.plantas[i].id == id) {
        //localStorage.setItem('reserva',JSON.stringify( this.formulario.value));
        localStorage.setItem('planta', JSON.stringify(this.plantas[i]));
        this.router.navigate(['/home-page/detallePlanta']);
        break;
      }
    }
  }

}
