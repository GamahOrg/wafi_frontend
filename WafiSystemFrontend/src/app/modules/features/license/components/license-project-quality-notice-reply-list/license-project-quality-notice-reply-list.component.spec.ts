import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectQualityNoticeReplyListComponent } from './license-project-quality-notice-reply-list.component';

describe('LicenseProjectQualityNoticeReplyListComponent', () => {
  let component: LicenseProjectQualityNoticeReplyListComponent;
  let fixture: ComponentFixture<LicenseProjectQualityNoticeReplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectQualityNoticeReplyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectQualityNoticeReplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
