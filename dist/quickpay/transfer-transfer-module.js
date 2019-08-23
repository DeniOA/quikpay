(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-transfer-module"],{

/***/ "./src/app/transfer/transfer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/transfer/transfer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TransferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferRoutingModule", function() { return TransferRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfer.component */ "./src/app/transfer/transfer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: 'transfer',
        component: _transfer_component__WEBPACK_IMPORTED_MODULE_3__["TransferComponent"],
        data: {
            title: 'Transfer'
        },
    },
];
var TransferRoutingModule = /** @class */ (function () {
    function TransferRoutingModule() {
    }
    TransferRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], TransferRoutingModule);
    return TransferRoutingModule;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.component.html":
/*!**************************************************!*\
  !*** ./src/app/transfer/transfer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header  pb-8 pt-5 pt-md-8\">\n  <div class=\"container\">\n    <span class=\"\"></span>\n    <div class=\"container-fluid d-flex align-items-right\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 order-xl-1\">\n          <div class=\"card \">\n            <div class=\"card-header bg-white border-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-8\">\n                  <h3 class=\"mb-0\">Create New Recipient</h3>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-body\">\n              <form\n                #recipientForm=\"ngForm\"\n                (ngSubmit)=\"createRecipient(recipientForm.form)\"\n                novalidate\n              >\n                <div class=\"pl-lg-4\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label for=\"type\" class=\"form-control-label\"\n                          >Account Type</label\n                        >\n                        <select\n                          class=\"form-control\"\n                          id=\"type\"\n                          name=\"type\"\n                          required\n                          #nameField=\"ngModel\"\n                          ngModel\n                        >\n                          <option value=\"nuban\">Nuban</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"name\"\n                          >Name</label\n                        >\n                        <input\n                          type=\"text\"\n                          id=\"name\"\n                          name=\"name\"\n                          class=\"form-control form-control-alternative\"\n                          placeholder=\"Recipient Name\"\n                          ngModel\n                          #nameField=\"ngModel\"\n                          required\n                        />\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"account_number\"\n                          >Account Number</label\n                        >\n                        <input\n                          type=\"text\"\n                          id=\"account_number\"\n                          name=\"account_number\"\n                          class=\"form-control form-control-alternative\"\n                          placeholder=\"account number\"\n                          ngModel\n                          #nameField=\"ngModel\"\n                          required\n                          minlength=\"10\"\n                        />\n                      </div>\n                      <div\n                        class=\"alert alert-danger\"\n                        *ngIf=\"nameField.touched && !nameField.valid\"\n                      >\n                        The account number is required\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                      <label for=\"bank_code\" class=\"form-control-label\"\n                        >Choose Bank</label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"bank_code\"\n                        name=\"bank_code\"\n                        ngModel\n                        #nameField=\"ngModel\"\n                        required\n                      >\n                        <option\n                          *ngFor=\"let code of banks\"\n                          value=\"{{ code.code }}\"\n                          >{{ code.name }}</option\n                        >\n                      </select>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"currency\"\n                          >NGN</label\n                        >\n                        <select\n                          class=\"form-control\"\n                          id=\"currency\"\n                          name=\"currency\"\n                          required\n                          #nameField=\"ngModel\"\n                          ngModel\n                        >\n                          <option value=\"NGN\">NGN</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <hr class=\"my-4\" />\n                    <div class=\"col-lg-2 col-md-4\">\n                      <button\n                        type=\"submit\"\n                        class=\"btn btn-block btn-info\"\n                        [disabled]=\"!recipientForm.valid\"\n                      >\n                        Create Recipient\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/transfer/transfer.component.ts":
/*!************************************************!*\
  !*** ./src/app/transfer/transfer.component.ts ***!
  \************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/transfer.service */ "./src/app/transfer/services/transfer.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var TransferComponent = /** @class */ (function () {
    function TransferComponent(http, _transferService, router, route) {
        var _this = this;
        this._transferService = _transferService;
        this.router = router;
        this.route = route;
        this.currentRate = 6;
        http.get('https://api.paystack.co/bank').subscribe(function (data) {
            _this.banks = data.data;
            console.log(_this.banks);
            return _this.banks;
        });
    }
    TransferComponent.prototype.createRecipient = function (recipientForm) {
        var _this = this;
        console.log(recipientForm.value);
        this.recipient = {
            type: recipientForm.value.type,
            name: recipientForm.value.name,
            account_number: recipientForm.value.account_number,
            bank_code: recipientForm.value.bank_code,
            currency: recipientForm.value.currency
        };
        this._transferService.newRecipient(this.recipient).subscribe(function () {
            alert("The form was submitted");
            // recipientForm.reset();
            _this.router.navigate(['/recipient-list']);
        });
    };
    TransferComponent.prototype.ngOnInit = function () {
    };
    TransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.component.html */ "./src/app/transfer/transfer.component.html"),
            styles: ["\n  .star {\n    font-size: 1.5rem;\n    color: #b0c4de;\n  }\n  .filled {\n    color: #1e90ff;\n  }\n  .bad {\n    color: #deb0b0;\n  }\n  .filled.bad {\n    color: #ff1e1e;\n  }\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_transfer_service__WEBPACK_IMPORTED_MODULE_3__["transferService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/*! exports provided: TransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferModule", function() { return TransferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer-routing.module */ "./src/app/transfer/transfer-routing.module.ts");
/* harmony import */ var _transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfer.component */ "./src/app/transfer/transfer.component.ts");
/* harmony import */ var _services_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/transfer.service */ "./src/app/transfer/services/transfer.service.ts");









var TransferModule = /** @class */ (function () {
    function TransferModule() {
    }
    TransferModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_transfer_component__WEBPACK_IMPORTED_MODULE_7__["TransferComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _transfer_routing_module__WEBPACK_IMPORTED_MODULE_6__["TransferRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartModule"]
            ],
            providers: [_services_transfer_service__WEBPACK_IMPORTED_MODULE_8__["transferService"]]
        })
    ], TransferModule);
    return TransferModule;
}());



/***/ })

}]);
//# sourceMappingURL=transfer-transfer-module.js.map