import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-producto-lista',

  imports: [FormsModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  private productoService = inject(ProductoService);
  productos: any[] = [];

  nombre = '';
  precio = 0;
  imagen = '';

  ngOnInit() {
    this.cargarProductos();
  }

  //GET - OBTENER PRODUCTOS

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta.products;
    });
  }

  //POST - REGISTRAR PRODUCTO

  registrarProducto() {
    if ( this.nombre || this.precio || this.imagen) {
      alert('Completa todos los campos');
      return;
   }
   const nuevoProducto = {
    title: this.nombre,
    price: this.precio,
    thumbnail: this.imagen
   };
   this.productoService.registrarProducto(nuevoProducto).subscribe(respuesta => {
    console.log('Producto registrado:', respuesta);
    this.productos.unshift(respuesta);
    this.nombre = '';
    this.precio = 0;
    this.imagen = '';
   });
   }
}
