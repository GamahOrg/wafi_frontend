import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClearanceAccountComponent } from './update-clearance-account.component';

describe('UpdateClearanceAccountComponent', () => {
  let component: UpdateClearanceAccountComponent;
  let fixture: ComponentFixture<UpdateClearanceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClearanceAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClearanceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
