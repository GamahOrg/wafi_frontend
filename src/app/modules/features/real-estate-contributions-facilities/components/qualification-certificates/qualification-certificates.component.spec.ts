import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationCertificatesComponent } from './qualification-certificates.component';

describe('QualificationCertificatesComponent', () => {
  let component: QualificationCertificatesComponent;
  let fixture: ComponentFixture<QualificationCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
