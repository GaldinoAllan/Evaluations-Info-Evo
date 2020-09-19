import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveEvaluationsInfoComponent } from './last-five-evaluations-info.component';

describe('LastFiveEvaluationsInfoComponent', () => {
  let component: LastFiveEvaluationsInfoComponent;
  let fixture: ComponentFixture<LastFiveEvaluationsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFiveEvaluationsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFiveEvaluationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
