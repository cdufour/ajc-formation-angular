import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  studentName: string | null = '';

  constructor(private route: ActivatedRoute) {
    let name = this.route.snapshot.paramMap.get('name');
    this.studentName = name;
  }

}
