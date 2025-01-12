import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExternalAddressComponent } from './license-project-external-address.component';

describe('LicenseProjectExternalAddressComponent', () => {
  let component: LicenseProjectExternalAddressComponent;
  let fixture: ComponentFixture<LicenseProjectExternalAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExternalAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExternalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
