import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDocumentDataComponent } from './project-document-data.component';

describe('ProjectDocumentDataComponent', () => {
  let component: ProjectDocumentDataComponent;
  let fixture: ComponentFixture<ProjectDocumentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDocumentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDocumentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
