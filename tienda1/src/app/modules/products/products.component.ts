import { Component, OnInit } from '@angular/core';
import { IProducts } from './interface/products.js';
import { ProductsService } from './products.service.js';
import { productsModule } from './producs.module';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  
  datosPro:Array<IProducts>=[];
  
  

  constructor(private ServicioProducto:ProductsService){}

  ngOnInit(): void {
    this.ServicioProducto.consultarProduct().subscribe(datos=>{
      for(let i=0; i<datos.length;i++){
        this.datosPro.push(datos[i])

      }
      console.log(datos);
    })
  }

  add():void{
  }
}


