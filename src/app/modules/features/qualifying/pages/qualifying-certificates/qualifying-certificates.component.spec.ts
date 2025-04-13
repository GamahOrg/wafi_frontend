import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyingCertificatesComponent } from './qualifying-certificates.component';

describe('QualifyingCertificatesComponent', () => {
  let component: QualifyingCertificatesComponent;
  let fixture: ComponentFixture<QualifyingCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifyingCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifyingCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
