import {Component} from '@angular/core';
import {ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

/*
* We're loading this component asynchronously
* We are using some magic with es6-promise-loader that will wrap the module with a Promise
* see https://github.com/gdi2290/es6-promise-loader for more info
*/

@Component({
  selector: 'plan',
  directives: [
    ACCORDION_DIRECTIVES
  ],
  template: require('./templates/plan.jade')()
})

export class Plan {
  private DisableBreadcrumb: boolean = true;
  private ComponentClass: any;
  private NAV_oneAtATime: boolean = true;
  private status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor() { }

  ngOnInit() {
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}
