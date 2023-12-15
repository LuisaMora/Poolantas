import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVideosComponent } from './registro-videos.component';

describe('RegistroVideosComponent', () => {
  let component: RegistroVideosComponent;
  let fixture: ComponentFixture<RegistroVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroVideosComponent]
    });
    fixture = TestBed.createComponent(RegistroVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
