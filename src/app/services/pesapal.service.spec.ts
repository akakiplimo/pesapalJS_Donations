import { TestBed } from '@angular/core/testing';

import { PesapalService } from './pesapal.service';

describe('PesapalService', () => {
  let service: PesapalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesapalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
