import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseCertificatesComponent } from './license-certificates.component';

describe('LicenseCertificatesComponent', () => {
  let component: LicenseCertificatesComponent;
  let fixture: ComponentFixture<LicenseCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
