import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingDelegatorMainDataDetailsComponent } from './removing-delegator-main-data-details.component';

describe('RemovingDelegatorMainDataDetailsComponent', () => {
  let component: RemovingDelegatorMainDataDetailsComponent;
  let fixture: ComponentFixture<RemovingDelegatorMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovingDelegatorMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovingDelegatorMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
