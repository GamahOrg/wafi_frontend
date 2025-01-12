import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectAdditionalServicesComponent } from './license-project-additional-services.component';

describe('LicenseProjectAdditionalServicesComponent', () => {
  let component: LicenseProjectAdditionalServicesComponent;
  let fixture: ComponentFixture<LicenseProjectAdditionalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectAdditionalServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectAdditionalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
