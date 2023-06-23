import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  
  // students: Student[] = [
  //   { name: "Claire", grade: 18 },
  //   { name: "Daniel", grade: 2 },
  //   { name: "Nathalie", grade: 18.5 }
  // ];

  students: Student[] = [];

  // injection de dépendance
  // ce composant "s'injecte" un objet de type StudentService
  constructor(private studentService: StudentService) {
    studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    })
  }

}
