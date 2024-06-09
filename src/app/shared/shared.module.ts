// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NombresComponent } from '../components/nombres/nombres.component';

@NgModule({
  declarations: [NombresComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NombresComponent]
})
export class SharedModule {}

