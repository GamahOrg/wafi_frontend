import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectQualityNoticeContainerComponent } from './license-project-quality-notice-container.component';

describe('LicenseProjectQualityNoticeContainerComponent', () => {
  let component: LicenseProjectQualityNoticeContainerComponent;
  let fixture: ComponentFixture<LicenseProjectQualityNoticeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectQualityNoticeContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectQualityNoticeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
