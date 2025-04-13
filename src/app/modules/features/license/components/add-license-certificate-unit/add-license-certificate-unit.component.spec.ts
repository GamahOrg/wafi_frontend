import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenseCertificateUnitComponent } from './add-license-certificate-unit.component';

describe('AddLicenseCertificateUnitComponent', () => {
  let component: AddLicenseCertificateUnitComponent;
  let fixture: ComponentFixture<AddLicenseCertificateUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenseCertificateUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLicenseCertificateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
