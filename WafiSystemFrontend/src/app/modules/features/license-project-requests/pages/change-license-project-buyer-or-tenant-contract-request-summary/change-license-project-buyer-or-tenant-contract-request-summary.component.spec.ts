import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent } from './change-license-project-buyer-or-tenant-contract-request-summary.component';

describe('ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent', () => {
  let component: ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
