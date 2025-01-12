import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectProjectLandTitleDeedsComponent } from './license-project-project-land-title-deeds.component';

describe('LicenseProjectProjectLandTitleDeedsComponent', () => {
  let component: LicenseProjectProjectLandTitleDeedsComponent;
  let fixture: ComponentFixture<LicenseProjectProjectLandTitleDeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectProjectLandTitleDeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectProjectLandTitleDeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
