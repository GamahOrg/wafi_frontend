import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionToSupervisionAndFollowupCostsDetailsComponent } from './objection-to-supervision-and-followup-costs-details.component';

describe('ObjectionToSupervisionAndFollowupCostsDetailsComponent', () => {
  let component: ObjectionToSupervisionAndFollowupCostsDetailsComponent;
  let fixture: ComponentFixture<ObjectionToSupervisionAndFollowupCostsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectionToSupervisionAndFollowupCostsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectionToSupervisionAndFollowupCostsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
