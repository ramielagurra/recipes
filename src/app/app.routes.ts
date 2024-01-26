import { Routes } from '@angular/router'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { NewRecipeComponent } from './new-recipe/new-recipe.component'

export const routes: Routes = [
  { path: 'recipes-manager-app', component: RecipeListComponent },
  { path: '', redirectTo: '/recipes-manager-app', pathMatch: 'full' },
  {
    path: 'new-recipe',
    component: NewRecipeComponent,
    data: { addRecipe: false },
  },
]
