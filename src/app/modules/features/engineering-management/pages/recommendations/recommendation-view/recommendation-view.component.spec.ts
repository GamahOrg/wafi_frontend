import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationViewComponent } from './recommendation-view.component';

describe('RecommendationViewComponent', () => {
  let component: RecommendationViewComponent;
  let fixture: ComponentFixture<RecommendationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
