import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaDetailsComponent } from './india-details.component';

describe('IndiaDetailsComponent', () => {
  let component: IndiaDetailsComponent;
  let fixture: ComponentFixture<IndiaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
