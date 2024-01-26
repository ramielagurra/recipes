import { Injectable } from '@angular/core'
import { IRecipe } from './recipe/recipe.model'
import recipesData from '../assets/recipes-data.json'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ManipulateRecipesService {
  constructor() {}
  // qua mappiamo il json
  recipeList: IRecipe[] = recipesData.map(recipe => ({
    ...recipe,
    creationDate: new Date(),
  }))

  addNewRecipe(recipe: IRecipe) {
    this.recipeList.push(recipe)
  }

  getRecipes(): Observable<IRecipe[]> {
    return of(this.recipeList)
  }
}
