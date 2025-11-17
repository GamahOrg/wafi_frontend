import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsLogsListComponent } from './recommendations-logs-list.component';

describe('RecommendationsLogsListComponent', () => {
  let component: RecommendationsLogsListComponent;
  let fixture: ComponentFixture<RecommendationsLogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationsLogsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
