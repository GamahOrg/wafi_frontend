import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateLincenseComponent } from './employee-create-lincense.component';

describe('EmployeeCreateLincenseComponent', () => {
  let component: EmployeeCreateLincenseComponent;
  let fixture: ComponentFixture<EmployeeCreateLincenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreateLincenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateLincenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
