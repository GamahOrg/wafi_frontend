import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent } from './change-or-add-license-project-unit-model-request-main-data.component';

describe('ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent', () => {
  let component: ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent;
  let fixture: ComponentFixture<ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
