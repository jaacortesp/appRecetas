import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertirPage } from './convertir.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertirPageRoutingModule {}
