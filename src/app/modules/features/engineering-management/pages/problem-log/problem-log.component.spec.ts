import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemLogComponent } from './problem-log.component';

describe('ProblemLogComponent', () => {
  let component: ProblemLogComponent;
  let fixture: ComponentFixture<ProblemLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
