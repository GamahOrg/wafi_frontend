import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent } from './objection-to-supervision-and-followup-costs-request-summary.component';

describe('ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent', () => {
  let component: ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent;
  let fixture: ComponentFixture<ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
