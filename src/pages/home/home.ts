import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneralPage } from '../general/general';
import { CategoriasPage } from '../categorias/categorias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private mainContent: any;
  private listaOpciones: Opcion[] = [{ nombre: "Añadir Gasto", icono: "md-add", pagina: "" }, { nombre: "Categorias", icono: "md-apps", pagina: CategoriasPage }, { nombre: "Informes y estadisticas", icono: "md-analytics", pagina: "" }];

  constructor(public navCtrl: NavController) {
    this.mainContent = GeneralPage;
  }

  irAPagina(indice: number): void {
    this.mainContent = this.listaOpciones[indice].pagina;
  }
}
interface Opcion {
  nombre: String;
  icono: String;
  pagina: any;
}
