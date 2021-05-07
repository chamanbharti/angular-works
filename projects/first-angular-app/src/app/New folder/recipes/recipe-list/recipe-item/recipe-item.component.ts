import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  // constructor() { }

  // ngOnInit() {
  // }

  // onSelected() {
  //   this.recipeSelected.emit();
  // }

  // using service
  // @Input() recipe: Recipe;

  // constructor(private recipeService:RecipeService) { }

  // ngOnInit() {
  // }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

  // using routing
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }


}
