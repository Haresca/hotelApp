import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAdministradorComponent } from './consultar-administrador.component';

describe('ConsultarAdministradorComponent', () => {
  let component: ConsultarAdministradorComponent;
  let fixture: ComponentFixture<ConsultarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
