import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectProjectBasicDataComponent } from './license-project-project-basic-data.component';

describe('LicenseProjectProjectBasicDataComponent', () => {
  let component: LicenseProjectProjectBasicDataComponent;
  let fixture: ComponentFixture<LicenseProjectProjectBasicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectProjectBasicDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectProjectBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
