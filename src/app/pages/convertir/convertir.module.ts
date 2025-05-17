import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertirPageRoutingModule } from './convertir-routing.module';

import { ConvertirPage } from './convertir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertirPageRoutingModule
  ],
  declarations: [ConvertirPage]
})
export class ConvertirPageModule {}
