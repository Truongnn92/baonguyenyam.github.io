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
import {Settings} from './settings.component';

describe('Settings', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Settings
  ]);

  it('should log ngOnInit', inject([ Settings ], (settings) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    settings.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
