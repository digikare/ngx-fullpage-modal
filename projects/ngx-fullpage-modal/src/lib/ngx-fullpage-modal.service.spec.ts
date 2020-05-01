import { TestBed } from '@angular/core/testing';

import { NgxFullpageModalService } from './ngx-fullpage-modal.service';

describe('NgxFullpageModalService', () => {
  let service: NgxFullpageModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFullpageModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
