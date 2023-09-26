import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesconocidoPage } from './desconocido.page';

const routes: Routes = [
  {
    path: '',
    component: DesconocidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesconocidoPageRoutingModule {}
