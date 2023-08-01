import { TestBed } from '@angular/core/testing';

import { ImgTemplateService } from './img-template.service';

describe('ImgTemplateService', () => {
  let service: ImgTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
