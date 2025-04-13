import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDelegatorMainDataDetailsComponent } from './adding-delegator-main-data-details.component';

describe('AddingDelegatorMainDataDetailsComponent', () => {
  let component: AddingDelegatorMainDataDetailsComponent;
  let fixture: ComponentFixture<AddingDelegatorMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDelegatorMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingDelegatorMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
