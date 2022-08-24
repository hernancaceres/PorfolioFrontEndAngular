import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { HomeComponent } from './home/containers/home.componet';
import { HeaderComponent } from './header/containers/header.component';
import { LoginComponent } from './login/containers/login.component';
import { AplogoComponent } from './header/components/aplogo/aplogo.component';
import { PublicComponent } from './public.component';
import { SocialComponent } from './header/components/social/social.component';
import { BannerComponent } from './header/components/banner/banner.component';
import { AcercaDeComponent } from './acerca-de/containers/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/containers/experiencia/experiencia.component';
import { EducacionComponent } from './educacion/containers/educacion/educacion.component';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AplogoComponent,
    PublicComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    
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

