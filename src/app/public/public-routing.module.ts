import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.componet';
import { LoginComponent } from './login/containers/login.component';
import { NewExperienciaComponent } from './experiencia/componets/new-experiencia/new-experiencia.component';

const routes: Routes = [

  { path: '',component: PublicComponent, children: [
      {  path: '', redirectTo: 'home', pathMatch: 'full' },
      {  path: 'home', component: HomeComponent },
      {  path: 'login', component: LoginComponent },
      {  path: 'nuevaexp', component: NewExperienciaComponent }
    ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
