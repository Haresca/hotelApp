import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/Administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-consultar-administrador',
  templateUrl: './consultar-administrador.component.html',
  styleUrls: ['./consultar-administrador.component.css']
})
export class ConsultarAdministradorComponent implements OnInit {

  listaAdministradores: Administrador[] = [];
  
  constructor(private _administradorService: AdministradorService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultarTodosAdministradores();
  }


  consultarTodosAdministradores() {
    this._administradorService.getAdministrador().subscribe(data => {
      console.log(data);
      this.listaAdministradores = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarAdministrador(id: any) {
    this._administradorService.eliminarAdministrador(id).subscribe(data => {
      this.toastr.error('Administrador eliminado correctamente', 'Administrador');
      this.consultarTodosAdministradores();
    }, error => {
      console.log(error);
    })
  }

}

