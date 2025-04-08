import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePartiesAgreementSummaryComponent } from './change-parties-agreement-summary.component';

describe('ChangePartiesAgreementSummaryComponent', () => {
  let component: ChangePartiesAgreementSummaryComponent;
  let fixture: ComponentFixture<ChangePartiesAgreementSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePartiesAgreementSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePartiesAgreementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
