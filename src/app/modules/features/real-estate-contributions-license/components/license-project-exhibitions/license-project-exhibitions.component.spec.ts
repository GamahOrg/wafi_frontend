import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExhibitionsComponent } from './license-project-exhibitions.component';

describe('LicenseProjectExhibitionsComponent', () => {
  let component: LicenseProjectExhibitionsComponent;
  let fixture: ComponentFixture<LicenseProjectExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExhibitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
