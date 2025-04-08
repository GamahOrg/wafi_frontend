import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEngineerDetailsComponent } from './change-engineer-details.component';

describe('ChangeEngineerDetailsComponent', () => {
  let component: ChangeEngineerDetailsComponent;
  let fixture: ComponentFixture<ChangeEngineerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEngineerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEngineerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
