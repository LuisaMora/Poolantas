import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPlantasComponent } from './anfitrion-plantas.component';

describe('AnfitrionPlantasComponent', () => {
  let component: AnfitrionPlantasComponent;
  let fixture: ComponentFixture<AnfitrionPlantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnfitrionPlantasComponent]
    });
    fixture = TestBed.createComponent(AnfitrionPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
