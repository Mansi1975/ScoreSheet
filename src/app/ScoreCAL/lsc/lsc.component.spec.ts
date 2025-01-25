import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LscComponent } from './lsc.component';

describe('LscComponent', () => {
  let component: LscComponent;
  let fixture: ComponentFixture<LscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
