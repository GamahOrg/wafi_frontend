import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProjectNameDetailsComponent } from './change-project-name-details.component';

describe('ChangeProjectNameDetailsComponent', () => {
  let component: ChangeProjectNameDetailsComponent;
  let fixture: ComponentFixture<ChangeProjectNameDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProjectNameDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeProjectNameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
