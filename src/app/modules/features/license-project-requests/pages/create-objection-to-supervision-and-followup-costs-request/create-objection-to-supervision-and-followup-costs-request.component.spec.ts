import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObjectionToSupervisionAndFollowupCostsRequestComponent } from './create-objection-to-supervision-and-followup-costs-request.component';

describe('CreateObjectionToSupervisionAndFollowupCostsRequestComponent', () => {
  let component: CreateObjectionToSupervisionAndFollowupCostsRequestComponent;
  let fixture: ComponentFixture<CreateObjectionToSupervisionAndFollowupCostsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateObjectionToSupervisionAndFollowupCostsRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateObjectionToSupervisionAndFollowupCostsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
