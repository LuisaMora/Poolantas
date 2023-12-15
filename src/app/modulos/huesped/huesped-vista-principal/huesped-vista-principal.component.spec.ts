import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedVistaPrincipalComponent } from './huesped-vista-principal.component';

describe('HuespedVistaPrincipalComponent', () => {
  let component: HuespedVistaPrincipalComponent;
  let fixture: ComponentFixture<HuespedVistaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuespedVistaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuespedVistaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
