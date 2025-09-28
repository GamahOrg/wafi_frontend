import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLicenseProjectQualityNoticeDetalisComponent } from './show-license-project-quality-notice-detalis.component';

describe('ShowLicenseProjectQualityNoticeDetalisComponent', () => {
  let component: ShowLicenseProjectQualityNoticeDetalisComponent;
  let fixture: ComponentFixture<ShowLicenseProjectQualityNoticeDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLicenseProjectQualityNoticeDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLicenseProjectQualityNoticeDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
