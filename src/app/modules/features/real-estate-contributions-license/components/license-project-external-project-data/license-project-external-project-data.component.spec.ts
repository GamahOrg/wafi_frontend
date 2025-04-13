import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExternalProjectDataComponent } from './license-project-external-project-data.component';

describe('LicenseProjectExternalProjectDataComponent', () => {
  let component: LicenseProjectExternalProjectDataComponent;
  let fixture: ComponentFixture<LicenseProjectExternalProjectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExternalProjectDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExternalProjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
