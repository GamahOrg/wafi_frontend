import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionersComponent } from './delegators.component';

describe('CommissionersComponent', () => {
  let component: CommissionersComponent;
  let fixture: ComponentFixture<CommissionersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
