import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHabitacionComponent } from './consultar-habitacion.component';

describe('ConsultarHabitacionComponent', () => {
  let component: ConsultarHabitacionComponent;
  let fixture: ComponentFixture<ConsultarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
