import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url="http://localhost:5000/api/administrador/";
  constructor(private http: HttpClient) { }
  getAdministrador(): Observable<any>{
    return this.http.get(this.url);
  }
  eliminarAdministrador(id: number): Observable<any>{
    return this.http.delete(this.url + id);
  }
}



