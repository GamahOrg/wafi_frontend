import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeOrAddLicenseProjectUnitModelRequestComponent } from './add-edit-change-or-add-license-project-unit-model-request.component';

describe('AddEditChangeOrAddLicenseProjectUnitModelRequestComponent', () => {
  let component: AddEditChangeOrAddLicenseProjectUnitModelRequestComponent;
  let fixture: ComponentFixture<AddEditChangeOrAddLicenseProjectUnitModelRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeOrAddLicenseProjectUnitModelRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeOrAddLicenseProjectUnitModelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
