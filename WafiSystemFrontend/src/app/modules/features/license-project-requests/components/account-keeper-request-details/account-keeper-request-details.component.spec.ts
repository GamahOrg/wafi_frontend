import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountKeeperRequestDetailsComponent } from './account-keeper-request-details.component';

describe('AccountKeeperRequestDetailsComponent', () => {
  let component: AccountKeeperRequestDetailsComponent;
  let fixture: ComponentFixture<AccountKeeperRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountKeeperRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountKeeperRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
