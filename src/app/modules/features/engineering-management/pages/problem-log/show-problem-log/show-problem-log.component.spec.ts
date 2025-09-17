import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProblemLogComponent } from './show-problem-log.component';

describe('ShowProblemLogComponent', () => {
  let component: ShowProblemLogComponent;
  let fixture: ComponentFixture<ShowProblemLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProblemLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProblemLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
