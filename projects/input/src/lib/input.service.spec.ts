import { TestBed } from '@angular/core/testing';

import { InputService } from './input.service';

describe('InputService', () => {
  let service: InputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(InputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
