import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjComponent } from './dj.component';

describe('DjComponent', () => {
  let component: DjComponent;
  let fixture: ComponentFixture<DjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DjComponent]
    });
    fixture = TestBed.createComponent(DjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
