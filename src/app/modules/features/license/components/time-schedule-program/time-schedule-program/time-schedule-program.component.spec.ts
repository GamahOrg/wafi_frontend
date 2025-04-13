import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeScheduleProgramComponent } from './time-schedule-program.component';

describe('TimeScheduleProgramComponent', () => {
  let component: TimeScheduleProgramComponent;
  let fixture: ComponentFixture<TimeScheduleProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeScheduleProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeScheduleProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
