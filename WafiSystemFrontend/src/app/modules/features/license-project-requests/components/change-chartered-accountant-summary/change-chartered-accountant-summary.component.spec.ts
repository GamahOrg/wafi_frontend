import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCharteredAccountantSummaryComponent } from './change-chartered-accountant-summary.component';

describe('ChangeCharteredAccountantSummaryComponent', () => {
  let component: ChangeCharteredAccountantSummaryComponent;
  let fixture: ComponentFixture<ChangeCharteredAccountantSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCharteredAccountantSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCharteredAccountantSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
