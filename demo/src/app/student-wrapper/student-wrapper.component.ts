import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.css']
})
export class StudentWrapperComponent {
  students: Student[] = [];

  // injection de dépendance
  // ce composant "s'injecte" un objet de type StudentService
  constructor(private studentService: StudentService) {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    })
  }


}
