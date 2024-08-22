import { Component, OnInit } from '@angular/core';
import { Sedes } from '../sedes';
import { SedesService } from '../sedes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-sedes-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sedes-listar.component.html',
  styleUrls: ['./sedes-listar.component.css'] // Se cambió `styleUrl` a `styleUrls`
})
export class SedesListarComponent { // Implementa OnInit para usar ngOnInit
  displayedColumns: string[] = [
    'sedeid', 'nombresede', 'sedeinfo', 'lunes', 'martes', 'miercoles',
    'jueves', 'viernes', 'sabado', 'domingo', 'horaabierto', 'horacierre', 'estadosede'
  ];

  sede: Sedes[] = []

  constructor(
    private sedesService: SedesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sedesService.getAllSedes().subscribe((data) => {
      this.sede = data;
    })
  }

  irDetalleSedes(id: string): void {
    this.router.navigate([id], { relativeTo: this.route })
  }

  irCrearSedes(): void {
    this.router.navigate(['nuevo'], { relativeTo: this.route })
  }
}
