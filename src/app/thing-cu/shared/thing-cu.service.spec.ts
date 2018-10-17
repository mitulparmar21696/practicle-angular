import { TestBed, inject } from '@angular/core/testing';

import { ThingCuService } from './thing-cu.service';

describe('ThingCuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThingCuService]
    });
  });

  it('should be created', inject([ThingCuService], (service: ThingCuService) => {
    expect(service).toBeTruthy();
  }));
});
