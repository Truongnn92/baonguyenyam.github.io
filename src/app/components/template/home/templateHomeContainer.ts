import {Component} from '@angular/core';
import {
    ACCORDION_DIRECTIVES,
    TAB_DIRECTIVES,
    DROPDOWN_DIRECTIVES
} from 'ng2-bootstrap/ng2-bootstrap';
import {Modal} from "ng2-modal";
@Component({
    selector: 'account-home',
    directives: [ACCORDION_DIRECTIVES, TAB_DIRECTIVES, DROPDOWN_DIRECTIVES, Modal],
    template: require('./templates/home.jade')()
})

export default class TemplateHomeContainer {
    private ComponentClass: any;
    constructor() { }
}