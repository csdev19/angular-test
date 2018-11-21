import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    // template para un tag pequeño y templateUrl para una direccion
    // template: '<h1>Hola mundo</h1>',
    templateUrl: './first.component.html',
    // styles: ['h1 {background: #000; color: #fff;}']
    styleUrls: ['./first.component.css']
})
export class HelloWorld {
    title = 'Welcome to my hello world component'
}


