import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUnderStudingLicenseRequestsComponent } from './employee-under-studing-license-requests.component';

describe('EmployeeUnderStudingLicenseRequestsComponent', () => {
  let component: EmployeeUnderStudingLicenseRequestsComponent;
  let fixture: ComponentFixture<EmployeeUnderStudingLicenseRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUnderStudingLicenseRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUnderStudingLicenseRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
