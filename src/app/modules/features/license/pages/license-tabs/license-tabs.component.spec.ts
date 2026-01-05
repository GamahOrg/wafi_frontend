import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseTabsComponent } from './license-tabs.component';

describe('LicenseTabsComponent', () => {
  let component: LicenseTabsComponent;
  let fixture: ComponentFixture<LicenseTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
