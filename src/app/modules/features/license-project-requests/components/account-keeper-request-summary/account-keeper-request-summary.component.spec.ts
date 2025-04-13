import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountKeeperRequestSummaryComponent } from './account-keeper-request-summary.component';

describe('AccountKeeperRequestSummaryComponent', () => {
  let component: AccountKeeperRequestSummaryComponent;
  let fixture: ComponentFixture<AccountKeeperRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountKeeperRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountKeeperRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
