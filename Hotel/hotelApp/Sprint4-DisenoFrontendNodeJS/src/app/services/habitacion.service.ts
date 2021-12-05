import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../models/Habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  url="http://localhost:5000/api/habitacion/";

  constructor(private http: HttpClient) { }

  //Consultar todas las habitaciones.
  getHabitacion(): Observable<any>{
    return this.http.get(this.url);
  }

  //Eliminar una habitación.
  eliminarHabitacion(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }

  //Guardar habitaciones.
  guardarHabitación(habitacion: Habitacion): Observable<any> {
    return this.http.post(this.url, habitacion);
  }

  //Consultar una habitación por id.
  buscarHabitaciónId(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  //Editar una habitación.
  editarHabitacion(id: string, habitacion: Habitacion): Observable<any> {
    return this.http.put(this.url + id, habitacion);
  }
}