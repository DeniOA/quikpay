(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication-authentication-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./recipient-list/recipient-list.module": [
		"./src/app/recipient-list/recipient-list.module.ts",
		"common",
		"recipient-list-recipient-list-module"
	],
	"./transfer/transfer.module": [
		"./src/app/transfer/transfer.module.ts",
		"common",
		"transfer-transfer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/auth-layout.component */ "./src/app/layouts/auth-layout.component.ts");
/* harmony import */ var _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full-layout.component */ "./src/app/layouts/full-layout.component.ts");






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            title: 'Home'
        },
    },
    {
        path: '',
        component: _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        data: {
            title: 'Authentication'
        },
        children: [
            {
                path: '',
                loadChildren: './authentication/authentication.module#AuthenticationModule',
            }
        ]
    },
    {
        path: '',
        component: _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullLayoutComponent"],
        data: {
            title: ''
        },
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: '',
                loadChildren: './transfer/transfer.module#TransferModule'
            },
            {
                path: '',
                loadChildren: './recipient-list/recipient-list.module#RecipientListModule'
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'quickpay';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'body',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm5/angular4-paystack.js");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/auth-layout.component */ "./src/app/layouts/auth-layout.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/layouts/navbar/navbar.component.ts");
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/sidebar/sidebar.component */ "./src/app/layouts/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/full-layout.component */ "./src/app/layouts/full-layout.component.ts");






// import { MDBBootstrapModule } from 'angular-bootstrap-md';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"],
                _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_14__["FullLayoutComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular4_paystack__WEBPACK_IMPORTED_MODULE_7__["Angular4PaystackModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                ng_shopping_cart__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartModule"].forRoot({
                    serviceType: 'localStorage',
                    serviceOptions: {
                        storageKey: 'NgShoppingCart',
                        clearOnError: true
                    }
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"st-nav navbar main-nav navigation fixed-top\">\n    <div class=\"container\">\n    <ul class=\"st-nav-menu nav navbar-nav\">\n     <li class=\"st-nav-section nav-item\">\n     <a href=\"#main\" class=\"navbar-brand\">\n    <img src=\"assets/img/logo.jpeg\" alt=\"Dashcore\" class=\"logo logo-sticky d-block d-md-none\"> \n    <img src=\"assets/img/logo.jpeg\" alt=\"Dashcore\" class=\"logo d-none d-md-block\">\n     </a>\n    </li>\n    <li class=\"st-nav-section st-nav-primary nav-item\">\n    <a class=\"st-root-link nav-link\" href=\"\">Home </a>\n    \n    </li>\n    <li class=\"st-nav-section st-nav-secondary nav-item\">\n      <button class=\"btn btn-rounded btn-outline mr-3 px-3\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n         <i class=\"fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2\"></i>\n         <span class=\"d-md-none d-lg-inline\">Login</span>\n        </button>\n   \n   <button class=\"btn btn-rounded btn-outline mr-3 px-3\" routerLinkActive=\"active\" [routerLink]=\"['/signup']\">\n    <i class=\"fas fa-user-plus d-none d-md-inline mr-md-0 mr-lg-2\"></i> \n    <span class=\"d-md-none d-lg-inline\">Signup</span>\n  </button>\n  \n    </li>\n    </ul>\n    </div>\n    </nav>\n    <main>\n            <!-- ./Page header -->\n    <header class=\"header online-payment-header section color-1 alpha-8\">\n    <div id=\"stripes\">\n    <span></span><span></span><span></span><span></span><span></span>\n    </div>\n    <div class=\"container overflow-hidden bring-to-front\">\n    <div class=\"row\">\n    <div class=\"col-md-6\">\n    <h1 class=\"color-1 bold\">Buy and Pay Online <span class=\"d-block light\">from anywhere, any time</span></h1>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore excepturi explicabo, harum in laudantium nulla officiis reprehenderit!</p>\n    </div>\n    <div class=\"col-md-6\"><img src=\"assets/img/bg/online-payment.svg\" class=\"img-hero img-responsive absolute-md\" alt=\"\"></div></div></div></header>\n    <!-- ./Online Payment - Features -->\n    <section id=\"features\" class=\"section bg-1 edge top-left\">\n    <div class=\"container\">\n    <div class=\"section-heading mb-6 text-center\">\n    \n    <h2>Know what you can do Online</h2></div>\n    <div class=\"row gap-y text-center text-md-left\">\n    <div class=\"col-md-4 py-4 rounded shadow-hover text-center\">\n    <div class=\"icon-shape mb-4\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 276.1 281.01\" class=\"shape shape-xxl drop-shadow\"><defs><style>.cls-1{opacity:0.8;fill:url(#linear-gradient);}</style><style>.cls-1{fill:#53f;}</style><linearGradient id=\"linear-gradient\" y1=\"140.5\" x2=\"276.1\" y2=\"140.5\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#53f\"/><stop offset=\"1\" stop-color=\"#05d5ff\"/></linearGradient></defs><title>Recurso 4</title><g id=\"layer_2\" data-name=\"layer 2\"><g id=\"OBJECTS\"><path class=\"cls-1\" d=\"M261.95,86.82a83.45,83.45,0,0,0-8.57-10.71l0,0s-50.84-57.89-137-73.9l0,0A92.94,92.94,0,0,0,5,77.21c-17.58,85.56,16.63,154.31,16.83,154.72a83.17,83.17,0,0,0,6.67,11.93c21.11,31.38,60.18,43.83,96.07,33.7,0,0,58.12-14.28,123.33-79h0C278.76,169,285.58,121.95,261.95,86.82Z\"/></g></g></svg> <i class=\"pe pe-7s-refresh-2 pe-3x color-1 icon center-xy\"></i>\n    </div>\n    <h5 class=\"bold text-capitalize\">seamless payment</h5>\n    <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam. Assumenda dolore error nulla pariatur voluptatem?</p>\n    </div>\n    <div class=\"col-md-4 py-4 rounded shadow-hover text-center\">\n    <div class=\"icon-shape mb-4\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 276.1 281.01\" class=\"shape shape-xxl drop-shadow\"><defs><style>.cls-1{opacity:0.8;fill:url(#linear-gradient);}</style><style>.cls-1{fill:#53f;}</style><linearGradient id=\"linear-gradient\" y1=\"140.5\" x2=\"276.1\" y2=\"140.5\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#53f\"/><stop offset=\"1\" stop-color=\"#05d5ff\"/></linearGradient></defs><title>Recurso 4</title><g id=\"layer_2\" data-name=\"layer 2\"><g id=\"OBJECTS\"><path class=\"cls-1\" d=\"M261.95,86.82a83.45,83.45,0,0,0-8.57-10.71l0,0s-50.84-57.89-137-73.9l0,0A92.94,92.94,0,0,0,5,77.21c-17.58,85.56,16.63,154.31,16.83,154.72a83.17,83.17,0,0,0,6.67,11.93c21.11,31.38,60.18,43.83,96.07,33.7,0,0,58.12-14.28,123.33-79h0C278.76,169,285.58,121.95,261.95,86.82Z\"/></g></g></svg> <i class=\"pe pe-7s-graph1 pe-3x color-1 icon center-xy\"></i>\n    </div>\n    <h5 class=\"bold text-capitalize\">insightfull analytics</h5>\n    <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam. Assumenda dolore error nulla pariatur voluptatem?</p>\n    </div>\n    <div class=\"col-md-4 py-4 rounded shadow-hover text-center\"><div class=\"icon-shape mb-4\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 276.1 281.01\" class=\"shape shape-xxl drop-shadow\"><defs><style>.cls-1{opacity:0.8;fill:url(#linear-gradient);}</style><style>.cls-1{fill:#53f;}</style><linearGradient id=\"linear-gradient\" y1=\"140.5\" x2=\"276.1\" y2=\"140.5\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#53f\"/><stop offset=\"1\" stop-color=\"#05d5ff\"/></linearGradient></defs><title>Recurso 4</title><g id=\"layer_2\" data-name=\"layer 2\"><g id=\"OBJECTS\"><path class=\"cls-1\" d=\"M261.95,86.82a83.45,83.45,0,0,0-8.57-10.71l0,0s-50.84-57.89-137-73.9l0,0A92.94,92.94,0,0,0,5,77.21c-17.58,85.56,16.63,154.31,16.83,154.72a83.17,83.17,0,0,0,6.67,11.93c21.11,31.38,60.18,43.83,96.07,33.7,0,0,58.12-14.28,123.33-79h0C278.76,169,285.58,121.95,261.95,86.82Z\"/></g></g></svg> <i class=\"pe pe-7s-wallet pe-3x color-1 icon center-xy\"></i>\n    </div>\n    <h5 class=\"bold text-capitalize\">online wallet</h5>\n    <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam. Assumenda dolore error nulla pariatur voluptatem?</p>\n    </div>\n    </div>\n    </div>\n    </section>\n    <!-- Features -->\n    <section class=\"section\">\n    <div class=\"shape-wrapper\">\n    <div class=\"shape shape-background shape-right\">\n    \n    </div>\n    <div class=\"shape shape-background top shape-left bg-4 op-1\">\n    \n    </div>\n    </div>\n    <div class=\"container pb-9\">\n    <div class=\"row gap-y align-items-center py-5\">\n    <div class=\"col-md-6\">\n    <figure data-aos=\"fade-right\">\n    <img src=\"assets/img/shps/payments/register.svg\" class=\"img-responsive w-50\" alt=\"\">\n    <img src=\"assets/img/shps/payments/register-click.svg\" class=\"img-responsive absolute w-50\" alt=\"\" style=\"bottom: 10%; left: 125px;\" data-aos=\"fade-up\"></figure>\n    </div>\n    <div class=\"col-md-6\">\n    <div class=\"icon-xxl mb-4\">\n    <div class=\"icon-shape\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.98 213.35\" class=\"shape shape-xxl drop-shadow\"><defs><style>.cls-shape{fill:#1fa2ff;}</style></defs><title>shape-4</title><g id=\"layer_1\" data-name=\"layer_1\"><g id=\"OBJECTS\"><path class=\"cls-shape\" d=\"M92.2.36c58.51-4,85.65,25.71,100.68,65.52s37.29,53.51,21.92,99.33-70.9,51.88-92.59,46.52S78,192.49,51,182.07C10.79,166.56.86,146.16.06,126.06-1.07,97.63,13.92,94.45,18.73,63.28,24.51,25.93,46.43,3.47,92.2.36Z\"/></g></g></svg> <i class=\"icon fas fa-2x fa-user center-xy color-1\"></i>\n    </div>\n    </div>\n    <h2 class=\"bold text-capitalize\">register free</h2>\n    <p class=\"regular\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dolorem eaque est eum fugit harum maiores minima nisi nobis, possimus, quas qui quo ratione sequi suscipit vel vero voluptas?</p>\n    <a href=\"javascript:;\" class=\"btn gradient gradient-43 color-1 btn-rounded btn-outline-1 bw-2 bold mt-4\">Sign Up Free</a>\n    </div>\n    </div>\n    <div class=\"row gap-y align-items-center py-5\">\n    <div class=\"col-md-6 order-md-2\">\n    <figure data-aos=\"fade-left\">\n    <img src=\"assets/img/shps/payments/configure.svg\" class=\"img-responsive\" alt=\"\"></figure>\n    </div>\n    <div class=\"col-md-6\">\n    <div class=\"icon-xxl mb-4\">\n    <div class=\"icon-shape\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.98 213.35\" class=\"shape shape-xxl drop-shadow\"><defs>\n            <style>.cls-shape{fill:#1fa2ff;}</style></defs><title>shape-4</title><g id=\"layer_1\" data-name=\"layer_1\"><g id=\"OBJECTS\"><path class=\"cls-shape\" d=\"M92.2.36c58.51-4,85.65,25.71,100.68,65.52s37.29,53.51,21.92,99.33-70.9,51.88-92.59,46.52S78,192.49,51,182.07C10.79,166.56.86,146.16.06,126.06-1.07,97.63,13.92,94.45,18.73,63.28,24.51,25.93,46.43,3.47,92.2.36Z\"/></g></g></svg> <i class=\"icon fas fa-2x fa-users-cog center-xy color-1\"></i>\n    </div>\n    </div>\n    <h2 class=\"bold text-capitalize\">configure your sourcing</h2>\n    <p class=\"regular\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dolorem eaque est eum fugit harum maiores minima nisi nobis, possimus, quas qui quo ratione sequi suscipit vel vero voluptas?</p>\n    <a href=\"javascript:;\" class=\"btn gradient gradient-43 color-1 btn-rounded btn-outline-1 bw-2 bold mt-4\">Learn More</a>\n    </div>\n    </div>\n    <div class=\"row gap-y align-items-center py-5\">\n    <div class=\"col-md-6\">\n    <figure data-aos=\"fade-right\"><img src=\"assets/img/shps/payments/receive.svg\" class=\"img-responsive\" alt=\"\"></figure>\n    </div>\n    <div class=\"col-md-6\">\n    <div class=\"icon-xxl mb-4\">\n    <div class=\"icon-shape\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.98 213.35\" class=\"shape shape-xxl drop-shadow\"><defs><style>.cls-shape{fill:#1fa2ff;}</style></defs><title>shape-4</title><g id=\"layer_1\" data-name=\"layer_1\"><g id=\"OBJECTS\"><path class=\"cls-shape\" d=\"M92.2.36c58.51-4,85.65,25.71,100.68,65.52s37.29,53.51,21.92,99.33-70.9,51.88-92.59,46.52S78,192.49,51,182.07C10.79,166.56.86,146.16.06,126.06-1.07,97.63,13.92,94.45,18.73,63.28,24.51,25.93,46.43,3.47,92.2.36Z\"/></g></g></svg> <i class=\"icon fas fa-2x fa-user-shield center-xy color-1\"></i>\n    </div>\n    </div>\n    <h2 class=\"bold text-capitalize\">start receiving payments</h2>\n    <p class=\"regular\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dolorem eaque est eum fugit harum maiores minima nisi nobis, possimus, quas qui quo ratione sequi suscipit vel vero voluptas?</p>\n    <a href=\"javascript:;\" class=\"btn gradient gradient-43 color-1 btn-rounded btn-outline-1 bw-2 bold mt-4\">Learn More</a></div></div></div></section>\n    \n           \n    <!-- ./Features - hover animated -->\n    <section class=\"section bg-6 send-and-receive\">\n      <div class=\"container bring-to-front\">\n        <div class=\"row gap-y\">\n          <div class=\"col-md-6\">\n            <div class=\"rounded bg-1 shadow-box image-background contain off-left-background p-4 pl-6 pl-md-9\" style=\"background-image: url(assets/img/shps/payments/send.svg)\">\n              <h3>Send Payments</h3>\n              <p class=\"color-2 mb-0\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet nihil perspiciatis quia quidem quod ratione sapiente sint?\n              </p>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"rounded bg-1 shadow-box image-background contain off-left-background p-4 pl-6 pl-md-9\" style=\"background-image: url(assets/img/shps/payments/get.svg)\">\n              <h3>Receive Payment</h3>\n              <p class=\"color-2 mb-0\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet nihil perspiciatis quia quidem quod ratione sapiente sint?</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- ./CTA - Create Account -->\n    <section class=\"section bg-1 edge top-left b-b\">\n            <div class=\"container pt-5\">\n                    <div class=\"d-flex align-items-center flex-column flex-md-row\">\n                            <div class=\"text-center text-md-left\">\n                                    <p class=\"light mb-0 accent lead\">Ready to get started?</p>\n                                    <h2 class=\"mt-0\">Create an account now</h2>\n                            </div>\n                            <a href=\"\" class=\"btn btn-accent btn-rounded mt-3 mt-md-0 ml-md-auto\">Create Paystack account</a>\n                    </div>\n            </div>\n    </section>\n    </main>\n    <!-- ./Footer - Simple -->\n    <footer class=\"site-footer section block bg-1\">\n            <div class=\"container py-4\">\n                    <div class=\"row align-items-center\">\n                            <div class=\"col-md-5 text-center text-md-left\">\n                                    <nav class=\"nav justify-content-center justify-content-md-start\"><a class=\"nav-item nav-link\" href=\"\">About</a> <a class=\"nav-item nav-link\" href=\"#\">Services</a> \n                                            <a class=\"nav-item nav-link\" href=\"\">Blog</a>\n                                    </nav>\n                            </div>\n                            <div class=\"col-md-2 text-center\">\n                                    <img src=\"assets/img/logo.png\" alt=\"\" class=\"logo\">\n                            </div>\n                                    <div class=\"col-md-5 text-center text-md-right\"><p class=\"mt-2 mb-0 color-2 small\">© 2018 5studios. All Rights Reserved</p>\n                                    </div>\n                            </div>\n                    </div>\n            </footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/auth-layout.component.ts ***!
  \**************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full-layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/full-layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n\n<div class=\"main-content\">\n  <app-navbar></app-navbar>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/full-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/full-layout.component.ts ***!
  \**************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
    };
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full-layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n    <div class=\"container-fluid\">\n      <!-- Toggler -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\" aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <!-- Brand -->\n      <a class=\"navbar-brand pt-0\" href=\"./index.html\">\n        <img src=\"../../../assets/assets1/img/brand/logo.jpeg\" class=\"navbar-brand-img\" alt=\"...\">\n      </a>\n      <!-- User -->\n      <ul class=\"nav align-items-center d-md-none\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link nav-link-icon\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ni ni-bell-55\"></i>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\n\">\n              </span>\n            </div>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n            <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span>Settings</span>\n            </a>\n            <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n              <i class=\"ni ni-calendar-grid-58\"></i>\n              <span>Activity</span>\n            </a>\n            <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n              <i class=\"ni ni-support-16\"></i>\n              <span>Support</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a href=\"#!\" class=\"dropdown-item\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n      <!-- Collapse -->\n      <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"./index.html\">\n                <img src=\"../../../assets/assets1/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\" aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Form -->\n        <form class=\"mt-4 mb-3 d-md-none\">\n          <div class=\"input-group input-group-rounded input-group-merge\">\n            <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\">\n                <span class=\"fa fa-search\"></span>\n              </div>\n            </div>\n          </div>\n        </form>\n        <!-- Navigation -->\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"  class=\"active\">\n          <a class=\" nav-link active \" href=\" ./index.html\"> <i class=\"ni ni-tv-2 text-primary\"></i> Dashboard\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link \" routerLinkActive=\"active\" [routerLink]=\"['/transfer']\">\n              <i class=\"ni ni-planet text-blue\"></i> Create Recipient\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link \" routerLinkActive=\"active\" [routerLink]=\"['/recipient-list']\">\n              <i class=\"ni ni-pin-3 text-orange\"></i> Transfer\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"./examples/profile.html\">\n              <i class=\"ni ni-single-02 text-yellow\"></i> User profile\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"./examples/login.html\">\n              <i class=\"ni ni-key-25 text-info\"></i> Logout\n            </a>\n          </li>\n        </ul>\n        <!-- Divider -->\n        <hr class=\"my-3\">\n      \n        <!-- Navigation -->\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layouts/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/sidebar/sidebar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/sidebar/sidebar.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a\n      class=\"h4 mb-0 text-black text-uppercase d-none d-lg-inline-block\"\n      style=\"margin-left: 16rem;\"\n      href=\"./index.html\"\n      >Dashboard</a\n    >\n    <!-- Form -->\n    <form\n      class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\"\n    >\n      <div class=\"form-group mb-0\">\n        <div class=\"input-group input-group-alternative\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" />\n        </div>\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item dropdown\">\n        <a\n          class=\"nav-link pr-0\"\n          href=\"#\"\n          role=\"button\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img\n                alt=\"Image placeholder\"\n                src=\"assets/assets1/img/theme/team-4-800x800.jpg\"\n              />\n            </span>\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">Jessica Jones</span>\n            </div>\n          </div>\n        </a>\n        <div\n          class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right text-black\"\n        >\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a href=\"./examples/profile.html\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- End Navbar -->\n"

/***/ }),

/***/ "./src/app/layouts/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layouts/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/layouts/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deni/Desktop/quickpay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map