import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngIngrPage } from './ing-ingr.page';

const routes: Routes = [
  {
    path: '',
    component: IngIngrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngIngrPageRoutingModule {}
