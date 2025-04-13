import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectRealStateMarketerApprovalComponent } from './license-project-real-state-marketer-approval.component';

describe('LicenseProjectRealStateMarketerApprovalComponent', () => {
  let component: LicenseProjectRealStateMarketerApprovalComponent;
  let fixture: ComponentFixture<LicenseProjectRealStateMarketerApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectRealStateMarketerApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectRealStateMarketerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
