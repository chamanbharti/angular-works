import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[];


  // constructor(private recipeService:RecipeService) { }

  // ngOnInit() {
  //   this.recipes = this.recipeService.getRecipes();
  // }

  // onRecipeSelected(recipe: Recipe) {
  //  this.recipeWasSelected.emit(recipe);
  // }

  // using service
  recipes: Recipe[];


  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(): void {
    // this.router.navigate(['recipes/new'], {relativeTo: this.route});
    this.router.navigate(['recipes/new']);
  }
}
