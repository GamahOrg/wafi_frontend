import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTopbarComponent } from './auth-topbar.component';

describe('AuthTopbarComponent', () => {
  let component: AuthTopbarComponent;
  let fixture: ComponentFixture<AuthTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
