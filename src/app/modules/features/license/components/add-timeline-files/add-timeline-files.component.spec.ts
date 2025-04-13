import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimelineFilesComponent } from './add-timeline-files.component';

describe('AddTimelineFilesComponent', () => {
  let component: AddTimelineFilesComponent;
  let fixture: ComponentFixture<AddTimelineFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimelineFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimelineFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
