(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/auth-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/auth-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");





var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        data: {
            title: 'Signup Page'
        }
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  authentication works!\n</p>\n"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/authentication.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/authentication/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication.component */ "./src/app/authentication/authentication.component.ts");







// import { P404Component } from '';

// import { ChangePasswordComponent } from '';
// import { ForgotPasswordComponent } from '';
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _authentication_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationComponent"],
            ],
            providers: []
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"container-fluid\">\n    <div class=\"row align-items-center\">\n    <div class=\"col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-53 alpha-7 image-background cover\" style=\"background-image:url(https://picsum.photos/1920/1200/?random&amp;gravity=south)\">\n    <div class=\"content\">\n    <h2 class=\"display-4 display-md-3 color-1 mt-4 mt-md-0\">Welcome to <span class=\"bold d-block\">QuickPay</span></h2>\n    <p class=\"lead color-1 alpha-5\">Login to your account</p>\n    <hr class=\"mt-md-6 w-25\"><div class=\"d-flex flex-column\">\n    <p class=\"small bold color-1\">Or sign in with</p>\n    <nav class=\"nav mb-4\">\n    <a class=\"btn btn-rounded btn-outline-2 brand-facebook mr-2\" href=\"#\"><i class=\"fab fa-facebook-f\"></i></a> \n    <a class=\"btn btn-rounded btn-outline-2 brand-twitter mr-2\" href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n    <a class=\"btn btn-rounded btn-outline-2 brand-linkedin\" href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a>\n    </nav>\n    </div>\n    </div>\n    </div>\n    <div class=\"col-md-5 col-lg-4 mx-auto\">\n    <div class=\"login-form mt-5 mt-md-0\">\n    <img src=\"assets/img/logo.png\" class=\"logo img-responsive mb-4 mb-md-6\" alt=\"\">\n    <h1 class=\"color-5 bold\">Login</h1><p class=\"color-2 mt-0 mb-4 mb-md-6\">Don't have an account yet? <a href=\"\" class=\"accent bold\">Create it here</a>\n    </p>\n    <form class=\"cozy\" action=\"\" data-validate-on=\"submit\" novalidate>\n    <label class=\"control-label bold small text-uppercase color-2\">Username</label>\n    <div class=\"form-group has-icon\"><input type=\"text\" id=\"login_username\" name=\"Login[username]\" class=\"form-control form-control-rounded\" placeholder=\"Your registered username\" required> <i class=\"icon fas fa-user\"></i>\n    </div>\n    <label class=\"control-label bold small text-uppercase color-2\">Password</label>\n    <div class=\"form-group has-icon\">\n    <input type=\"password\" id=\"login_password\" name=\"Login[password]\" class=\"form-control form-control-rounded\" placeholder=\"Your password\" required> <i class=\"icon fas fa-lock\"></i>\n    </div>\n    <div class=\"form-group d-flex align-items-center justify-content-between\">\n    <a href=\"\" class=\"text-warning small\">Forgot your password?</a>\n    <div class=\"ajax-button\">\n            <div class=\"fas fa-check btn-status text-success success\"></div>\n    <div class=\"fas fa-times btn-status text-danger failed\"></div>\n    <button type=\"submit\" class=\"btn btn-accent btn-rounded\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Login <i class=\"fas fa-long-arrow-alt-right ml-2\"></i></button>\n    </div>\n    </div>\n    </form>\n    </div>\n    </div>\n    </div>\n    </div>\n    </main>"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authentication/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map