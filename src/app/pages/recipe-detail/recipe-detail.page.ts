import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: any;
  recipeId!: number;  

  constructor(
    private route: ActivatedRoute,
    private spoonacularService: SpoonacularService
  ) {}

  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id')); 
    this.spoonacularService.getRecipeInformation(this.recipeId).subscribe((data) => {
      this.recipe = data;
    });
  }

  getRecipeDetails() {
    this.spoonacularService.getRecipe(this.recipeId).subscribe(data => {
      this.recipe = data;
    }, error => {
      console.error('Error al obtener los detalles de la receta', error);
    })
  }

}
