import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENSStpsComponent } from './ens-stps.component';

describe('ENSStpsComponent', () => {
  let component: ENSStpsComponent;
  let fixture: ComponentFixture<ENSStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ENSStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENSStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
