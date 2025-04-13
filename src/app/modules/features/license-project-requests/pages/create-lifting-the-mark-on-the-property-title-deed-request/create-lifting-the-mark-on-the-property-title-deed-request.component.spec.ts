import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent } from './create-lifting-the-mark-on-the-property-title-deed-request.component';

describe('CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent', () => {
  let component: CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent;
  let fixture: ComponentFixture<CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
