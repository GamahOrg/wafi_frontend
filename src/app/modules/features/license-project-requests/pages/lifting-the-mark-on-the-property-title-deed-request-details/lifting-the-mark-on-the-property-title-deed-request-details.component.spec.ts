import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent } from './lifting-the-mark-on-the-property-title-deed-request-details.component';

describe('LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent', () => {
  let component: LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent;
  let fixture: ComponentFixture<LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
