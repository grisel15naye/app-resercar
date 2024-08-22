import { Component } from '@angular/core';
import { Sedes } from '../sedes';
import { SedesService } from '../SedesService';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-sedes-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sedes-listar.component.html',
  styleUrl: './sedes-listar.component.css'
})
export class SedesListarComponent {
  displayedColumns: string[] = ['sedeid', 'nombresede', 'sedeinfo','lunes','martes','miercoles','jueves','viernes','sabado','domingo','horaabierto','horacierre',
    'description'];

  sede: Sedes[] = []

  constructor(private sedesService: SedesService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.sedesService.getAllSedes()
    .subscribe((data) => {
      this.sede = data
    })
  }

  irDetalleSedes(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }

  irCrearsedes(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }

}
