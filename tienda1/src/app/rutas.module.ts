import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { globalRoutes } from "./modules/global/global.routing.js";
import { clienteRoutes } from "./modules/cliente/cliente.routing.js";
import { productsRoutes } from "./modules/products/products.routing.js";


@NgModule({
    imports: [RouterModule.forChild([
        ...globalRoutes,
        ...clienteRoutes,
        ...productsRoutes
    ])],
    exports:[RouterModule]
})
export class RutasModule{}