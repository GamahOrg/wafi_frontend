import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent } from './objection-to-supervision-and-followup-costs-request-details.component';

describe('ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent', () => {
  let component: ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent;
  let fixture: ComponentFixture<ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
