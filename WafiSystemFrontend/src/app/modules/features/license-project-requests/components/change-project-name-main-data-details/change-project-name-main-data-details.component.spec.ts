import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProjectNameMainDataDetailsComponent } from './change-project-name-main-data-details.component';

describe('ChangeProjectNameMainDataDetailsComponent', () => {
  let component: ChangeProjectNameMainDataDetailsComponent;
  let fixture: ComponentFixture<ChangeProjectNameMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProjectNameMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeProjectNameMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
