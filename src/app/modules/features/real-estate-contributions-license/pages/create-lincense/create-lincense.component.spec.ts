import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLincenseComponent } from './create-lincense.component';

describe('CreateLincenseComponent', () => {
  let component: CreateLincenseComponent;
  let fixture: ComponentFixture<CreateLincenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLincenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLincenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
