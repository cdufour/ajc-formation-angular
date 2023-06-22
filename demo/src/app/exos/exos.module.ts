import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteComponent } from './quote/quote.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityCardComponent } from './city-card/city-card.component';


@NgModule({
    declarations: [
        QuoteComponent,
        CityChoiceComponent,
        CityCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        QuoteComponent,
        CityChoiceComponent
    ]
})
export class ExosModule{}