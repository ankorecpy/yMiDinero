import { Operacion } from '../modelos/operacion';

export class Gasto extends Operacion {
    private fecha: Date;

    public constructor(id: number, valor: number, fecha: Date) {
        super();        
        this.id = id;
        this.valor = valor;
        this.fecha = fecha;        
    }

    public obtenerFecha(): Date {
        return this.fecha;
    }
}