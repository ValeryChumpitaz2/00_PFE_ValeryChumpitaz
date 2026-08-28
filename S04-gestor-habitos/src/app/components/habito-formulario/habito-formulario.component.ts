import { Component, EventEmitter, Output } from '@angular/core';
import { Habito } from '../../models/habito';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habito-formulario',
  imports: [FormsModule],
  templateUrl: './habito-formulario.component.html',
  styleUrl: './habito-formulario.component.css'
})
export class HabitoFormularioComponent {
  @Output()
  guardar = new EventEmitter<Habito>();

  nuevoHabito: Habito = {
    id: 0,
    nombre: '',
    categoria: 'Salud',
    completado: false
  };

  guardarHabito() {
    this.guardar.emit({
      ...this.nuevoHabito
    });

    this.nuevoHabito = {
      id: 0,
      nombre: '',
      categoria: 'Salud',
      completado: false
    };
  }
}

