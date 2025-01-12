import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDepositDocumentDetailsComponent } from './license-deposit-document-details.component';

describe('LicenseDepositDocumentDetailsComponent', () => {
  let component: LicenseDepositDocumentDetailsComponent;
  let fixture: ComponentFixture<LicenseDepositDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseDepositDocumentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDepositDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
