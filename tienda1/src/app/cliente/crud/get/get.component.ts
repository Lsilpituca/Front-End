import { Component, OnInit } from '@angular/core';
import { ServiceClienteService } from '../../service-cliente.service';
import { InterfaceCliente } from '../../interfaces/interface-cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.scss'
})
export class GetComponent implements OnInit{
  datosCli:Array<InterfaceCliente>=[];
  constructor(private ServicioCliente:ServiceClienteService){}

  ngOnInit(): void {
    this.ServicioCliente.consultarClientes().subscribe(datos=>{
      for(let i=0; i<datos.length;i++){
        this.datosCli.push(datos[i])
      }
      console.log(datos);
    })
  }
}
