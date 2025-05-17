import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spoonacular',
  templateUrl: './spoonacular.page.html',
  styleUrls: ['./spoonacular.page.scss'],
})
export class SpoonacularPage implements OnInit {
  recipes: any[] = [];
  searchQuery: string = '';

  constructor(private spoonacularService: SpoonacularService, private router: Router) {}

  ngOnInit() {}

  getRecipe(id: number): void {
    this.spoonacularService.getRecipe(id).subscribe(data => {
      this.getRecipe = data;

    }, error => {
      console.error('Error al obtener la receta', error);
    });
  }

  searchRecipes(): void {
    if (this.searchQuery.trim().length > 0) {
      this.spoonacularService.searchRecipes(this.searchQuery).subscribe((data) => {
        this.recipes = data.results;
      }, error => {
        console.error('Error al buscar recetas', error);
      });
    }
  }

  openRecipeDetails(recipeId: number) {
    this.router.navigate(['/recipe-detail', recipeId]);
  }
}

