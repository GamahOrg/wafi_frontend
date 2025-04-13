import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrAddLicenseProjectUnitModelDetailsComponent } from './change-or-add-license-project-unit-model-details.component';

describe('ChangeOrAddLicenseProjectUnitModelDetailsComponent', () => {
  let component: ChangeOrAddLicenseProjectUnitModelDetailsComponent;
  let fixture: ComponentFixture<ChangeOrAddLicenseProjectUnitModelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOrAddLicenseProjectUnitModelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrAddLicenseProjectUnitModelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
