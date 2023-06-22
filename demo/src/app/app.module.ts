import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';
import { ChoiceComponent } from './choice/choice.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AscComComponent } from './asc-com/asc-com.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentsComponent,
    ChoiceComponent,
    StudentListComponent,
    StudentCardComponent,
    AscComComponent
  ],
  imports: [
    BrowserModule,
    ExosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
