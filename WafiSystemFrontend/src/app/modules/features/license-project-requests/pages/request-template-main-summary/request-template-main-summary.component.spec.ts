import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTemplateMainSummaryComponent } from './request-template-main-summary.component';

describe('RequestTemplateMainSummaryComponent', () => {
  let component: RequestTemplateMainSummaryComponent;
  let fixture: ComponentFixture<RequestTemplateMainSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTemplateMainSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTemplateMainSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
