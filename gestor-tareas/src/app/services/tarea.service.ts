import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TareaService {

  tareas = [
    { id: 1, nombre: 'Preparar clase', completada: true },
    { id: 2, nombre: 'Revisar correos', completada: false },
    { id: 3, nombre: 'Hacer ejercicio', completada: false },
    { id: 4, nombre: 'Leer un libro', completada: true },
    { id: 5, nombre: 'Comprar víveres', completada: false }
  ];
  obtenerTareas() {
    return this.tareas;
  }
}
