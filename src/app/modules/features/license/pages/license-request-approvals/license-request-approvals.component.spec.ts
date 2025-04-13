import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestApprovalsComponent } from './license-request-approvals.component';

describe('LicenseRequestApprovalsComponent', () => {
  let component: LicenseRequestApprovalsComponent;
  let fixture: ComponentFixture<LicenseRequestApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestApprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
