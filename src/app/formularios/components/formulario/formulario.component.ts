import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
public nombre: string;
public apellido: string;

constructor() {
  this.nombre = "";
  this.apellido = "";
}
}
