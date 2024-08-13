import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router:Router,
    private route: ActivatedRoute,

  ){
  }
  irMenu(){
    this.router.navigate(["menu"], {relativeTo: this.route})
  }

  irServicios(){
    this.router.navigate(["servicios"], {relativeTo: this.route})
  }
  irReservar(){
    this.router.navigate(["reservar"], {relativeTo: this.route})
  }
  irMisReservas(){
    this.router.navigate(["misreservas"], {relativeTo: this.route})
  }
  irMispagos(){
    this.router.navigate(["mispagos"], {relativeTo: this.route})
  }
  salir(){
    this.router.navigateByUrl("/login")
  }

}
