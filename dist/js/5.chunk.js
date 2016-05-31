webpackJsonp([5],{

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1086));
	

/***/ },

/***/ 1086:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var ng2_bootstrap_1 = __webpack_require__(104);
	var base_controller_1 = __webpack_require__(549);
	/*
	* We're loading this component asynchronously
	* We are using some magic with es6-promise-loader that will wrap the module with a Promise
	* see https://github.com/gdi2290/es6-promise-loader for more info
	*/
	var About = (function (_super) {
	    __extends(About, _super);
	    function About() {
	        _super.call(this);
	        this.DisableBreadcrumb = true;
	        this.NAV_oneAtATime = true;
	        this.status = {
	            isFirstOpen: true,
	            isFirstDisabled: false
	        };
	    }
	    About.prototype.ngOnInit = function () {
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    About.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            directives: [
	                ng2_bootstrap_1.ACCORDION_DIRECTIVES
	            ],
	            template: __webpack_require__(1114)()
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	}(base_controller_1.BaseController));
	exports.About = About;
	

/***/ },

/***/ 1114:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (undefined) {
	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<section class=\"{{ComponentClass}}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"subheader mrb-2r\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"container-fluid\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"col-xs-9\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
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
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
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
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<article class=\"content mrb-2r\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"container-fluid\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"col-xl-offset-1 col-xl-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 13, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"col-md-8 col-lg-9\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push(null == (jade_interp = __webpack_require__(1115).call(this, locals)) ? "" : jade_interp);
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 15, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"col-md-4 col-lg-3\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 16, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<nav class=\"accmenu\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 17, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"flex flex-col\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 18, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<accordion [closeOthers]=\"NAV_oneAtATime\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 19, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 20, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-android-list\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 21, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 21, jade_debug[0].filename ));
	buf.push("About us");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<accordion-group #dashboard=\"\" [isOpen]=\"status.isFirstOpen\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div accordion-heading>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 24, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 25, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-monitor\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 26, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 26, jade_debug[0].filename ));
	buf.push("Dashboard");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 27, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<em [ngClass]=\"{'ion-android-arrow-dropup': dashboard?.isOpen, 'ion-android-arrow-dropdown': !dashboard?.isOpen}\" class=\"pull-right icon\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</em>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 28, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"content\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 29, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<ul class=\"nav\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 30, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<a href=\"javascript:void(0);\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 32, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-monitor\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 33, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 33, jade_debug[0].filename ));
	buf.push("Home  ");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 34, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<a href=\"javascript:void(0);\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 35, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 36, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-monitor\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 37, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 37, jade_debug[0].filename ));
	buf.push("About  ");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 38, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<a href=\"javascript:void(0);\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 40, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-monitor\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 41, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 41, jade_debug[0].filename ));
	buf.push("Home  ");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 42, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<li class=\"nav-item\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 43, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<a href=\"javascript:void(0);\" class=\"nav-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 43, jade_debug[0].filename ));
	buf.push(" ");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 44, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-monitor\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 45, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
	buf.push("About");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
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
	buf.push("</accordion-group>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 46, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<accordion-group>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 47, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div accordion-heading=\"fg\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 48, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 49, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-ios-pulse-strong\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 50, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 50, jade_debug[0].filename ));
	buf.push("Live FX Rates");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</accordion-group>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 51, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<accordion-group>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 52, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div accordion-heading>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 53, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<div class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 54, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<i class=\"icon ion-arrow-graph-up-right\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 55, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/about.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 55, jade_debug[0].filename ));
	buf.push("My Rates");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</accordion-group>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</accordion>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</nav>");
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
	jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "section(class=\"{{ComponentClass}}\")\n\t.subheader.mrb-2r\n\t\t.container-fluid\n\t\t\t.row\n\t\t\t\t.col-xs-9\n\t\t\t\t\th2.title About Us\n\t\t\t\t.col-xs-3\n\tarticle.content.mrb-2r\n\t\t.container-fluid\n\t\t\t.row\n\t\t\t\t.col-xl-offset-1.col-xl-10\n\t\t\t\t\t.row\n\t\t\t\t\t\t.col-md-8.col-lg-9\n\t\t\t\t\t\t\tinclude ./aboutcontent.jade\n\t\t\t\t\t\t.col-md-4.col-lg-3\n\t\t\t\t\t\t\tnav.accmenu\n\t\t\t\t\t\t\t\t.flex.flex-col\n\t\t\t\t\t\t\t\t\taccordion([closeOthers]='NAV_oneAtATime')\n\t\t\t\t\t\t\t\t\t\t.header\n\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-android-list\n\t\t\t\t\t\t\t\t\t\t\tspan About us\n\t\t\t\t\t\t\t\t\t\taccordion-group(#dashboard='', [isOpen]=\"status.isFirstOpen\")\n\t\t\t\t\t\t\t\t\t\t\tdiv(accordion-heading)\n\t\t\t\t\t\t\t\t\t\t\t\t.title\n\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-monitor\n\t\t\t\t\t\t\t\t\t\t\t\t\tspan Dashboard\n\t\t\t\t\t\t\t\t\t\t\t\t\tem.pull-right.icon([ngClass]=\"{'ion-android-arrow-dropup': dashboard?.isOpen, 'ion-android-arrow-dropdown': !dashboard?.isOpen}\")\n\t\t\t\t\t\t\t\t\t\t\t.content\n\t\t\t\t\t\t\t\t\t\t\t\tul.nav\n\t\t\t\t\t\t\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ta.nav-link(href=\"javascript:void(0);\") \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-monitor\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tspan Home  \n\t\t\t\t\t\t\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ta.nav-link(href=\"javascript:void(0);\") \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-monitor\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tspan About  \n\t\t\t\t\t\t\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ta.nav-link(href=\"javascript:void(0);\") \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-monitor\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tspan Home  \n\t\t\t\t\t\t\t\t\t\t\t\t\tli.nav-item\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ta.nav-link(href=\"javascript:void(0);\") \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-monitor\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tspan About\n\t\t\t\t\t\t\t\t\t\taccordion-group\n\t\t\t\t\t\t\t\t\t\t\tdiv(accordion-heading='fg')\n\t\t\t\t\t\t\t\t\t\t\t\t.title\n\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-ios-pulse-strong\n\t\t\t\t\t\t\t\t\t\t\t\t\tspan Live FX Rates\n\t\t\t\t\t\t\t\t\t\taccordion-group\n\t\t\t\t\t\t\t\t\t\t\tdiv(accordion-heading)\n\t\t\t\t\t\t\t\t\t\t\t\t.title\n\t\t\t\t\t\t\t\t\t\t\t\t\ti.icon.ion-arrow-graph-up-right\n\t\t\t\t\t\t\t\t\t\t\t\t\tspan My Rates");
	}
	}

/***/ },

/***/ 1115:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(32);

	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_debug.unshift(new jade.DebugItem( 0, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<section class=\"{{ComponentClass}}\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<div class=\"box box-lg free-size\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<div class=\"box-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<h3 class=\"title\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
	buf.push("About Us");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h3>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 5, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<div class=\"box-content padding padding-large\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 7, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 8, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 9, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 10, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 12, "/Users/Nguyen-Get4X/Documents/Website/baonguyenyam.github.io/src/app/components/about/templates/aboutcontent.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 12, jade_debug[0].filename ));
	buf.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!");
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
	jade_debug.shift();
	buf.push("</section>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "section(class=\"{{ComponentClass}}\")\n\t.box.box-lg.free-size\n\t\t.box-header\n\t\t\th3.title About Us\n\t\t.box-content.padding.padding-large\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n\t\t\tp Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi doloribus vel odit cupiditate, possimus mollitia recusandae, dignissimos modi minus, odio quae architecto rerum voluptates. Numquam ratione voluptas accusantium, ipsa!\n");
	}
	}

/***/ }

});
//# sourceMappingURL=5.aebd0ef4e803eea7a215.map