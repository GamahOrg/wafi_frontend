import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectMainContributionDataComponent } from './license-project-main-contribution-data.component';

describe('LicenseProjectMainContributionDataComponent', () => {
  let component: LicenseProjectMainContributionDataComponent;
  let fixture: ComponentFixture<LicenseProjectMainContributionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectMainContributionDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectMainContributionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
