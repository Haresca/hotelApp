export class Administrador{
    _id?: number;
    tipoDocumento: string;
    numeroDocumento: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    direccion: string;
    fechaNacimiento: string;
    telefono: string;

    constructor(tipoDocumento: string, numeroDocumento: string, primerNombre: string, segundoNombre: string, 
        primerApellido: string, segundoApellido: string, email: string, direccion: string, fechaNacimiento: string, telefono: string){
            
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.email = email;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

}