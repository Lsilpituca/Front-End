import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urlToHttpOptions } from 'url';
import { HttpHeaders } from '@angular/common/http';
import { IProducts } from './interface/products.js';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  servidor=`http://localhost:3000`;
   
  constructor(private servicio: HttpClient) { }


  consultarProduct():Observable<any>{
    let parametros = new HttpParams();
    return this.servicio.get<any>(`${this.servidor}/products`, {params:parametros});
  }


  nuevoProduct(datos:IProducts):Observable<any>{
    console.log(JSON.stringify( datos));
    return this.servicio.post(`${this.servidor}/products`,JSON.stringify( datos));
  }
  eliminarProduct(){
  }

}
