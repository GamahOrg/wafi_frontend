import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestMainDataComponent } from './license-request-main-data.component';

describe('LicenseRequestMainDataComponent', () => {
  let component: LicenseRequestMainDataComponent;
  let fixture: ComponentFixture<LicenseRequestMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestMainDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
