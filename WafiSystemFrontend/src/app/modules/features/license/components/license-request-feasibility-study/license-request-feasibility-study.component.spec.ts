import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestFeasibilityStudyComponent } from './license-request-feasibility-study.component';

describe('LicenseRequestFeasibilityStudyComponent', () => {
  let component: LicenseRequestFeasibilityStudyComponent;
  let fixture: ComponentFixture<LicenseRequestFeasibilityStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestFeasibilityStudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestFeasibilityStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
