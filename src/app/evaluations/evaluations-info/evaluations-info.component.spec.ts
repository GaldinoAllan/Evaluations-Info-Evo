import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsInfoComponent } from './evaluations-info.component';

describe('EvaluationsInfoComponent', () => {
  let component: EvaluationsInfoComponent;
  let fixture: ComponentFixture<EvaluationsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
