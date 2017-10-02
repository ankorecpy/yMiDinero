import { Injectable } from '@angular/core';
import { CategoriaOperacion } from '../clases_concretas/categoria_operacion';

@Injectable()
export class CategoriaDao {
    listaCategoria: CategoriaOperacion[] = [];

    public constructor() {
        this.listaCategoria.push(new CategoriaOperacion(1,"Alimentacion","altPurpura"), new CategoriaOperacion(1,"Transporte","altAmarillo"), new CategoriaOperacion(1,"Paseos","altLimon"), new CategoriaOperacion(1,"Ocio","altAzul"), new CategoriaOperacion(1,"Varios","altRojo"), new CategoriaOperacion(1,"Ahorros","altNaranja"), new CategoriaOperacion(1,"Vivienda","altGris"));
    }

    public agregar(nuevaCategoria: CategoriaOperacion):void {
        this.listaCategoria.push(nuevaCategoria)
    }   

    obtenerTodo(): CategoriaOperacion[] {
        return this.listaCategoria;
    }
}

