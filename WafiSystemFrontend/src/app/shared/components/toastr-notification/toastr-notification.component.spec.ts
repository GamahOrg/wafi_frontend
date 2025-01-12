import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrNotificationComponent } from './toastr-notification.component';

describe('ToastrNotificationComponent', () => {
  let component: ToastrNotificationComponent;
  let fixture: ComponentFixture<ToastrNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastrNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
