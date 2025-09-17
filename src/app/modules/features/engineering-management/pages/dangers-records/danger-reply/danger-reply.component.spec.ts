import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerReplyComponent } from './danger-reply.component';

describe('DangerReplyComponent', () => {
  let component: DangerReplyComponent;
  let fixture: ComponentFixture<DangerReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
