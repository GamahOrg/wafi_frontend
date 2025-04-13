import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectZoneSubunitModelComponent } from './license-project-zone-subunit-model.component';

describe('LicenseProjectZoneSubunitModelComponent', () => {
  let component: LicenseProjectZoneSubunitModelComponent;
  let fixture: ComponentFixture<LicenseProjectZoneSubunitModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectZoneSubunitModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectZoneSubunitModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
