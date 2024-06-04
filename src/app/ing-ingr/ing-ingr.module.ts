import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngIngrPageRoutingModule } from './ing-ingr-routing.module';

import { IngIngrPage } from './ing-ingr.page';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngIngrPageRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [IngIngrPage]
})
export class IngIngrPageModule {}
