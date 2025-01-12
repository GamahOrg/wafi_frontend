import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCertificatesComponent } from './training-certificates.component';

describe('TrainingCertificatesComponent', () => {
  let component: TrainingCertificatesComponent;
  let fixture: ComponentFixture<TrainingCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
