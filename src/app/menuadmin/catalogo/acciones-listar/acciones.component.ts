import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './acciones.component.html',
  styleUrl: './acciones.component.css'
})
export class AccionesComponent {
  displayedColumns: string[] = ['accionesid', 'descripcion', 'precio', 'estadoacc'];
  
  acciones: Acciones[] = []
  
  constructor(private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }


  ngOnInit(): void {
    this.accionesService.getAllAcciones()
    .subscribe((data) => {
      this.acciones = data
    })
  }

}
