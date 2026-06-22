import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectAccountantRequestDataComponent } from './change-license-project-accountant-request-data.component';

describe('ChangeLicenseProjectAccountantRequestDataComponent', () => {
  let component: ChangeLicenseProjectAccountantRequestDataComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectAccountantRequestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeLicenseProjectAccountantRequestDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ChangeLicenseProjectAccountantRequestDataComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
