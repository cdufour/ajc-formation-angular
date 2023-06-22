import { Component } from "@angular/core"

interface Quote {
    text: string;
    author: string;
}

const ANIMATION_SPEED = 1000;

@Component({
    selector: 'exos-quote',
    templateUrl: './quote.component.html'
})
export class QuoteComponent {

    // quotes: string[] = [
    //     "La femme est l'avenir de l'homme (Aragon)",
    //     "The world is yours (Toni Montana)",
    //     "Ad astra per aspera (Inconnu)"
    // ];

    quotes: Quote[] = [
        { text: "La femme est l'avenir de l'homme", author: "Aragon" },
        { text: "The world is yours ", author: "Tony Montana" },
        { text: "Ad astra per aspera", author: "Inconnu" },
    ]

    // selectedQuote: string = this.quotes[0];
    selectedQuote: Quote = this.quotes[0];
    quoteIndex: number = 0;

    constructor() {
        console.log('*** constructor ***');
        this.runAnimationRandom();
    }

    runAnimation() {
        setInterval(() => {
            this.quoteIndex++;

            if (this.quoteIndex >= this.quotes.length)
                this.quoteIndex = 0
     
            this.selectedQuote = this.quotes[this.quoteIndex];
  
        }, ANIMATION_SPEED)
    }

    runAnimationRandom() {
        setInterval(() => {
            let r = this.randInt(this.quotes.length);
            this.selectedQuote = this.quotes[r];
        }, ANIMATION_SPEED)
    }

    randInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

}