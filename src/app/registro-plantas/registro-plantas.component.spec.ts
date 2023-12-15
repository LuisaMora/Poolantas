import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPlantasComponent } from './registro-plantas.component';

describe('RegistroPlantasComponent', () => {
  let component: RegistroPlantasComponent;
  let fixture: ComponentFixture<RegistroPlantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPlantasComponent]
    });
    fixture = TestBed.createComponent(RegistroPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
