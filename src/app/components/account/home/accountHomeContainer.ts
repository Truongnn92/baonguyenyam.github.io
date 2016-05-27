import {Component} from '@angular/core';

@Component({
    selector: 'account-home',
    template: require('./templates/home.jade')()
})

export default class AccountHomeContainer {
    constructor() { }
}