import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/it';
import { IRecipe } from '../recipe/recipe.model';
import { MatCardModule } from '@angular/material/card';
import { ManipulateRecipesService } from '../manipulate-recipes.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterListDirective } from '../filter.directive';
import { Router, ActivatedRoute } from '@angular/router';

// to do spostalo sotto APP
registerLocaleData(locale);
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    DatePipe,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    FilterListDirective,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipeList: IRecipe[] = [];
  filteredRecipeList: IRecipe[] = [];
  searchControl = new FormControl('');

  constructor(
    private manipulateRecipesService: ManipulateRecipesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getRecipeList();
  }
  action(): void {
    this.router.navigate(['new-recipe']);
  }

  getRecipeList(): void {
    this.manipulateRecipesService.getRecipes().subscribe(recipes => {
      this.recipeList = recipes;
      this.filteredRecipeList = [...recipes];
    });
  }

  onFilter(filtered: IRecipe[]): void {
    this.filteredRecipeList = filtered;
  }

  deleteRecipe(id?: number) {
    if (id) {
      this.manipulateRecipesService
        .deleteRecipe(id)
        .subscribe(recipes => (this.recipeList = recipes));
    }
  }
}
