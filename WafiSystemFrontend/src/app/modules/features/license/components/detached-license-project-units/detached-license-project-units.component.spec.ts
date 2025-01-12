import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachedLicenseProjectUnitsComponent } from './detached-license-project-units.component';

describe('DetachedLicenseProjectUnitsComponent', () => {
  let component: DetachedLicenseProjectUnitsComponent;
  let fixture: ComponentFixture<DetachedLicenseProjectUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetachedLicenseProjectUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetachedLicenseProjectUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
