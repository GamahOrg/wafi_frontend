import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualValueReportContainerComponent } from './actual-value-report-container.component';

describe('ActualValueReportContainerComponent', () => {
  let component: ActualValueReportContainerComponent;
  let fixture: ComponentFixture<ActualValueReportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualValueReportContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualValueReportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
