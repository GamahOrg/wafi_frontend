import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRemovingDelegatorRequestComponent } from './create-removing-delegator-request.component';

describe('CreateRemovingDelegatorRequestComponent', () => {
  let component: CreateRemovingDelegatorRequestComponent;
  let fixture: ComponentFixture<CreateRemovingDelegatorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRemovingDelegatorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRemovingDelegatorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
