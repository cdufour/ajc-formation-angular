import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: Student = {
    name: '',
    grade: 10
  }

  constructor(private studentService: StudentService) {}

  onSubmit() {
    console.log('Submit form...');
    
    this.studentService
      .postStudent(this.student)
      .subscribe(v => console.log(v))
  }
}
