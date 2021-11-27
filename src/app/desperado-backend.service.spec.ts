import { TestBed } from '@angular/core/testing';

import { DesperadoBackendService } from './desperado-backend.service';

describe('DesperadoBackendService', () => {
  let service: DesperadoBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesperadoBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
