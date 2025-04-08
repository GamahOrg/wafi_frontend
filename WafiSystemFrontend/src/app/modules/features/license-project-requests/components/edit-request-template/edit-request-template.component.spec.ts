import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestTemplateComponent } from './edit-request-template.component';

describe('EditRequestTemplateComponent', () => {
  let component: EditRequestTemplateComponent;
  let fixture: ComponentFixture<EditRequestTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRequestTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRequestTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
