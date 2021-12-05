import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/Administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-consultar-administrador',
  templateUrl: './consultar-administrador.component.html',
  styleUrls: ['./consultar-administrador.component.css']
})
export class ConsultarAdministradorComponent implements OnInit {
  listaAdministradores: Administrador[] =[];
  constructor(private _administradorService: AdministradorService) { }

  ngOnInit(): void {
    this.consultarTodosAdministradores();
  }


  consultarTodosAdministradores(){
    this._administradorService.getAdministrador().subscribe(data => {
      console.log(data);
      this.listaAdministradores = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarAdministrador(id: any){
    this._administradorService.eliminarAdministrador(id).subscribe(data => {
      console.log(data);
      this.consultarTodosAdministradores();
    }, error => {
      console.log(error);
    })
  }

}

