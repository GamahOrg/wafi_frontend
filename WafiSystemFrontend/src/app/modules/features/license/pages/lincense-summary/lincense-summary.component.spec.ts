import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincenseSummaryComponent } from './lincense-summary.component';

describe('LincenseSummaryComponent', () => {
  let component: LincenseSummaryComponent;
  let fixture: ComponentFixture<LincenseSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincenseSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LincenseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
