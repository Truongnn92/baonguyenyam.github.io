import {Component} from '@angular/core';

@Component({
  selector: 'FormTemplateContainer',
  template: require('./templates/form.jade')()
})
export default class FormTemplateContainer { }