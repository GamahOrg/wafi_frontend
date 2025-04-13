import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangeCharteredAccountantRequestComponent } from './add-change-chartered-accountant-request.component';

describe('AddChangeCharteredAccountantRequestComponent', () => {
  let component: AddChangeCharteredAccountantRequestComponent;
  let fixture: ComponentFixture<AddChangeCharteredAccountantRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangeCharteredAccountantRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChangeCharteredAccountantRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
