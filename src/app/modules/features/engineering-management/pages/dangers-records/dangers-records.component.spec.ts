import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangersRecordsComponent } from './dangers-records.component';

describe('DangersRecordsComponent', () => {
  let component: DangersRecordsComponent;
  let fixture: ComponentFixture<DangersRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangersRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangersRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
