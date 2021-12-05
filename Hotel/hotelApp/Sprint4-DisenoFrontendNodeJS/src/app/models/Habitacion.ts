export class Habitacion{
    _id?: number; 
    numeroHabitacion: string;
    categoria: string;
    precio: number;
    descripcion: string;
    estado: string;

    constructor(numeroHabitacion: string, categoria: string, precio: number, descripcion: string, estado: string){
        this.numeroHabitacion = numeroHabitacion;
        this.categoria = categoria;
        this.precio = precio;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}