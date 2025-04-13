import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestProjectDataComponent } from './license-request-project-data.component';

describe('LicenseRequestProjectDataComponent', () => {
  let component: LicenseRequestProjectDataComponent;
  let fixture: ComponentFixture<LicenseRequestProjectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestProjectDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestProjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
