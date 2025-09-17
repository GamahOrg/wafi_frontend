import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCompletionAndEmploymentRatesComponent } from './add-edit-completion-and-employment-rates.component';

describe('AddEditCompletionAndEmploymentRatesComponent', () => {
  let component: AddEditCompletionAndEmploymentRatesComponent;
  let fixture: ComponentFixture<AddEditCompletionAndEmploymentRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCompletionAndEmploymentRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCompletionAndEmploymentRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
