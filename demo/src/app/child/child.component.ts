import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: 'child.component.html'
})
export class ChildComponent {

    // properties
    title: string = 'Child Component';
    age: number = 24;
    counter: number = 0;
    fruits: string[] = ['pomme', 'poire', 'banane'];

    // methods
    increment() {
        this.counter += 1;
        if (this.counter == 5) {
            this.fruits.pop();
        }
    }
}