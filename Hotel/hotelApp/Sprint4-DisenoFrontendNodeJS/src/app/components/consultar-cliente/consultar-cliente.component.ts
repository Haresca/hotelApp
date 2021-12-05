import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {
  listaClientes: Cliente[]= [];
  constructor(private _clienteService: ClienteService) { }

  ngOnInit(): void {
    this.consultarTodosClientes();
  }

  consultarTodosClientes(){
    this._clienteService.getClientes().subscribe(data => {
      console.log(data);
      this.listaClientes = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarCliente(id: any){
    this._clienteService.eliminarCliente(id).subscribe(data => {
      console.log(data);
      this.consultarTodosClientes();
    }, error => {
      console.log(error);
    })
  }

}
