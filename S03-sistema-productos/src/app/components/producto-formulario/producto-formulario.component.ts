import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../app.component';

@Component({
  selector: 'app-producto-formulario',
  imports: [FormsModule],
  templateUrl: './producto-formulario.component.html',
  styleUrl: './producto-formulario.component.css'
})
export class ProductoFormularioComponent {
@Input() producto: Producto | null = null;
@Output() guardar = new EventEmitter<Producto>();

productoForm: Producto = {
  id: 0,
  nombre: '',
  precio: 0,
  stock: 0
};

guardarProducto() {
  this.guardar.emit({
    ...this.productoForm
  });
  this.limpiar();
}
limpiar() {
  this.productoForm = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0
  };
}
}
