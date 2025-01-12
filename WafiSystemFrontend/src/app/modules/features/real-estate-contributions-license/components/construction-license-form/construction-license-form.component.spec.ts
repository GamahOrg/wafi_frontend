import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionLicenseFormComponent } from './construction-license-form.component';

describe('ConstructionLicenseFormComponent', () => {
  let component: ConstructionLicenseFormComponent;
  let fixture: ComponentFixture<ConstructionLicenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionLicenseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
