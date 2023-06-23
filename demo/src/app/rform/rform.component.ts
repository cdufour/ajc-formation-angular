import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {
  
  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    grade: new FormControl(10, Validators.required)
  })

  

}
