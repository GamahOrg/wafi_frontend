import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectProjectLandComponent } from './license-project-project-land.component';

describe('LicenseProjectProjectLandComponent', () => {
  let component: LicenseProjectProjectLandComponent;
  let fixture: ComponentFixture<LicenseProjectProjectLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectProjectLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectProjectLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
