webpackJsonp([1],{

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1098));
	

/***/ },

/***/ 1098:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var app_state_1 = __webpack_require__(167);
	var core_component_1 = __webpack_require__(1109);
	var api_service_1 = __webpack_require__(550);
	var title_1 = __webpack_require__(1103);
	var x_large_1 = __webpack_require__(1105);
	var search_1 = __webpack_require__(1101);
	var order_1 = __webpack_require__(1100);
	var column_1 = __webpack_require__(1099);
	var sorter_1 = __webpack_require__(1102);
	var Home = (function (_super) {
	    __extends(Home, _super);
	    // TypeScript public modifiers
	    function Home(appState, apiService, title) {
	        _super.call(this, appState, apiService);
	        this.appState = appState;
	        this.apiService = apiService;
	        this.title = title;
	        // Set our default values
	        this.localState = { value: '' };
	        this.sorter = new sorter_1.Sorter();
	        this.rowLiveFxRate = this.getDataRowForLiveFxRate();
	        this.columnsLiveRate = this.getDataColumnsForLiveRates();
	        // Bind data for My Rates box & apply sorter
	        this.rowMyRate = this.getDataRowForMyRate();
	        this.columnsMyRate = this.getDataColumnsForMyRates();
	    }
	    Home.prototype.sortLiveRate = function (key) {
	        this.sorter.sort(key, this.rowLiveFxRate);
	    };
	    Home.prototype.sortMyRate = function (key) {
	        this.sorter.sort(key, this.rowMyRate);
	    };
	    Home.prototype.getDataRowForLiveFxRate = function () {
	        return [
	            {
	                Name: "SGDGHD", Pid: "9,088.56", Ask: "6,667.56", Change: "9,088.56", Update: "12:20:04 PM", Map: "/map/name", Code: "sg", Sell: "9.8098.09", Buy: "10.988.09", Mid: "87.98", Display: true
	            }, {
	                Name: "VNDABC", Pid: "9,566.56", Ask: "9,423.98", Change: "9,097.98", Update: "11:23:24 PM", Map: "/map/name", Code: "vn", Sell: "7.3425.19", Buy: "10.988.12", Mid: "87.36", Display: true
	            }, {
	                Name: "USDSGD", Pid: "9,766.76", Ask: "6,667.56", Change: "9,088.67", Update: "10:12:34 PM", Map: "/map/name", Code: "eu", Sell: "5.2347.59", Buy: "10.988.23", Mid: "44.14", Display: false
	            }, {
	                Name: "SGDVND", Pid: "9,455.56", Ask: "9,455.56", Change: "9,423.98", Update: "05:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.7653.12", Buy: "10.988.45", Mid: "11.33", Display: true
	            }, {
	                Name: "USDVND", Pid: "9,123.56", Ask: "9,213.56", Change: "9,423.98", Update: "12:20:32 PM", Map: "/map/name", Code: "ag", Sell: "3.1236.65", Buy: "10.988.67", Mid: "88.98", Display: false
	            }, {
	                Name: "VNDUSD", Pid: "9,433.34", Ask: "9,123.56", Change: "9,423.98", Update: "06:20:32 PM", Map: "/map/name", Code: "sg", Sell: "2.1231.89", Buy: "10.988.66", Mid: "77.63", Display: true
	            }, {
	                Name: "ABCVND", Pid: "9,765.76", Ask: "9,535.56", Change: "9,456.98", Update: "10:20:32 PM", Map: "/map/name", Code: "vn", Sell: "6.7544.45", Buy: "10.988.67", Mid: "68.44", Display: false
	            }, {
	                Name: "SNDVND", Pid: "9,233.23", Ask: "9,786.56", Change: "9,456.98", Update: "09:20:32 PM", Map: "/map/name", Code: "au", Sell: "2.8456.34", Buy: "10.988.45", Mid: "68.78", Display: true
	            }, {
	                Name: "YYYVND", Pid: "9,876.98", Ask: "9,452.56", Change: "9,786.98", Update: "08:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.1234.23", Buy: "10.988.34", Mid: "67.45", Display: true
	            }, {
	                Name: "JVCVND", Pid: "9,786.67", Ask: "9,124.56", Change: "9,567.98", Update: "06:20:32 PM", Map: "/map/name", Code: "ag", Sell: "9.8956.46", Buy: "10.988.45", Mid: "78.54", Display: true
	            }, {
	                Name: "SGDGAH", Pid: "9,234.45", Ask: "9,786.56", Change: "9,967.98", Update: "12:20:32 PM", Map: "/map/name", Code: "sg", Sell: "9.8987.34", Buy: "10.988.03", Mid: "55.45", Display: true
	            }
	        ];
	    };
	    Home.prototype.getDataColumnsForLiveRates = function () {
	        return [
	            new column_1.Column('Name', 'Name'),
	            new column_1.Column('Pid', 'Pid'),
	            new column_1.Column('Ask', 'Ask'),
	            new column_1.Column('Change', 'Change'),
	            new column_1.Column('Update', 'Update')
	        ];
	    };
	    Home.prototype.getDataRowForMyRate = function () {
	        return [
	            {
	                Name: "SGDGHD", Pid: "9,088.56", Ask: "6,667.56", Change: "9,088.56", Update: "12:20:04 PM", Map: "/map/name", Code: "sg", Sell: "9.8098.09", Buy: "10.988.09", Mid: "87.98", Display: true
	            }, {
	                Name: "VNDABC", Pid: "9,566.56", Ask: "9,423.98", Change: "9,097.98", Update: "11:23:24 PM", Map: "/map/name", Code: "vn", Sell: "7.3425.19", Buy: "10.988.12", Mid: "87.36", Display: true
	            }, {
	                Name: "USDSGD", Pid: "9,766.76", Ask: "6,667.56", Change: "9,088.67", Update: "10:12:34 PM", Map: "/map/name", Code: "eu", Sell: "5.2347.59", Buy: "10.988.23", Mid: "44.14", Display: false
	            }, {
	                Name: "SGDVND", Pid: "9,455.56", Ask: "9,455.56", Change: "9,423.98", Update: "05:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.7653.12", Buy: "10.988.45", Mid: "11.33", Display: true
	            }, {
	                Name: "USDVND", Pid: "9,123.56", Ask: "9,213.56", Change: "9,423.98", Update: "12:20:32 PM", Map: "/map/name", Code: "ag", Sell: "3.1236.65", Buy: "10.988.67", Mid: "88.98", Display: false
	            }, {
	                Name: "VNDUSD", Pid: "9,433.34", Ask: "9,123.56", Change: "9,423.98", Update: "06:20:32 PM", Map: "/map/name", Code: "sg", Sell: "2.1231.89", Buy: "10.988.66", Mid: "77.63", Display: true
	            }, {
	                Name: "ABCVND", Pid: "9,765.76", Ask: "9,535.56", Change: "9,456.98", Update: "10:20:32 PM", Map: "/map/name", Code: "vn", Sell: "6.7544.45", Buy: "10.988.67", Mid: "68.44", Display: false
	            }, {
	                Name: "SNDVND", Pid: "9,233.23", Ask: "9,786.56", Change: "9,456.98", Update: "09:20:32 PM", Map: "/map/name", Code: "au", Sell: "2.8456.34", Buy: "10.988.45", Mid: "68.78", Display: true
	            }, {
	                Name: "YYYVND", Pid: "9,876.98", Ask: "9,452.56", Change: "9,786.98", Update: "08:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.1234.23", Buy: "10.988.34", Mid: "67.45", Display: true
	            }, {
	                Name: "JVCVND", Pid: "9,786.67", Ask: "9,124.56", Change: "9,567.98", Update: "06:20:32 PM", Map: "/map/name", Code: "ag", Sell: "9.8956.46", Buy: "10.988.45", Mid: "78.54", Display: true
	            }, {
	                Name: "SGDGAH", Pid: "9,234.45", Ask: "9,786.56", Change: "9,967.98", Update: "12:20:32 PM", Map: "/map/name", Code: "sg", Sell: "9.8987.34", Buy: "10.988.03", Mid: "55.45", Display: true
	            }
	        ];
	    };
	    Home.prototype.getDataColumnsForMyRates = function () {
	        return [
	            new column_1.Column('Code', 'No'),
	            new column_1.Column('Name', 'CCY'),
	            new column_1.Column('Buy', 'Buy'),
	            new column_1.Column('Mid', 'Mid Market'),
	            new column_1.Column('Sell', 'Sell'),
	            new column_1.Column('Display', 'Display')
	        ];
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Home.prototype, "name", void 0);
	    Home = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'home'
	            selector: 'section',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                title_1.Title
	            ],
	            viewProviders: [
	                core_component_1.CoreComponent
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: [
	                x_large_1.XLarge
	            ],
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [
	                search_1.Search,
	                order_1.OrderBy
	            ],
	            inputs: ['rows: rowLiveFxRate', 'columns: columnsLiveRate'],
	            // Our list of styles in our component. We may add more to compose many styles together
	            styles: [__webpack_require__(1138)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(1126)()
	        }), 
	        __metadata('design:paramtypes', [app_state_1.AppState, api_service_1.ApiService, title_1.Title])
	    ], Home);
	    return Home;
	}(core_component_1.CoreComponent));
	exports.Home = Home;
	

/***/ },

/***/ 1099:
/***/ function(module, exports) {

	"use strict";
	var Column = (function () {
	    function Column(name, descr) {
	        this.name = name;
	        this.descr = descr;
	    }
	    return Column;
	}());
	exports.Column = Column;
	

/***/ },

/***/ 1100:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var OrderBy = (function () {
	    function OrderBy() {
	    }
	    OrderBy.prototype.transform = function (input, _a) {
	        var args = _a[0];
	        if (!Array.isArray(input) || args == null) {
	            return input;
	        }
	        var orderData = input.slice();
	        for (var i = 0; i < args.length; i++) {
	            orderData.sort(function (a, b) {
	                var key = args[i];
	                if (a[key] == null) {
	                    return;
	                }
	                var x = a[key].toLowerCase();
	                var y = b[key].toLowerCase();
	                return x < y ? -1 : x > y ? 1 : 0;
	            });
	        }
	        return orderData;
	    };
	    OrderBy = __decorate([
	        core_1.Pipe({
	            name: 'orderBy'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OrderBy);
	    return OrderBy;
	}());
	exports.OrderBy = OrderBy;
	

/***/ },

/***/ 1101:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Search = (function () {
	    function Search() {
	    }
	    Search.prototype.transform = function (value, args) {
	        var term = args[0];
	        if (value == null) {
	            return null;
	        }
	        if (term == null) {
	            return value;
	        }
	        var searchRegx = new RegExp(term, "i");
	        var result = [];
	        for (var i = 0; i < value.length; i++) {
	            var item = value[i];
	            for (var j = 1; j < args.length; ++j) {
	                if (searchRegx.test(item[args[j]])) {
	                    result.push(item);
	                }
	            }
	        }
	        return result;
	    };
	    Search = __decorate([
	        core_1.Pipe({
	            name: 'search'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Search);
	    return Search;
	}());
	exports.Search = Search;
	

/***/ },

/***/ 1102:
/***/ function(module, exports) {

	"use strict";
	var Sorter = (function () {
	    function Sorter() {
	        this.direction = 1;
	    }
	    Sorter.prototype.sort = function (key, data) {
	        var _this = this;
	        if (this.key === key) {
	            this.direction = -this.direction;
	        }
	        else {
	            this.direction = 1;
	        }
	        this.key = key;
	        data.sort(function (a, b) {
	            if (a[key] === b[key]) {
	                return 0;
	            }
	            else if (a[key] > b[key]) {
	                return _this.direction;
	            }
	            else {
	                return -_this.direction;
	            }
	        });
	    };
	    return Sorter;
	}());
	exports.Sorter = Sorter;
	

/***/ },

/***/ 1103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1104));
	

/***/ },

/***/ 1104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(76);
	var Title = (function () {
	    function Title(http) {
	        this.http = http;
	        this.value = 'Angular 2';
	    }
	    Title.prototype.getData = function () {
	        console.log('Title#getData(): Get Data');
	        // return this.http.get('/assets/data.json')
	        // .map(res => res.json());
	        return {
	            value: 'BIZ4X'
	        };
	    };
	    Title = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Title);
	    return Title;
	}());
	exports.Title = Title;
	

/***/ },

/***/ 1105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1106));
	

/***/ },

/***/ 1106:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	/*
	 * Directive
	 * XLarge is a simple directive to show how one is made
	 */
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        // simple DOM manipulation to set font size to x-large
	        // `nativeElement` is the direct reference to the DOM element
	        // element.nativeElement.style.fontSize = 'x-large';
	        // for server/webworker support use the renderer
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]' // using [ ] means selecting attributes
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], XLarge);
	    return XLarge;
	}());
	exports.XLarge = XLarge;
	

/***/ },

/***/ 1109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var app_state_1 = __webpack_require__(167);
	var api_service_1 = __webpack_require__(550);
	var CoreComponent = (function () {
	    function CoreComponent(appState, apiService) {
	        this.appState = appState;
	        this.apiService = apiService;
	        this.appState.set('isLogin', true);
	        this.getDataForBinding();
	        this.customDataForPage();
	    }
	    CoreComponent.prototype.getDataForBinding = function () {
	        var _this = this;
	        this.apiService.getData().subscribe(
	        // the first argument is a function which runs on success
	        function (data) {
	            _this.liverate = data[2];
	            _this.booking = data[3];
	        }, 
	        // the second argument is a function which runs on error
	        function (err) { return console.error(err); }, 
	        // the third argument is a function which runs on completion
	        function () { return console.log(); });
	    };
	    CoreComponent.prototype.customDataForPage = function () {
	        // Do nothing
	        // We can overwrite it on each page
	    };
	    ;
	    CoreComponent = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [app_state_1.AppState, api_service_1.ApiService])
	    ], CoreComponent);
	    return CoreComponent;
	}());
	exports.CoreComponent = CoreComponent;
	

/***/ },

/***/ 1125:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"box box-primary box-lg box-ribbon flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"box-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<h3 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
	buf.push("Booking GET4X");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<span class=\"label label-pill label-noted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
	buf.push("10");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h3>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"group-control\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<ul class=\"nav\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"quicksearch\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<label for=\"quicksearchbooking\" (click)=\"Booking_isCollapsed = !Booking_isCollapsed\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-search\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div [ngClass]=\"{active: Booking_isCollapsed}\" class=\"se\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<input id=\"quicksearchbooking\" [(ngModel)]=\"BookingQuery\" placeholder=\"Search Booking\" class=\"form-control\">");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-refresh\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 16, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 17, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 18, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-minus\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 20, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 21, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-arrow-expand\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"list-group\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 24, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div *ngFor=\"let item of booking\" #bookingGroup [ngClass]=\"{'inactive': bookingGroup?.isOpen, '': !bookingGroup?.isOpen}\" class=\"list-group-item has-status\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 25, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 26, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<span [ngClass]=\"{'red':item.status=='booking','blue':item.status=='done', 'status-blue':item.status_child=='edit','':item.status_child=='remove','status-red':item.status_child=='expired','status-cyan':item.status_child=='redirect','status-yellow':item.status_child=='waiting' }\" class=\"status\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<sup *ngIf=\"item.status_child\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</sup>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 28, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("{{item.ID}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 29, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<strong>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 29, jade_debug[0].filename ));
	buf.push("BUY {{item.buy}}/SELL {{item.sell}}");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 30, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 31, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\" tooltip=\"BUY AMOUNT CCY – SELL AMOUNT CCY &lt;strong&gt;HE HE&lt;/strong&gt;\" tooltipPlacement=\"bottom\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, jade_debug[0].filename ));
	buf.push("{{item.rate}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</strong>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 32, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 33, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"control\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 34, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<ul class=\"nav\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 36, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<time>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push("{{item.time}}s");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</time>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 37, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li *ngIf=\"item.status=='booking'\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 38, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\" class=\"accept\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-ios-checkmark\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 40, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<li *ngIf=\"item.status=='booking'\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 41, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\" (click)=\"booking.isOpen = !booking.isOpen; bookingGroup.isOpen = !bookingGroup.isOpen\" class=\"more\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 42, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-more\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 43, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div #booking [ngClass]=\"{'in': booking?.isOpen, '': !booking?.isOpen}\" class=\"collapse\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 44, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div *ngIf=\"item.status=='booking'\" class=\"list-group mrb-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 45, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"list-group-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 46, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"row item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 47, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 48, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<strong>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 48, jade_debug[0].filename ));
	buf.push("Booking request ID {{item.code}} ");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</strong>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 49, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-2 time\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 50, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<time>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 50, jade_debug[0].filename ));
	buf.push("{{item.time}}s");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</time>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 51, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"row item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 52, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 53, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<strong>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 53, jade_debug[0].filename ));
	buf.push("BUY AMOUNT CCY – SELL AMOUNT CCY");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</strong>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 54, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-2 accept\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 55, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 56, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-checkmark-circled\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 57, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"row item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 58, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 59, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<strong>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 59, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 60, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("Rate at");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 61, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 62, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<span class=\"edittext\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 62, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 63, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("{{item.rate}}");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 64, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 65, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<input value=\"{{item.rate}}\" class=\"input-sm\">");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 66, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 67, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("based on your last update.");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</strong>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 68, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-2 edit\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 69, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 70, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"edit icon ion-edit\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 71, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"row item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 72, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 73, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<strong class=\"text-danger\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 73, jade_debug[0].filename ));
	buf.push("Cancel");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</strong>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 74, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"col-xs-2 delete\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 75, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 76, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<i class=\"icon ion-close-circled\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
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
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 77, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/booking.jade" ));
	buf.push("<div class=\"box-footer\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".box.box-primary.box-lg.box-ribbon.flex.flex-col\n\t.box-header\n\t\th3.title Booking GET4X\n\t\t\tspan.label.label-pill.label-noted 10\n\t\t.group-control\n\t\t\tul.nav\n\t\t\t\tli.nav-link\n\t\t\t\t\t.quicksearch\n\t\t\t\t\t\tlabel(for=\"quicksearchbooking\",(click)=\"Booking_isCollapsed = !Booking_isCollapsed\")\n\t\t\t\t\t\t\ti.icon.ion-search\n\t\t\t\t\t\t.se([ngClass]=\"{active: Booking_isCollapsed}\")\n\t\t\t\t\t\t\tinput#quicksearchbooking.form-control([(ngModel)]=\"BookingQuery\", placeholder=\"Search Booking\") \n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-refresh\n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-minus\n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-arrow-expand\n\t.box-content.padding.padding-large\n\t\t.list-group\n\t\t\t.list-group-item.has-status(*ngFor=\"let item of booking\",#bookingGroup, [ngClass]=\"{'inactive': bookingGroup?.isOpen, '': !bookingGroup?.isOpen}\")\n\t\t\t\t.item\n\t\t\t\t\tspan.status([ngClass]=\"{'red':item.status=='booking','blue':item.status=='done', 'status-blue':item.status_child=='edit','':item.status_child=='remove','status-red':item.status_child=='expired','status-cyan':item.status_child=='redirect','status-yellow':item.status_child=='waiting' }\")\n\t\t\t\t\t\tsup(*ngIf=\"item.status_child\")\n\t\t\t\t\t\t| {{item.ID}}\n\t\t\t\t\tstrong BUY {{item.buy}}/SELL {{item.sell}}\n\t\t\t\t\t\t| \n\t\t\t\t\t\ta(href=\"javascript:void(0);\", tooltip=\"BUY AMOUNT CCY – SELL AMOUNT CCY <\\strong>HE HE<\\/strong>\", tooltipPlacement=\"bottom\") {{item.rate}}\n\t\t\t\t\t| \n\t\t\t\t\t.control\n\t\t\t\t\t\tul.nav\n\t\t\t\t\t\t\tli.nav-link\n\t\t\t\t\t\t\t\ttime {{item.time}}s\n\t\t\t\t\t\t\tli.nav-link(*ngIf=\"item.status=='booking'\")\n\t\t\t\t\t\t\t\ta.accept(href=\"javascript:void(0);\")\n\t\t\t\t\t\t\t\t\ti.icon.ion-ios-checkmark\n\t\t\t\t\t\t\tli.nav-link(*ngIf=\"item.status=='booking'\")\n\t\t\t\t\t\t\t\ta.more(href=\"javascript:void(0);\", (click)=\"booking.isOpen = !booking.isOpen; bookingGroup.isOpen = !bookingGroup.isOpen\")\n\t\t\t\t\t\t\t\t\ti.icon.ion-more\n\t\t\t\t.collapse(#booking, [ngClass]=\"{'in': booking?.isOpen, '': !booking?.isOpen}\")\n\t\t\t\t\t.list-group.mrb-10(*ngIf=\"item.status=='booking'\")\n\t\t\t\t\t\t.list-group-item\n\t\t\t\t\t\t\t.row.item\n\t\t\t\t\t\t\t\t.col-xs-10\n\t\t\t\t\t\t\t\t\tstrong Booking request ID {{item.code}} \n\t\t\t\t\t\t\t\t.col-xs-2.time\n\t\t\t\t\t\t\t\t\ttime {{item.time}}s\n\t\t\t\t\t\t\t.row.item\n\t\t\t\t\t\t\t\t.col-xs-10\n\t\t\t\t\t\t\t\t\tstrong BUY AMOUNT CCY – SELL AMOUNT CCY\n\t\t\t\t\t\t\t\t.col-xs-2.accept\n\t\t\t\t\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\t\t\t\t\ti.icon.ion-checkmark-circled\n\t\t\t\t\t\t\t.row.item\n\t\t\t\t\t\t\t\t.col-xs-10\n\t\t\t\t\t\t\t\t\tstrong \n\t\t\t\t\t\t\t\t\t\t| Rate at\n\t\t\t\t\t\t\t\t\t\t|  \n\t\t\t\t\t\t\t\t\t\tspan.edittext \n\t\t\t\t\t\t\t\t\t\t\t| {{item.rate}}\n\t\t\t\t\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t\t\t\t\tinput.input-sm(value=\"{{item.rate}}\")\n\t\t\t\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t\t\t\t| based on your last update.\n\t\t\t\t\t\t\t\t.col-xs-2.edit\n\t\t\t\t\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\t\t\t\t\ti.edit.icon.ion-edit\n\t\t\t\t\t\t\t.row.item\n\t\t\t\t\t\t\t\t.col-xs-10\n\t\t\t\t\t\t\t\t\tstrong.text-danger Cancel\n\t\t\t\t\t\t\t\t.col-xs-2.delete\n\t\t\t\t\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\t\t\t\t\ti.icon.ion-close-circled\n\t.box-footer\n");
	}
	}

/***/ },

/***/ 1126:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (undefined) {
	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<section class=\"container-fluid {{ComponentClass}}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"col-lg-12 flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push(null == (jade_interp = __webpack_require__(1129).call(this, locals)) ? "" : jade_interp);
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"row flex flex-md-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"col-lg-6 flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push(null == (jade_interp = __webpack_require__(1125).call(this, locals)) ? "" : jade_interp);
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"col-lg-6 flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push(null == (jade_interp = __webpack_require__(1127).call(this, locals)) ? "" : jade_interp);
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push("<div class=\"col-lg-12 flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/home.jade" ));
	buf.push(null == (jade_interp = __webpack_require__(1128).call(this, locals)) ? "" : jade_interp);
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</section>");
	jade_debug.shift();
	jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "section.container-fluid(class=\"{{ComponentClass}}\")\n\t//- Quick Start\n\t.row\n\t\t.col-lg-12.flex.flex-col\n\t\t\tinclude start.jade\n\t.row.flex.flex-md-col\n\t\t.col-lg-6.flex.flex-col\n\t\t\t//- Booking Table \n\t\t\tinclude booking.jade\n\t\t.col-lg-6.flex.flex-col\n\t\t\t//- Live Rate Table\n\t\t\tinclude liverate.jade\n\t//- My Rates\n\t.row\n\t\t.col-lg-12.flex.flex-col\n\t\t\tinclude myrate.jade\n\n\n");
	}
	}

/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div class=\"box box-liverate box-lg box-ribbon flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div class=\"box-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<h3 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
	buf.push("LIVE FX Rates");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<span class=\"label label-pill label-noted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
	buf.push("6");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h3>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div class=\"group-control\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<ul class=\"nav\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div class=\"quicksearch\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<label for=\"quicksearchlive\" (click)=\"Live_isCollapsed = !Live_isCollapsed\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i class=\"icon ion-search\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div [ngClass]=\"{active: Live_isCollapsed}\" class=\"se\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<input id=\"quicksearchlive\" [(ngModel)]=\"LiveRateQuery\" placeholder=\"Search Live FX Rates\" class=\"form-control\">");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i class=\"icon ion-refresh\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 16, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 17, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 18, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i class=\"icon ion-minus\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 20, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 21, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i class=\"icon ion-arrow-expand\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div class=\"box-content\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<table class=\"table table-sm tablerate\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 24, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<thead class=\"thead-default\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 25, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<tr>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 26, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<th *ngFor=\"let col of columnsLiveRate\" #sortLiveRateGroup [ngClass]=\"{'sort-up': sortLiveRateGroup?.isOpen, 'sort-down': !sortLiveRateGroup?.isOpen}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\" (click)=\"sortLiveRate(col.name); sortLiveRateGroup.isOpen = !sortLiveRateGroup.isOpen\" class=\"sorter\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, jade_debug[0].filename ));
	buf.push("{{col.descr}}  ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 28, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i *ngIf=\"sortLiveRateGroup?.isOpen\" class=\"icon ion-android-arrow-up\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 29, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i *ngIf=\"!sortLiveRateGroup?.isOpen\" class=\"icon ion-android-arrow-down\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</th>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</tr>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</thead>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 30, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<tbody>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<tr *ngFor=\"let item of rowLiveFxRate\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 33, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 33, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<th scope=\"row\" class=\"pair\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 34, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"{{item.Map}}\" target=\"_blank\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("{{item.Name}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 35, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 36, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"{{item.Map}}\" target=\"_blank\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 37, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i class=\"icon ion-arrow-graph-up-right\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</th>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 38, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<td class=\"pid\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 38, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 39, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
	buf.push("{{item.Pid}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 40, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<td class=\"ask\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 40, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 41, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 41, jade_debug[0].filename ));
	buf.push("{{item.Ask}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 42, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<td class=\"change down\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 43, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 43, jade_debug[0].filename ));
	buf.push("{{item.Change}}");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 44, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 45, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-up\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 46, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<td class=\"time\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 46, jade_debug[0].filename ));
	buf.push("{{item.Update}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</tr>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</tbody>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</table>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 47, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/liverate.jade" ));
	buf.push("<div class=\"box-footer\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".box.box-liverate.box-lg.box-ribbon.flex.flex-col\n\t.box-header\n\t\th3.title LIVE FX Rates\n\t\t\tspan.label.label-pill.label-noted 6\n\t\t.group-control\n\t\t\tul.nav\n\t\t\t\tli.nav-link\n\t\t\t\t\t.quicksearch\n\t\t\t\t\t\tlabel(for=\"quicksearchlive\",(click)=\"Live_isCollapsed = !Live_isCollapsed\")\n\t\t\t\t\t\t\ti.icon.ion-search\n\t\t\t\t\t\t.se([ngClass]=\"{active: Live_isCollapsed}\")\n\t\t\t\t\t\t\tinput#quicksearchlive.form-control([(ngModel)]=\"LiveRateQuery\", placeholder=\"Search Live FX Rates\") \n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-refresh\n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-minus\n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-arrow-expand\n\t.box-content\n\t\ttable.table.table-sm.tablerate\n\t\t\tthead.thead-default\n\t\t\t\ttr\n\t\t\t\t\tth(*ngFor=\"let col of columnsLiveRate\", #sortLiveRateGroup, [ngClass]=\"{'sort-up': sortLiveRateGroup?.isOpen, 'sort-down': !sortLiveRateGroup?.isOpen}\")\n\t\t\t\t\t\ta.sorter(href=\"javascript:void(0);\", (click)='sortLiveRate(col.name); sortLiveRateGroup.isOpen = !sortLiveRateGroup.isOpen') {{col.descr}}  \n\t\t\t\t\t\t\ti.icon.ion-android-arrow-up(*ngIf=\"sortLiveRateGroup?.isOpen\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-down(*ngIf=\"!sortLiveRateGroup?.isOpen\")\n\t\t\ttbody\n\t\t\t\ttr(*ngFor=\"let item of rowLiveFxRate\")\n\t\t\t\t\t//- td(*ngFor='let col of columnsLiveRate') {{i}} {{row[col.name]}}\n\t\t\t\t\tth.pair(scope='row')\n\t\t\t\t\t\ta(href=\"{{item.Map}}\", target=\"_blank\") {{item.Name}}\n\t\t\t\t\t\t| \n\t\t\t\t\t\ta(href=\"{{item.Map}}\", target=\"_blank\") \n\t\t\t\t\t\t\ti.icon.ion-arrow-graph-up-right\n\t\t\t\t\ttd.pid \n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Pid}}\n\t\t\t\t\ttd.ask \n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Ask}}\n\t\t\t\t\ttd.change.down\n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Change}}\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\ti.icon.ion-android-arrow-up\n\t\t\t\t\ttd.time {{item.Update}}\n\t.box-footer");
	}
	}

/***/ },

/***/ 1128:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"box box-myrates box-lg box-ribbon flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"box-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<h3 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
	buf.push("My Rates");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<span class=\"label label-pill label-noted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
	buf.push("34");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h3>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"group-control\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<ul class=\"nav\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"quicksearch\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<label for=\"quicksearchlive\" (click)=\"MyRate_isCollapsed = !MyRate_isCollapsed\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i class=\"icon ion-search\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div [ngClass]=\"{active: MyRate_isCollapsed}\" class=\"se\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<input id=\"quicksearchlive\" [(ngModel)]=\"MyRateQuery\" placeholder=\"Search Live FX Rates\" class=\"form-control\">");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i class=\"icon ion-refresh\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 16, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 17, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 18, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i class=\"icon ion-minus\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<li class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 20, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 21, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i class=\"icon ion-arrow-expand\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"box-content\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<table class=\"table table-sm tablerate\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 24, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<thead class=\"thead-default\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 25, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<tr>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 26, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<th *ngFor=\"let col of columnsMyRate\" #sortMyRateGroup [ngClass]=\"{'sort-up': sortMyRateGroup?.isOpen, 'sort-down': !sortMyRateGroup?.isOpen}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\" (click)=\"sortMyRate(col.name); sortMyRateGroup.isOpen = !sortMyRateGroup.isOpen\" class=\"sorter\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, jade_debug[0].filename ));
	buf.push("{{col.descr}}  ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 28, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i *ngIf=\"sortMyRateGroup?.isOpen\" class=\"icon ion-android-arrow-up\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 29, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i *ngIf=\"!sortMyRateGroup?.isOpen\" class=\"icon ion-android-arrow-down\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</th>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</tr>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</thead>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 30, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<tbody>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<tr *ngFor=\"let item of rowMyRate\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 32, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<td class=\"no\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 33, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<span class=\"flag-icon flag-icon-squared flag-icon-{{item.Code}}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 34, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<th scope=\"row\" class=\"ccy\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, jade_debug[0].filename ));
	buf.push("{{item.Name}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 36, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 37, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 37, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 38, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i class=\"icon ion-arrow-graph-up-right\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</th>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 39, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<td class=\"buy\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 40, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 40, jade_debug[0].filename ));
	buf.push("{{item.Buy}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 41, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<td class=\"mid\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 41, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 42, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 42, jade_debug[0].filename ));
	buf.push("{{item.Mid}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 43, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<td class=\"sell\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 44, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<a href=\"javascript:void(0);\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 44, jade_debug[0].filename ));
	buf.push("{{item.Sell}}");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 45, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 46, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-up\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 47, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<td class=\"display\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 47, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 48, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"tg-list\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 49, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"tg-list-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 50, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<input id=\"{{item.Name}}\" type=\"checkbox\" checked *ngIf=\"item.Display\" class=\"tgl tgl-flat\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 51, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<input id=\"{{item.Name}}\" type=\"checkbox\" *ngIf=\"!item.Display\" class=\"tgl tgl-flat\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 52, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<label for=\"\" class=\"tgl-btn\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</td>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</tr>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</tbody>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</table>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 53, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/myrate.jade" ));
	buf.push("<div class=\"box-footer\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".box.box-myrates.box-lg.box-ribbon.flex.flex-col\n\t.box-header\n\t\th3.title My Rates\n\t\t\tspan.label.label-pill.label-noted 34\n\t\t.group-control\n\t\t\tul.nav\n\t\t\t\tli.nav-link\n\t\t\t\t\t.quicksearch\n\t\t\t\t\t\tlabel(for=\"quicksearchlive\",(click)=\"MyRate_isCollapsed = !MyRate_isCollapsed\")\n\t\t\t\t\t\t\ti.icon.ion-search\n\t\t\t\t\t\t.se([ngClass]=\"{active: MyRate_isCollapsed}\")\n\t\t\t\t\t\t\tinput#quicksearchlive.form-control([(ngModel)]=\"MyRateQuery\", placeholder=\"Search Live FX Rates\") \n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-refresh\n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-minus\n\t\t\t\tli.nav-link\n\t\t\t\t\ta(href=\"javascript:void(0);\")\n\t\t\t\t\t\ti.icon.ion-arrow-expand\n\t.box-content\n\t\ttable.table.table-sm.tablerate\n\t\t\tthead.thead-default\n\t\t\t\ttr\n\t\t\t\t\tth(*ngFor=\"let col of columnsMyRate\", #sortMyRateGroup, [ngClass]=\"{'sort-up': sortMyRateGroup?.isOpen, 'sort-down': !sortMyRateGroup?.isOpen}\")\n\t\t\t\t\t\ta.sorter(href=\"javascript:void(0);\", (click)='sortMyRate(col.name); sortMyRateGroup.isOpen = !sortMyRateGroup.isOpen') {{col.descr}}  \n\t\t\t\t\t\t\ti.icon.ion-android-arrow-up(*ngIf=\"sortMyRateGroup?.isOpen\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-down(*ngIf=\"!sortMyRateGroup?.isOpen\")\n\t\t\ttbody\n\t\t\t\ttr(*ngFor=\"let item of rowMyRate\")\n\t\t\t\t\ttd.no\n\t\t\t\t\t\tspan.flag-icon.flag-icon-squared(class=\"flag-icon-{{item.Code}}\")\n\t\t\t\t\tth.ccy(scope='row')\n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Name}}\n\t\t\t\t\t\t| \n\t\t\t\t\t\ta(href=\"javascript:void(0);\") \n\t\t\t\t\t\t\ti.icon.ion-arrow-graph-up-right\n\t\t\t\t\ttd.buy \n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Buy}}\n\t\t\t\t\ttd.mid \n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Mid}}\n\t\t\t\t\ttd.sell\n\t\t\t\t\t\ta(href=\"javascript:void(0);\") {{item.Sell}}\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\ti.icon.ion-android-arrow-up\n\t\t\t\t\ttd.display \n\t\t\t\t\t\t.tg-list\n\t\t\t\t\t\t\t.tg-list-item\n\t\t\t\t\t\t\t\tinput.tgl.tgl-flat(id=\"{{item.Name}}\", type='checkbox', checked ,*ngIf=\"item.Display\")\n\t\t\t\t\t\t\t\tinput.tgl.tgl-flat(id=\"{{item.Name}}\",type='checkbox',*ngIf=\"!item.Display\")\n\t\t\t\t\t\t\t\tlabel.tgl-btn(for='')\n\t.box-footer");
	}
	}

/***/ },

/***/ 1129:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"col-lg-8\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box free-size\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<h3 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
	buf.push("Welcome to BAONGUYEN, Nguyen");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h3>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi labore quia, repellendus ea culpa harum, saepe commodi eos tempore illum, praesentium quibusdam ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
	buf.push("eveniet quod ullam ");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("nostrum sed. Maiores, iure, vel.");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<hr>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"col-sm-12 xs-center sm-right\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<button type=\"button\" class=\"mrb-xs-1r btn btn-primary-outline\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 13, jade_debug[0].filename ));
	buf.push("I've set up my products");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</button>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 14, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<button type=\"button\" class=\"btn btn-success-outline\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
	buf.push("Import Products");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</button>");
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
	jade_debug.unshift(new jade.DebugItem( 16, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box free-size\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 17, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 18, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"media\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"media-left\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 20, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 21, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<img data-src=\"holder.js/64x64\" alt=\"64x64\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F64x64%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_153f4d897c4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_153f4d897c4%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%2F%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"width: 64px; height: 64px;\" class=\"media-object\">");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"media-body\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"media-heading\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, jade_debug[0].filename ));
	buf.push("Top aligned media");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 24, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<span class=\"label text-muted text-sm\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 24, jade_debug[0].filename ));
	buf.push("21 hours ago");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 25, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 26, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 27, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 28, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 29, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<hr>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 30, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"media\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"media-left\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 32, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 33, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<img data-src=\"holder.js/64x64\" alt=\"64x64\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F64x64%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_153f4d897c4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_153f4d897c4%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%2F%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"width: 64px; height: 64px;\" class=\"media-object\">");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 34, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"media-body\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"media-heading\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, jade_debug[0].filename ));
	buf.push("Donec sed odio dui");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 36, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push("Updated the Account: ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 37, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 37, jade_debug[0].filename ));
	buf.push("BAONGUYEN");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 38, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"list text-xs\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
	buf.push("Time Zone was changed from UTC to Asia/Bangkok");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 40, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 40, jade_debug[0].filename ));
	buf.push("Tax Label was changed to VAT");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 41, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 41, jade_debug[0].filename ));
	buf.push("Tax Number Label was changed to VAT Number");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 42, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 42, jade_debug[0].filename ));
	buf.push("Default Payment Method was changed to 190527");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 43, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 43, jade_debug[0].filename ));
	buf.push("Setup Complete was changed to true");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 44, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 44, jade_debug[0].filename ));
	buf.push("Billing Contact was changed to Nguyen Pham");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 45, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
	buf.push("Default Document Theme was changed to BAONGUYEN");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 46, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 46, jade_debug[0].filename ));
	buf.push("Default Payment Term was changed to NET30");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 47, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 47, jade_debug[0].filename ));
	buf.push("Default Payment Term was changed to NET30");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 48, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 48, jade_debug[0].filename ));
	buf.push("Primary Location was changed to Primary Location");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 49, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 49, jade_debug[0].filename ));
	buf.push("Primary Billing Location was changed to Primary Location");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 50, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 50, jade_debug[0].filename ));
	buf.push("Default Tax Exempt was changed to Tax Exempt (0.0%)");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 51, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 51, jade_debug[0].filename ));
	buf.push("Default Sales Order Tax Type was changed to Sales Tax (10.0%)");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 52, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 52, jade_debug[0].filename ));
	buf.push("Default Purchase Order Tax Type was changed to Purchases Tax (10.0%)");
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
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 53, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"col-lg-4\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 54, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box free-size\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 55, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 56, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<h4 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
	buf.push("Guided Tours");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h4>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 57, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<hr>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 58, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<p class=\"text-muted\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 58, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi labore quia, repellendus ea culpa harum, saepe commodi eos tempore illum, praesentium quibusdam eveniet quod ullam nostrum sed. Maiores, iure, vel.");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 59, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<ul class=\"nav\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 60, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 61, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 62, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 63, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 64, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Lorem ipsum dolor sit amet");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 65, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 66, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 67, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 68, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 69, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Consectetur adipiscing elit");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 70, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 71, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 72, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 73, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 74, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Integer molestie lorem at massa");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 75, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 76, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 77, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 78, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 79, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Facilisis in pretium nisl aliquet");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 80, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 80, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 81, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 82, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 83, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Nulla volutpat aliquam velit");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 84, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<ul>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 85, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 86, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 87, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Phasellus iaculis neque");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 88, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 89, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 90, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Purus sodales ultricies");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 91, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 92, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 93, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Vestibulum laoreet porttitor sem");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 94, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 95, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 96, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Ac tristique libero volutpat at");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 97, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 98, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 99, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 100, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 101, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Faucibus porta lacus fringilla vel");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 102, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 103, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 104, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 105, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 106, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Aenean sit amet erat nunc");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 107, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 108, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 109, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"icon ion-android-arrow-dropright\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 110, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push(" ");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 111, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Eget porttitor lorem");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 112, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box free-size\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 113, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 114, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<h3 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 114, jade_debug[0].filename ));
	buf.push("Stock To Receive");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h3>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 115, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 116, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 116, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi labore quia, repellendus ea culpa harum, saepe commodi eos tempore illum, praesentium quibusdam eveniet quod ullam nostrum sed. Maiores, iure, vel.");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 117, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<div class=\"list-group linkitem\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 118, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"list-group-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 119, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"fa fa-fw fa-file\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 120, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Home");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 121, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 121, jade_debug[0].filename ));
	buf.push("— BAONGUYEN (DEMO)");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 122, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"list-group-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 123, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"fa fa-fw fa-file\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 124, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Library");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 125, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"list-group-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 126, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"fa fa-fw fa-file\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 127, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Applications");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 128, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 128, jade_debug[0].filename ));
	buf.push("— BAONGUYEN (DEMO)");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 129, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<a href=\"#\" class=\"list-group-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 130, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("<i class=\"fa fa-fw fa-file\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 131, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/home/templates/start.jade" ));
	buf.push("Settings");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
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
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".row\n\t.col-lg-8\n\t\t.box.free-size\n\t\t\t.box-header\n\t\t\t\th3.title Welcome to BAONGUYEN, Nguyen\n\t\t\t.box-content.padding.padding-large\n\t\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi labore quia, repellendus ea culpa harum, saepe commodi eos tempore illum, praesentium quibusdam \n\t\t\t\t\ta(href=\"#\") eveniet quod ullam \n\t\t\t\t\t| nostrum sed. Maiores, iure, vel.\n\t\t\t\thr \n\t\t\t\t.row\n\t\t\t\t\t.col-sm-12.xs-center.sm-right\n\t\t\t\t\t\tbutton.mrb-xs-1r(type=\"button\" class=\"btn btn-primary-outline\") I've set up my products\n\t\t\t\t\t\t| \n\t\t\t\t\t\tbutton(type=\"button\" class=\"btn btn-success-outline\") Import Products\n\t\t.box.free-size\n\t\t\t.box-content.padding.padding-large\n\t\t\t\t.media\n\t\t\t\t\t.media-left\n\t\t\t\t\t\ta(href='#')\n\t\t\t\t\t\t\timg.media-object(data-src='holder.js/64x64', alt='64x64', src='data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F64x64%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_153f4d897c4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_153f4d897c4%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%2F%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E', data-holder-rendered='true', style='width: 64px; height: 64px;')\n\t\t\t\t\t.media-body\n\t\t\t\t\t\ta.media-heading(href=\"#\") Top aligned media\n\t\t\t\t\t\t\tspan.label.text-muted.text-sm 21 hours ago\n\t\t\t\t\t\tp\n\t\t\t\t\t\t\t| Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n\t\t\t\t\t\tp\n\t\t\t\t\t\t\t| Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\t\t\t\thr \n\t\t\t\t.media\n\t\t\t\t\t.media-left\n\t\t\t\t\t\ta(href='#')\n\t\t\t\t\t\t\timg.media-object(data-src='holder.js/64x64', alt='64x64', src='data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F64x64%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_153f4d897c4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_153f4d897c4%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%2F%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E', data-holder-rendered='true', style='width: 64px; height: 64px;')\n\t\t\t\t\t.media-body\n\t\t\t\t\t\ta.media-heading(href=\"#\") Donec sed odio dui\n\t\t\t\t\t\tp Updated the Account: \n\t\t\t\t\t\t\ta(href=\"#\") BAONGUYEN\n\t\t\t\t\t\t.list.text-xs\n\t\t\t\t\t\t\t.text-muted Time Zone was changed from UTC to Asia/Bangkok\n\t\t\t\t\t\t\t.text-muted Tax Label was changed to VAT\n\t\t\t\t\t\t\t.text-muted Tax Number Label was changed to VAT Number\n\t\t\t\t\t\t\t.text-muted Default Payment Method was changed to 190527\n\t\t\t\t\t\t\t.text-muted Setup Complete was changed to true\n\t\t\t\t\t\t\t.text-muted Billing Contact was changed to Nguyen Pham\n\t\t\t\t\t\t\t.text-muted Default Document Theme was changed to BAONGUYEN\n\t\t\t\t\t\t\t.text-muted Default Payment Term was changed to NET30\n\t\t\t\t\t\t\t.text-muted Default Payment Term was changed to NET30\n\t\t\t\t\t\t\t.text-muted Primary Location was changed to Primary Location\n\t\t\t\t\t\t\t.text-muted Primary Billing Location was changed to Primary Location\n\t\t\t\t\t\t\t.text-muted Default Tax Exempt was changed to Tax Exempt (0.0%)\n\t\t\t\t\t\t\t.text-muted Default Sales Order Tax Type was changed to Sales Tax (10.0%)\n\t\t\t\t\t\t\t.text-muted Default Purchase Order Tax Type was changed to Purchases Tax (10.0%)\n\t.col-lg-4\n\t\t.box.free-size\n\t\t\t.box-content.padding.padding-large\n\t\t\t\th4.title Guided Tours\n\t\t\t\thr\n\t\t\t\tp.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi labore quia, repellendus ea culpa harum, saepe commodi eos tempore illum, praesentium quibusdam eveniet quod ullam nostrum sed. Maiores, iure, vel.\n\t\t\t\tul.nav\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Lorem ipsum dolor sit amet\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Consectetur adipiscing elit\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Integer molestie lorem at massa\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Facilisis in pretium nisl aliquet\n\t\t\t\t\tli.nav-item \n\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t| \n\t\t\t\t\t\t| Nulla volutpat aliquam velit\n\t\t\t\t\t\tul\n\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\t\t\t| Phasellus iaculis neque\n\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\t\t\t| Purus sodales ultricies\n\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\t\t\t| Vestibulum laoreet porttitor sem\n\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\t\t\t| Ac tristique libero volutpat at\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Faucibus porta lacus fringilla vel\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Aenean sit amet erat nunc\n\t\t\t\t\tli.nav-item\n\t\t\t\t\t\ta.nav-link(href=\"#\")\n\t\t\t\t\t\t\ti.icon.ion-android-arrow-dropright\n\t\t\t\t\t\t\t| \n\t\t\t\t\t\t\t| Eget porttitor lorem\n\t\t.box.free-size\n\t\t\t.box-header\n\t\t\t\th3.title Stock To Receive\n\t\t\t.box-content.padding.padding-large\n\t\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi labore quia, repellendus ea culpa harum, saepe commodi eos tempore illum, praesentium quibusdam eveniet quod ullam nostrum sed. Maiores, iure, vel.\n\t\t\t\t.list-group.linkitem\n\t\t\t\t\ta.list-group-item(href='#')\n\t\t\t\t\t\ti.fa.fa-fw.fa-file\n\t\t\t\t\t\t| Home\n\t\t\t\t\t\tspan — BAONGUYEN (DEMO)\n\t\t\t\t\ta.list-group-item(href='#')\n\t\t\t\t\t\ti.fa.fa-fw.fa-file\n\t\t\t\t\t\t| Library\n\t\t\t\t\ta.list-group-item(href='#')\n\t\t\t\t\t\ti.fa.fa-fw.fa-file\n\t\t\t\t\t\t| Applications\n\t\t\t\t\t\tspan — BAONGUYEN (DEMO)\n\t\t\t\t\ta.list-group-item(href='#')\n\t\t\t\t\t\ti.fa.fa-fw.fa-file\n\t\t\t\t\t\t| Settings");
	}
	}

/***/ },

/***/ 1138:
/***/ function(module, exports) {

	module.exports = "/*styles for home content only*/\n.card-container{\n    display: flex;\n    flex-direction: column;\n    margin: 15px;\n    \n    border: 2px dashed #FBC02D;\n}\n.sample-content{\n    flex: 1;\n}\n.card-container md-card{\n    margin: 5px;\n}"

/***/ }

});
//# sourceMappingURL=1.aebd0ef4e803eea7a215.map