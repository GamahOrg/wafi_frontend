import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectProjectAddressComponent } from './license-project-project-address.component';

describe('LicenseProjectProjectAddressComponent', () => {
  let component: LicenseProjectProjectAddressComponent;
  let fixture: ComponentFixture<LicenseProjectProjectAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectProjectAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectProjectAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
