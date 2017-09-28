import { Operacion } from '../modelos/operacion';
import { Categoria } from '../modelos/categoria';

export class SubCategoriaOperacion extends Categoria {
    private listaOperaciones: Operacion[];

    public constructor() {
        super();
        this.listaOperaciones = [];
    }

    public agregar(nuevaOperacion: Operacion): void {
        this.listaOperaciones.push(nuevaOperacion);
    }
    public remover(indice: number): void {
        this.listaOperaciones.splice(indice, 1);
    }
    public obtener(indice: number): Operacion {
        return this.listaOperaciones[indice];
    }
    public vacia(): void {
        this.listaOperaciones = [];
    }
}