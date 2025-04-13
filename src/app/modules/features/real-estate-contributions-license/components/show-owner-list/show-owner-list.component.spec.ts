import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOwnerListComponent } from './show-owner-list.component';

describe('ShowOwnerListComponent', () => {
  let component: ShowOwnerListComponent;
  let fixture: ComponentFixture<ShowOwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOwnerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
