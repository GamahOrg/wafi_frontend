import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountKeeperRequestComponent } from './update-account-keeper-request.component';

describe('UpdateAccountKeeperRequestComponent', () => {
  let component: UpdateAccountKeeperRequestComponent;
  let fixture: ComponentFixture<UpdateAccountKeeperRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountKeeperRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountKeeperRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
