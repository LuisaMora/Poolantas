import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HuespedVistaPrincipalComponent} from "./huesped-vista-principal/huesped-vista-principal.component";
import {HuespedVerPropiedadComponent} from "./huesped-ver-propiedad/huesped-ver-propiedad.component";
import {HuespedPagoComponent} from "./huesped-pago/huesped-pago.component";
import {HuespedResenaComponent} from "./huesped-resena/huesped-resena.component";

const routes: Routes = [
  {
    path: '',
    component: HuespedVistaPrincipalComponent,
  },
  {
    path: 'ver-propiedad',
    component: HuespedVerPropiedadComponent,
  },
  {
    path: 'pago',
    component: HuespedPagoComponent,
  },
  {
    path: 'review',
    component: HuespedResenaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuespedRoutingModule { }
