import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProjectExpectedIncomeComponent } from './list-of-project-expected-income.component';

describe('ListOfProjectExpectedIncomeComponent', () => {
  let component: ListOfProjectExpectedIncomeComponent;
  let fixture: ComponentFixture<ListOfProjectExpectedIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfProjectExpectedIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfProjectExpectedIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
