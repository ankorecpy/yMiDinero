import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgregarCategoriaPage } from '../agregar-categoria/agregar-categoria';
import { CategoriaOperacion } from '../../providers/clases_concretas/categoria_operacion';
import { CategoriaDao } from '../../providers/base_de_datos/categorias-dao';


@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  private listaCategorias: CategoriaOperacion[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaDao: CategoriaDao) {
  }

  ionViewDidLoad() {
      this.listaCategorias = this.categoriaDao.listaCategoria;
  }
  ionViewWillEnter() {
      this.listaCategorias = this.categoriaDao.listaCategoria;
  }
  irAAdicionar(): void {
    this.navCtrl.push(AgregarCategoriaPage);    
  }

}
