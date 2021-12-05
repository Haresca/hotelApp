import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  url="http://localhost:5000/api/habitacion/";
  constructor(private http: HttpClient) { }
  getHabitacion(): Observable<any>{
    return this.http.get(this.url);
  }
  eliminarHabitacion(id: number): Observable<any>{
    return this.http.delete(this.url + id);
  }
}