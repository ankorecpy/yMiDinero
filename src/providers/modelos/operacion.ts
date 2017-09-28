export abstract class Operacion {
    protected id: number;
    protected valor: number;

    public obtenerId(): number {
        return this.id;
    }
    public obtenerValor(): number {
        return this.valor;
    }
    public cambiarId(nuevoId: number): void {
        this.id = nuevoId;
    }
    public cambiarValor(nuevoValor: number): void {
        this.valor = nuevoValor;
    }
}