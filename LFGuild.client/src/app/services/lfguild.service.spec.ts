import { TestBed, inject } from '@angular/core/testing';

import { LfguildService } from './lfguild.service';

describe('LfguildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LfguildService]
    });
  });

  it('should be created', inject([LfguildService], (service: LfguildService) => {
    expect(service).toBeTruthy();
  }));
});
