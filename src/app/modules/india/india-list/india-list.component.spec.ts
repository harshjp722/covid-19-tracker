import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaListComponent } from './india-list.component';

describe('IndiaListComponent', () => {
  let component: IndiaListComponent;
  let fixture: ComponentFixture<IndiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
