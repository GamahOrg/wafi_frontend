import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestListOfProjectExpectedIncomeComponent } from './license-request-list-of-project-expected-income.component';

describe('LicenseRequestListOfProjectExpectedIncomeComponent', () => {
  let component: LicenseRequestListOfProjectExpectedIncomeComponent;
  let fixture: ComponentFixture<LicenseRequestListOfProjectExpectedIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestListOfProjectExpectedIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestListOfProjectExpectedIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
