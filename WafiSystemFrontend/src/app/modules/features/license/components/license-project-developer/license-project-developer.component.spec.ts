import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectDeveloperComponent } from './license-project-developer.component';

describe('LicenseProjectDeveloperComponent', () => {
  let component: LicenseProjectDeveloperComponent;
  let fixture: ComponentFixture<LicenseProjectDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
