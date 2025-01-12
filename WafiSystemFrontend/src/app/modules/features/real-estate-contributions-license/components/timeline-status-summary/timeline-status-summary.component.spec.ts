import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStatusSummaryComponent } from './timeline-status-summary.component';

describe('TimelineStatusSummaryComponent', () => {
  let component: TimelineStatusSummaryComponent;
  let fixture: ComponentFixture<TimelineStatusSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineStatusSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineStatusSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
