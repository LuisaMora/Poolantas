import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedVerPropiedadComponent } from './huesped-ver-propiedad.component';

describe('HuespedVerPropiedadComponent', () => {
  let component: HuespedVerPropiedadComponent;
  let fixture: ComponentFixture<HuespedVerPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuespedVerPropiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuespedVerPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
