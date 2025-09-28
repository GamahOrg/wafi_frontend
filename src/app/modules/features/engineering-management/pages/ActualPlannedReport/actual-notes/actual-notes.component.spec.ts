import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualNotesComponent } from './actual-notes.component';

describe('ActualNotesComponent', () => {
  let component: ActualNotesComponent;
  let fixture: ComponentFixture<ActualNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
