import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/models/Habitacion';
import { HabitacionService } from 'src/app/services/habitacion.service';

@Component({
  selector: 'app-consultar-habitacion',
  templateUrl: './consultar-habitacion.component.html',
  styleUrls: ['./consultar-habitacion.component.css']
})
export class ConsultarHabitacionComponent implements OnInit {

  listaHabitaciones:Habitacion[]= [];
  constructor(private _habitacionService: HabitacionService) {}

  ngOnInit(): void {
    this.consultarTodasHabitaciones();
  }

  consultarTodasHabitaciones(){
    this._habitacionService.getHabitacion().subscribe(data => {
      console.log(data);
      this.listaHabitaciones = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarCliente(id: any){
    this._habitacionService.eliminarHabitacion(id).subscribe(data => {
      console.log(data);
      this.consultarTodasHabitaciones();
    }, error => {
      console.log(error);
    })
  }

}
