import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewQualifyingListComponent } from './renew-qualifying-list.component';

describe('RenewQualifyingListComponent', () => {
  let component: RenewQualifyingListComponent;
  let fixture: ComponentFixture<RenewQualifyingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewQualifyingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewQualifyingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
