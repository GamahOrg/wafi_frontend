import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectSubDeveloperApprovalComponent } from './license-project-sub-developer-approval.component';

describe('LicenseProjectSubDeveloperApprovalComponent', () => {
  let component: LicenseProjectSubDeveloperApprovalComponent;
  let fixture: ComponentFixture<LicenseProjectSubDeveloperApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectSubDeveloperApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectSubDeveloperApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
