import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesconocidoPageRoutingModule } from './desconocido-routing.module';

import { DesconocidoPage } from './desconocido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesconocidoPageRoutingModule
  ],
  declarations: [DesconocidoPage]
})
export class DesconocidoPageModule {}
