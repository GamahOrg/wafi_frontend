import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsReportsComponent } from './complaints-reports.component';

describe('ComplaintsReportsComponent', () => {
  let component: ComplaintsReportsComponent;
  let fixture: ComponentFixture<ComplaintsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
