import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectQualityNoticeListComponent } from './license-project-quality-notice-list.component';

describe('LicenseProjectQualityNoticeListComponent', () => {
  let component: LicenseProjectQualityNoticeListComponent;
  let fixture: ComponentFixture<LicenseProjectQualityNoticeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectQualityNoticeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectQualityNoticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
