import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.componet';
import { HeaderComponent } from './header/containers/header.component';
import { LoginComponent } from './login/containers/login.component';
import { AplogoComponent } from './header/components/aplogo/aplogo.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/containers/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/containers/experiencia/experiencia.component';
import { EducacionComponent } from './educacion/containers/educacion/educacion.component';
import { CircleProgComponent } from './circle-prog/containers/circle-prog/circle-prog.component';
import { FooterComponent } from './footer/containers/footer/footer.component';
import { ProyectosComponent } from './proyectos/containers/proyectos/proyectos.component';
import { PersonaService } from './service/persona.service';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';
import { interceptorProvider } from './service/intercertor-service';
import { SExperienciaService } from './service/s-experiencia.service';
import { NewExperienciaComponent } from './experiencia/componets/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/componets/edit-experiencia/edit-experiencia.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AplogoComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    CircleProgComponent,
    ProyectosComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
  ],
  imports: [
    PublicRoutingModule,
    SharedModule,
    NgCircleProgressModule.forRoot({ })
  ],
  providers: [
    PersonaService,
    AuthService,
    TokenService,
    interceptorProvider,
    SExperienciaService
  ],
  exports: []
})

export class PublicModule {
constructor () {}
}

