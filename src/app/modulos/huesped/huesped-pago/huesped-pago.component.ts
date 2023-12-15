import { Component, OnInit } from '@angular/core';
import {INPUT_APARIENCIA} from "../../../config/constantes";
import {MatDialog} from "@angular/material/dialog";
import {ModalPagoComponent} from "../modal-pago/modal-pago.component";

@Component({
  selector: 'app-huesped-pago',
  templateUrl: './huesped-pago.component.html',
  styleUrls: ['./huesped-pago.component.scss']
})
export class HuespedPagoComponent implements OnInit {
  inputApariencia = INPUT_APARIENCIA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  pagar() {
    this.dialog.open(ModalPagoComponent,{
      width: '400px'
    })
  }
}
