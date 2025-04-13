import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectZoneUnitComponent } from './license-project-zone-unit.component';

describe('LicenseProjectZoneUnitComponent', () => {
  let component: LicenseProjectZoneUnitComponent;
  let fixture: ComponentFixture<LicenseProjectZoneUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectZoneUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectZoneUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
