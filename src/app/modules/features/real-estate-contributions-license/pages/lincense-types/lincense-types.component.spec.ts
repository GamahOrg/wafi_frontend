import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincenseTypesComponent } from './lincense-types.component';

describe('LincenseTypesComponent', () => {
  let component: LincenseTypesComponent;
  let fixture: ComponentFixture<LincenseTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincenseTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LincenseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
