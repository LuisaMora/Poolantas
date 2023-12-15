import { Component, OnInit } from '@angular/core';
import {Propiedad} from "../../../modelos/propiedad";
import {HuespedService} from "../../../service/huesped.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INPUT_APARIENCIA} from "../../../config/constantes";
import {MatDialog} from "@angular/material/dialog";
import {ModalPagoComponent} from "../modal-pago/modal-pago.component";
import {ModalContactoComponent} from "./modal-contacto/modal-contacto.component";

@Component({
  selector: 'app-huesped-ver-propiedad',
  templateUrl: './huesped-ver-propiedad.component.html',
  styleUrls: ['./huesped-ver-propiedad.component.scss']
})
export class HuespedVerPropiedadComponent implements OnInit {
  propiedades: Propiedad[] = [];
  idPropiedad: any;
  propiedad: any;

  formulario: FormGroup;
  apariencia = INPUT_APARIENCIA;

  constructor(private activatedRoute: ActivatedRoute,
              private huespedService: HuespedService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,) {
    this.formulario = this.formBuilder.group({
      fechaIn: [null, [Validators.required, Validators.email]],
      fechaFin: [null, [Validators.required]],
      huespedes: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p: any) => {
      this.idPropiedad = p.propiedadId;
      console.log('ID de la propiedad:', this.idPropiedad);
      this.getPropiedad();
    })

  }

  getPropiedad() {
    if (this.idPropiedad) {
      this.huespedService.getPropiedad(+this.idPropiedad).subscribe((prop: Propiedad | undefined) => {
        this.propiedad = prop;
        console.log('Datos de la propiedad:', this.propiedad);
      });
    }
  }

  reservar(): void {
    this.dialog.open(ModalPagoComponent,{
      width: '400px'
    })
  }

  contactar() {
    this.dialog.open(ModalContactoComponent,{
      width: '400px'
    })
  }
}
