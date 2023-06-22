import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    ExosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
