import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarIngredientesPageRoutingModule } from './ingresar-ingredientes-routing.module';

import { IngresarIngredientesPage } from './ingresar-ingredientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarIngredientesPageRoutingModule
  ],
  declarations: [IngresarIngredientesPage]
})
export class IngresarIngredientesPageModule {}
