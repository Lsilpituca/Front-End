import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { GetComponent } from './crud/get/get.component.js';
import { PostComponent } from './crud/post/post.component.js';

@NgModule({
  declarations: [
   GetComponent,
   PostComponent,
  ],
  imports: [
    
    CommonModule,
    GlobalModule,
  ],
  exports:[
    
  ]
})
export class clienteModule { }
