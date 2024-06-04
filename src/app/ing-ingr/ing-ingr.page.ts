import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ing-ingr',
  templateUrl: './ing-ingr.page.html',
  styleUrls: ['./ing-ingr.page.scss'],
})


export class IngIngrPage {
  options = ['Mantequilla', 'Azúcar', 'Harina', 'Huevos', 'Vainilla'];
  rows = Array(10).fill(0);
  constructor() {}

  ngOnInit() {
  }

}
