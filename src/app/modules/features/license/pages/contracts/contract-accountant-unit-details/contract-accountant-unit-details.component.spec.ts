import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAccountantUnitDetailsComponent } from './contract-accountant-unit-details.component';

describe('ContractAccountantUnitDetailsComponent', () => {
  let component: ContractAccountantUnitDetailsComponent;
  let fixture: ComponentFixture<ContractAccountantUnitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractAccountantUnitDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractAccountantUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
