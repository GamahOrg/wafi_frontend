import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestSubDeveloperComponent } from './license-request-sub-developer.component';

describe('LicenseRequestSubDeveloperComponent', () => {
  let component: LicenseRequestSubDeveloperComponent;
  let fixture: ComponentFixture<LicenseRequestSubDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestSubDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestSubDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
