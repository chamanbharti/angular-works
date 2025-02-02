import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();

  // recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]
    ),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Buns', 2)
    ]
    )
  ];
  constructor(private shoppinglistService: ShoppingListService) { }
  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void{
    this.shoppinglistService.addIngredients(ingredients);
  }

  getRecipe(index: number): Recipe {
    // return this.recipes.slice()[index];
    return this.recipes[index];
  }
}
