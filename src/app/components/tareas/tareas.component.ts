import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor(){}
  ngOnInit(): void {

  }
  agregarTarea(){

    const tarea: Tarea ={
      nombre: this.nombreTarea,
      estado:false
    }

    this.listTareas.push(tarea);

    this.nombreTarea ='';
  }
}
