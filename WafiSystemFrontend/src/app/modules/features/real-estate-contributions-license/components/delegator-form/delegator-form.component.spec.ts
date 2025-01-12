import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatorFormComponent } from './delegator-form.component';

describe('DelegatorFormComponent', () => {
  let component: DelegatorFormComponent;
  let fixture: ComponentFixture<DelegatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegatorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelegatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
