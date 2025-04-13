import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectDetachedtUnitsComponent } from './license-project-detachedt-units.component';

describe('LicenseProjectDetachedtUnitsComponent', () => {
  let component: LicenseProjectDetachedtUnitsComponent;
  let fixture: ComponentFixture<LicenseProjectDetachedtUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectDetachedtUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectDetachedtUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
