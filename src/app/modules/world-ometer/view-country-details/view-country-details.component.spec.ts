import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountryDetailsComponent } from './view-country-details.component';

describe('ViewCountryDetailsComponent', () => {
  let component: ViewCountryDetailsComponent;
  let fixture: ComponentFixture<ViewCountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCountryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
