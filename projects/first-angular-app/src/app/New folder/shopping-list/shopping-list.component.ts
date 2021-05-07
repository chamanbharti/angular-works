import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  // constructor() { }

  // ngOnInit() {
  // }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  // using service
/*
  ingredients: Ingredient[];
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void{
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  */
 // using Subject for avoid memory leak
  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSub = this.shoppinglistService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number): void {
    this.shoppinglistService.startedEditing.next(index);
  }
}
