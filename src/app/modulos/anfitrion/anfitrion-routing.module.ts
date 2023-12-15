import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnfitrionPropiedadesComponent} from "./anfitrion-propiedades/anfitrion-propiedades.component";
import {AnfitrionRegistroComponent} from "./anfitrion-registro/anfitrion-registro.component";

const routes: Routes = [
  {
    path: '',
    component: AnfitrionPropiedadesComponent,
  },
  {
    path: 'registro-propiedad',
    component: AnfitrionRegistroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnfitrionRoutingModule { }
