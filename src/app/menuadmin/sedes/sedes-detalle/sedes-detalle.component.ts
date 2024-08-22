import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { SedesService } from '../SedesService';
enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-sedes-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './sedes-detalle.component.html',
  styleUrl: './sedes-detalle.component.css'
})
export class SedesDetalleComponent {
  sedeid: string | null = ''
  sedeForm!: FormGroup
  formType!: FormType
  formTitulo!: string
  
  constructor(private sedesService: SedesService,
    private router: ActivatedRoute){

  }

  ngOnInit(): void {
   this.sedeid = this.router.snapshot.paramMap.get('id')
   this.sedeForm = this.crearFormulario()
   if(this.sedeid !== 'nuevo'){
    this.consutarSede(Number(this.sedeid))
    this.formTitulo = "Actualizar Sede"
    this.formType = FormType.Actualizar
   }else{
    this.formTitulo = "Nueva Categoria"
    this.formType = FormType.Crear
   }
  }
  crearFormulario():FormGroup{
    return new FormGroup({
      nombresede: new FormControl(''),
      sedeinfo: new FormControl(''),
      lunes: new FormControl(''),
      martes: new FormControl(''),
      miercoles: new FormControl(''),
      jueves: new FormControl(''),
      viernes: new FormControl(''),
      sabado: new FormControl(''),
      domingo: new FormControl(''),
    })
  }
  get nombreSedeError(): string {
    const control = this.sedeForm.get('nombresede');
    if (control?.hasError('required')) {
      return 'El nombre de la sede es requerido';
    }
    return '';
  }

  get horaAbiertoError(): string {
    const control = this.sedeForm.get('horaabierto');
    if (control?.hasError('required')) {
      return 'La hora de apertura es requerida';
    }
    return '';
  }

  get horaCierreError(): string {
    const control = this.sedeForm.get('horacierre');
    if (control?.hasError('required')) {
      return 'La hora de cierre es requerida';
    }
    return '';
  }

  consutarSede(id: number): void {
    this.sedesService.getSedes(id)
      .subscribe((data) => {
        this.sedeForm.setValue({
          nombresede: data.nombresede,
          sedeinfo: data.sedeinfo,
          lunes: data.lunes,
          martes: data.martes,
          miercoles: data.miercoles,
          jueves: data.jueves,
          viernes: data.viernes,
          sabado: data.sabado,
          domingo: data.domingo,
          horaabierto: data.horaabierto,
          horacierre: data.horacierre,
        });
      });
  }
}