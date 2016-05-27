import {Component} from '@angular/core';
import {TAB_DIRECTIVES, DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Modal} from "ng2-modal";
@Component({
  selector: 'TableTemplateContainer',
  directives: [
    TAB_DIRECTIVES,
    DROPDOWN_DIRECTIVES,
    Modal
  ],
  template: require('./templates/table.jade')()
})
export default class TableTemplateContainer { }