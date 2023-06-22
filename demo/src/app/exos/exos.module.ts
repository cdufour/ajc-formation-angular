import { NgModule } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
    declarations: [
        QuoteComponent
    ],
    exports: [
        QuoteComponent
    ]
})
export class ExosModule{}