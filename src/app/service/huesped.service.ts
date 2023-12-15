import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Propiedad} from "../modelos/propiedad";

@Injectable({
  providedIn: 'root'
})
export class HuespedService {

  // Simula la obtención de datos desde un servidor

  //pripiedades
  private propiedades: Propiedad[] = [
    {
      id: 1,
      namePropiedad: 'Las Tortugas en Vichayito ( Paz y Naturaleza )',
      anfitrion: 'PlaceWord',
      department: 'Cochabamba',
      type: 'Casa',
      price: 120,
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/f5cd57a3-b42d-4211-a73c-047c6cc2fc13.jpeg?im_w=1200',
      dateIni: new Date('2023-12-10'),
      dateFin: new Date('2023-12-15'),
      estado:'Pausa'
    },
    {
      id: 2,
      namePropiedad: 'Las lomas',
      anfitrion: 'PlaceWord',
      department: 'La Paz',
      type: 'Departamento',
      price: 100,
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=1200',
      dateIni: new Date('2023-11-30'),
      dateFin: new Date('2024-01-30'),
      estado:'Pausa'
    },
    {
      id: 3,
      namePropiedad: 'casa de campo hatun wasi',
      anfitrion: 'PlaceWord',
      department: 'Santa Cruz',
      type: 'Casa de huesped',
      price: 210,
      imageUrl: 'https://a0.muscache.com/im/pictures/airflow/Hosting-826841269121758400/original/03b71cf8-0b9b-4777-98c7-9928cae73ae6.jpg?im_w=1440',
      dateIni: new Date('2023-11-01'),
      dateFin: new Date('2023-12-01'),
      estado:'Pausa'
    },
    {
      id: 4,
      namePropiedad: 'casa moderna',
      anfitrion: 'PlaceWord',
      department: 'La Paz',
      type: 'Departamento',
      price: 180,
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=1200',
      dateIni: new Date('2023-11-30'),
      dateFin: new Date('2024-01-30'),
      estado:'Pausa'
    },
    {
      id: 5,
      namePropiedad: 'casa de campo',
      anfitrion: 'PlaceWord',
      department: 'Santa Cruz',
      type: 'Casa de huesped',
      price: 250,
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-602210478697883040/original/6be989a6-250c-4feb-8702-165c8ea0bab2.jpeg?im_w=1200',
      dateIni: new Date('2023-11-01'),
      dateFin: new Date('2023-12-01'),
      estado:'Pausa'
    },
    {
      id: 6,
      namePropiedad: 'casa de campo',
      anfitrion: 'PlaceWord',
      department: 'Potosi',
      type: 'Casa de huesped',
      price: 250,
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-602210478697883040/original/6be989a6-250c-4feb-8702-165c8ea0bab2.jpeg?im_w=1200',
      dateIni: new Date('2023-11-01'),
      dateFin: new Date('2023-12-01'),
      estado:'Pausa'
    },
  ];

  constructor() { }

  getPropiedades(): Observable<Propiedad[]> {
    return of(this.propiedades);
  }

  getPropiedad(propiedadId: number): Observable<Propiedad | undefined> {
    const propiedadEncontrada = this.propiedades.find(prop => prop.id === propiedadId);
    return of(propiedadEncontrada);
  }

getUbicaciones(): Observable<string[]> {
  // Lógica para obtener las ubicaciones únicas de las propiedades
  // Aquí, asumo que las ubicaciones están en la propiedad 'department'
  const ubicacionesUnicas = Array.from(new Set(this.propiedades.map(propiedad => propiedad.department)));
  return of(ubicacionesUnicas);
}
}