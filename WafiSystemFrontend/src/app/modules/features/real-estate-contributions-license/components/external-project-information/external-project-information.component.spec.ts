import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalProjectInformationComponent } from './external-project-information.component';

describe('ExternalProjectInformationComponent', () => {
  let component: ExternalProjectInformationComponent;
  let fixture: ComponentFixture<ExternalProjectInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalProjectInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalProjectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
