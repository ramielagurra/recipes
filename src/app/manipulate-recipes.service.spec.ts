import { TestBed } from '@angular/core/testing';

import { ManipulateRecipesService } from './manipulate-recipes.service';

describe('ManipulateRecipesService', () => {
  let service: ManipulateRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManipulateRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
