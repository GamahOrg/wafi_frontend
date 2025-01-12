import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenseCertificateTemplateComponent } from './add-license-certificate-template.component';

describe('AddLicenseCertificateTemplateComponent', () => {
  let component: AddLicenseCertificateTemplateComponent;
  let fixture: ComponentFixture<AddLicenseCertificateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenseCertificateTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLicenseCertificateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
