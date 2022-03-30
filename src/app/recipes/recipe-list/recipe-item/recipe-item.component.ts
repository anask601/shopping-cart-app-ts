import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any = Recipe;
  @Output() SelectedRecipe = new EventEmitter<void>();

  //  first level of stage lifting
  constructor() {}

  ngOnInit() {}

  OnSelected() {
    this.SelectedRecipe.emit();
  }
}
