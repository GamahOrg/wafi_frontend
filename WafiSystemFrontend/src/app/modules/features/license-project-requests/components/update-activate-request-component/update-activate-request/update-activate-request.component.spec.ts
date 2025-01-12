import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivateRequestComponent } from './update-activate-request.component';

describe('UpdateActivateRequestComponent', () => {
  let component: UpdateActivateRequestComponent;
  let fixture: ComponentFixture<UpdateActivateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActivateRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActivateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
