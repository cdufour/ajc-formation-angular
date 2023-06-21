import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  onClick() {
    //console.log('click')
    this.title += '!';
  }

  init() {
    this.title = 'Angular';
  }
}