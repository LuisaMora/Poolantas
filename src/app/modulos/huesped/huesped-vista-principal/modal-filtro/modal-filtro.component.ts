import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
export interface Opciones {
  name: string;
}
interface ButtonType {
  icon: string;
  label: string;
  value: string;
}
@Component({
  selector: 'app-modal-filtro',
  templateUrl: './modal-filtro.component.html',
  styleUrls: ['./modal-filtro.component.scss']
})

export class ModalFiltroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opciones: Opciones[] = [
    {name: 'Cualquiera'},
    {name: 'Propiedad entera'},
    {name: 'Habitacion entera'},
    {name: 'Habitacion compartida'}
  ];

  drop(event:any) {
    moveItemInArray(this.opciones, event.previousIndex, event.currentIndex);
  }
  opcionesHab: Opciones[] = [
    {name: 'Cualquiera'},
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
    {name: '6'},
    {name: '7'},
    {name: '8+'}
  ];
  drap(event:any) {
    moveItemInArray(this.opcionesHab, event.previousIndex, event.currentIndex);
  }
  buttonTypes: ButtonType[] = [
    { icon: 'home', label: 'Casa', value: 'home' },
    { icon: 'apartment', label: 'Departamento', value: 'apartment' },
    { icon: 'cabin', label: 'Cabaña', value: 'cabin' },
    { icon: 'bed', label: 'Habitación', value: 'bed' },
    { icon: 'agriculture', label: 'Hacienda', value: 'agriculture' }
  ];

  selectedButtonType: string | null = null;

  selectButtonType(type: string): void {
    this.selectedButtonType = type;
  }
}
