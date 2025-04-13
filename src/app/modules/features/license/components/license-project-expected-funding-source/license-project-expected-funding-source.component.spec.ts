import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExpectedFundingSourceComponent } from './license-project-expected-funding-source.component';

describe('LicenseProjectExpectedFundingSourceComponent', () => {
  let component: LicenseProjectExpectedFundingSourceComponent;
  let fixture: ComponentFixture<LicenseProjectExpectedFundingSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExpectedFundingSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExpectedFundingSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
