import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjectionToSupervisionAndFollowupCostsComponent } from './edit-objection-to-supervision-and-followup-costs.component';

describe('EditObjectionToSupervisionAndFollowupCostsComponent', () => {
  let component: EditObjectionToSupervisionAndFollowupCostsComponent;
  let fixture: ComponentFixture<EditObjectionToSupervisionAndFollowupCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditObjectionToSupervisionAndFollowupCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditObjectionToSupervisionAndFollowupCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
