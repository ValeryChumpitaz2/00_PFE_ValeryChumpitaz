import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Biblioteca Digital';

  libros = [
    {
      titulo: 'Clean Code',
      autor: 'Robert C. Martin',
      estado: 'Disponible',
    },
    {
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      estado: 'Disponible',
    },
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      estado: 'Prestado',
    },

  ]
}
