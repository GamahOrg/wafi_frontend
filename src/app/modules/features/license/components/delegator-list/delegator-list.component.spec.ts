import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatorListComponent } from './delegator-list.component';

describe('DelegatorListComponent', () => {
  let component: DelegatorListComponent;
  let fixture: ComponentFixture<DelegatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegatorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelegatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
