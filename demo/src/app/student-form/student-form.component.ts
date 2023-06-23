import { Component, Output, EventEmitter } from '@angular/core';
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

  message: string = 'Veuillez remplir les champs...';
  @Output() newStudent: EventEmitter<null> = new EventEmitter();

  constructor(private studentService: StudentService) {}

  onSubmit() {
    console.log('Submit form...');

    if (this.student.grade < 0 || this.student.grade > 20) {
      this.student.grade = 10;
      this.message = 'Enregistrement impossible. La note doit être comprise entre 0 et 20';
      return;
    }
    
    // requête http via le service
    this.studentService
      .postStudent(this.student)
      .subscribe(student => {
        this.message = `Nouvel étudiant (id: ${student.id}) enregistré :-)))`;
        this.newStudent.emit();
      })
  }
}
