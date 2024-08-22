import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Acciones } from './acciones';
import { AccionesService } from '../acciones.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent {
  displayedColumns: string[] = ['accionesid', 'descripcion', 'precio', 'estadoacc'];
  acciones: Acciones[] = [];

  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accionesService.getAllAcciones()
      .subscribe((data) => {
        this.acciones = data;
      });
  }

  irDetalleAcciones(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  irCrearAcciones(): void {
    this.router.navigate(['nuevo'], { relativeTo: this.route });
  }
}
