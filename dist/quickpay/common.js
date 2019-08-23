(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/transfer/services/transfer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/transfer/services/transfer.service.ts ***!
  \*******************************************************/
/*! exports provided: transferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferService", function() { return transferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var transferService = /** @class */ (function () {
    function transferService(http) {
        this.http = http;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk_test_3df29e03db0a01e75e4026512cd51acd671f3b38',
            })
        };
    }
    transferService.prototype.newRecipient = function (recipient) {
        console.log(recipient);
        return this.http.post('https://api.paystack.co/transferrecipient', recipient, this.options);
    };
    transferService.prototype.transferRecipient = function (transfer) {
        console.log(transfer);
        return this.http.post('https://api.paystack.co/transfer', transfer, this.options);
    };
    transferService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    transferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], transferService);
    return transferService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map