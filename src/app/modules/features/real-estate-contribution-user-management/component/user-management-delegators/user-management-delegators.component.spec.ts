import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementDelegatorsComponent } from './user-management-delegators.component';

describe('UserManagementDelegatorsComponent', () => {
  let component: UserManagementDelegatorsComponent;
  let fixture: ComponentFixture<UserManagementDelegatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementDelegatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementDelegatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
