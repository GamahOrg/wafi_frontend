import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualProjectDetailsComponent } from './actual-project-details.component';

describe('ActualProjectDetailsComponent', () => {
  let component: ActualProjectDetailsComponent;
  let fixture: ComponentFixture<ActualProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
