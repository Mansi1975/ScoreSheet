import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechJuryComponent } from './fintech-jury.component';

describe('FintechJuryComponent', () => {
  let component: FintechJuryComponent;
  let fixture: ComponentFixture<FintechJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FintechJuryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FintechJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
