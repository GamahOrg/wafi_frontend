import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDelegatorSummaryComponent } from './adding-delegator-summary.component';

describe('AddingDelegatorSummaryComponent', () => {
  let component: AddingDelegatorSummaryComponent;
  let fixture: ComponentFixture<AddingDelegatorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDelegatorSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingDelegatorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
