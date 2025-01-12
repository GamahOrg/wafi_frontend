import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraStructureComponent } from './infra-structure.component';

describe('InfraStructureComponent', () => {
  let component: InfraStructureComponent;
  let fixture: ComponentFixture<InfraStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
