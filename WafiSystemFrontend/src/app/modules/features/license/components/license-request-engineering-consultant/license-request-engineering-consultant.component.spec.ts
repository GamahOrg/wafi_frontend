import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestEngineeringConsultantComponent } from './license-request-engineering-consultant.component';

describe('LicenseRequestEngineeringConsultantComponent', () => {
  let component: LicenseRequestEngineeringConsultantComponent;
  let fixture: ComponentFixture<LicenseRequestEngineeringConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestEngineeringConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestEngineeringConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
