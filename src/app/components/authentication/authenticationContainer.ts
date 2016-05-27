import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {
  ACCORDION_DIRECTIVES
} from 'ng2-bootstrap/ng2-bootstrap';

import routesChild from './routesChild';

@Component({
  directives: [ACCORDION_DIRECTIVES],
  selector: 'AuthenticationContainer',
  template: require('./templates/authentication.jade')()
})

@RouteConfig(routesChild)
export class AuthenticationContainer {
  public DisableBreadcrumb: boolean = true;
  private ComponentClass: any;
  private NAV_oneAtATime: boolean = true;
  private status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor() {
    this.NAV_oneAtATime = true;
    this.status = {
      isFirstOpen: true
    };
  }
}



