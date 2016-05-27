import {Component} from '@angular/core';

@Component({
  selector: 'ApiTemplateContainer',
  template: require('./templates/api.jade')()
})
export default class ApiTemplateContainer { }