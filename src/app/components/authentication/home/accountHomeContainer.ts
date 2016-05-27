import {Component} from '@angular/core';

@Component({
    selector: 'authentication-home',
    template: require('./templates/authenticationHome.jade')()
})

export default class AuthenticationHomeContainer {
    constructor() { }
}