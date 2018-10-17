import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingCuLandingComponent } from './thing-cu-landing.component';

describe('ThingCuLandingComponent', () => {
  let component: ThingCuLandingComponent;
  let fixture: ComponentFixture<ThingCuLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingCuLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingCuLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
