import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent } from './position-of-the-required-appropriations-from-the-authorities.component';

describe('PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent', () => {
  let component: PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent;
  let fixture: ComponentFixture<PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
