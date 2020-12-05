import { TestBed } from '@angular/core/testing';

import { NasaClientService } from './nasa-client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DatePipe} from '@angular/common';

describe('NasaClientService', () => {
  let service: NasaClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatePipe]
    });
    service = TestBed.inject(NasaClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
