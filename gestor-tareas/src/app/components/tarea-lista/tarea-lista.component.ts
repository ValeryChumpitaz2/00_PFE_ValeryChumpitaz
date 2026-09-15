import { Component, inject } from '@angular/core';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-lista',
  imports: [],
  templateUrl: './tarea-lista.component.html',
  styleUrl: './tarea-lista.component.css'


})

export class TareaListaComponent {

  private tareaService = inject(TareaService);
  tareas = this.tareaService.obtenerTareas();


}

