import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationProjectComponent } from './edit-qualification-project.component';

describe('EditQualificationProjectComponent', () => {
  let component: EditQualificationProjectComponent;
  let fixture: ComponentFixture<EditQualificationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualificationProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQualificationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
