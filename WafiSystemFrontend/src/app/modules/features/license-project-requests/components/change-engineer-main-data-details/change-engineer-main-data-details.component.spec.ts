import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEngineerMainDataDetailsComponent } from './change-engineer-main-data-details.component';

describe('ChangeEngineerMainDataDetailsComponent', () => {
  let component: ChangeEngineerMainDataDetailsComponent;
  let fixture: ComponentFixture<ChangeEngineerMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEngineerMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEngineerMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
