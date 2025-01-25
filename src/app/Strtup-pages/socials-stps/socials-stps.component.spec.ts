import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsStpsComponent } from './socials-stps.component';

describe('SocialsStpsComponent', () => {
  let component: SocialsStpsComponent;
  let fixture: ComponentFixture<SocialsStpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsStpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsStpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
