import { Component } from '@angular/core';

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  
  students: Student[] = [
    { name: "Claire", grade: 18 },
    { name: "Daniel", grade: 2 },
    { name: "Nathalie", grade: 18.5 }
  ];

}
