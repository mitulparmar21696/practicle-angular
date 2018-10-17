import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingCuFormComponent } from './thing-cu-form.component';

describe('ThingCuFormComponent', () => {
  let component: ThingCuFormComponent;
  let fixture: ComponentFixture<ThingCuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingCuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingCuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
