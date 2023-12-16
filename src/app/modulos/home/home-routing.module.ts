import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/login-home-page.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { PlantaComponent } from './planta/planta.component';
import { DonacionComponent } from './donacion/donacion.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'listaCategoria',
    component: ListaCategoriasComponent
  },
  {
    path:'plantas',
    component: PlantaComponent
  },
  {
    path:'donacion',
    component: DonacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
