import { TestBed } from '@angular/core/testing';

import { NasaClientService } from './nasa-client.service';

describe('NasaClientService', () => {
  let service: NasaClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
