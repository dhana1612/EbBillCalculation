import { TestBed } from '@angular/core/testing';

import { EbBill1Service } from './eb-bill1.service';

describe('EbBill1Service', () => {
  let service: EbBill1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbBill1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
