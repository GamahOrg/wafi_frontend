/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddInfrastructureRatesComponent } from './add-infrastructure-rates.component';

describe('AddInfrastructureRatesComponent', () => {
  let component: AddInfrastructureRatesComponent;
  let fixture: ComponentFixture<AddInfrastructureRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfrastructureRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfrastructureRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
