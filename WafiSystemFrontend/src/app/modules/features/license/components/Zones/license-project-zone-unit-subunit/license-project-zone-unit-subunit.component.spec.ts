import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectZoneUnitSubunitComponent } from './license-project-zone-unit-subunit.component';

describe('LicenseProjectZoneUnitSubunitComponent', () => {
  let component: LicenseProjectZoneUnitSubunitComponent;
  let fixture: ComponentFixture<LicenseProjectZoneUnitSubunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectZoneUnitSubunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectZoneUnitSubunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
