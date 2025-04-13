import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectBusinessCaseComponent } from './show-project-business-case.component';

describe('ShowProjectBusinessCaseComponent', () => {
  let component: ShowProjectBusinessCaseComponent;
  let fixture: ComponentFixture<ShowProjectBusinessCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProjectBusinessCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProjectBusinessCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
