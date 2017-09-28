import { Injectable } from '@angular/core';
import { CategoriaOperacion } from '../clases_concretas/categoria_operacion';

@Injectable()
export class CategoriaDao {
    listaCategoria: CategoriaOperacion[] = [];

    public agregar(nuevaCategoria: CategoriaOperacion):void {
        this.listaCategoria.push(nuevaCategoria)
    }   

    obtenerTodo(): CategoriaOperacion[] {
        return this.listaCategoria;
    }
}

