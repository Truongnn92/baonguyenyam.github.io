import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {Plan} from './plan.component';

describe('Plan', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Plan
  ]);

  it('should log ngOnInit', inject([Plan], (plan) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    plan.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
