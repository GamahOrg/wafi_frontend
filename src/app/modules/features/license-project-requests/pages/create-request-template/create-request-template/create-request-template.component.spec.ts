import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestTemplateComponent } from './create-request-template.component';

describe('CreateRequestTemplateComponent', () => {
  let component: CreateRequestTemplateComponent;
  let fixture: ComponentFixture<CreateRequestTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRequestTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRequestTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
