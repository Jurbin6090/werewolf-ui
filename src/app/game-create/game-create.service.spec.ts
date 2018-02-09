import { TestBed, inject } from '@angular/core/testing';

import { GameCreateService } from './game-create.service';

describe('GameCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCreateService]
    });
  });

  it('should be created', inject([GameCreateService], (service: GameCreateService) => {
    expect(service).toBeTruthy();
  }));
});
