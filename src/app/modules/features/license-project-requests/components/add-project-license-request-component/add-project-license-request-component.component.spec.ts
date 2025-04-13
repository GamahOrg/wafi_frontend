import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectLicenseRequestComponentComponent } from './add-project-license-request-component.component';

describe('AddProjectLicenseRequestComponentComponent', () => {
  let component: AddProjectLicenseRequestComponentComponent;
  let fixture: ComponentFixture<AddProjectLicenseRequestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectLicenseRequestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectLicenseRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
