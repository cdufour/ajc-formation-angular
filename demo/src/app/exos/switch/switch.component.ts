import { Component } from '@angular/core';

@Component({
  selector: 'exos-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  text: 'oui' | 'non' = 'oui';
  isOff: boolean = false;
  marginLeft: string = '0'; // marge du texte
  left: string = '62px'; // position du cercle

  onClick() {
    if (this.isOff = this.text === 'oui') {
      this.text = 'non';
      this.marginLeft = '46px';
      this.left = '2px';
    } else {
      this.text = 'oui';
      this.marginLeft = '0';
      this.left = '62px';
    }
    console.log(this.isOff ? 0 : 1);
  }

}
