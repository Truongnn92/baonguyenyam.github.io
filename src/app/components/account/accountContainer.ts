import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {
  ACCORDION_DIRECTIVES
} from 'ng2-bootstrap/ng2-bootstrap';

import routesChild from './routesChild';
import {BaseController} from '../../directives/base.controller'

@Component({
  directives: [ACCORDION_DIRECTIVES],
  selector: 'AccountContainer',
  template: require('./templates/account.jade')()
})

@RouteConfig(routesChild)
export class AccountContainer extends BaseController{
  public DisableBreadcrumb: boolean = true;
  private ComponentClass: any;
  private NAV_oneAtATime: boolean = true;
  private status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor() {
    super();
    this.NAV_oneAtATime = true;
    this.status = {
      isFirstOpen: true
    };
  }
}



