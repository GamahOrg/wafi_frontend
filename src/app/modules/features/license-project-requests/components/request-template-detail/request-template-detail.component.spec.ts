import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTemplateDetailComponent } from './request-template-detail.component';

describe('RequestTemplateDetailComponent', () => {
  let component: RequestTemplateDetailComponent;
  let fixture: ComponentFixture<RequestTemplateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTemplateDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTemplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
