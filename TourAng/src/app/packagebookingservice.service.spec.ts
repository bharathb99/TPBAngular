import { TestBed } from '@angular/core/testing';

import { PackagebookingserviceService } from './packagebookingservice.service';

describe('PackagebookingserviceService', () => {
  let service: PackagebookingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagebookingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
