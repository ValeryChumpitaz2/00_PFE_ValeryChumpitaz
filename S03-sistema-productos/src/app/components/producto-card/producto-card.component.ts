import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../app.component';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {
@Input()
producto! : Producto;
@Output()
editar = new EventEmitter<Producto>();
@Output()
eliminar = new EventEmitter<number>();
editarProducto() {
    this.editar.emit(this.producto);
  }
  eliminarProducto() {
    this.eliminar.emit(this.producto.id);
  }
}
