import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarIngredientesPage } from './ingresar-ingredientes.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarIngredientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarIngredientesPageRoutingModule {}
