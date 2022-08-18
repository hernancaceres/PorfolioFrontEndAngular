import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';

import { HomeComponent } from './home/containers/home.componet';
import { LoginComponent } from './login/containers/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PublicComponent
  ],
  imports: [
    PublicRoutingModule,
    SharedModule,
    
  ],
  providers: [],
  exports: []
})

export class PublicModule {
constructor () {}
}

