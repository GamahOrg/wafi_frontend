import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemReplyComponent } from './problem-reply.component';

describe('ProblemReplyComponent', () => {
  let component: ProblemReplyComponent;
  let fixture: ComponentFixture<ProblemReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
