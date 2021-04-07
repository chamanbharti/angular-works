import { TestBed } from '@angular/core/testing';

import { Course.ResolverService } from './course.resolver.service';

describe('Course.ResolverService', () => {
  let service: Course.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Course.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
