import {Component} from '@angular/core';
import {ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { ControlMessages } from '../../utils/validation.messages';
import { FormBuilder, Validators, NgFormModel } from '@angular/common';
import { Validation } from '../../utils/validation';
import { Export2CSV } from '../../utils/export2csv';
/*
* We're loading this component asynchronously
* We are using some magic with es6-promise-loader that will wrap the module with a Promise
* see https://github.com/gdi2290/es6-promise-loader for more info
*/

@Component({
  selector: 'demo-app',
  directives: [
    ControlMessages
  ],
  providers: [
    NgFormModel
  ],
  template: require('./templates/custom.jade')()
})

export class Custom {
  userForm: any;
  constructor(private _formBuilder: FormBuilder) {
    this.userForm = this._formBuilder.group({
      'name': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validation.passwordValidator])],
      'email': ['', Validators.compose([Validators.required, Validation.emailValidator])]
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }

  downloadCSV() {
    var header = ['Name', 'Positon', 'Address', 'Age'];
    var data = [
      {
        "Name": "Thuyet Le Van",
        "Positon": 40001,
        "Address": "blue",
        "Age": 30
      }, {
        "Name": "Bao Nguyen",
        "Positon": 40002,
        "Address": "blue",
        "Age": 31
      }, {
        "Name": "Tran Kinh Ly",
        "Positon": 40003,
        "Address": "blue",
        "Age": 32
      }
    ];
    Export2CSV.generateCSV(header, data, 'file_name')
  }


  ngOnInit() { }

}
