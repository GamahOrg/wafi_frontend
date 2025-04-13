import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDetachedLicenseProjectUnitsComponent } from './add-edit-detached-license-project-units.component';

describe('AddEditDetachedLicenseProjectUnitsComponent', () => {
  let component: AddEditDetachedLicenseProjectUnitsComponent;
  let fixture: ComponentFixture<AddEditDetachedLicenseProjectUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDetachedLicenseProjectUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDetachedLicenseProjectUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
