import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedOwnersListComponent } from './deed-owners-list.component';

describe('DeedOwnersListComponent', () => {
  let component: DeedOwnersListComponent;
  let fixture: ComponentFixture<DeedOwnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeedOwnersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedOwnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
