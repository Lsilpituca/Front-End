import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfaceCliente } from './interfaces/interface-cliente';
import { urlToHttpOptions } from 'url';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  servidor=`http://localhost:3000`;
   
  constructor(private servicio: HttpClient) { }


  consultarClientes():Observable<any>{
    let parametros = new HttpParams();
    return this.servicio.get<any>(`${this.servidor}/cliente`, {params:parametros});
  }


  nuevoCliente(datos:InterfaceCliente):Observable<any>{
    console.log(JSON.stringify(datos));
    return this.servicio.post<InterfaceCliente>(`${this.servidor}/cliente`,JSON.stringify( datos));
  }
  eliminarClientes(){
  }

}


