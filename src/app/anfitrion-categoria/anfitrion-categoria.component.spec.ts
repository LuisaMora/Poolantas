import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionCategoriaComponent } from './anfitrion-categoria.component';

describe('AnfitrionCategoriaComponent', () => {
  let component: AnfitrionCategoriaComponent;
  let fixture: ComponentFixture<AnfitrionCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnfitrionCategoriaComponent]
    });
    fixture = TestBed.createComponent(AnfitrionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
