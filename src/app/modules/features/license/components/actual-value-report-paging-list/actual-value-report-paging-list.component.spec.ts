import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualValueReportPagingListComponent } from './actual-value-report-paging-list.component';

describe('ActualValueReportPagingListComponent', () => {
  let component: ActualValueReportPagingListComponent;
  let fixture: ComponentFixture<ActualValueReportPagingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualValueReportPagingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualValueReportPagingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
