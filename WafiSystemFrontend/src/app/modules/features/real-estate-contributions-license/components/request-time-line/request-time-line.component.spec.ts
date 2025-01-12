import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTimeLineComponent } from './request-time-line.component';

describe('RequestTimeLineComponent', () => {
  let component: RequestTimeLineComponent;
  let fixture: ComponentFixture<RequestTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
