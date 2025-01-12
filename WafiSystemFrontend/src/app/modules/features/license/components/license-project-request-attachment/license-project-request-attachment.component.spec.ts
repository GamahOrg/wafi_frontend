import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectRequestAttachmentComponent } from './license-project-request-attachment.component';

describe('LicenseProjectRequestAttachmentComponent', () => {
  let component: LicenseProjectRequestAttachmentComponent;
  let fixture: ComponentFixture<LicenseProjectRequestAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectRequestAttachmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectRequestAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
