import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussiComponent } from './bussi.component';

describe('BussiComponent', () => {
  let component: BussiComponent;
  let fixture: ComponentFixture<BussiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
