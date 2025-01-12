import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorRequestNotesOnlyComponent } from './editor-request-notes-only.component';

describe('EditorRequestNotesOnlyComponent', () => {
  let component: EditorRequestNotesOnlyComponent;
  let fixture: ComponentFixture<EditorRequestNotesOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorRequestNotesOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorRequestNotesOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
