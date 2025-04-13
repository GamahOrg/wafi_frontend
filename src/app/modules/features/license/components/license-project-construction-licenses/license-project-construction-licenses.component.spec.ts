import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectConstructionLicensesComponent } from './license-project-construction-licenses.component';

describe('LicenseProjectConstructionLicensesComponent', () => {
  let component: LicenseProjectConstructionLicensesComponent;
  let fixture: ComponentFixture<LicenseProjectConstructionLicensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectConstructionLicensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectConstructionLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
