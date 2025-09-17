import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActualValueWorkStatuesReportComponent } from './show-actual-value-work-statues-report.component';

describe('ShowActualValueWorkStatuesReportComponent', () => {
  let component: ShowActualValueWorkStatuesReportComponent;
  let fixture: ComponentFixture<ShowActualValueWorkStatuesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActualValueWorkStatuesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActualValueWorkStatuesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
