import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarAdministradorComponent } from './components/consultar-administrador/consultar-administrador.component';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';
import { ConsultarHabitacionComponent } from './components/consultar-habitacion/consultar-habitacion.component';
import { RegistrarAdministradorComponent } from './components/registrar-administrador/registrar-administrador.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';
import { RegistrarHabitacionComponent } from './components/registrar-habitacion/registrar-habitacion.component';

const routes: Routes = [
  { path: '', component: ConsultarClienteComponent}, 
  { path: 'registrar-cliente', component: RegistrarClienteComponent},
  { path: 'actualizar-cliente/:id', component: RegistrarClienteComponent},
  { path: 'consultar-administrador', component: ConsultarAdministradorComponent},
  { path: 'registrar-administrador', component: RegistrarAdministradorComponent},
  { path: 'actualizar-administrador/:id', component: RegistrarAdministradorComponent},
  { path: 'consultar-habitacion', component: ConsultarHabitacionComponent},
  { path: 'registrar-habitacion', component: RegistrarHabitacionComponent},
  { path: 'actualizar-habitacion/:id', component: RegistrarHabitacionComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
