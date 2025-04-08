import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCharteredAccountantDetailsComponent } from './change-chartered-accountant-details.component';

describe('ChangeCharteredAccountantDetailsComponent', () => {
  let component: ChangeCharteredAccountantDetailsComponent;
  let fixture: ComponentFixture<ChangeCharteredAccountantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCharteredAccountantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCharteredAccountantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
