import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectAccoutKeeperDataComponent } from './license-project-accout-keeper-data.component';

describe('LicenseProjectAccoutKeeperDataComponent', () => {
  let component: LicenseProjectAccoutKeeperDataComponent;
  let fixture: ComponentFixture<LicenseProjectAccoutKeeperDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectAccoutKeeperDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectAccoutKeeperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
