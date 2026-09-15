import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TareaListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestor-tareas';
}
