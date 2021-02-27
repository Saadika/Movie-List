import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ApiSharedService } from './api-shared.service';

describe('ApiSharedService', () => {
  let service: ApiSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
