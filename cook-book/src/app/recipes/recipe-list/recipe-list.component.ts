import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   // Dummy data - Create an Array of Recipes from Recipes model (Model is just a class with properties!) .
   recipes: Recipe[] = [
      new Recipe('Recipe Bananada', 'Recipe description 1', 'https://madrerestaurants.com/wp-content/uploads/2020/05/DSC05512-scaled.jpg'),
      new Recipe('Recipe Chile rellenos', 'Recipe description 2', 'https://madrerestaurants.com/wp-content/uploads/2019/09/chile-rellenos.png'),
      new Recipe('Recipe Camarones', 'Recipe description 3', 'https://madrerestaurants.com/wp-content/uploads/2019/09/camarones-al-mojo.png')
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
