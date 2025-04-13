import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent } from './change-license-project-space-or-units-request-summary.component';

describe('ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent', () => {
  let component: ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
