import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHabitacionComponent } from './registrar-habitacion.component';

describe('RegistrarHabitacionComponent', () => {
  let component: RegistrarHabitacionComponent;
  let fixture: ComponentFixture<RegistrarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
