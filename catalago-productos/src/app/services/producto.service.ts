import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);

  private apiUrl = 'https://dummyjson.com/products';

  //METODO GET
  obtenerProductos() {
    return this.http.get<any>(this.apiUrl);
  }

  //METODO POST
  registrarProducto(producto: any) {
    return this.http.post<any>(`${this.apiUrl}/add`, producto);
  }

}
