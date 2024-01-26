import { Component } from '@angular/core'
import { AddRecipeComponent } from '../add-recipe/add-recipe.component'

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
  imports: [AddRecipeComponent],
})
export class NewRecipeComponent {}
