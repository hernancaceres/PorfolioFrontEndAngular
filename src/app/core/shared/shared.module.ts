import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotFoundComponent,
    
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    FormsModule,
    CommonModule
    
  ]
})

export class SharedModule {
constructor () {}
} 