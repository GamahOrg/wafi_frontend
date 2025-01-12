import { ComponentFixture, TestBed } from '@angular/core/testing';

import { delegatoractionsComponent } from './delegator-actions.component';

describe('delegatoractionsComponent', () => {
  let component: delegatoractionsComponent;
  let fixture: ComponentFixture<delegatoractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ delegatoractionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(delegatoractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
