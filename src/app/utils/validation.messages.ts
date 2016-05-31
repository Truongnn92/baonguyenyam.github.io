import { Component, Host } from '@angular/core';
import { NgFormModel } from '@angular/common';
import { Validation } from './validation';

@Component({
    selector: 'control-messages',
    inputs: ['controlName: control'],
    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessages {
    controlName: string;
    constructor( @Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        let c = this._formDir.form.find(this.controlName);

        for (let propertyName in c.errors) {
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                return Validation.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }
}