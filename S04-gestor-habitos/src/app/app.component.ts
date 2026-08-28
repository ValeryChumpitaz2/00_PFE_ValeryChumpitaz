import { Component } from '@angular/core';
import { Habito } from './models/habito';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HabitoFormularioComponent } from './components/habito-formulario/habito-formulario.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
habitos: Habito[]=[
  {
    id: 1,
    nombre: 'Tomar agua',
    categoria: 'Salud',
    completado: true
  },
  {
    id: 2,
    nombre: 'Leer 20 minutos',
    categoria: 'Estudio',
    completado: false
  },
  {
    id: 3,
    nombre: 'Hacer ejercicio',
    categoria: 'Salud',
    completado: false
  }
];

agregarHabito(habito: Habito){
  habito.id = this.habitos.length + 1;
  this.habitos.push(habito);
}


}
