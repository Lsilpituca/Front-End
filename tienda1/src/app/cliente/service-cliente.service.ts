import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this.servicio.get<any>(`${this.servidor}/cliente`);
  }
  nuevoCliente(datos:InterfaceCliente):Observable<any>{
    return this.servicio.post(`${this.servidor}/cliente`,JSON.stringify( datos));
  }
  eliminarClientes(){
  }

}


