import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectAgreementsComponent } from './license-project-agreements.component';

describe('LicenseProjectAgreementsComponent', () => {
  let component: LicenseProjectAgreementsComponent;
  let fixture: ComponentFixture<LicenseProjectAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
