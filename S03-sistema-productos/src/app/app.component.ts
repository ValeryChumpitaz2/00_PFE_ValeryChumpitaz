import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductoFormularioComponent } from './components/producto-formulario/producto-formulario.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-root',

  imports: [
    NavbarComponent,
    ProductoFormularioComponent,
    ProductoListaComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Lenovo',
      precio: 2500,
      stock: 10
    },
    {
      id: 2,
      nombre: 'Mouse Logitech',
      precio: 80,
      stock: 25
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico',
      precio: 150,
      stock: 15
    }
  ];

  productoEditar: Producto | null = null;


  // CREATE / UPDATE
  guardarProducto(producto: Producto) {

    // Si tiene ID, estamos editando
    if (producto.id !== 0) {

      const indice = this.productos.findIndex(
        p => p.id === producto.id
      );

      if (indice !== -1) {
        this.productos[indice] = { ...producto };
      }

    } else {

      // Si no tiene ID, estamos creando
      const nuevoProducto: Producto = {
        ...producto,
        id: this.obtenerNuevoId()
      };

      this.productos.push(nuevoProducto);

    }

    // Limpiamos el producto seleccionado
    this.productoEditar = null;
  }


  // Seleccionar producto para editar
  editarProducto(producto: Producto) {

    this.productoEditar = { ...producto };

  }


  // DELETE
  eliminarProducto(id: number) {

    this.productos = this.productos.filter(
      producto => producto.id !== id
    );

  }


  // Generar ID
  obtenerNuevoId(): number {

    if (this.productos.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.productos.map(p => p.id)
    ) + 1;

  }

}