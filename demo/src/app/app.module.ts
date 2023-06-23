import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';
import { ChoiceComponent } from './choice/choice.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AscComComponent } from './asc-com/asc-com.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentWrapperComponent } from './student-wrapper/student-wrapper.component';
import { RformComponent } from './rform/rform.component';
import { DemoRoutingModule } from './demo-routing/demo-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentsComponent,
    ChoiceComponent,
    StudentListComponent,
    StudentCardComponent,
    AscComComponent,
    StudentFormComponent,
    StudentWrapperComponent,
    RformComponent
  ],
  imports: [
    BrowserModule,
    ExosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
