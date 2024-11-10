import { Component } from "@angular/core";
import path from "path";
import { Routes } from "@angular/router";
import { GetComponent } from "./crud/get/get.component";
import { PostComponent } from "./crud/post/post.component.js";



export const clienteRoutes: Routes= [
    {
        path:"crud/get",
        component: GetComponent,
        loadChildren: () => import("./cliente.module").then(m=>m. clienteModule)
    }
    
];