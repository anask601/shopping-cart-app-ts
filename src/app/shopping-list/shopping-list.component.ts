import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

// import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];

  OnAdd(event: Ingredients) {
    this.ingredients.push(event);
  }

  constructor() {}

  ngOnInit() {}
}
