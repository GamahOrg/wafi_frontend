import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectCharteredAccountantApprovalComponent } from './license-project-chartered-accountant-approval.component';

describe('LicenseProjectCharteredAccountantApprovalComponent', () => {
  let component: LicenseProjectCharteredAccountantApprovalComponent;
  let fixture: ComponentFixture<LicenseProjectCharteredAccountantApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectCharteredAccountantApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectCharteredAccountantApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
