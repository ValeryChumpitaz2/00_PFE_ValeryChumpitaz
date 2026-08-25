import { Component, EventEmitter, INJECTOR, Input, Output } from '@angular/core';
import { Producto } from '../../app.component';
import { ProductoCardComponent } from '../producto-card/producto-card.component';

@Component({
  selector: 'app-producto-lista',
  imports: [ProductoCardComponent],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  @Input()
  productos: Producto[] = [];
  @Output()
  editar = new EventEmitter<Producto>();
  @Output()
  eliminar = new EventEmitter<number>();

  editarProducto(producto: Producto) {
    this.editar.emit(producto);
  }
  eliminarProducto(id: number) {
    this.eliminar.emit(id);
  }

}
