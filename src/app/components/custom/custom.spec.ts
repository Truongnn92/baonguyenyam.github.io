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
import {Custom} from './custom.component';

describe('Hero', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Custom
  ]);
  
  it('has name', () => {
    let hero: Hero = {id: 1, name: 'Super Cat'};
    expect(hero.name).toEqual('Super Cat');
  });

  it('should log ngOnInit', inject([ Custom ], (custom) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    console.log('ss')
    custom.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});


export class Hero {
  id: number;
  name: string;
}