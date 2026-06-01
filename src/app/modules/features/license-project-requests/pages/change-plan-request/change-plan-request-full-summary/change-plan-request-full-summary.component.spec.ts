import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePlanRequestFullSummaryComponent } from './change-plan-request-full-summary.component';

describe('ChangePlanRequestFullSummaryComponent', () => {
  let component: ChangePlanRequestFullSummaryComponent;
  let fixture: ComponentFixture<ChangePlanRequestFullSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePlanRequestFullSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePlanRequestFullSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
