import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerLogComponent } from './danger-log.component';

describe('DangerLogComponent', () => {
  let component: DangerLogComponent;
  let fixture: ComponentFixture<DangerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
