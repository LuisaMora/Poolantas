import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedPagoComponent } from './huesped-pago.component';

describe('HuespedPagoComponent', () => {
  let component: HuespedPagoComponent;
  let fixture: ComponentFixture<HuespedPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuespedPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuespedPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
