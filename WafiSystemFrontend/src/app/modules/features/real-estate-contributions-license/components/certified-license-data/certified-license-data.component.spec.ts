import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedLicenseDataComponent } from './certified-license-data.component';

describe('CertifiedLicenseDataComponent', () => {
  let component: CertifiedLicenseDataComponent;
  let fixture: ComponentFixture<CertifiedLicenseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiedLicenseDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiedLicenseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
