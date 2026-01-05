import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectingUnitsListComponent } from './correcting-units-list.component';

describe('CorrectingUnitsListComponent', () => {
  let component: CorrectingUnitsListComponent;
  let fixture: ComponentFixture<CorrectingUnitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectingUnitsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectingUnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
