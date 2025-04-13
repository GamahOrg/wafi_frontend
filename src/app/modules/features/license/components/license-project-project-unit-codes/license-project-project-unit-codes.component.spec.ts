import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectProjectUnitCodesComponent } from './license-project-project-unit-codes.component';

describe('LicenseProjectProjectUnitCodesComponent', () => {
  let component: LicenseProjectProjectUnitCodesComponent;
  let fixture: ComponentFixture<LicenseProjectProjectUnitCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectProjectUnitCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectProjectUnitCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
