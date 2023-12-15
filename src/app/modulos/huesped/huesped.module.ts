import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuespedRoutingModule } from './huesped-routing.module';
import { HuespedVistaPrincipalComponent } from './huesped-vista-principal/huesped-vista-principal.component';
import { HuespedVerPropiedadComponent } from './huesped-ver-propiedad/huesped-ver-propiedad.component';
import {ComponentesModule} from "../../componentes/componentes.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { ModalPagoComponent } from './modal-pago/modal-pago.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ModalContactoComponent } from './huesped-ver-propiedad/modal-contacto/modal-contacto.component';
import { HuespedPagoComponent } from './huesped-pago/huesped-pago.component';
import {MatSelectModule} from "@angular/material/select";
import { HuespedResenaComponent } from './huesped-resena/huesped-resena.component';
import { ModalCalificacionComponent } from './huesped-resena/modal-calificacion/modal-calificacion.component';
import { ModalFiltroComponent } from './huesped-vista-principal/modal-filtro/modal-filtro.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    HuespedVistaPrincipalComponent,
    HuespedVerPropiedadComponent,
    ModalPagoComponent,
    ModalContactoComponent,
    HuespedPagoComponent,
    HuespedResenaComponent,
    ModalCalificacionComponent,
    ModalFiltroComponent
  ],
  imports: [
    CommonModule,
    HuespedRoutingModule,
    ComponentesModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatMenuModule,
    DragDropModule
  ]
})
export class HuespedModule { }
