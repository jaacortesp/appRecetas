import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarRecetaPageRoutingModule } from './buscar-receta-routing.module';

import { BuscarRecetaPage } from './buscar-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarRecetaPageRoutingModule
  ],
  declarations: [BuscarRecetaPage]
})
export class BuscarRecetaPageModule {}
