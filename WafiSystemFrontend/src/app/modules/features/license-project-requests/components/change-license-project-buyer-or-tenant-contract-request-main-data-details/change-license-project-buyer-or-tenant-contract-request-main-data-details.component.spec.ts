import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent } from './change-license-project-buyer-or-tenant-contract-request-main-data-details.component';

describe('ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent', () => {
  let component: ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
