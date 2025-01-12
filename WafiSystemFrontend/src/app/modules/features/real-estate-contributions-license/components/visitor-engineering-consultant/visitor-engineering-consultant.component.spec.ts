import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEngineeringConsultantComponent } from './visitor-engineering-consultant.component';

describe('VisitorEngineeringConsultantComponent', () => {
  let component: VisitorEngineeringConsultantComponent;
  let fixture: ComponentFixture<VisitorEngineeringConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorEngineeringConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorEngineeringConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
