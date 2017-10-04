import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaDao } from '../../providers/base_de_datos/categorias-dao';
import { CategoriaOperacion } from '../../providers/clases_concretas/categoria_operacion';

@Component({
  selector: 'page-agregar-categoria',
  templateUrl: 'agregar-categoria.html',
})
export class AgregarCategoriaPage {

  private nombre: String;
  private color: String;
  private listaColores: String[] = ["altAzul", "altNegro", "altAmarillo", "altNaranja", "altPurpura", "altGris", "altRojo", "altLimon", "altAguaMarina", "altRosado"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaDao: CategoriaDao) {
  }

  ionViewDidLoad() {
  }
  private cambiarColor(color: String): void {
    this.color = color;
  }
  private agregarCategoria(): void {
    let nuevaCategoria = new CategoriaOperacion(1, this.nombre, this.color);
    this.categoriaDao.agregarCategoria(nuevaCategoria);
    this.navCtrl.pop();
  }

}
