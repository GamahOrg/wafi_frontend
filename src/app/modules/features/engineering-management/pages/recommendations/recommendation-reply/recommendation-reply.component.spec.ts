import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationReplyComponent } from './recommendation-reply.component';

describe('RecommendationReplyComponent', () => {
  let component: RecommendationReplyComponent;
  let fixture: ComponentFixture<RecommendationReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
