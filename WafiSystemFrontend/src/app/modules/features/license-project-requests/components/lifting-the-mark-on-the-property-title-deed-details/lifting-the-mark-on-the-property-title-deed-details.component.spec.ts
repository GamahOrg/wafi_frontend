import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingTheMarkOnThePropertyTitleDeedDetailsComponent } from './lifting-the-mark-on-the-property-title-deed-details.component';

describe('LiftingTheMarkOnThePropertyTitleDeedDetailsComponent', () => {
  let component: LiftingTheMarkOnThePropertyTitleDeedDetailsComponent;
  let fixture: ComponentFixture<LiftingTheMarkOnThePropertyTitleDeedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftingTheMarkOnThePropertyTitleDeedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftingTheMarkOnThePropertyTitleDeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
