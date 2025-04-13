import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestMarketerComponent } from './license-request-marketer.component';

describe('LicenseRequestMarketerComponent', () => {
  let component: LicenseRequestMarketerComponent;
  let fixture: ComponentFixture<LicenseRequestMarketerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestMarketerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestMarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
