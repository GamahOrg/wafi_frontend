import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRealStateDeveloperComponent } from './main-real-state-developer.component';

describe('MainRealStateDeveloperComponent', () => {
  let component: MainRealStateDeveloperComponent;
  let fixture: ComponentFixture<MainRealStateDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRealStateDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRealStateDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
