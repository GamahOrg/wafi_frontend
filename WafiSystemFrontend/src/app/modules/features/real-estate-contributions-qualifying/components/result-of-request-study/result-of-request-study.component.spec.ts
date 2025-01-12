import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOfRequestStudyComponent } from './result-of-request-study.component';

describe('ResultOfRequestStudyComponent', () => {
  let component: ResultOfRequestStudyComponent;
  let fixture: ComponentFixture<ResultOfRequestStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultOfRequestStudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultOfRequestStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
