import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url="http://localhost:5000/api/cliente/";

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarCliente(id: number): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarCliente(cliente : Cliente): Observable<any> {
    return this.http.post(this.url, cliente);
  }

  //Editar el producto reutilizando el guardar producto
  consultarClienteId(id: string):Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCliente(id: string, cliente: Cliente): Observable<any> {
    return this.http.put(this.url + id, cliente);
  }
}
