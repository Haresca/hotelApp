import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';
import { RegistrarHabitacionComponent } from './components/registrar-habitacion/registrar-habitacion.component';
import { RegistrarAdministradorComponent } from './components/registrar-administrador/registrar-administrador.component';
import { ConsultarHabitacionComponent } from './components/consultar-habitacion/consultar-habitacion.component';
import { ConsultarAdministradorComponent } from './components/consultar-administrador/consultar-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarClienteComponent,
    ConsultarClienteComponent,
    RegistrarHabitacionComponent,
    RegistrarAdministradorComponent,
    ConsultarHabitacionComponent,
    ConsultarAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
