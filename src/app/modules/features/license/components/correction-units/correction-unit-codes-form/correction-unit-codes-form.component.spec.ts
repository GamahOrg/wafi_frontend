import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionUnitCodesFormComponent } from './correction-unit-codes-form.component';

describe('CorrectionUnitCodesFormComponent', () => {
  let component: CorrectionUnitCodesFormComponent;
  let fixture: ComponentFixture<CorrectionUnitCodesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionUnitCodesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionUnitCodesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
