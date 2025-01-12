import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectMainRealStateDeveloperApprovalComponent } from './license-project-main-real-state-developer-approval.component';

describe('LicenseProjectMainRealStateDeveloperApprovalComponent', () => {
  let component: LicenseProjectMainRealStateDeveloperApprovalComponent;
  let fixture: ComponentFixture<LicenseProjectMainRealStateDeveloperApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectMainRealStateDeveloperApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectMainRealStateDeveloperApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
