import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-asc-com',
  templateUrl: './asc-com.component.html'
})
export class AscComComponent {

  @Output() message: EventEmitter<any> = new EventEmitter();

  onClick() {
    console.log('click');
    this.message.emit(); // déclenche l'événement
  }

}
