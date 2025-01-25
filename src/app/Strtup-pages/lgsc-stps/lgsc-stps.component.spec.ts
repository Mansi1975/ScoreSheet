import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGSCStpsComponent } from './lgsc-stps.component';

describe('LGSCStpsComponent', () => {
  let component: LGSCStpsComponent;
  let fixture: ComponentFixture<LGSCStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LGSCStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LGSCStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
