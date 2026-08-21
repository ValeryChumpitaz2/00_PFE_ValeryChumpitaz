import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre = 'Valery Chumpitaz';
  profesion= 'Analista de Sistemas';
  descripcion='Soy estudiante de Análisis de Sistemas interesada en el desarrollo de aplicaciones web y en la creación de soluciones tecnológicas.';
  
  correo = 'valery.chumpitaz@vallegrande.edu.pe';
  ubicacion = 'Lima, Perú';
  habilidades= ['Angular', 'Java', 'SQL', 'Git', 'HTML', 'CSS']

  proyectos= [
    {
      nombre: 'Sistema de Ventas',
      descripcion: 'Desarrolle un Sistema de Ventas utilizando Angular y Java'
    },
    {
      nombre: 'Aplicacion de Gestion de Tareas',
      descripcion: 'Desarrole una aplicacion de gestion de tareas utilizando Angular y Java'
    }
  ];

}
