import { TestBed } from '@angular/core/testing';

import { HistoCarbService } from './histo-carb.service';

describe('HistoCarbService', () => {
  let service: HistoCarbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoCarbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
