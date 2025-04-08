import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingDelegatorMainDataSummaryComponent } from './removing-delegator-main-data-summary.component';

describe('RemovingDelegatorMainDataSummaryComponent', () => {
  let component: RemovingDelegatorMainDataSummaryComponent;
  let fixture: ComponentFixture<RemovingDelegatorMainDataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovingDelegatorMainDataSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovingDelegatorMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
