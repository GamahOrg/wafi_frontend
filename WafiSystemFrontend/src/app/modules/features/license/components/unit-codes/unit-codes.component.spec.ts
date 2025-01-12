import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCodesComponent } from './unit-codes.component';

describe('UnitCodesComponent', () => {
  let component: UnitCodesComponent;
  let fixture: ComponentFixture<UnitCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
