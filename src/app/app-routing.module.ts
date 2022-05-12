import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTemasComponent } from'./componentes/agregar-temas/agregar-temas.component';
import { ListaTemasComponent } from './componentes/lista-temas/lista-temas.component';
import { TemasDetallesComponent } from'./componentes/temas-detalles/temas-detalles.component';
import { TemasalumnosComponent } from './componentes/temasalumnos/temasalumnos.component';

const routes: Routes = [
  { path: '', redirectTo: 'temas', pathMatch: 'full' },
  { path: 'temas', component: ListaTemasComponent },
  { path: 'temas/:id', component: TemasDetallesComponent },
  { path: 'agregar', component: AgregarTemasComponent },
  { path: 'temasalumnos', component: TemasalumnosComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
