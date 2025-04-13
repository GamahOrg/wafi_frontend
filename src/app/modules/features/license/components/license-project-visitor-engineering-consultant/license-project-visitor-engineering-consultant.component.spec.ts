import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectVisitorEngineeringConsultantComponent } from './license-project-visitor-engineering-consultant.component';

describe('LicenseProjectVisitorEngineeringConsultantComponent', () => {
  let component: LicenseProjectVisitorEngineeringConsultantComponent;
  let fixture: ComponentFixture<LicenseProjectVisitorEngineeringConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectVisitorEngineeringConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectVisitorEngineeringConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
