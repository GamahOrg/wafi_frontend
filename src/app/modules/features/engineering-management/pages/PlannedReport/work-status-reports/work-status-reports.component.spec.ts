import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStatusReportsComponent } from './work-status-reports.component';

describe('WorkStatusReportsComponent', () => {
  let component: WorkStatusReportsComponent;
  let fixture: ComponentFixture<WorkStatusReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStatusReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkStatusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
