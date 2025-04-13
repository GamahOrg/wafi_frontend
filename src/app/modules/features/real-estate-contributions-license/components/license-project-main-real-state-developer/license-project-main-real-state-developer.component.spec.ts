import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectMainRealStateDeveloperComponent } from './license-project-main-real-state-developer.component';

describe('LicenseProjectMainRealStateDeveloperComponent', () => {
  let component: LicenseProjectMainRealStateDeveloperComponent;
  let fixture: ComponentFixture<LicenseProjectMainRealStateDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectMainRealStateDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectMainRealStateDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
