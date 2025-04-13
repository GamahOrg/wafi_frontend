import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectSpaceOrUnitsDetailsComponent } from './change-license-project-space-or-units-details.component';

describe('ChangeLicenseProjectSpaceOrUnitsDetailsComponent', () => {
  let component: ChangeLicenseProjectSpaceOrUnitsDetailsComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectSpaceOrUnitsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectSpaceOrUnitsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectSpaceOrUnitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
