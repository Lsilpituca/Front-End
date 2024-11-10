import { Component } from "@angular/core";
import path from "path";
import { Routes } from "@angular/router";
import { ProductsComponent } from "./products.component.js";




export const productsRoutes: Routes= [
    {
        path:"products",
        component: ProductsComponent,
        loadChildren: () => import("./producs.module").then(m=>m.productsModule)
    }
];