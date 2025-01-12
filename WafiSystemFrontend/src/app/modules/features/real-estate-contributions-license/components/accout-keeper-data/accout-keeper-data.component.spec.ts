import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutKeeperDataComponent } from './accout-keeper-data.component';

describe('AccoutKeeperDataComponent', () => {
  let component: AccoutKeeperDataComponent;
  let fixture: ComponentFixture<AccoutKeeperDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutKeeperDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutKeeperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
