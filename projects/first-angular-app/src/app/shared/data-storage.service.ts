import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { RecipesComponent } from "../recipes/recipes.component";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    private baseUrl = 'http://localhost:8080/api/v1';
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService){}
    
    storeRecipes(): any {
       const recipes = this.recipeService.getRecipes();
       return this.http.put(this.baseUrl, recipes)
       .subscribe(
         response => {
             console.log(response);
         }
       ); 
    }

    fetchRecipes(){
        /*
      this.http.get<Recipe[]>(this.baseUrl+"/recipes")
      .subscribe(
        recipes => {
            console.log(recipes);
            this.recipeService.setRecipes(recipes);
          }
      );
      */
/*
     this.http.get<Recipe[]>(this.baseUrl+"/recipes")
      .pipe(
          map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe, 
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });  
          })
      )
      .subscribe(
        recipes => {
            console.log(recipes);
            this.recipeService.setRecipes(recipes);
          }
      );
      */

      return this.http.get<Recipe[]>(this.baseUrl+"/recipes")
      .pipe(
          map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe, 
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });  
          }),
          tap(recipes => {
            this.recipeService.setRecipes(recipes);
          })
      );
    }
}