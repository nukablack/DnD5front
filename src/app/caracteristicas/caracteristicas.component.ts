import { Component } from '@angular/core';

@Component({
  selector: 'caracteristicas',
  templateUrl: './caracteristicas.component.html'
})

export class CaracteristicasComponent{
  public nombre = 'Características';
  public caracteristicas = [
    'Fuerza', 'Carisma', 'Sabiduría', 'Inteligencia'
  ];
}
