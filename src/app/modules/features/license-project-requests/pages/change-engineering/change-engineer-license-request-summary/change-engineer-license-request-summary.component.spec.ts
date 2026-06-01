import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEngineerLicenseRequestSummaryComponent } from './change-engineer-license-request-summary.component';

describe('ChangeEngineerLicenseRequestSummaryComponent', () => {
  let component: ChangeEngineerLicenseRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeEngineerLicenseRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEngineerLicenseRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEngineerLicenseRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
