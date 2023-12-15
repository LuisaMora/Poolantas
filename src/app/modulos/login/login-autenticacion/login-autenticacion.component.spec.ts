import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAutenticacionComponent } from './login-autenticacion.component';

describe('LoginAutenticacionComponent', () => {
  let component: LoginAutenticacionComponent;
  let fixture: ComponentFixture<LoginAutenticacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAutenticacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAutenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
