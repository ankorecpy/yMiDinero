import { Categoria } from '../modelos/categoria';

export class CategoriaOperacion extends Categoria {
    private listaCategorias: Categoria[];
    private color: String;
    public constructor(id: number, nombre: String, color: String) {
        super();
        this.listaCategorias = [];
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

    public agregarCategoria(categoria: Categoria): void {
        this.listaCategorias.push(categoria);
    }
    public obtener(indice: number): Categoria {
        return this.listaCategorias[indice];
    }
    public remover(indice: number): void {
        this.listaCategorias.splice(indice, 1);
    }
    public obtenerColor(): String {
        return this.color;
    }
    public cambiarColor(nuevoColor: String): void {
        this.color = nuevoColor;
    }
}