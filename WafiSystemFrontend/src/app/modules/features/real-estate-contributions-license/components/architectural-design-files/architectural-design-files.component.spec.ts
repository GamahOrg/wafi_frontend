import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalDesignFilesComponent } from './architectural-design-files.component';

describe('ArchitecturalDesignFilesComponent', () => {
  let component: ArchitecturalDesignFilesComponent;
  let fixture: ComponentFixture<ArchitecturalDesignFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturalDesignFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitecturalDesignFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
