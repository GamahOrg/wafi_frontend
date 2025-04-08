import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent } from './change-license-project-space-or-units-reques-main-data-summary.component';

describe('ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent', () => {
  let component: ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
