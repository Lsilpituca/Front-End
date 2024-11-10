import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormControlState, Validators,FormControlOptions, AsyncValidatorFn } from '@angular/forms';
import { InterfaceCliente } from '../../interfaces/interface-cliente';
import { ServiceClienteService } from '../../service-cliente.service';
import { response } from 'express';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent{
  postForm: FormGroup;


  constructor(private ServicioCliente:ServiceClienteService,private form:FormBuilder, private router:Router){
    this.postForm= this.form.group({
      nombre:"",
      apellido:"",
      domicilio:"",
      dni:0,
      correo:"",
      id_localidad:"",
    })

  }
  CrearCli(){
    console.log(this.postForm.value)
    this.ServicioCliente.nuevoCliente(this.postForm.value).subscribe({
      next:(data)=>{
        console.log(data);
      }
    })

  }
    

}