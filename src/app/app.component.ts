import { Component } from '@angular/core'
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RecipeListComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  addRecipeLabel: string = 'Add Recipe'
  action(): void {
    if (this.canAddRecipe) {
      this.addRecipeLabel = 'Back'
      this.canAddRecipe = false
      this.router.navigate(['new-recipe'], { relativeTo: this.route })
    } else {
      this.addRecipeLabel = 'Add Recipe'
      this.canAddRecipe = true
      this.router.navigate(['..'], { relativeTo: this.route })
    }
  }

  title = 'recipes-manager'
  canAddRecipe: boolean = true

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
}