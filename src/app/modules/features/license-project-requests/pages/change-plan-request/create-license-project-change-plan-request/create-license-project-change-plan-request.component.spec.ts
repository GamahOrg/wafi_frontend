import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLicenseProjectChangePlanRequestComponent } from './create-license-project-change-plan-request.component';

describe('CreateLicenseProjectChangePlanRequestComponent', () => {
  let component: CreateLicenseProjectChangePlanRequestComponent;
  let fixture: ComponentFixture<CreateLicenseProjectChangePlanRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLicenseProjectChangePlanRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLicenseProjectChangePlanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
