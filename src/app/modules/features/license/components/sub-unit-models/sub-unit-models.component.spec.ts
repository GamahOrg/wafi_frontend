import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUnitModelsComponent } from './sub-unit-models.component';

describe('SubUnitModelsComponent', () => {
  let component: SubUnitModelsComponent;
  let fixture: ComponentFixture<SubUnitModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubUnitModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubUnitModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
