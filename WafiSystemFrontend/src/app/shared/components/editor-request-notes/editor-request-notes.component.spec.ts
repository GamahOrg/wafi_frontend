import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorRequestNotesComponent } from './editor-request-notes.component';

describe('EditorRequestNotesComponent', () => {
  let component: EditorRequestNotesComponent;
  let fixture: ComponentFixture<EditorRequestNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorRequestNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorRequestNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
