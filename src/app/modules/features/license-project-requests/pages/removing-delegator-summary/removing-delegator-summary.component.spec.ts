import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingDelegatorSummaryComponent } from './removing-delegator-summary.component';

describe('RemovingDelegatorSummaryComponent', () => {
  let component: RemovingDelegatorSummaryComponent;
  let fixture: ComponentFixture<RemovingDelegatorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovingDelegatorSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovingDelegatorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
