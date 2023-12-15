import { Component, OnInit,Inject } from '@angular/core';
import {INPUT_APARIENCIA} from "../../../../config/constantes";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-resenia',
  templateUrl: './modal-resenia.component.html',
  styleUrls: ['./modal-resenia.component.scss']
})
export class ModalReseniaComponent {
  apariencia = INPUT_APARIENCIA;
  nombreHuesped: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.nombreHuesped = data.nombreHuesped;
  }
}
