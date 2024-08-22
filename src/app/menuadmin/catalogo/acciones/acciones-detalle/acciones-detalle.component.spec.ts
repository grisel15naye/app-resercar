import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesDetalleComponent } from './acciones-detalle.component';

describe('AccionesDetalleComponent', () => {
  let component: AccionesDetalleComponent;
  let fixture: ComponentFixture<AccionesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionesDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
