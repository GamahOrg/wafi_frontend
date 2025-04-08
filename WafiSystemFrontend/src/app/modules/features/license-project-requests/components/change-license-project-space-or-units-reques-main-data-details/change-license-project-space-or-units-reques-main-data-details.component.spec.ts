import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent } from './change-license-project-space-or-units-reques-main-data-details.component';

describe('ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent', () => {
  let component: ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
