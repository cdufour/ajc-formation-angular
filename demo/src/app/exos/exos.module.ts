import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteComponent } from './quote/quote.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityCardComponent } from './city-card/city-card.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
    declarations: [
        QuoteComponent,
        CityChoiceComponent,
        CityCardComponent,
        SwitchComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        QuoteComponent,
        CityChoiceComponent,
        SwitchComponent
    ]
})
export class ExosModule{}