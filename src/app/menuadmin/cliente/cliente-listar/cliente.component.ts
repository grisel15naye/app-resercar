import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../cliente.service'
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Cliente } from '../cliente';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  displayedColumns: string[] = ['clienteid','nombre','apellido',
    'tipodocumento','numerodocumento','telefono','direccion','estadocliente'];  
  cliente: Cliente[]=[]
  
  constructor (private clienteService: ClienteService,  
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.clienteService.getAllCliente()
    .subscribe((data)=>{
      //console.log(data)   
      this.cliente = data
    })
  }

  irDetalleCliente(id: string){
    this.router.navigate([id],{relativeTo: this.route})
  }

  irCrearCliente(){
    this.router.navigate(["nuevo"],{relativeTo:this.route})
  }
}