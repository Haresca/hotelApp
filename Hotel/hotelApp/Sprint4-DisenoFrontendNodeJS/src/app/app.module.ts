import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';
import { RegistrarHabitacionComponent } from './components/registrar-habitacion/registrar-habitacion.component';
import { RegistrarAdministradorComponent } from './components/registrar-administrador/registrar-administrador.component';
import { ConsultarHabitacionComponent } from './components/consultar-habitacion/consultar-habitacion.component';
import { ConsultarAdministradorComponent } from './components/consultar-administrador/consultar-administrador.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
