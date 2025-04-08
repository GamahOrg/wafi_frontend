import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent } from './create-change-license-project-buyer-or-tenant-contract-request.component';

describe('CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent', () => {
  let component: CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent;
  let fixture: ComponentFixture<CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
