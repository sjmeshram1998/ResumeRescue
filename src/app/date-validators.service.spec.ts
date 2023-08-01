import { TestBed } from '@angular/core/testing';

import { DateValidatorsService } from './date-validators.service';

describe('DateValidatorsService', () => {
  let service: DateValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
