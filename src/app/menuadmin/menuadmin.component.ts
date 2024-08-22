import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-menuadmin',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './menuadmin.component.html',
  styleUrl: './menuadmin.component.css'
})
export class MenuadminComponent {
  constructor(private router:Router,
    private route: ActivatedRoute,

  ){
  }
  irDashboard(){
    this.router.navigate(["dashboard"], {relativeTo: this.route})
  }

  irUsuario(){
    this.router.navigate(["usuario"], {relativeTo: this.route})
  }
  irCliente(){
    this.router.navigate(["cliente"], {relativeTo: this.route})
  }
  irAcciones(){
    this.router.navigate(["acciones"],{relativeTo: this.route})
  }
  irSedes(){
    this.router.navigate(["sedes"], {relativeTo: this.route})
  }
  irTrabajador(){
    this.router.navigate(["trabajador"], {relativeTo: this.route})
  }
  irProgramacion(){
    this.router.navigate(["programacion"], {relativeTo: this.route})
  }
}