import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
