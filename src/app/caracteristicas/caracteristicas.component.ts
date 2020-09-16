import { Component } from '@angular/core';

@Component({
  selector: 'caracteristicas',
  templateUrl: './caracteristicas.component.html'
})

export class CaracteristicasComponent{
  public nombre:string;
  public caracteristicas:Array<string>;

  constructor(){
    this.nombre  = 'Características';
    this.caracteristicas  = [
      'Fuerza', 'Carisma', 'Sabiduría', 'Inteligencia'
    ];
  }
}
