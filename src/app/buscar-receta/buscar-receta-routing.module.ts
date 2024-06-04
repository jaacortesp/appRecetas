import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarRecetaPage } from './buscar-receta.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarRecetaPageRoutingModule {}
