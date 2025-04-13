import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfContractualComponent } from './end-of-contractual.component';

describe('EndOfContractualComponent', () => {
  let component: EndOfContractualComponent;
  let fixture: ComponentFixture<EndOfContractualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfContractualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndOfContractualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
