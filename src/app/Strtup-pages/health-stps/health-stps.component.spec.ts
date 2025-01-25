import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStpsComponent } from './health-stps.component';

describe('HealthStpsComponent', () => {
  let component: HealthStpsComponent;
  let fixture: ComponentFixture<HealthStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
