import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTemplateDetailsComponent } from './request-template-details.component';

describe('RequestTemplateDetailsComponent', () => {
  let component: RequestTemplateDetailsComponent;
  let fixture: ComponentFixture<RequestTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTemplateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
