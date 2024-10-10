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
  nombre: FormControl;
  apellido:FormControl;
  domicilio:FormControl;
  dni:FormControl;
  correo:FormControl;
  id_localidad:FormControl;


  constructor(private ServicioCliente:ServiceClienteService,private form:FormBuilder, private router:Router){
    this.nombre= new FormControl<string>("", Validators.required),
    this.apellido= new FormControl<string>("",Validators.required),
    this.domicilio= new FormControl<string>("",Validators.required),
    this.dni= new FormControl<string>("",Validators.required),
    this.correo= new FormControl<string>("",Validators.required),
    this.id_localidad= new FormControl<string>("",Validators.required),

    this.postForm = new FormGroup ({
    nombre: this.nombre,
    apellido: this.apellido,
    domicilio: this.domicilio,
    dni:this.dni,
    correo:this.correo,
    id_localidad: this.id_localidad,
    
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