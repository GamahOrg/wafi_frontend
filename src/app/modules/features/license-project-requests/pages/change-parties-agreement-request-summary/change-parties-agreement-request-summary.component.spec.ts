import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePartiesAgreementRequestSummaryComponent } from './change-parties-agreement-request-summary.component';

describe('ChangePartiesAgreementRequestSummaryComponent', () => {
  let component: ChangePartiesAgreementRequestSummaryComponent;
  let fixture: ComponentFixture<ChangePartiesAgreementRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePartiesAgreementRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePartiesAgreementRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
