import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestExpectedAnnualBalanceSheetComponent } from './license-request-expected-annual-balance-sheet.component';

describe('LicenseRequestExpectedAnnualBalanceSheetComponent', () => {
  let component: LicenseRequestExpectedAnnualBalanceSheetComponent;
  let fixture: ComponentFixture<LicenseRequestExpectedAnnualBalanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestExpectedAnnualBalanceSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestExpectedAnnualBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
