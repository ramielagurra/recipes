import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RecipeListComponent,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  action(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  title = 'recipes-manager';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) {}
}
