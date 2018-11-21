import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-ng';
  users: string[] = ['cristian', 'lucho', 'mari', 'diego', 'monica'];
  activated = true;
  // vamos a ver typescript a partir de aqui
  name: string = 'Cristian Sotomayor';
  age: number = 19;
  single: boolean = true; // :"v
  address: {
    street: string;
    city: string;
  };
  // hobbies = ['nadar', 'leer', 'escribir']
  hobbies: string[];

  constructor() {
    this.address = {
      street: 'Las Lilas mzn B lote 5',
      city: 'Lima'
    };
    this.hobbies = ['nadar', 'leer', 'escribir'];
  }

}
