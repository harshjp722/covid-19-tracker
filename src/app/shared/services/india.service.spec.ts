import { TestBed } from '@angular/core/testing';

import { IndiaService } from './india.service';

describe('IndiaService', () => {
  let service: IndiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
