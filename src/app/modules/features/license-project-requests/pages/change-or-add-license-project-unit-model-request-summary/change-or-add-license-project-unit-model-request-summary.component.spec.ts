import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent } from './change-or-add-license-project-unit-model-request-summary.component';

describe('ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent', () => {
  let component: ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
