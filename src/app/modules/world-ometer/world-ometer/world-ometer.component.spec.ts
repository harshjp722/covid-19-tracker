import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldOMeterComponent } from './world-ometer.component';

describe('WorldOMeterComponent', () => {
  let component: WorldOMeterComponent;
  let fixture: ComponentFixture<WorldOMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldOMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldOMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
