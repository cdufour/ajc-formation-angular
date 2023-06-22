import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {

  selectedOption: string = '';
  
  onChange(event: any) {
    this.selectedOption = event.target.value;
  }

}
