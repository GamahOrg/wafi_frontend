import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionLicenseProjectRequestDetailsComponent } from './correction-license-project-request-details.component';

describe('CorrectionLicenseProjectRequestDetailsComponent', () => {
  let component: CorrectionLicenseProjectRequestDetailsComponent;
  let fixture: ComponentFixture<CorrectionLicenseProjectRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionLicenseProjectRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionLicenseProjectRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
