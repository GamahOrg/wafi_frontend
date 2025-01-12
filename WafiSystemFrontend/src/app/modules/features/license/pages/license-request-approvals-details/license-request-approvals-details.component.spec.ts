import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestApprovalsDetailsComponent } from './license-request-approvals-details.component';

describe('LicenseRequestApprovalsDetailsComponent', () => {
  let component: LicenseRequestApprovalsDetailsComponent;
  let fixture: ComponentFixture<LicenseRequestApprovalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestApprovalsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestApprovalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
