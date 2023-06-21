import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { QuoteComponent } from './exos/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
