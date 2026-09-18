import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalago-productos';
}
