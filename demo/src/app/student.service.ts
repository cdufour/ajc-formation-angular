import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

const API = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {

    return this.httpClient.get<Student[]>(API);

  }
}
