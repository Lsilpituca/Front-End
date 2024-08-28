import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ServiceClienteService {

  servidor=`http://localhost:3000`;

  constructor(private servicio: HttpClient) { }
  ConsultarClientes():Observable<any>{
    return this.servicio.get<any>(`${this.servidor}/cliente`);
  }
}
