import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionProjectLicenseRequestDataComponent } from './correction-project-license-request-data.component';

describe('CorrectionProjectLicenseRequestDataComponent', () => {
  let component: CorrectionProjectLicenseRequestDataComponent;
  let fixture: ComponentFixture<CorrectionProjectLicenseRequestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionProjectLicenseRequestDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionProjectLicenseRequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
