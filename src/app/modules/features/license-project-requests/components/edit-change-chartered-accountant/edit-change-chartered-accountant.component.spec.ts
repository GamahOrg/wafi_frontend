import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChangeCharteredAccountantComponent } from './edit-change-chartered-accountant.component';

describe('EditChangeCharteredAccountantComponent', () => {
  let component: EditChangeCharteredAccountantComponent;
  let fixture: ComponentFixture<EditChangeCharteredAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChangeCharteredAccountantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChangeCharteredAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
