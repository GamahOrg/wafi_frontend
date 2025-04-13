import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WafiServiceComponent } from './wafi-service.component';

describe('WafiServiceComponent', () => {
  let component: WafiServiceComponent;
  let fixture: ComponentFixture<WafiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WafiServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WafiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
