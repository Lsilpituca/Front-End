import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import{GetComponent} from "./cliente/crud/get/get.component"
import path from 'path';
import { PostComponent } from './cliente/crud/post/post.component';

export const routes: Routes = [
    {path:"cliente-component", component:GetComponent}
];
