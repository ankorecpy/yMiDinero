import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaOperacion } from '../../providers/clases_concretas/categoria_operacion';
import { CategoriaDao } from '../../providers/base_de_datos/categorias-dao';

@Component({
  selector: 'page-subcategorias',
  templateUrl: 'subcategorias.html',
})
export class SubcategoriasPage {

  private categoria: CategoriaOperacion;

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaDao: CategoriaDao) {
  }

  ionViewWillEnter() {
  }

}
