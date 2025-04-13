import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectRealEstateDeveloperDataComponent } from './license-project-real-estate-developer-data-component';

describe('LicenseProjectRealEstateDeveloperDataComponent', () => {
  let component: LicenseProjectRealEstateDeveloperDataComponent;
  let fixture: ComponentFixture<LicenseProjectRealEstateDeveloperDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectRealEstateDeveloperDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectRealEstateDeveloperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
