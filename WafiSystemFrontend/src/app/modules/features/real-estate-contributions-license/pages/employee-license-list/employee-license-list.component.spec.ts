import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLicenseListComponent } from './employee-license-list.component';

describe('EmployeeLicenseListComponent', () => {
  let component: EmployeeLicenseListComponent;
  let fixture: ComponentFixture<EmployeeLicenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLicenseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLicenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
