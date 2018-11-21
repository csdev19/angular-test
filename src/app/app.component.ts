import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Cristian';
  age: number = 19;
  users: string[] = ['cristian', 'lucho', 'mari', 'diego', 'monica'];

  deleteUser(user) {
    console.log(user)
    for (let i = 0; this.users.length; i++ ) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  addUser(user) {
    // console.log(user.value)
    this.users.push(user.value);
    user.value = '';
    // es para que el cursor se quede en el input
    user.focus();
    return false;
  }
}
