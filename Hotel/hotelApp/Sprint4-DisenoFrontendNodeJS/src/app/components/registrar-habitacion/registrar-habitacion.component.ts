import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habitacion } from 'src/app/models/Habitacion';
import { HabitacionService } from 'src/app/services/habitacion.service';

@Component({
  selector: 'app-registrar-habitacion',
  templateUrl: './registrar-habitacion.component.html',
  styleUrls: ['./registrar-habitacion.component.css']
})
export class RegistrarHabitacionComponent implements OnInit {

  titulo = 'registrar habitación';
  habitacionForm: FormGroup;
  id: string | null;

  constructor(
    private _habitacionService: HabitacionService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private aRouter: ActivatedRoute) 
    { 
      this.habitacionForm = this.formBuilder.group({
        numeroHabitacion: ['', Validators.required],
        categoria: ['', Validators.required],
        precio: ['', Validators.required],
        descripcion: ['', Validators.required],
        estado: ['', Validators.required]
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }

  registrarHabitacion(): void {
    const HABITACION: Habitacion = {
      numeroHabitacion: this.habitacionForm.get('numeroHabitacion')?.value,
      categoria: this.habitacionForm.get('categoria')?.value,
      precio: this.habitacionForm.get('precio')?.value,
      descripcion: this.habitacionForm.get('descripcion')?.value,
      estado: this.habitacionForm.get('estado')?.value,
    }

    //Validamos si a acción a realizar es para guardar una nueva habitación o es una actualización de datos.
    if(this.id != null){
      this._habitacionService.editarHabitacion(this.id, HABITACION).subscribe(data => {
        this.toastr.info('Habitación actualizada correctamente', 'Habitación');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.habitacionForm.reset();
      });
    }
    else{
      //Si entra acá significa que la habitación a registrar es nueva.
      this._habitacionService.guardarHabitación(HABITACION).subscribe(data =>{
        this.mensajeGuardar();
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.habitacionForm.reset();
      })
    }
  }

  mensajeGuardar(): void {
    this.toastr.info('Habitación registrada correctamente', 'Habitación');
  }

  esEditar(): void {
    if(this.id != null){
      this.titulo = 'EDITAR HABITACIÓN';
      this._habitacionService.buscarHabitaciónId(this.id).subscribe(data => {
        this.habitacionForm.setValue({
          numeroHabitacion: data.numeroHabitacion,
          categoria: data.categoria,
          precio: data.precio,
          descripcion: data.descripcion,
          estado: data.estado
        });
      });
    }
  }


}
