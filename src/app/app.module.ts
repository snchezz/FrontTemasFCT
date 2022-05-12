import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTemasComponent } from './componentes/agregar-temas/agregar-temas.component';
import { TemasDetallesComponent } from './componentes/temas-detalles/temas-detalles.component';
import { ListaTemasComponent } from './componentes/lista-temas/lista-temas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemasalumnosComponent } from './componentes/temasalumnos/temasalumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarTemasComponent,
    TemasDetallesComponent,
    ListaTemasComponent,
    TemasalumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
