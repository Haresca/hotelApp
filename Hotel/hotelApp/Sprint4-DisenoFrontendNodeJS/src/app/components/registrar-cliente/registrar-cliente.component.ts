import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  titulo = 'registrar cliente';
  clienteForm: FormGroup;
  id: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _clienteService: ClienteService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService)
    {
    this.clienteForm = this.formBuilder.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.nullValidator],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.nullValidator],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  registrarCliente() {
    //console.log(this.productoForm);//Esta linea es de prueba.
    //console.log(this.productoForm.get('producto')?.value);//Esta linea es de prueba, hay que eliminar

    const CLIENTE: Cliente = {
      tipoDocumento: this.clienteForm.get('tipoDocumento')?.value,
      numeroDocumento: this.clienteForm.get('numeroDocumento')?.value,
      primerNombre: this.clienteForm.get('primerNombre')?.value,
      segundoNombre: this.clienteForm.get('segundoNombre')?.value,
      primerApellido: this.clienteForm.get('primerApellido')?.value,
      segundoApellido: this.clienteForm.get('segundoApellido')?.value,
      email: this.clienteForm.get('email')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
      fechaNacimiento: this.clienteForm.get('fechaNacimiento')?.value,
      telefono: this.clienteForm.get('telefono')?.value
    }
    if(this.id != null){ //Significa que va a llamar el eliminar y de ahí actualiza el nuevo registro.
      this._clienteService.editarCliente(this.id, CLIENTE).subscribe( data => {
        this.toastr.info('Cliente actualizado correctamente', 'Cliente');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.clienteForm.reset();
      });
    }
    else{ //Si va por este lado, entonces va a realizar un registro normal.
      console.log(CLIENTE);
      this._clienteService.guardarCliente(CLIENTE).subscribe( data => {
        this.mensajeGuardar();
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.clienteForm.reset();
      }) 
    } 
  }

  private mensajeGuardar(): void {
    this.toastr.info('Cliente registrado correctamente', 'Cliente');
  }

  esEditar(): void {
    if(this.id != null){
      this.titulo = "editar cliente";
      this._clienteService.consultarClienteId(this.id).subscribe(data => {
        this.clienteForm.setValue({
          tipoDocumento: data.tipoDocumento,
          numeroDocumento: data.numeroDocumento,
          primerNombre: data.primerNombre,
          segundoNombre: data.segundoNombre,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          email: data.email,
          direccion: data.direccion,
          fechaNacimiento: data.fechaNacimiento,
          telefono: data.telefono
        });
      });
    }
  }
}
