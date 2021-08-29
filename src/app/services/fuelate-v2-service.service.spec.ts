import { TestBed } from '@angular/core/testing';

import { FuelateV2ServiceService } from './fuelate-v2-service.service';

describe('FuelateV2ServiceService', () => {
  let service: FuelateV2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelateV2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
