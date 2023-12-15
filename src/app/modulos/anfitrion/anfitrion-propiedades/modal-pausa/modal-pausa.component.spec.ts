import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPausaComponent } from './modal-pausa.component';

describe('ModalPausaComponent', () => {
  let component: ModalPausaComponent;
  let fixture: ComponentFixture<ModalPausaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPausaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
