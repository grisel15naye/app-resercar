import { TestBed } from '@angular/core/testing';

import { SedesService } from './SedesService';

describe('SedesService', () => {
  let service: SedesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
