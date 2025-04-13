import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingDelegatorDetailsComponent } from './removing-delegator-details.component';

describe('RemovingDelegatorDetailsComponent', () => {
  let component: RemovingDelegatorDetailsComponent;
  let fixture: ComponentFixture<RemovingDelegatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovingDelegatorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovingDelegatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
