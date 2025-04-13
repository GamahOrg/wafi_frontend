import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangeOrAddLicenseProjectUnitModelRequestComponent } from './create-change-or-add-license-project-unit-model-request.component';

describe('CreateChangeOrAddLicenseProjectUnitModelRequestComponent', () => {
  let component: CreateChangeOrAddLicenseProjectUnitModelRequestComponent;
  let fixture: ComponentFixture<CreateChangeOrAddLicenseProjectUnitModelRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChangeOrAddLicenseProjectUnitModelRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChangeOrAddLicenseProjectUnitModelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
