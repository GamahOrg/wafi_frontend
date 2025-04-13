import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent } from './add-edit-change-license-project-buyer-or-tenant-contract-request.component';

describe('AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent', () => {
  let component: AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent;
  let fixture: ComponentFixture<AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
