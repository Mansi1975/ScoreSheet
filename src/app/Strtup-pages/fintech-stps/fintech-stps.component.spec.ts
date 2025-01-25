import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechStpsComponent } from './fintech-stps.component';

describe('FintechStpsComponent', () => {
  let component: FintechStpsComponent;
  let fixture: ComponentFixture<FintechStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FintechStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FintechStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
