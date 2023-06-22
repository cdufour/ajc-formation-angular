import { Component } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'exos-city-choice',
  templateUrl: './city-choice.component.html',
  styleUrls: ['./city-choice.component.css']
})
export class CityChoiceComponent {

  cities: City[] = [
    { name: "Turin", country: "Italie", image: "turin.jpg"},
    { name: "Paris", country: "Italie", image: "paris.jpg"},
    { name: "Rio", country: "Brésil", image: "rio.jpg"}
  ];

  selectedCity: City | null = null;

  onChange(event: any) {
    let selectedCity = event.target.value;
    console.log(selectedCity);
    this.selectedCity = 
      this.cities.filter(city => city.name == selectedCity)[0];
  }

}
