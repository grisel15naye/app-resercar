import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesListarComponent } from './sedes-listar.component';

describe('SedesListarComponent', () => {
  let component: SedesListarComponent;
  let fixture: ComponentFixture<SedesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedesListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
