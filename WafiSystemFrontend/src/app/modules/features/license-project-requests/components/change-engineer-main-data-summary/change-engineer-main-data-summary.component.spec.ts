import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEngineerMainDataSummaryComponent } from './change-engineer-main-data-summary.component';

describe('ChangeEngineerMainDataSummaryComponent', () => {
  let component: ChangeEngineerMainDataSummaryComponent;
  let fixture: ComponentFixture<ChangeEngineerMainDataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEngineerMainDataSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEngineerMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
