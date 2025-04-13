import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectNameRequestSummaryComponent } from './change-license-project-name-request-summary.component';

describe('ChangeLicenseProjectNameRequestSummaryComponent', () => {
  let component: ChangeLicenseProjectNameRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectNameRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectNameRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectNameRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
