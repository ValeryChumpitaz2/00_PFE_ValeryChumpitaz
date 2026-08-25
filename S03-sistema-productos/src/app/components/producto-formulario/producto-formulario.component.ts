import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Producto } from '../../app.component';

@Component({
  selector: 'app-producto-formulario',

  imports: [FormsModule],

  templateUrl: './producto-formulario.component.html',
  styleUrl: './producto-formulario.component.css'
})
export class ProductoFormularioComponent {

  @Output()
  guardar = new EventEmitter<Producto>();


  productoForm: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0
  };


  @Input()
  set producto(value: Producto | null) {

    if (value) {

      // Cargamos el producto seleccionado
      this.productoForm = { ...value };

    }

  }


  guardarProducto() {

    // Validación sencilla
    if (!this.productoForm.nombre.trim()) {

      alert('Ingresa el nombre del producto');

      return;
    }


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