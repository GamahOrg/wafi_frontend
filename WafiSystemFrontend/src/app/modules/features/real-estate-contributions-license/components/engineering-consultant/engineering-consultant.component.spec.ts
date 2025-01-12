import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringConsultantComponent } from './engineering-consultant.component';

describe('EngineeringConsultantComponent', () => {
  let component: EngineeringConsultantComponent;
  let fixture: ComponentFixture<EngineeringConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
