import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionProjectLicenseRequestNotesComponent } from './correction-project-license-request-notes.component';

describe('CorrectionProjectLicenseRequestNotesComponent', () => {
  let component: CorrectionProjectLicenseRequestNotesComponent;
  let fixture: ComponentFixture<CorrectionProjectLicenseRequestNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionProjectLicenseRequestNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionProjectLicenseRequestNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
