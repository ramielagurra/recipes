import { Component, OnInit } from '@angular/core'
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common'
import locale from '@angular/common/locales/it'
import { IRecipe } from '../recipe/recipe.model'
import { MatCardModule } from '@angular/material/card'
import { ManipulateRecipesService } from '../manipulate-recipes.service'
import { Observable } from 'rxjs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FilterDirective } from '../filter.directive'
import { MatFormFieldControl } from '@angular/material/form-field'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

// to do spostalo sotto APP
registerLocaleData(locale)
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    DatePipe,
    FilterDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipeList: IRecipe[] | undefined
  searchControl: FormControl<string | null> = new FormControl<string | null>(
    null,
  )
  constructor(public manipulateRecipesService: ManipulateRecipesService) {}
  ngOnInit(): void {
    this.getRecipeList()
  }

  getRecipeList() {
    return this.manipulateRecipesService
      .getRecipes()
      .subscribe(recipes => (this.recipeList = recipes))
  }
}
