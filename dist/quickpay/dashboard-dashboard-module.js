(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




var routes = [
    {
        path: 'dashboard',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        },
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header  pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                    Transactions\n                  </h5>\n                  <span class=\"h2 font-weight-bold mb-0\">350</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"icon icon-shape bg-danger text-white rounded-circle shadow\"\n                  >\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"\n                  ><i class=\"fa fa-arrow-up\"></i> 3.48%</span\n                >\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                    New Recipients\n                  </h5>\n                  <span class=\"h2 font-weight-bold mb-0\">25</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"icon icon-shape bg-warning text-white rounded-circle shadow\"\n                  >\n                    <i class=\"fas fa-chart-pie\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"\n                  ><i class=\"fas fa-arrow-down\"></i> 3.48%</span\n                >\n                <span class=\"text-nowrap\">Since last week</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                    Sales\n                  </h5>\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\"\n                  >\n                    <i class=\"fas fa-users\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"\n                  ><i class=\"fas fa-arrow-down\"></i> 1.10%</span\n                >\n                <span class=\"text-nowrap\">Since yesterday</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                    Performance\n                  </h5>\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"icon icon-shape bg-info text-white rounded-circle shadow\"\n                  >\n                    <i class=\"fas fa-percent\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"\n                  ><i class=\"fas fa-arrow-up\"></i> 12%</span\n                >\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            ],
            exports: [],
            providers: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map