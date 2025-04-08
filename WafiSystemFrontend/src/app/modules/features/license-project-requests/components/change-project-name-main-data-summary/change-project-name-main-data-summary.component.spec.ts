import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProjectNameMainDataSummaryComponent } from './change-project-name-main-data-summary.component';

describe('ChangeProjectNameMainDataSummaryComponent', () => {
  let component: ChangeProjectNameMainDataSummaryComponent;
  let fixture: ComponentFixture<ChangeProjectNameMainDataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProjectNameMainDataSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeProjectNameMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
