import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaGastosCategoriaPage } from './lista-gastos-categoria';

@NgModule({
  declarations: [
    ListaGastosCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaGastosCategoriaPage),
  ],
})
export class ListaGastosCategoriaPageModule {}
