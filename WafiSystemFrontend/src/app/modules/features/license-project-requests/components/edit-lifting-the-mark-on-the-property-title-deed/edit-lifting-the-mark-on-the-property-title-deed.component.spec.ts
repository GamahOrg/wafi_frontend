import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLiftingTheMarkOnThePropertyTitleDeedComponent } from './edit-lifting-the-mark-on-the-property-title-deed.component';

describe('EditLiftingTheMarkOnThePropertyTitleDeedComponent', () => {
  let component: EditLiftingTheMarkOnThePropertyTitleDeedComponent;
  let fixture: ComponentFixture<EditLiftingTheMarkOnThePropertyTitleDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLiftingTheMarkOnThePropertyTitleDeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLiftingTheMarkOnThePropertyTitleDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
