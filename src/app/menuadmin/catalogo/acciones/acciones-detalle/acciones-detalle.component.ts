import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { AccionesService } from '../acciones.service';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-acciones-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './acciones-detalle.component.html',
  styleUrls: ['./acciones-detalle.component.css']
})
export class AccionesDetalleComponent {
  accionId: string | null = '';
  accionForm!: FormGroup;
  FormType = FormType;
  formType?: FormType;
  formTitulo!: string;

  constructor(private accionesService: AccionesService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.accionId = this.route.snapshot.paramMap.get('id');
    this.accionForm = this.crearFormulario();

    if (this.accionId !== 'nuevo') {
      this.consultarAccion(Number(this.accionId));
      this.formTitulo = "Actualizar Acción";
      this.formType = FormType.Actualizar;
    } else {
      this.formTitulo = "Nueva Acción";
      this.formType = FormType.Crear;
    }
  }

  crearFormulario(): FormGroup {
    return new FormGroup({
      accionesid: new FormControl(null),
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      estadoacc: new FormControl(false)
    });
  }

  consultarAccion(id: number): void {
    this.accionesService.getAcciones(id).subscribe((data) => {
      this.accionForm.setValue(data);
    });
  }

  guardarAccion(): void {
    const accion = this.accionForm.value;
    
    if (this.accionId !== 'nuevo') {
      // Actualiza acción existente
      this.accionesService.createAcciones(accion).subscribe(() => {
        this.router.navigate(['/acciones']);
      });
    } else {
      // Crea nueva acción
      this.accionesService.createAcciones(accion).subscribe(() => {
        this.router.navigate(['/acciones']);
      });
    }
  }
}

