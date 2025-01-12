import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksAndbuildingsAndunitsComponent } from './blocks-andbuildings-andunits.component';

describe('BlocksAndbuildingsAndunitsComponent', () => {
  let component: BlocksAndbuildingsAndunitsComponent;
  let fixture: ComponentFixture<BlocksAndbuildingsAndunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksAndbuildingsAndunitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksAndbuildingsAndunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
