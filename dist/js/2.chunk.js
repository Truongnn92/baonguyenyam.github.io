webpackJsonp([2],{

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1097));
	

/***/ },

/***/ 1085:
/***/ function(module, exports) {

	"use strict";
	var Validation = (function () {
	    function Validation() {
	    }
	    Validation.getValidatorErrorMessage = function (code) {
	        var config = {
	            'required': 'Required',
	            'invalidEmailAddress': 'Invalid email address',
	            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
	        };
	        return config[code];
	    };
	    Validation.emailValidator = function (control) {
	        // RFC 2822 compliant regex
	        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
	            return null;
	        }
	        else {
	            return { 'invalidEmailAddress': true };
	        }
	    };
	    Validation.passwordValidator = function (control) {
	        // {6,100}           - Assert password is between 6 and 100 characters
	        // (?=.*[0-9])       - Assert a string has at least one number
	        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
	            return null;
	        }
	        else {
	            return { 'invalidPassword': true };
	        }
	    };
	    return Validation;
	}());
	exports.Validation = Validation;
	

/***/ },

/***/ 1097:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var validation_messages_1 = __webpack_require__(1111);
	var common_1 = __webpack_require__(10);
	var validation_1 = __webpack_require__(1085);
	var export2csv_1 = __webpack_require__(1110);
	/*
	* We're loading this component asynchronously
	* We are using some magic with es6-promise-loader that will wrap the module with a Promise
	* see https://github.com/gdi2290/es6-promise-loader for more info
	*/
	var Custom = (function () {
	    function Custom(_formBuilder) {
	        this._formBuilder = _formBuilder;
	        this.userForm = this._formBuilder.group({
	            'name': ['', common_1.Validators.required],
	            'password': ['', common_1.Validators.compose([common_1.Validators.required, validation_1.Validation.passwordValidator])],
	            'email': ['', common_1.Validators.compose([common_1.Validators.required, validation_1.Validation.emailValidator])]
	        });
	    }
	    Custom.prototype.saveUser = function () {
	        if (this.userForm.dirty && this.userForm.valid) {
	            alert("Name: " + this.userForm.value.name + " Email: " + this.userForm.value.email);
	        }
	    };
	    Custom.prototype.downloadCSV = function () {
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
	        export2csv_1.Export2CSV.generateCSV(header, data, 'file_name');
	    };
	    Custom.prototype.ngOnInit = function () { };
	    Custom = __decorate([
	        core_1.Component({
	            selector: 'demo-app',
	            directives: [
	                validation_messages_1.ControlMessages
	            ],
	            providers: [
	                common_1.NgFormModel
	            ],
	            template: __webpack_require__(1124)()
	        }), 
	        __metadata('design:paramtypes', [common_1.FormBuilder])
	    ], Custom);
	    return Custom;
	}());
	exports.Custom = Custom;
	

/***/ },

/***/ 1110:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Export2CSV = (function () {
	    function Export2CSV() {
	    }
	    Export2CSV.generateCSV = function (header, data, filename) {
	        var json2csv = __webpack_require__(1132);
	        json2csv({ data: data, fields: header }, function (err, csv) {
	            if (err) {
	                console.log('Error while generating csv', err);
	            }
	            var dataUrl = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
	            var hiddenElement = document.createElement('a');
	            hiddenElement.setAttribute('href', dataUrl);
	            hiddenElement.setAttribute('target', '_blank');
	            hiddenElement.setAttribute('download', filename + '.csv');
	            hiddenElement.click();
	        });
	    };
	    return Export2CSV;
	}());
	exports.Export2CSV = Export2CSV;
	

/***/ },

/***/ 1111:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(10);
	var validation_1 = __webpack_require__(1085);
	var ControlMessages = (function () {
	    function ControlMessages(_formDir) {
	        this._formDir = _formDir;
	    }
	    Object.defineProperty(ControlMessages.prototype, "errorMessage", {
	        get: function () {
	            var c = this._formDir.form.find(this.controlName);
	            for (var propertyName in c.errors) {
	                if (c.errors.hasOwnProperty(propertyName) && c.touched) {
	                    return validation_1.Validation.getValidatorErrorMessage(propertyName);
	                }
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ControlMessages = __decorate([
	        core_1.Component({
	            selector: 'control-messages',
	            inputs: ['controlName: control'],
	            template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
	        }),
	        __param(0, core_1.Host()), 
	        __metadata('design:paramtypes', [common_1.NgFormModel])
	    ], ControlMessages);
	    return ControlMessages;
	}());
	exports.ControlMessages = ControlMessages;
	

/***/ },

/***/ 1112:
/***/ function(module, exports, __webpack_require__) {

	var isBuffer = __webpack_require__(1113)

	var flat = module.exports = flatten
	flatten.flatten = flatten
	flatten.unflatten = unflatten

	function flatten(target, opts) {
	  opts = opts || {}

	  var delimiter = opts.delimiter || '.'
	  var maxDepth = opts.maxDepth
	  var currentDepth = 1
	  var output = {}

	  function step(object, prev) {
	    Object.keys(object).forEach(function(key) {
	      var value = object[key]
	      var isarray = opts.safe && Array.isArray(value)
	      var type = Object.prototype.toString.call(value)
	      var isbuffer = isBuffer(value)
	      var isobject = (
	        type === "[object Object]" ||
	        type === "[object Array]"
	      )

	      var newKey = prev
	        ? prev + delimiter + key
	        : key

	      if (!opts.maxDepth) {
	        maxDepth = currentDepth + 1;
	      }

	      if (!isarray && !isbuffer && isobject && Object.keys(value).length && currentDepth < maxDepth) {
	        ++currentDepth
	        return step(value, newKey)
	      }

	      output[newKey] = value
	    })
	  }

	  step(target)

	  return output
	}

	function unflatten(target, opts) {
	  opts = opts || {}

	  var delimiter = opts.delimiter || '.'
	  var overwrite = opts.overwrite || false
	  var result = {}

	  var isbuffer = isBuffer(target)
	  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
	    return target
	  }

	  // safely ensure that the key is
	  // an integer.
	  function getkey(key) {
	    var parsedKey = Number(key)

	    return (
	      isNaN(parsedKey) ||
	      key.indexOf('.') !== -1
	    ) ? key
	      : parsedKey
	  }

	  Object.keys(target).forEach(function(key) {
	    var split = key.split(delimiter)
	    var key1 = getkey(split.shift())
	    var key2 = getkey(split[0])
	    var recipient = result

	    while (key2 !== undefined) {
	      var type = Object.prototype.toString.call(recipient[key1])
	      var isobject = (
	        type === "[object Object]" ||
	        type === "[object Array]"
	      )

	      if ((overwrite && !isobject) || (!overwrite && recipient[key1] === undefined)) {
	        recipient[key1] = (
	          typeof key2 === 'number' &&
	          !opts.object ? [] : {}
	        )
	      }

	      recipient = recipient[key1]
	      if (split.length > 0) {
	        key1 = getkey(split.shift())
	        key2 = getkey(split[0])
	      }
	    }

	    // unflatten again for 'messy objects'
	    recipient[key1] = unflatten(target[key], opts)
	  })

	  return result
	}


/***/ },

/***/ 1113:
/***/ function(module, exports) {

	/**
	 * Determine if an object is Buffer
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install is-buffer`
	 */

	module.exports = function (obj) {
	  return !!(obj != null &&
	    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
	      (obj.constructor &&
	      typeof obj.constructor.isBuffer === 'function' &&
	      obj.constructor.isBuffer(obj))
	    ))
	}


/***/ },

/***/ 1124:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<section class=\"{{ComponentClass}}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"subheader mrb-2r\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"container-fluid\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"col-xs-9\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<h2 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
	buf.push("About Us");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h2>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"col-xs-3\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<article class=\"content mrb-2r\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"container-fluid\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"col-xl-offset-1 col-xl-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"col-md-12 col-lg-12\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<form [ngFormModel]=\"userForm\" (submit)=\"saveUser()\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 16, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 17, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<div class=\"col-sm-8 box-left\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 18, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<fieldset class=\"form-group\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<input #name=\"\" ngControl=\"name\" placeholder=\"Username\" class=\"form-control\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 20, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<control-messages control=\"name\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</control-messages>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</fieldset>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 21, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<fieldset class=\"form-group\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 22, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<input #password=\"\" ngControl=\"password\" placeholder=\"Password\" class=\"form-control\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 23, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<control-messages control=\"password\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</control-messages>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</fieldset>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 24, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<fieldset class=\"form-group\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 25, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<input #email=\"\" ngControl=\"email\" placeholder=\"Password\" class=\"form-control\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 26, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<control-messages control=\"email\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</control-messages>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</fieldset>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 27, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<button type=\"submit\" [disabled]=\"!userForm.valid\" class=\"btn btn-main\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, jade_debug[0].filename ));
	buf.push("Submit");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</button>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 28, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/custom/templates/custom.jade" ));
	buf.push("<button (click)=\"downloadCSV()\" class=\"btn btn-primary\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 28, jade_debug[0].filename ));
	buf.push("Download Excel");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</button>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</form>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</article>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</section>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "section(class=\"{{ComponentClass}}\")\n\t.subheader.mrb-2r\n\t\t.container-fluid\n\t\t\t.row\n\t\t\t\t.col-xs-9\n\t\t\t\t\th2.title About Us\n\t\t\t\t.col-xs-3\n\tarticle.content.mrb-2r\n\t\t.container-fluid\n\t\t\t.row\n\t\t\t\t.col-xl-offset-1.col-xl-10\n\t\t\t\t\t.row\n\t\t\t\t\t\t.col-md-12.col-lg-12\n\t\t\t\t\t\t\tform([ngFormModel]='userForm', (submit)='saveUser()')\n\t\t\t\t\t\t\t\t.box-content.padding.padding-large\n\t\t\t\t\t\t\t\t\t\t.row\n\t\t\t\t\t\t\t\t\t\t\t.col-sm-8.box-left\n\t\t\t\t\t\t\t\t\t\t\t\tfieldset.form-group\n\t\t\t\t\t\t\t\t\t\t\t\t\tinput.form-control(#name='', ngControl=\"name\", placeholder='Username')\n\t\t\t\t\t\t\t\t\t\t\t\t\tcontrol-messages(control='name')\n\t\t\t\t\t\t\t\t\t\t\t\tfieldset.form-group\n\t\t\t\t\t\t\t\t\t\t\t\t\tinput.form-control(#password='', ngControl=\"password\", placeholder='Password')\n\t\t\t\t\t\t\t\t\t\t\t\t\tcontrol-messages(control='password')\n\t\t\t\t\t\t\t\t\t\t\t\tfieldset.form-group\n\t\t\t\t\t\t\t\t\t\t\t\t\tinput.form-control(#email='', ngControl=\"email\", placeholder='Password')\n\t\t\t\t\t\t\t\t\t\t\t\t\tcontrol-messages(control='email')\n\t\t\t\t\t\t\t\tbutton.btn.btn-main(type='submit', [disabled]='!userForm.valid') Submit\n\t\t\t\t\t\t\t\tbutton.btn.btn-primary((click)=\"downloadCSV()\") Download Excel\n");
	}
	}

/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	var os = __webpack_require__(1137);
	var lodashGet = __webpack_require__(1135);
	var flatten = __webpack_require__(1112);

	/**
	 * Main function that converts json to csv
	 *
	 * @param {Object} params Function parameters containing data, fields,
	 * delimiter (default is ','), hasCSVColumnTitle (default is true)
	 * and default value (default is '')
	 * @param {Function} callback(err, csv) - Callback function
	 *   if error, returning error in call back.
	 *   if csv is created successfully, returning csv output to callback.
	 */
	module.exports = function (params, callback) {
	  if (!callback || typeof callback !== 'function') {
	    throw new Error('Callback is required');
	  }

	  checkParams(params, function (err) {
	    if (err) {
	      return callback(err);
	    }

	    var titles = createColumnTitles(params);
	    var csv = createColumnContent(params, titles);

	    callback(null, csv);
	  });
	};


	/**
	 * Check passing params
	 *
	 * @param {Object} params Function parameters containing data, fields,
	 * delimiter, default value, mark quotes and hasCSVColumnTitle
	 * @param {Function} callback Callback function returning error when invalid field is found
	 */
	function checkParams(params, callback) {
	  params.data = params.data || [];

	  // if data is an Object, not in array [{}], then just create 1 item array.
	  // So from now all data in array of object format.
	  if (!Array.isArray(params.data)) {
	    params.data = [params.data];
	  }

	  if (params.flatten) {
	    params.data = params.data.map(flatten);
	  }

	  // Set params.fields default to first data element's keys
	  if (!params.fields && (params.data.length === 0 || typeof params.data[0] !== 'object')) {
	    return callback(new Error('params should include "fields" and/or non-empty "data" array of objects'));
	  }
	  params.fields = params.fields || Object.keys(params.data[0]);


	  //#check fieldNames
	  if (params.fieldNames && params.fieldNames.length !== params.fields.length) {
	    return callback(new Error('fieldNames and fields should be of the same length, if fieldNames is provided.'));
	  }

	  // Get fieldNames from fields
	  params.fieldNames = params.fields.map(function (field, i) {
	    if (params.fieldNames && typeof field === 'string') {
	      return params.fieldNames[i];
	    }
	    return (typeof field === 'string') ? field : (field.label || field.value);
	  });

	  //#check delimiter
	  params.del = params.del || ',';

	  //#check end of line character
	  params.eol = params.eol || '';

	  //#check quotation mark
	  params.quotes = typeof params.quotes === 'string' ? params.quotes : '"';

	  //#check double quotes
	  params.doubleQuotes = typeof params.doubleQuotes === 'string' ? params.doubleQuotes : Array(3).join(params.quotes);

	  //#check default value
	  params.defaultValue = params.defaultValue;

	  //#check hasCSVColumnTitle, if it is not explicitly set to false then true.
	  params.hasCSVColumnTitle = params.hasCSVColumnTitle !== false;

	  callback(null);
	}

	/**
	 * Create the title row with all the provided fields as column headings
	 *
	 * @param {Object} params Function parameters containing data, fields and delimiter
	 * @returns {String} titles as a string
	 */
	function createColumnTitles(params) {
	  var str = '';

	  //if CSV has column title, then create it
	  if (params.hasCSVColumnTitle) {
	    params.fieldNames.forEach(function (element) {
	      if (str !== '') {
	        str += params.del;
	      }
	      str += JSON.stringify(element).replace(/\"/g, params.quotes);
	    });
	  }

	  return str;
	}

	/**
	 * Replace the quotation marks of the field element if needed (can be a not string-like item)
	 *
	 * @param {string} stringifiedElement The field element after JSON.stringify()
	 * @param {string} quotes The params.quotes value. At this point we know that is not equal to double (")
	 */
	function replaceQuotationMarks(stringifiedElement, quotes) {
	  var lastCharIndex = stringifiedElement.length - 1;

	  //check if it's an string-like element
	  if (stringifiedElement[0] === '"' && stringifiedElement[lastCharIndex] === '"') {
	    //split the stringified field element because Strings are immutable
	    var splitElement = stringifiedElement.split('');

	    //replace the quotation marks
	    splitElement[0] = quotes;
	    splitElement[lastCharIndex] = quotes;

	    //join again
	    stringifiedElement = splitElement.join('');
	  }

	  return stringifiedElement;
	}

	/**
	 * Create the content column by column and row by row below the title
	 *
	 * @param {Object} params Function parameters containing data, fields and delimiter
	 * @param {String} str Title row as a string
	 * @returns {String} csv string
	 */
	function createColumnContent(params, str) {
	  params.data.forEach(function (dataElement) {
	    //if null or empty object do nothing
	    if (dataElement && Object.getOwnPropertyNames(dataElement).length > 0) {
	      var line = '';
	      var eol = params.newLine || os.EOL || '\n';

	      params.fields.forEach(function (fieldElement) {
	        var val;

	        if (fieldElement && (typeof fieldElement === 'string' || typeof fieldElement.value === 'string')) {
	          var path = (typeof fieldElement === 'string') ? fieldElement : fieldElement.value;
	          var defaultValue = fieldElement.default || params.defaultValue;
	          val = lodashGet(dataElement, path, defaultValue);
	          if (val === null && defaultValue !== undefined){
	            val = defaultValue;
	          }
	        } else if (fieldElement && typeof fieldElement.value === 'function') {
	          val = fieldElement.value(dataElement) || fieldElement.default;
	        }

	        if (val !== undefined) {
	          var stringifiedElement = JSON.stringify(val);

	          if (typeof val === 'object') stringifiedElement = JSON.stringify(stringifiedElement);

	          if (params.quotes !== '"') {
	            stringifiedElement = replaceQuotationMarks(stringifiedElement, params.quotes);
	          }

	          //JSON.stringify('\\') results in a string with two backslash
	          //characters in it. I.e. '\\\\'.
	          stringifiedElement = stringifiedElement.replace(/\\\\/g, '\\');

	          // preserve newlines
	          stringifiedElement = stringifiedElement.split('\\n').join('\n')

	          if (params.excelStrings && typeof val === 'string') {
	            stringifiedElement = '"="' + stringifiedElement + '""';
	          }

	          line += stringifiedElement;
	        }

	        line += params.del;
	      });

	      //remove last delimeter
	      line = line.substring(0, line.length - 1);
	      //Replace single quotes with double quotes. Single quotes are preceeded by
	      //a backslash. Be careful not to remove backslash content from the string.
	      line = line.split('\\\\').map(function (portion) {
	        return portion.replace(/\\"/g, params.doubleQuotes);
	      }).join('\\\\');
	      //Remove the final excess backslashes from the stringified value.
	      line = line.replace(/\\\\/g, '\\');
	      //If header exists, add it, otherwise, print only content
	      if (str !== '') {
	        str += eol + line + params.eol;
	      } else {
	        str = line + params.eol;
	      }
	    }
	  });

	  return str;
	}


/***/ },

/***/ 1133:
/***/ function(module, exports) {

	/**
	 * lodash 3.7.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = baseGet;


/***/ },

/***/ 1134:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.8.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArray = __webpack_require__(1136);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },

/***/ 1135:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.7.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseGet = __webpack_require__(1133),
	    toPath = __webpack_require__(1134);

	/**
	 * Gets the property value of `path` on `object`. If the resolved value is
	 * `undefined` the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },

/***/ 1136:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },

/***/ 1137:
/***/ function(module, exports) {

	exports.endianness = function () { return 'LE' };

	exports.hostname = function () {
	    if (typeof location !== 'undefined') {
	        return location.hostname
	    }
	    else return '';
	};

	exports.loadavg = function () { return [] };

	exports.uptime = function () { return 0 };

	exports.freemem = function () {
	    return Number.MAX_VALUE;
	};

	exports.totalmem = function () {
	    return Number.MAX_VALUE;
	};

	exports.cpus = function () { return [] };

	exports.type = function () { return 'Browser' };

	exports.release = function () {
	    if (typeof navigator !== 'undefined') {
	        return navigator.appVersion;
	    }
	    return '';
	};

	exports.networkInterfaces
	= exports.getNetworkInterfaces
	= function () { return {} };

	exports.arch = function () { return 'javascript' };

	exports.platform = function () { return 'browser' };

	exports.tmpdir = exports.tmpDir = function () {
	    return '/tmp';
	};

	exports.EOL = '\n';


/***/ }

});
//# sourceMappingURL=2.aebd0ef4e803eea7a215.map