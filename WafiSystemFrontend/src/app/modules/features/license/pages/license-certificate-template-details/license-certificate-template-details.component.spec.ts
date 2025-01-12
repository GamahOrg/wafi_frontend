import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseCertificateTemplateDetailsComponent } from './license-certificate-template-details.component';

describe('LicenseCertificateTemplateDetailsComponent', () => {
  let component: LicenseCertificateTemplateDetailsComponent;
  let fixture: ComponentFixture<LicenseCertificateTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseCertificateTemplateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseCertificateTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
