import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  linkArray: string[] = [
    "accomodation",
    "attractions",
    "nightlife",
    "cruises",
    "events",
    "fb",
    "shoppingmall",
    "tours",
    "venues", 
    "trails"
  ]

  tagText: string = "";

  constructor(){}

  determineTextFromLink(link: string) {
    switch (link) {
      case "accomodation":
        this.tagText = "Accomodation";
        break;
      case "attractions":
        this.tagText = "Attractions";
        break;
      case "nightlife":
        this.tagText = "Bars & Clubs";
        break;
      case "cruises":
        this.tagText = "Cruises";
        break;
      case "events":
        this.tagText = "Events";
        break;
      case "fb":
        this.tagText = "Food & Beverages";
        break;
      case "shoppingmall":
        this.tagText = "Malls & Shops";
        break;
      case "tours":
        this.tagText = "Tours";
        break;
      case "venues":
        this.tagText = "Venues";
        break;
      case "trails":
        this.tagText = "Walking Trails";
        break;
    }
    return this.tagText;
  }
}
