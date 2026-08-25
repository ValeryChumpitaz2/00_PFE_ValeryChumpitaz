import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  imports: [RouterOutlet, NavbarComponent, ProductoFormularioComponent, ProductoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 10.99,
      stock: 5
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 19.99,
      stock: 3
    },
  ];

  productoEditar: Producto | null = null;

  //CREATE
  agregarProducto(producto: Producto) {
    producto.id = this.obtenerNuevoId();
    this.productos.push(producto);
  }

  //READ
  obtenerProductos(): Producto[] {
    return this.productos;
  }

  //UPDATE
  actualizarProducto(producto: Producto) {
    const indice = this.productos.findIndex(p => p.id === producto.id);
    if (indice !== -1) {
      this.productos[indice] = producto;
    }
    this.productoEditar = null;
  }

  //DELETE
  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }

  //SELECCIONAR UN PRODUCTO PARA EDITAR
  seleccionarProducto(producto: Producto) {
    this.productoEditar = { ...producto };
  }

  //GENERAR NUEVO ID
  obtenerNuevoId(): number {
    if (this.productos.length === 0) {
      return 1;
    }
    return Math.max(...this.productos.map(producto => producto.id)) + 1;
  }
  //RECIBE EL PRODUCTO DESDE EL FORMULARIO Y LO AGREGA A LA LISTA DE PRODUCTOS
  guardarProducto(producto: Producto) {
    if (producto.id === 0) {
      this.agregarProducto(producto);
    } else {
      this.actualizarProducto(producto);
    }
  }
}
