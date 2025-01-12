import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCodesFormComponent } from './unit-codes-form.component';

describe('UnitCodesFormComponent', () => {
  let component: UnitCodesFormComponent;
  let fixture: ComponentFixture<UnitCodesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitCodesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitCodesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
