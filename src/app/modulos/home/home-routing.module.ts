import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {HomeInicioComponent} from "./home-inicio/home-inicio.component";

const routes: Routes = [
  {
    path:'',
    component: HomeInicioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatToolbarModule,
    MatCardModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
