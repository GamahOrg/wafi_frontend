import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddingDelegatorRequestComponent } from './create-adding-delegator-request.component';

describe('CreateAddingDelegatorRequestComponent', () => {
  let component: CreateAddingDelegatorRequestComponent;
  let fixture: ComponentFixture<CreateAddingDelegatorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAddingDelegatorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAddingDelegatorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
