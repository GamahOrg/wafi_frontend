import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTemplateSummaryComponent } from './request-template-summary.component';

describe('RequestTemplateSummaryComponent', () => {
  let component: RequestTemplateSummaryComponent;
  let fixture: ComponentFixture<RequestTemplateSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTemplateSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTemplateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
