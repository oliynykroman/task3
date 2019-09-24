import { TestBed } from '@angular/core/testing';

import { QuizTransformService } from './quiz-transform.service';

describe('QuizTransformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizTransformService = TestBed.get(QuizTransformService);
    expect(service).toBeTruthy();
  });
});
