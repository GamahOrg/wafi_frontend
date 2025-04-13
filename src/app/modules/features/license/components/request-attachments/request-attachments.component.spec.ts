import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAttachmentsComponent } from './request-attachments.component';

describe('RequestAttachmentsComponent', () => {
  let component: RequestAttachmentsComponent;
  let fixture: ComponentFixture<RequestAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAttachmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
