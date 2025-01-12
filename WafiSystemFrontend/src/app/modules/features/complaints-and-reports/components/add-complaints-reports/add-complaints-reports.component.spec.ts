import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintsReportsComponent } from './add-complaints-reports.component';

describe('AddComplaintsReportsComponent', () => {
  let component: AddComplaintsReportsComponent;
  let fixture: ComponentFixture<AddComplaintsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplaintsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComplaintsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
