import { Component, OnInit } from '@angular/core';
import { ServiceClienteService } from '../../service-cliente.service';
import { InterfaceCliente } from '../../interfaces/interface-cliente';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit{
  datosCli:Array<InterfaceCliente>=[];
  constructor(private ServicioCliente:ServiceClienteService){}

  ngOnInit(): void {
    this.ServicioCliente.ConsultarClientes().subscribe(datos=>{
      for(let i=0; i<datos.length;i++){
        this.datosCli.push(datos[i])
      }
      console.log(datos);
    })
  }
}
