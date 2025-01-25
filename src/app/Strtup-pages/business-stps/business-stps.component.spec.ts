import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStpsComponent } from './business-stps.component';

describe('BusinessStpsComponent', () => {
  let component: BusinessStpsComponent;
  let fixture: ComponentFixture<BusinessStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
