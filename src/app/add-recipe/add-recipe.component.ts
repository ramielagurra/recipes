import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { ManipulateRecipesService } from '../manipulate-recipes.service'
import { title } from 'process'
import { IRecipe } from '../recipe/recipe.model'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css',
})
export class AddRecipeComponent {
  constructor(
    public manipulateRecipesService: ManipulateRecipesService,
    private router: Router,
  ) {}
  recipeForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    ingredients: new FormArray([new FormControl('')]),
  })

  getIngredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray
  }

  addIngredient(): void {
    ;(this.recipeForm.get('ingredients') as FormArray).push(new FormControl(''))
    console.log(this.recipeForm.get('ingredients'))
  }
  removeIngredient(index: number): void {
    if ((this.recipeForm.get('ingredients') as FormArray).length > 1) {
      ;(this.recipeForm.get('ingredients') as FormArray).removeAt(index)
    }
  }

  // sistema l'array
  submitRecipe() {
    const newRecipe: IRecipe = {
      ...this.recipeForm.getRawValue(),
      creationDate: new Date(),
    } as IRecipe

    this.manipulateRecipesService.addNewRecipe(newRecipe)
    console.log('form values', this.recipeForm.value)
    this.router.navigate(['recipes-manager-app'])
  }
}
