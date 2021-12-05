import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url="http://localhost:5000/api/administrador/";

  constructor(private http: HttpClient) { }

  //Obtener todos los administradores
  getAdministrador(): Observable<any>{
    return this.http.get(this.url);
  }

  //Eliminar un administrador.
  eliminarAdministrador(id: number): Observable<any>{
    return this.http.delete(this.url + id);
  }
}



