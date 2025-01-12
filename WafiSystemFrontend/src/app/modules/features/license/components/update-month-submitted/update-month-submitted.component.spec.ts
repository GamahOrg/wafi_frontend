import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonthSubmittedComponent } from './update-month-submitted.component';

describe('UpdateMonthSubmittedComponent', () => {
  let component: UpdateMonthSubmittedComponent;
  let fixture: ComponentFixture<UpdateMonthSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMonthSubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMonthSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
