import { TestBed } from '@angular/core/testing';

import { SimpleSnackBarService } from './simple-snack-bar.service';

describe('SimpleSnackBarService', () => {
  let service: SimpleSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
