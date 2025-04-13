import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineProgramFilesComponent } from './timeline-program-files.component';

describe('TimelineProgramFilesComponent', () => {
  let component: TimelineProgramFilesComponent;
  let fixture: ComponentFixture<TimelineProgramFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineProgramFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineProgramFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
