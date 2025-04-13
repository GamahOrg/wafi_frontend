import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseCertificateTemplateListComponent } from './license-certificate-template-list.component';

describe('LicenseCertificateTemplateListComponent', () => {
  let component: LicenseCertificateTemplateListComponent;
  let fixture: ComponentFixture<LicenseCertificateTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseCertificateTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseCertificateTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
