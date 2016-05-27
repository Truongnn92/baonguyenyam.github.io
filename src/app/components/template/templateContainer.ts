import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {
  ACCORDION_DIRECTIVES,
  TAB_DIRECTIVES,
  DROPDOWN_DIRECTIVES
} from 'ng2-bootstrap/ng2-bootstrap';
import {Modal} from "ng2-modal";

import routesChild from './routesChild';
import {BaseController} from '../../directives/base.controller'

@Component({
  directives: [ACCORDION_DIRECTIVES, TAB_DIRECTIVES, DROPDOWN_DIRECTIVES, Modal],
  selector: 'TemplateContainer',
  template: require('./templates/template.jade')()
})

@RouteConfig(routesChild)
export default class TemplateContainer extends BaseController {
  private ComponentClass: any;
  private status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor() {
    super();
    this.status = {
      isFirstOpen: true
    };
  }
}



