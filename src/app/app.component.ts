import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';

  allItems:MenuItem[] = [
    {
      itemName: "12 pc Wing Combo",
      itemType: "Chicken",
      itemPrice: 8.99,
      itemRating: 8,
      recommend: true
    },
    {
      itemName: "1 lb Catfish Nugget Special",
      itemType: "Fish",
      itemPrice: 7.99,
      itemRating: 10,
      recommend: true
    },
    {
      itemName: "12 slice Deep Dish Pizza",
      itemType: "Pizza",
      itemPrice: 6.99,
      itemRating: 8,
      recommend: false
    },
    {
      itemName: "24 slice Specialty Pizza ",
      itemType: "Pizza",
      itemPrice: 12.99,
      itemRating: 10,
      recommend: true
    },
    {
      itemName: "Garden Salad",
      itemType: "Veggie",
      itemPrice: 0.00,
      itemRating: 2,
      recommend: false
    },
    {
      itemName: "Fruit Salad",
      itemType: "Veggie",
      itemPrice: 0.00,
      itemRating: 10,
      recommend: true
    },
  ]
}


