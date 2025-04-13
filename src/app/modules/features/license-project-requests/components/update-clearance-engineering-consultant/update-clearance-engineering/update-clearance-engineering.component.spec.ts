import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClearanceEngineeringComponent } from './update-clearance-engineering.component';

describe('UpdateClearanceEngineeringComponent', () => {
  let component: UpdateClearanceEngineeringComponent;
  let fixture: ComponentFixture<UpdateClearanceEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClearanceEngineeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClearanceEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
