import { Component } from '@angular/core';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
@Component({
  selector: 'app-root',
  imports: [ProductoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalago-productos';
}
