import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDelegatorMainDataSummaryComponent } from './adding-delegator-main-data-summary.component';

describe('AddingDelegatorMainDataSummaryComponent', () => {
  let component: AddingDelegatorMainDataSummaryComponent;
  let fixture: ComponentFixture<AddingDelegatorMainDataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDelegatorMainDataSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingDelegatorMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
