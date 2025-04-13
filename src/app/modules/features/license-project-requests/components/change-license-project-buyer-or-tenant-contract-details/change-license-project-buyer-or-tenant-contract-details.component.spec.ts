import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectBuyerOrTenantContractDetailsComponent } from './change-license-project-buyer-or-tenant-contract-details.component';

describe('ChangeLicenseProjectBuyerOrTenantContractDetailsComponent', () => {
  let component: ChangeLicenseProjectBuyerOrTenantContractDetailsComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectBuyerOrTenantContractDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectBuyerOrTenantContractDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectBuyerOrTenantContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
