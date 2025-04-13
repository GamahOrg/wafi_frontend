import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectDelegatorListComponent } from './license-project-delegator-list.component';

describe('LicenseProjectDelegatorListComponent', () => {
  let component: LicenseProjectDelegatorListComponent;
  let fixture: ComponentFixture<LicenseProjectDelegatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectDelegatorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectDelegatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
