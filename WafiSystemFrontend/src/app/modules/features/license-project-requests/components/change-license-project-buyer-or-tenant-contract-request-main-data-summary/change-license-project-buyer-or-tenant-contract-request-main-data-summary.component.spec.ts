import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent } from './change-license-project-buyer-or-tenant-contract-request-main-data-summary.component';

describe('ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent', () => {
  let component: ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
