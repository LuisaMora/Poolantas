import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnfitrionModule} from "./modulos/anfitrion/anfitrion.module";
import {AuthActiveGuard} from "./guard/auth-active.guard";
import {AdminGuard} from "./guard/admin.guard";
//import {HuespedModule} from "./modulos/huesped/huesped.module";
import {EstructuraComponent} from "./componentes/estructura/estructura.component";
//import { ListaCatego } from './modulos/lista-categorias/lista-categorias.component';
//import { ListaCategoriasModule } from './modulos/lista-categorias.module'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login-home-page'},
  {
    path: 'login-home-page',
    loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'anfitrion',
    canActivate: [AuthActiveGuard,AdminGuard],
    component: EstructuraComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modulos/anfitrion/anfitrion.module').then(m => m.AnfitrionModule),
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
