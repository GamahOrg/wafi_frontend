import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDangerLogComponent } from './show-danger-log.component';

describe('ShowDangerLogComponent', () => {
  let component: ShowDangerLogComponent;
  let fixture: ComponentFixture<ShowDangerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDangerLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDangerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
