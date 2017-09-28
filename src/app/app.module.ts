import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { GeneralPage } from '../pages/general/general';
import { SubcategoriasPage } from '../pages/subcategorias/subcategorias';
import { CategoriasPage } from '../pages/categorias/categorias';
import { AgregarCategoriaPage } from '../pages/agregar-categoria/agregar-categoria';
import { CategoriaDao } from '../providers/base_de_datos/categorias-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    GeneralPage,
    CategoriasPage,
    AgregarCategoriaPage,
    SubcategoriasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    GeneralPage,
    CategoriasPage,
    AgregarCategoriaPage,
    SubcategoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriaDao,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
