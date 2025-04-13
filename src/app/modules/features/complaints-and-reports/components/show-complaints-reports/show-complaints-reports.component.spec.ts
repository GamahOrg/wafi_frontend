import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComplaintsReportsComponent } from './show-complaints-reports.component';

describe('ShowComplaintsReportsComponent', () => {
  let component: ShowComplaintsReportsComponent;
  let fixture: ComponentFixture<ShowComplaintsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowComplaintsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowComplaintsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
