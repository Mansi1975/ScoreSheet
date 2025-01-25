import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniitStpsComponent } from './paniit-stps.component';

describe('PaniitStpsComponent', () => {
  let component: PaniitStpsComponent;
  let fixture: ComponentFixture<PaniitStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaniitStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaniitStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
