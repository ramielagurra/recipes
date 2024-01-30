import { Injectable } from '@angular/core';
import { IRecipe } from './recipe/recipe.model';
import { Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ManipulateRecipesService {
  constructor(private httpClient: HttpClient) {}

  addNewRecipe(recipe: IRecipe) {
    return this.httpClient.post('http://localhost:3000/recipes', recipe);
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.httpClient.get<IRecipe[]>('http://localhost:3000/recipes');
  }

  deleteRecipe(id: number): Observable<IRecipe[]> {
    return this.httpClient
      .delete('http://localhost:3000/recipes/' + id)
      .pipe(switchMap(() => this.getRecipes()));
  }
}
