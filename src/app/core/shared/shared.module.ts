import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
    
  ],
  providers: [],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent
    
  ]
})

export class SharedModule {
constructor () {}
} 