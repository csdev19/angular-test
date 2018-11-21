import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // usamos el @input para decirle a angular que va a recibir algo desde el html
  @Input() nameUser; 
  constructor() { }

  ngOnInit() {
  }

}
