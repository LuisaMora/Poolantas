import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedResenaComponent } from './huesped-resena.component';

describe('HuespedResenaComponent', () => {
  let component: HuespedResenaComponent;
  let fixture: ComponentFixture<HuespedResenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuespedResenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuespedResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
