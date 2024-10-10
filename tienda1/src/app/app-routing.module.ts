import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './cliente/crud/post/post.component';
import { GetComponent } from './cliente/crud/get/get.component';

export const routes: Routes = [
  {path:"cliente-component", component:GetComponent},
  {path:"cliente-new", component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




