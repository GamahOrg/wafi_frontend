import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent } from './change-or-add-license-project-unit-model-request-main-data-details.component';

describe('ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent', () => {
  let component: ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent;
  let fixture: ComponentFixture<ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
