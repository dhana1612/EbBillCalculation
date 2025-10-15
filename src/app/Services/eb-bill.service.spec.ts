import { TestBed } from '@angular/core/testing';

import { EbBillService } from './eb-bill.service';

describe('EbBillService', () => {
  let service: EbBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
