import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SedesService } from '../sedes.service';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-sedes-detalle',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sedes-detalle.component.html',
  styleUrls: ['./sedes-detalle.component.css']
})
export class SedesDetalleComponent {
  sedeid: string | null = ''
  sedeForm!: FormGroup
  formType!: FormType
  formTitulo!: string

  constructor(private sedesService: SedesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sedeid = this.router.snapshot.paramMap.get('id');
    this.sedeForm = this.crearFormulario();
    if (this.sedeid !== 'nuevo') {
      this.consultarSede(Number(this.sedeid));
      this.formTitulo = "Actualizar Sede";
      this.formType = FormType.Actualizar;
    } else {
      this.formTitulo = "Nueva Sede";
      this.formType = FormType.Crear;
    }
  }

  crearFormulario(): FormGroup {
    return new FormGroup({
      nombresede: new FormControl('', Validators.required),
      sedeinfo: new FormControl(''),
      lunes: new FormControl(false),
      martes: new FormControl(false),
      miercoles: new FormControl(false),
      jueves: new FormControl(false),
      viernes: new FormControl(false),
      sabado: new FormControl(false),
      domingo: new FormControl(false),
      horaabierto: new FormControl('', Validators.required),
      horacierre: new FormControl('', Validators.required)
    })
  }

  get nombreSedeError(): string {
    const control = this.sedeForm.get('nombresede');
    return control?.hasError('required') ? 'El nombre de la sede es requerido' : '';
  }

  get horaAbiertoError(): string {
    const control = this.sedeForm.get('horaabierto');
    return control?.hasError('required') ? 'La hora de apertura es requerida' : '';
  }

  get horaCierreError(): string {
    const control = this.sedeForm.get('horacierre');
    return control?.hasError('required') ? 'La hora de cierre es requerida' : '';
  }

  consultarSede(id: number): void {
    this.sedesService.getSedes(id).subscribe((data) => {
      const {nombresede,sedeinfo,lunes, martes,miercoles,jueves,viernes,sabado,domingo,horaabierto,horacierre }=data
      this.sedeForm.setValue({nombresede,sedeinfo,lunes, martes,miercoles,jueves,viernes,sabado,domingo,horaabierto,horacierre})
    });
  }

  guardarSede(): void {
    if (this.sedeForm.valid) {
      if (this.formType === FormType.Crear) {
        this.sedesService.createSedes(this.sedeForm.value).subscribe(() => {
          // Lógica para manejar la respuesta, por ejemplo, redirigir al listado de sedes
        });
      } else {
        this.sedesService.updateSede(Number(this.sedeid), this.sedeForm.value).subscribe(() => {
          // Lógica para manejar la respuesta, por ejemplo, redirigir al listado de sedes
        });
      }
    }
  }
}
