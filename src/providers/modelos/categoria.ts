export abstract class Categoria {
    protected id: number;
    protected nombre: String;

    public obtenerId(): number {
        return this.id;
    }
    public obtenerNombre(): String {
        return this.nombre;
    }
    public cambiarId(nuevoId: number): void {
        this.id = nuevoId;
    }
    public cambiarNombre(nuevoNombre: String): void {
        this.nombre = nuevoNombre;
    }
}
