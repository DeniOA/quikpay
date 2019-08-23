(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipient-list-recipient-list-module"],{

/***/ "./src/app/recipient-list/recipient-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/recipient-list/recipient-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header  pb-8 pt-5 pt-md-8\">\n  <div class=\"container\">\n    <span class=\"\"></span>\n    <div class=\"container-fluid d-flex align-items-right\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 order-xl-1\">\n          <div class=\"card \">\n            <div class=\"card-header bg-white border-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-8\">\n                  <h3 class=\"mb-0\">Initiate Transfer</h3>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-body\">\n              <form\n                #transferForm=\"ngForm\"\n                (ngSubmit)=\"initiateTransfer(transferForm.form, longContent)\"\n              >\n                <div class=\"pl-lg-4\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label for=\"source\" class=\"form-control-label\"\n                          >Transfer From</label\n                        >\n                        <select\n                          class=\"form-control\"\n                          id=\"type\"\n                          name=\"source\"\n                          required\n                          #nameField=\"ngModel\"\n                          ngModel\n                        >\n                          <option value=\"balance\">Balance</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"name\"\n                          >Amount</label\n                        >\n                        <input\n                          type=\"number\"\n                          id=\"amount\"\n                          name=\"amount\"\n                          class=\"form-control form-control-alternative\"\n                          placeholder=\"amount in kobo\"\n                          ngModel\n                          #nameField=\"ngModel\"\n                          required\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"name\"\n                          >Account Number</label\n                        >\n                        <input\n                          type=\"text\"\n                          id=\"account_number\"\n                          name=\"account_number\"\n                          class=\"form-control form-control-alternative\"\n                          value=\"{{ number }}\"\n                          placeholder=\"\"\n                          ngModel\n                          #nameField=\"ngModel\"\n                          required\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"name\"\n                          >Bank</label\n                        >\n                        <input\n                          type=\"text\"\n                          id=\"bank_code\"\n                          name=\"bank_code\"\n                          class=\"form-control form-control-alternative\"\n                          value=\"{{ name }}\"\n                          placeholder=\"\"\n                          ngModel\n                          #nameField=\"ngModel\"\n                          required\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                      <label for=\"recipient\" class=\"form-control-label\"\n                        >Choose Recipient</label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"recipient\"\n                        #t\n                        (change)=\"selectedRecipient(t.value, transferForm.form)\"\n                        name=\"recipient\"\n                        ngModel\n                        #nameField=\"ngModel\"\n                        required\n                      >\n                        <option\n                          *ngFor=\"let code of recipient\"\n                          value=\"{{ code.recipient_code }}\"\n                          >{{ code.name }}</option\n                        >\n                      </select>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"currency\"\n                          >NGN</label\n                        >\n                        <select\n                          class=\"form-control\"\n                          id=\"currency\"\n                          name=\"currency\"\n                          required\n                          #nameField=\"ngModel\"\n                          ngModel\n                        >\n                          <option value=\"NGN\">NGN</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <hr class=\"my-4\" />\n                    <div class=\"col-lg-2 col-md-4\">\n                      <button\n                        type=\"submit\"\n                        class=\"btn btn-block btn-info\"\n                        (click)=\"openBackDropCustomClass(longContent)\"\n                      >\n                        Transfer\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #longContent let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"modal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Please Confirm Transaction details</h5>\n          </div>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              Transfer to: {{ recipient[index].name }}\n            </li>\n            <li class=\"list-group-item\">Amount: {{ modalData.amount }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12\" (click)=\"sayHello()\">\n                <button\n                  (click)=\"transferNow()\"\n                  class=\"btn btn-danger m-3\"\n                  [class]=\"'btn btn-primary btn-lg'\"\n                >\n                  Confirm Transfer\n                </button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <button\n          type=\"button\"\n          class=\"btn btn-light\"\n          (click)=\"modal.close('Close click')\"\n        >\n          Close\n        </button>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipient-list/recipient-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recipient-list/recipient-list.component.ts ***!
  \************************************************************/
/*! exports provided: RecipientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientListComponent", function() { return RecipientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transfer_services_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transfer/services/transfer.service */ "./src/app/transfer/services/transfer.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RecipientListComponent = /** @class */ (function () {
    function RecipientListComponent(http, _transferService, router, route, modalService) {
        var _this = this;
        this._transferService = _transferService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.showPaystack = false;
        this.showModal = false;
        this.tRef = '';
        this.result = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', 'Bearer sk_test_3df29e03db0a01e75e4026512cd51acd671f3b38');
        http.get('https://api.paystack.co/transferrecipient', { headers: headers }).subscribe(function (data) {
            _this.recipient = data.data;
            console.log(_this.recipient);
            return _this.recipient;
        });
        http.get('https://api.paystack.co/bank').subscribe(function (data) {
            _this.banks = data.data;
            console.log(_this.banks);
            return _this.banks;
        });
    }
    RecipientListComponent.prototype.initiateTransfer = function (transferForm, longContent) {
        console.log(transferForm.value);
        this.modalData = transferForm.value;
        this.transfer = {
            source: transferForm.value.source,
            amount: transferForm.value.amount,
            recipient: transferForm.value.recipient,
            account_number: this.number,
            bank_code: this.bank,
            currency: transferForm.value.currency
        };
        this.form = transferForm;
        this.openBackDropCustomClass(longContent);
        console.log(this.recipient);
    };
    RecipientListComponent.prototype.transferNow = function () {
        var _this = this;
        this._transferService.transferRecipient(this.transfer).subscribe(function () {
            _this.paystackAmount = (Number(_this.transfer.amount) * 100);
            _this.tRef = '' + Math.floor((Math.random() * 1000000000) + 1);
            _this.showPaystack = true;
            alert("The form was submitted");
            _this.form.reset();
        });
    };
    RecipientListComponent.prototype.openBackDropCustomClass = function (longContent) {
        this.modalService.open(longContent, { backdropClass: 'light-blue-backdrop' });
    };
    RecipientListComponent.prototype.sayHello = function () {
        alert('success. transaction ref is ' + this.tRef);
    };
    RecipientListComponent.prototype.paymentCancel = function () {
        console.log('No payment times.');
        alert('Sorry, Payment failed ');
    };
    RecipientListComponent.prototype.paymentDone = function (paymentData) {
        console.log('Payment Done');
        console.log;
        alert('Thank you!! Payment was Successful ');
        this.showPaystack = false;
    };
    RecipientListComponent.prototype.selectedRecipient = function (value, transferForm) {
        console.log(value);
        this.index = this.recipient.findIndex(function (item) { return item.recipient_code === transferForm.value.recipient; });
        console.log(this.index);
        this.bank = this.recipient[this.index].details.bank_code;
        this.name = this.recipient[this.index].details.bank_name;
        this.number = this.recipient[this.index].details.account_number;
    };
    RecipientListComponent.prototype.ngOnInit = function () {
    };
    RecipientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipient-list',
            template: __webpack_require__(/*! ./recipient-list.component.html */ "./src/app/recipient-list/recipient-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _transfer_services_transfer_service__WEBPACK_IMPORTED_MODULE_4__["transferService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], RecipientListComponent);
    return RecipientListComponent;
}());



/***/ }),

/***/ "./src/app/recipient-list/recipient-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/recipient-list/recipient-list.module.ts ***!
  \*********************************************************/
/*! exports provided: RecipientListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientListModule", function() { return RecipientListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipient_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipient-routing.module */ "./src/app/recipient-list/recipient-routing.module.ts");
/* harmony import */ var _recipient_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipient-list.component */ "./src/app/recipient-list/recipient-list.component.ts");
/* harmony import */ var _transfer_services_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transfer/services/transfer.service */ "./src/app/transfer/services/transfer.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm5/angular4-paystack.js");









var RecipientListModule = /** @class */ (function () {
    function RecipientListModule() {
    }
    RecipientListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _recipient_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipientListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _recipient_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecipientRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular4_paystack__WEBPACK_IMPORTED_MODULE_8__["Angular4PaystackModule"]
            ],
            providers: [_transfer_services_transfer_service__WEBPACK_IMPORTED_MODULE_6__["transferService"]]
        })
    ], RecipientListModule);
    return RecipientListModule;
}());



/***/ }),

/***/ "./src/app/recipient-list/recipient-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/recipient-list/recipient-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RecipientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientRoutingModule", function() { return RecipientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipient_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipient-list.component */ "./src/app/recipient-list/recipient-list.component.ts");





var routes = [
    {
        path: 'recipient-list',
        component: _recipient_list_component__WEBPACK_IMPORTED_MODULE_4__["RecipientListComponent"],
        data: {
            title: 'Transfer'
        },
    },
];
var RecipientRoutingModule = /** @class */ (function () {
    function RecipientRoutingModule() {
    }
    RecipientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], RecipientRoutingModule);
    return RecipientRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=recipient-list-recipient-list-module.js.map