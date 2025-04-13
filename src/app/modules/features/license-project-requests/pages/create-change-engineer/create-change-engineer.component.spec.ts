import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangeEngineerComponent } from './create-change-engineer.component';

describe('CreateChangeEngineerComponent', () => {
  let component: CreateChangeEngineerComponent;
  let fixture: ComponentFixture<CreateChangeEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChangeEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChangeEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
