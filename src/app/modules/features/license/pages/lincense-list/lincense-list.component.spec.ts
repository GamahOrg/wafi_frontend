import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincenseListComponent } from './lincense-list.component';

describe('LincenseListComponent', () => {
  let component: LincenseListComponent;
  let fixture: ComponentFixture<LincenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincenseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LincenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
