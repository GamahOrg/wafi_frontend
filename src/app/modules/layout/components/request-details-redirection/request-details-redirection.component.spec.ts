import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsRedirectionComponent } from './request-details-redirection.component';

describe('RequestDetailsRedirectionComponent', () => {
  let component: RequestDetailsRedirectionComponent;
  let fixture: ComponentFixture<RequestDetailsRedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDetailsRedirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDetailsRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
