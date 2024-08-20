import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdayComponent } from './vday.component';

describe('VdayComponent', () => {
  let component: VdayComponent;
  let fixture: ComponentFixture<VdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdayComponent]
    });
    fixture = TestBed.createComponent(VdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
