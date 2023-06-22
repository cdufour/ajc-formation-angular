import { Component } from '@angular/core';

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = [
    { name: "Claire", grade: 18 },
    { name: "Daniel", grade: 2 },
    { name: "Nathalie", grade: 12 }
  ];

  objStyle: any = {
    color: 'green',
    fontSize: '30pt',
  };

  objStyle2: any = {
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline'
  };

  objClass: any = {
    winner: true,
    loser: false
  };

  constructor() {
    setTimeout(() => {
      //this.objStyle.color = 'orange'
      //this.objStyle = this.objStyle2
      let mergeProps = { ...this.objStyle, ...this.objStyle2 };
      this.objStyle = mergeProps;
      this.objClass = { winner: false, loser: true };
    }, 5000)
  }

  getColor(i: number): string {
    return this.students[i].grade < 10 ? 'red' : 'black';
  }
 
}
