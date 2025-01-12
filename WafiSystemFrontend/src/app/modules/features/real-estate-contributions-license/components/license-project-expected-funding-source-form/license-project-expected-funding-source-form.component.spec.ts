import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExpectedFundingSourceFormComponent } from './license-project-expected-funding-source-form.component';

describe('LicenseProjectExpectedFundingSourceFormComponent', () => {
  let component: LicenseProjectExpectedFundingSourceFormComponent;
  let fixture: ComponentFixture<LicenseProjectExpectedFundingSourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExpectedFundingSourceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExpectedFundingSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
