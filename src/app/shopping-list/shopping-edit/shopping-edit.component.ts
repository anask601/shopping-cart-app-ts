import { Ingredients } from './../../shared/ingredients.model';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef') nameInputRef!: ElementRef;
  @ViewChild('amountInputRef') amountInputRef!: ElementRef;
  // ingredients = new EventEmitter<{ name: string; amount: number }>();
  @Output() ingredients = new EventEmitter<Ingredients>();

  OnAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    console.log(ingName + ingAmount);
    const newIngredients = new Ingredients(ingName, ingAmount);
    this.ingredients.emit(newIngredients);
  }

  constructor() {}

  ngOnInit() {}
}
