import { Component } from "@angular/core";
import path from "path";
import { IndexComponent } from "./components/index/index.component";
import { Routes } from "@angular/router";



export const globalRoutes: Routes= [
    {
        path:"",
        component: IndexComponent,
        loadChildren: () => import("./global.module").then(m=>m.GlobalModule)
    }
];