import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectEngineeringConsultantApprovalComponent } from './license-project-engineering-consultant-approval.component';

describe('LicenseProjectEngineeringConsultantApprovalComponent', () => {
  let component: LicenseProjectEngineeringConsultantApprovalComponent;
  let fixture: ComponentFixture<LicenseProjectEngineeringConsultantApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectEngineeringConsultantApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectEngineeringConsultantApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
