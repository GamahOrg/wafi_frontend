import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEventsLogComponent } from './request-events-log.component';

describe('RequestEventsLogComponent', () => {
  let component: RequestEventsLogComponent;
  let fixture: ComponentFixture<RequestEventsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEventsLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestEventsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
