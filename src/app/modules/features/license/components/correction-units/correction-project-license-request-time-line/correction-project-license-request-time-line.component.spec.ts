import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionProjectLicenseRequestTimeLineComponent } from './correction-project-license-request-time-line.component';

describe('CorrectionProjectLicenseRequestTimeLineComponent', () => {
  let component: CorrectionProjectLicenseRequestTimeLineComponent;
  let fixture: ComponentFixture<CorrectionProjectLicenseRequestTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionProjectLicenseRequestTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionProjectLicenseRequestTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
