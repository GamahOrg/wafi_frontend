import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestProjectPartiesComponent } from './license-request-project-parties.component';

describe('LicenseRequestProjectPartiesComponent', () => {
  let component: LicenseRequestProjectPartiesComponent;
  let fixture: ComponentFixture<LicenseRequestProjectPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestProjectPartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestProjectPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
