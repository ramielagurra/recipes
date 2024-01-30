// import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//import { ManipulateRecipesService } from './manipulate-recipes.service';
//import { IRecipe } from './recipe/recipe.model';

// @Directive({
//   selector: '[appFilter]',
//   standalone: true,
// })
// export class FilterDirective {
//   constructor(
//     private el: ElementRef,
//     private manipulateRecipesService: ManipulateRecipesService,
//   ) {}
//   recipeList: IRecipe[] | undefined;
//   @Input('appFilter') set search(value: string | null) {
//     let allRecipes = this.manipulateRecipesService
//       .getRecipes()
//       .subscribe(recipes => (this.recipeList = recipes));
//     if (value) {
//       let filteredList = this.recipeList?.filter(item =>
//         item.title.toLowerCase().startsWith(value?.toLowerCase()),
//       );
//       console.log(filteredList);
//     }

//     //   if (this.el.nativeElement.innerHTML) {
//     //     let text: string = this.el.nativeElement.innerHTML.replace(
//     //       '<span class="highlight">',
//     //       '',
//     //     );
//     //     text = text.replace('</span>', '');

//     //     if (typeof value === 'string' && value) {
//     //       text = text.replace(
//     //         new RegExp(value, 'gi'),
//     //         `<span class="highlight">${value}</span>`,
//     //       );
//     //     }

//     //     this.el.nativeElement.innerHTML = text;
//   }
// }

import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { IRecipe } from './recipe/recipe.model';

@Directive({
  selector: '[appFilterList]',
  standalone: true,
})
export class FilterListDirective {
  @Input() recipeList: IRecipe[] = [];
  @Input() searchTerm: string | null = null;
  @Output() filteredList: EventEmitter<IRecipe[]> = new EventEmitter<
    IRecipe[]
  >();

  ngOnChanges(): void {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.filteredList.emit(this.recipeList);
    } else {
      const filtered = this.recipeList.filter(recipe =>
        recipe.title.toLowerCase().startsWith(this.searchTerm!.toLowerCase()),
      );
      console.log(filtered);

      this.filteredList.emit(filtered);
    }
  }
}
