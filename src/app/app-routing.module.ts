import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"ubicacion",
    component:UbicacionComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
