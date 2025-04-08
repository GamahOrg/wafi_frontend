import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDelegatorDetailsComponent } from './adding-delegator-details.component';

describe('AddingDelegatorDetailsComponent', () => {
  let component: AddingDelegatorDetailsComponent;
  let fixture: ComponentFixture<AddingDelegatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDelegatorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingDelegatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
