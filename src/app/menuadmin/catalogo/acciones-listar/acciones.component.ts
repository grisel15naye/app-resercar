import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Acciones } from './Acciones';
import { CatalogoService } from '../catalogo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './acciones.component.html',
  styleUrl: './acciones.component.css'
})
export class AccionesComponent {
  displayedColumns: string[] = ['accionesid', 'descripcion', 'precio', 'estadoacc'];
  
  acciones: Acciones[] = []
  
  constructor(private catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }


  ngOnInit(): void {
    this.catalogoService.getAllAcciones()
    .subscribe((data) => {
      this.acciones = data
    })
  }

}
