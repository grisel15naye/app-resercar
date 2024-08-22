import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesDetalleComponent } from './sedes-detalle.component';

describe('SedesDetalleComponent', () => {
  let component: SedesDetalleComponent;
  let fixture: ComponentFixture<SedesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedesDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
