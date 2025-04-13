import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingContactInfoComponent } from './adding-contact-info.component';

describe('AddingContactInfoComponent', () => {
  let component: AddingContactInfoComponent;
  let fixture: ComponentFixture<AddingContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingContactInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
