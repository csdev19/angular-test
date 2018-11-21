import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['cristian', 'lucho', 'mari', 'diego', 'monica'];

  deleteUser(user) {
    for (let i = 0; this.users.length; i++ ) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

}
