(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\r\n  <div id=\"layout\">\r\n    <app-header-panel></app-header-panel>\r\n    <app-main-panel></app-main-panel>\r\n    <app-footer-panel></app-footer-panel>\r\n  </div>\r\n</block-ui>\r\n\r\n<ng-template appConfirm>\r\n  <app-confirm-modal-component></app-confirm-modal-component>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account/account.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account/account.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\">\r\n  <div class=\"account\">\r\n    <h1>My account</h1>\r\n\r\n    <!-- Tabs work not js only css -->\r\n    <div class=\"tabs\">\r\n      <input class=\"tabs__input\" type=\"radio\" name=\"tabs\" id=\"tab-1\" checked />\r\n      <label for=\"tab-1\" class=\"tabs__item\">\r\n        User Details\r\n        <!-- <span class=\"mobile-name\">User Details</span> -->\r\n      </label>\r\n      <div class=\"tabs__content\" *ngIf=\"user\">\r\n        <fieldset>\r\n          <div class=\"form-row form-group\">\r\n            <div class=\"col-md\">\r\n              <label for=\"login\">Login</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"login\" [ngModel]=\"user.userName\" readonly />\r\n            </div>\r\n            <div class=\"col-md\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\"/>\r\n            </div>\r\n            <div class=\"col-md\">\r\n              <label for=\"phone\">Phone</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"user.phoneNumber\"/>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        <a class=\"btn btn--green\" (click)=\"updateUser()\">Update User</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/active-order/active-order-mobile/active-order-mobile.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/active-order/active-order-mobile/active-order-mobile.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swipe swipe--order\" [ngClass]=\"{'swipe--opened': isOpen}\">\r\n  <div class=\"swipe__header\">\r\n      <div class=\"swipe__header-t\" *ngIf=\"(cart$ | async) as cart\">\r\n          Your Order\r\n          <a (click)=\"clear()\" *ngIf=\"cart.itemsCount != 0\" class=\"swipe__header-link\">Remove all</a>\r\n      </div>\r\n      <div class=\"swipe__close\" (click)=\"closeSidebar()\"></div>\r\n  </div>\r\n  <div class=\"swipe__body\" *ngIf=\"(cart$ | async) as cart\">\r\n      <div class=\"order\">\r\n          <div class=\"order__info\">\r\n              <div class=\"list list--total\">\r\n                  <div class=\"list__item\">\r\n                      Subtotal <span class=\"list__count\">{{cart.subTotal.formattedAmount}}</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      Shipping <span class=\"list__count free\">{{cart.shippingTotal.formattedAmount}}</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      Total <span class=\"list__count\">{{cart.subTotal.formattedAmount}}</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"order__item\" *ngFor=\"let item of cart.items\">\r\n              <a class=\"order__item-remove\" (click)=\"removeItem(item)\">Remove item</a>\r\n              <div class=\"order__item-name\">{{item.product.name}}</div>\r\n              <div class=\"order__item-brand\">Brand name</div>\r\n              <div class=\"order__item-model\">Model: 0000 <span class=\"divider\">|</span>SKU: {{item.product.sku}}</div>\r\n              <div class=\"order__item-descr\">Description item</div>\r\n              <div class=\"order__item-other\">\r\n                  <div class=\"order__item-price\">{{item.extendedPrice.formattedAmount}}</div>\r\n                  <app-change-product-quantity-active-order [cart]=\"cart\" [lineItem]=\"item\"></app-change-product-quantity-active-order>\r\n              </div>\r\n          </div>\r\n          <a [ngClass]=\"{'disabled': cart.itemsCount === 0}\" (click)=\"checkout(cart)\" class=\"btn btn--lg btn--green btn--block mt-auto\">Checkout</a>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/active-order/active-order.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/active-order/active-order.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-active-order-header [userName]=\"userName\" [orderId]=\"orderId\"></app-active-order-header>\r\n<app-active-order-total\r\n    [countItems]=\"countItems\"\r\n    [subTotal]=\"subTotal\"\r\n    [shipping]=\"shipping\"\r\n    [total]=\"total\">\r\n</app-active-order-total>\r\n<app-active-order-detail [products]=\"products\" ></app-active-order-detail> -->\r\n\r\n<div class=\"sidebar__body order\" *ngIf=\"(cart$ | async) as cart\" >\r\n  <div class=\"order__info\">\r\n    <div class=\"order__t\">\r\n      Your Order\r\n      <a class=\"order__t-link\" *ngIf=\"cart.itemsCount != 0\" (click)=\"clear()\">Remove all</a>\r\n    </div>\r\n    <div class=\"order__text\">You have {{cart.itemsCount}} items in your order</div>\r\n    <div class=\"list list--total\">\r\n      <div class=\"list__item\">\r\n        Subtotal <span class=\"list__count\">{{cart.subTotal.formattedAmount}}</span>\r\n      </div>\r\n      <div class=\"list__item\">\r\n        Shipping <span class=\"list__count free\">{{cart.shippingTotal.formattedAmount}}</span>\r\n      </div>\r\n      <div class=\"list__item\">\r\n        Total <span class=\"list__count\">{{cart.subTotal.formattedAmount}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"order__item\" *ngFor=\"let item of cart.items\">\r\n    <a class=\"order__item-remove\" (click)=\"removeItem(item)\" >Remove item</a>\r\n    <div class=\"order__item-name\">{{item.product.name}}</div>\r\n    <div class=\"order__item-brand\">Brand name</div>\r\n    <div class=\"order__item-model\">\r\n      Model: 0000 <span class=\"divider\">|</span> SKU: {{item.product.sku}}\r\n    </div>\r\n    <div class=\"order__item-descr\">Description item</div>\r\n    <div class=\"order__item-other\">\r\n      <div class=\"order__item-price\">{{item.extendedPrice.formattedAmount}}</div>\r\n      <app-change-product-quantity-active-order [cart]=\"cart\" [lineItem]=\"item\"></app-change-product-quantity-active-order>\r\n    </div>\r\n  </div>\r\n  <div class=\"sidebar__footer\">\r\n    <a class=\"btn btn--green btn--block\" [ngClass]=\"{'disabled': cart.itemsCount === 0}\"(click)=\"checkout(cart)\">Checkout</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group--qty input-group--sm mt-auto\" appRemoveWrapper>\r\n  <a class=\"btn btn--white\" (click)=\"decrementQuantity(lineItem)\">\r\n    <span class=\"btn__ico btn__ico--minus\"></span>\r\n  </a>\r\n  <input type=\"text\" OnlyNumber=\"true\" class=\"input-group__input\"\r\n  [value]=\"lineItem.quantity\" (keyup)=\"onChangeQuantity($event.target)\">\r\n  <a class=\"btn btn--white\" (click)=\"incrementQuantity(lineItem)\">\r\n    <span class=\"btn__ico btn__ico--plus\"></span>\r\n  </a>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/active-order/checkout-modal/checkout-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/active-order/checkout-modal/checkout-modal.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\">\r\n  <div class=\"order\">\r\n      <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"modal-title\">Order details information</h4>\r\n          <button type=\"button\" class=\"close\" aria-describedby=\"modal-title\" (click)=\"closeModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n      <div class=\"accordion\">\r\n          <div class=\"accordion__item accordion__item--active\" (click)=\"toggleAccordion($event)\">\r\n              <div class=\"accordion__header\">\r\n                  <div class=\"accordion__t\">Details</div>\r\n                  <svg class=\"accordion__ico\" width=\"13px\" height=\"8px\" viewBox=\"0 0 13 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                      <g id=\"Version-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                          <g id=\"Catalog\" transform=\"translate(-1027.000000, -961.000000)\" class=\"fill\">\r\n                              <polygon id=\"Fill-1\" transform=\"translate(1033.414000, 964.914000) translate(-1033.414000, -964.914000) \" points=\"1038.414 961 1033.415 966 1028.414 961 1027 962.414 1033.415 968.828 1039.828 962.414\"></polygon>\r\n                          </g>\r\n                      </g>\r\n                  </svg>\r\n              </div>\r\n              <div class=\"accordion__content\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"list list--total\">\r\n                              <div class=\"list__item\">\r\n                                  Subtotal <span class=\"list__count\">{{cart.subTotal.formattedAmount}}</span>\r\n                              </div>\r\n                              <div class=\"list__item\">\r\n                                  Shipping <span class=\"list__count\">{{cart.shippingTotal.formattedAmount}}</span>\r\n                              </div>\r\n                              <div class=\"list__item\">\r\n                                  Total <span class=\"list__count\">{{cart.subTotal.formattedAmount}}</span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"accordion__item\">\r\n              <div class=\"accordion__header\" (click)=\"toggleOrderDetails($event)\">\r\n                  <div class=\"accordion__t\">Order details</div>\r\n                  <svg class=\"accordion__ico\" width=\"13px\" height=\"8px\" viewBox=\"0 0 13 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                      <g id=\"Version-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                          <g id=\"Catalog\" transform=\"translate(-1027.000000, -961.000000)\" class=\"fill\">\r\n                              <polygon id=\"Fill-1\" transform=\"translate(1033.414000, 964.914000) translate(-1033.414000, -964.914000) \" points=\"1038.414 961 1033.415 966 1028.414 961 1027 962.414 1033.415 968.828 1039.828 962.414\"></polygon>\r\n                          </g>\r\n                      </g>\r\n                  </svg>\r\n              </div>\r\n              <cdk-virtual-scroll-viewport itemSize=\"207\" style=\"height: 207px\" *ngIf=\"showOrderItems\">\r\n                <div *cdkVirtualFor=\"let item of cart.items\" class=\"accordion__content\">\r\n                  <div class=\"order__item\">\r\n                  <div class=\"order__item-name\">{{item.product.name}}</div>\r\n                  <div class=\"order__item-brand\">Impression Tray</div>\r\n                  <div class=\"order__item-model\">Model: 2120 <span class=\"divider\">| </span>SKU: {{item.product.sku}}</div>\r\n                  <div class=\"order__item-descr\">Case of 10 Bags with 12 per Bag</div>\r\n                  <div class=\"order__item-other\">\r\n                      <div class=\"order__item-price\">Unit price: {{item.placedPrice.formattedAmount}}</div>\r\n                  </div>\r\n                  <div class=\"order__item-other\">\r\n                    <div class=\"order__item-price\">Quantity: {{item.quantity}}</div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n              </cdk-virtual-scroll-viewport>\r\n          </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"closeModal()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn--green\" (click)=\"checkout()\">Checkout</button>\r\n      </div>\r\n  </div>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/alerts/alerts.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/alerts/alerts.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngFor=\"let alert of alerts$ | async as alerts\">\r\n  <ngb-alert [type]=\"alert.type\" [dismissible]=\"dismissible\" (close)=\"onClosed(alert)\">{{ alert.msg }}</ngb-alert>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"bulk-order__copy\">\r\n    <p>\r\n      Simply copy the item records from your CSV file and paste them into the\r\n      text box using the following format: SKU, Quantity. Each record should\r\n      start from a new line.\r\n    </p>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <textarea class=\"bulk-order__copy-field\"></textarea>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"bulk-order__copy-errors\">\r\n          <p>Error in line 1: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <p>Error in line 12: Product is not recognized</p>\r\n          <a class=\"all-errors\" href=\"#\">Show all Errors</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col\">\r\n        <a href=\"#\" class=\"btn btn--blue\">Validate</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<div class=\"bulk-order__add-order\">\r\n  <button\r\n    class=\"btn btn--green ml-auto\"\r\n    (click)=\"addItemsToCart()\"\r\n  >\r\n    Add to Order\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"row list__item\" [formGroup]=\"itemForm\">\r\n  <div class=\"col-md\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <input type=\"text\" class=\"form-control\"\r\n              formControlName=\"sku\">\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <input type=\"text\" class=\"form-control\"\r\n              formControlName=\"productName\"  [ngbTypeahead]=\"searchProductsSuggestionsByName\"\r\n              [resultFormatter]=\"suggestedProductsFormatter\"\r\n              (selectItem)=\"suggestedProductSelected($event)\">\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-auto\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-auto\">\r\n              <div class=\"input-group input-group--qty\">\r\n                  <input type=\"number\" min=\"1\" class=\"form-control form-control--qty\"\r\n                  formControlName=\"qty\">\r\n                  <a class=\"btn btn--white\" (click)=\"onRemove()\">\r\n                      <span class=\"btn__ico btn__ico--trash-gray\"></span>\r\n                  </a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</form>\r\n<div  *ngIf=\"sku.invalid && (sku.dirty || sku.touched)\"\r\n        class=\"row\">\r\n    <div class=\"col-md\" *ngIf=\"sku.errors.required\">\r\n      <div class=\"form-error\">\r\n        SKU is required.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md\" *ngIf=\"sku.errors.skuExists\">\r\n        <div class=\"form-error\" >\r\n         There is no such SKU.\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\" *ngIf=\"sku.errors.uniqueSku\">\r\n      <div class=\"form-error\">\r\n        SKU value must be unique.\r\n      </div>\r\n    </div>\r\n</div>\r\n<!-- <div  *ngIf=\"!!id && id.invalid && (sku.dirty || sku.touched)\"\r\n        class=\"row\">\r\n    <div class=\"col-md\">\r\n      <div class=\"form-error\" *ngIf=\"id.errors.required\">\r\n       There is not such SKU.\r\n      </div>\r\n    </div>\r\n</div> -->\r\n<!-- <div class=\"row\">{{ qty.invalid}}</div>\r\n<div class=\"row\">{{ qty.dirty}}</div>\r\n<div class=\"row\">{{ qty.touched}}</div> -->\r\n<div  *ngIf=\"qty.invalid && (qty.dirty || qty.touched)\"\r\n        class=\"row\">\r\n    <div class=\"col-md\" *ngIf=\"qty.errors.required\">\r\n      <div class=\"form-error\" >\r\n        Quantity is required.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md\" *ngIf=\"qty.errors.min\">\r\n      <div class=\"form-error\" >\r\n        Quantity is less than minimum.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md\" *ngIf=\"qty.errors.max\">\r\n      <div class=\"form-error\">\r\n        Quantity is more than maximum.\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <!-- Bulk order tab content -->\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-auto mr-auto\">\r\n            <h2>Add new item</h2>\r\n          </div>\r\n          <div class=\"col-auto\">\r\n            <a class=\"order__t-link mr-3\" *ngIf=\"!itemsIsEmpty\" (click)=\"clearItems()\">Remove all</a>\r\n          </div>\r\n        </div>\r\n        <form class=\"bulk-order__new\" [formGroup]=\"newItemForm\" novalidate>\r\n            <div class=\"row\">\r\n                <div class=\"col-md\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <input placeholder=\"Product SKU\" type=\"text\" class=\"form-control\"\r\n                            formControlName=\"sku\">\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <input placeholder=\"Product name\" type=\"text\" class=\"form-control\"\r\n                            formControlName=\"productName\" [ngbTypeahead]=\"searchProductsSuggestionsByName\"\r\n                            [resultFormatter]=\"suggestedProductsFormatter\"\r\n                            (selectItem)=\"suggestedProductSelected($event)\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-auto\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-auto\">\r\n                            <div class=\"input-group input-group--qty\">\r\n                                <input placeholder=\"QTY\" type=\"number\" min=\"1\" class=\"form-control form-control--qty\"\r\n                                formControlName=\"qty\">\r\n                                <button [disabled]=\"newItemForm.invalid\" class=\"btn btn--blue\" (click)=\"addItem()\">\r\n                                    <span class=\"btn__ico btn__ico--plus-white\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </form>\r\n        <form class=\"bulk-order__list\" [formGroup]=\"itemsForm\">\r\n            <h2>Items in order</h2>\r\n            <div class=\"list\"\r\n             formArrayName=\"items\">\r\n                <app-bulk-order-item [itemForm]=\"itemForm\" [index]=\"i\" (removeClicked)=\"removeItem($event)\"\r\n                 *ngFor=\"let itemForm of itemsForm.controls['items'].controls; let i = index\"></app-bulk-order-item>\r\n            </div>\r\n            <!-- <div class=\"row\" *ngIf=\"itemsForm.controls['items'].errors?.itemsEmpty\">\r\n                <div class=\"col-md\">\r\n                  <div class=\"form-error\" >\r\n                    Orders items list is empty.\r\n                  </div>\r\n                </div>\r\n            </div> -->\r\n        </form>\r\n\r\n\r\n\r\n    <div class=\"bulk-order__add-order\">\r\n        <button class=\"btn btn--green ml-auto\" [disabled]=\"itemsForm.invalid\" (click)=\"addItemsToCart()\">Add to Order</button>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bulk-order/bulk-order.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\">\r\n  <div class=\"content\">\r\n      <!-- <app-bulk-order-manual></app-bulk-order-manual> -->\r\n\r\n      <div class=\"bulk-order\">\r\n        <h1>Bulk Order Pad</h1>\r\n        <div class=\"row bulk-order__actions\">\r\n            <div class=\"bulk-order__actions-item col-md-auto\">\r\n                <a href=\"#\" class=\"btn btn--blue btn--outline\">Catalog order</a>\r\n            </div>\r\n            <div class=\"bulk-order__actions-item col-md\">\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn--outline\" [ngClass]=\"{'btn--active': selectedTab == 'manualy'}\" (click)=\"setSelectedTab('manualy')\">Manual</a>\r\n                    <a class=\"btn btn--outline\" [ngClass]=\"{'btn--active': selectedTab == 'csv'}\" (click)=\"setSelectedTab('csv')\">Copy & Paste</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Bulk order tab content -->\r\n        <div class=\"bulk-order__content\" [ngClass]=\"{'bulk-order__content--active': selectedTab == 'manualy'}\" >\r\n          <app-bulk-order-manual></app-bulk-order-manual>\r\n        </div>\r\n        <div class=\"bulk-order__content \" [ngClass]=\"{'bulk-order__content--active': selectedTab == 'csv'}\">\r\n          <app-bulk-order-csv></app-bulk-order-csv>\r\n        </div>\r\n\r\n    </div>\r\n      <app-mobile-cart-summary></app-mobile-cart-summary>\r\n      <!-- <div class=\"d-block d-lg-none mt-auto\">\r\n          <div class=\"mobile-order\" data-name=\"mobile-order\">\r\n              <div class=\"mobile-order__ico\"></div>\r\n              <div class=\"mobile-order__info\">\r\n                  <div class=\"mobile-order__t\">Your Order</div>\r\n                  <div class=\"mobile-order__descr\">You have 1 items in your order</div>\r\n              </div>\r\n              <div class=\"mobile-order__price ml-auto\">$1,500.00</div>\r\n          </div>\r\n      </div> -->\r\n  </div>\r\n  <div class=\"sidebar sidebar--bg-gray d-none d-lg-block\">\r\n      <div class=\"sidebar__inner\">\r\n          <app-active-order></app-active-order>\r\n      </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/catalog/catalog.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/catalog/catalog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-active-order-mobile #mobileOrderSidebar></app-active-order-mobile>\r\n<main class=\"main container\">\r\n  <app-categories\r\n    [categories]=\"categories$\"\r\n    (categoryChanged)=\"categoryChanged($event)\"\r\n    #mobileCategoies\r\n  ></app-categories>\r\n  <div class=\"content\">\r\n    <form class=\"search d-none d-xl-block\">\r\n      <app-search-products\r\n        (searchTextChanged)=\"searchByText($event)\"\r\n      ></app-search-products>\r\n    </form>\r\n    <div class=\"mobile-navbar d-block d-xl-none\">\r\n      <form class=\"search\">\r\n          <app-search-products\r\n          (searchTextChanged)=\"searchByText($event)\"\r\n        ></app-search-products>\r\n        <a class=\"search__close\" (click)=\"closeMobileSearch()\"></a>\r\n      </form>\r\n      <div class=\"list\">\r\n        <a class=\"list__item\" (click)=\"openMobileCategories(mobileCategoies)\">\r\n          <svg\r\n            class=\"list__ico\"\r\n            width=\"20px\"\r\n            height=\"20px\"\r\n            viewBox=\"0 0 20 20\"\r\n            version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n          >\r\n            <g\r\n              id=\"Version-2\"\r\n              stroke=\"none\"\r\n              stroke-width=\"1\"\r\n              fill=\"none\"\r\n              fill-rule=\"evenodd\"\r\n            >\r\n              <g\r\n                id=\"Catalog-(mobile)-CATEGORY\"\r\n                transform=\"translate(-47.000000, -71.000000)\"\r\n                class=\"fill\"\r\n              >\r\n                <g id=\"Group-3\" transform=\"translate(47.000000, 71.000000)\">\r\n                  <g id=\"Group-5\">\r\n                    <path\r\n                      d=\"M2,7 L2,2 L7,2 L7.001,7 L2,7 Z M7,0 L2,0 C0.897,0 0,0.897 0,2 L0,7 C0,8.103 0.897,9 2,9 L7,9 C8.103,9 9,8.103 9,7 L9,2 C9,0.897 8.103,0 7,0 L7,0 Z\"\r\n                      id=\"Fill-1\"\r\n                    ></path>\r\n                    <path\r\n                      d=\"M13,7 L13,2 L18,2 L18.001,7 L13,7 Z M18,0 L13,0 C11.897,0 11,0.897 11,2 L11,7 C11,8.103 11.897,9 13,9 L18,9 C19.103,9 20,8.103 20,7 L20,2 C20,0.897 19.103,0 18,0 L18,0 Z\"\r\n                      id=\"Fill-3\"\r\n                    ></path>\r\n                    <path\r\n                      d=\"M2,18 L2,13 L7,13 L7.001,18 L2,18 Z M7,11 L2,11 C0.897,11 0,11.897 0,13 L0,18 C0,19.103 0.897,20 2,20 L7,20 C8.103,20 9,19.103 9,18 L9,13 C9,11.897 8.103,11 7,11 L7,11 Z\"\r\n                      id=\"Fill-5\"\r\n                    ></path>\r\n                    <path\r\n                      d=\"M13,18 L13,13 L18,13 L18.002,18 L13,18 Z M18,11 L13,11 C11.897,11 11,11.897 11,13 L11,18 C11,19.103 11.897,20 13,20 L18,20 C19.103,20 20,19.103 20,18 L20,13 C20,11.897 19.103,11 18,11 L18,11 Z\"\r\n                      id=\"Fill-7\"\r\n                    ></path>\r\n                  </g>\r\n                </g>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n          Category\r\n        </a>\r\n        <a class=\"list__item\" (click)=\"openMobileSearch()\">\r\n          <svg\r\n            class=\"list__ico\"\r\n            width=\"20px\"\r\n            height=\"20px\"\r\n            viewBox=\"0 0 20 20\"\r\n            version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n          >\r\n            <g\r\n              id=\"Version-2\"\r\n              stroke=\"none\"\r\n              stroke-width=\"1\"\r\n              fill=\"none\"\r\n              fill-rule=\"evenodd\"\r\n            >\r\n              <g\r\n                id=\"Catalog-(mobile)-CATEGORY\"\r\n                transform=\"translate(-243.000000, -71.000000)\"\r\n                class=\"fill\"\r\n              >\r\n                <g id=\"Group-2\" transform=\"translate(243.000000, 71.000000)\">\r\n                  <path\r\n                    d=\"M2,7.5 C2,4.467 4.467,2 7.5,2 C10.533,2 13,4.467 13,7.5 C13,10.533 10.533,13 7.5,13 C4.467,13 2,10.533 2,7.5 M19.707,18.293 L13.455,12.041 C14.42,10.779 15,9.208 15,7.5 C15,3.364 11.636,0 7.5,0 C3.364,0 2.48689958e-14,3.364 2.48689958e-14,7.5 C2.48689958e-14,11.636 3.364,15 7.5,15 C9.208,15 10.779,14.42 12.041,13.455 L18.293,19.707 C18.488,19.902 18.744,20 19,20 C19.256,20 19.512,19.902 19.707,19.707 C20.098,19.316 20.098,18.684 19.707,18.293\"\r\n                    id=\"Fill-1\"\r\n                  ></path>\r\n                </g>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n          Search\r\n        </a>\r\n        <div class=\"list__item d-none d-lg-block\">\r\n          <a\r\n            [routerLink]=\"['/bulkorder']\"\r\n            class=\"btn btn--blue btn--sm btn--block\"\r\n            >Bulk Order</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"list product--list\" *ngIf=\"(cart$ | async) as cart\">\r\n      <div class=\"list__item\" *ngFor=\"let p of products\">\r\n        <div class=\"list__img list__img--placeholder\">\r\n          <img\r\n            src=\"{{ p.primaryImage?.url }}\"\r\n            alt=\"{{ p.sku }}\"\r\n            class=\"list__pic\"\r\n          />\r\n        </div>\r\n        <div class=\"list__info\">\r\n          <a class=\"list__name\" [routerLink]=\"['/product-details', p.id]\">{{ p.name }}</a>\r\n          <div class=\"list__brand\">{{p.brand}}</div>\r\n          <div class=\"list__model\">\r\n            Model: {{p.model}} <span class=\"divider\">|</span>SKU: {{ p.sku }}\r\n          </div>\r\n          <div class=\"list__descr\" [innerHTML]=\"p.quickReview\"></div>\r\n        </div>\r\n        <div class=\"list__other\">\r\n          <div class=\"list__price\">{{ p.price }}</div>\r\n            <app-change-product-quantity [cart]=\"cart\" [productId]=\"p.id\"></app-change-product-quantity>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"page-nav\">\r\n      <div class=\"row align-items-end justify-content-center\">\r\n        <div class=\"col-auto\">\r\n          <div class=\"page-nav__total\">\r\n            You've viewed {{ products?.length }} of\r\n            {{ paginationInfo.collectionSize }} products\r\n          </div>\r\n          <ngb-pagination\r\n            [(page)]=\"paginationInfo.page\"\r\n            [pageSize]=\"paginationInfo.pageSize\"\r\n            [collectionSize]=\"paginationInfo.collectionSize\"\r\n            (pageChange)=\"pageChanged()\"\r\n          ></ngb-pagination>\r\n        </div>\r\n        <div class=\"col-auto ml-sm-auto\">\r\n          Show\r\n          <app-page-size-selector\r\n            [defaultPageSize]=\"paginationInfo.pageSize\"\r\n            [pageSizes]=\"pageSizes\"\r\n            (pageSizeChanged)=\"pageSizeChanged($event)\"\r\n          ></app-page-size-selector>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-mobile-cart-summary [activeOrderMobileSidebar]=\"mobileOrderSidebar\"></app-mobile-cart-summary>\r\n  </div>\r\n\r\n  <!-- avtive order -->\r\n  <div class=\"sidebar sidebar--bg-gray d-none d-lg-block\">\r\n    <div class=\"sidebar__inner\">\r\n      <app-active-order></app-active-order>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/catalog/categories/categories.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/catalog/categories/categories.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Swipe category-->\r\n<div class=\"swipe swipe--category\" [ngClass]=\"{'swipe--opened': isOpen}\">\r\n  <div class=\"swipe__header\">\r\n      <div class=\"swipe__header-t\">Category</div>\r\n      <div class=\"swipe__close\" (click)=\"closeSidebar()\"></div>\r\n  </div>\r\n  <div class=\"swipe__body\">\r\n      <ul class=\"nav nav--category\">\r\n        <li class=\"nav__item\">\r\n          <a class=\"nav__link\" [ngClass]=\"{'nav__link--active': selectedCategory === null}\" (click)=\"selectAllProducts()\" >All Products</a>\r\n      </li>\r\n      <li class=\"nav__item\" *ngFor=\"let category of categories | async\" >\r\n          <a class=\"nav__link\" [ngClass]=\"{'nav__link--active': isActive(category)}\" (click)=\"selectCategory(category)\" >{{category.name}}</a>\r\n      </li>\r\n      </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"sidebar d-none d-xl-block\">\r\n  <div class=\"sidebar__block\">\r\n      <a [routerLink]=\"['/bulkorder']\"\r\n       class=\"btn btn--blue btn--block\">Bulk Order</a>\r\n  </div>\r\n  <ul class=\"nav nav--category\">\r\n      <li class=\"nav__item\">\r\n          <a class=\"nav__link\" [ngClass]=\"{'nav__link--active': selectedCategory === null}\" (click)=\"selectAllProducts()\" >All Products</a>\r\n      </li>\r\n      <li class=\"nav__item\" *ngFor=\"let category of categories | async\" >\r\n          <a class=\"nav__link\" [ngClass]=\"{'nav__link--active': isActive(category)}\" (click)=\"selectCategory(category)\" >{{category.name}}</a>\r\n      </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/catalog/change-product-quantity/change-product-quantity.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/catalog/change-product-quantity/change-product-quantity.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group--qty mt-auto\" appRemoveWrapper>\r\n  <a *ngIf=\"!productLineItem; else quantityChanger\" class=\"btn btn--blue\" (click)=\"addProductToCart()\">\r\n    <span class=\"btn__ico btn__ico--plus-white\"></span>\r\n  </a>\r\n\r\n</div>\r\n\r\n<ng-template #quantityChanger>\r\n<a class=\"btn btn--green\" (click)=\"decrementQuantity(productLineItem)\">\r\n  <span class=\"btn__ico btn__ico--minus-white\"></span>\r\n</a>\r\n<input type=\"text\" [OnlyNumber]=\"true\" class=\"input-group__input\" [value]=\"productLineItem.quantity\" (keyup)=\"onChangeQuantity($event.target.value)\">\r\n<a class=\"btn btn--green\" (click)=\"incrementQuantity(productLineItem)\">\r\n  <span class=\"btn__ico btn__ico--plus-white\"></span>\r\n</a>\r\n<!-- [(ngModel)]=\"productLineItem.quantity\" (ngModelChange)=\"updateLineItemQuantity()\" -->\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-block d-lg-none mt-auto\" (click)=\"openSidebar()\" *ngIf=\"(cart$ | async) as cart\">\r\n  <div class=\"mobile-order\" data-name=\"mobile-order\">\r\n    <div class=\"mobile-order__ico\"></div>\r\n    <div class=\"mobile-order__info\">\r\n      <div class=\"mobile-order__t\">Your Order</div>\r\n      <div class=\"mobile-order__descr\">You have {{cart.itemsCount}} items in your order</div>\r\n    </div>\r\n    <div class=\"mobile-order__price ml-auto\">{{cart.subTotal.formattedAmount}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/catalog/search-products/search-products.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/catalog/search-products/search-products.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <input appRemoveWrapper\r\n    placeholder=\"Search (e.g. «DORT»)\"\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    (keyup)=\"search($event.target.value)\"\r\n  />\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/company-details/company-details.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/company-details/company-details.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs__content\" appRemoveWrapper >\r\n  <fieldset *ngIf=\"organizationDetails\">\r\n    <legend>Legal information</legend>\r\n    <div class=\"form-row form-group\">\r\n      <div class=\"col-md\">\r\n        <label for=\"name\">Company Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"organizationDetails.name\"/>\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <label for=\"number\">Tax Number</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"number\" [(ngModel)]=\"organizationDetails.taxNumber\"/>\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <label for=\"reg-number\">Company Registration Number</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"reg-number\" [(ngModel)]=\"organizationDetails.companyRegistrationNumber\"/>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <fieldset *ngIf=\"organizationDetails\">\r\n    <legend>Procurements service contact</legend>\r\n    <div class=\"form-row form-group\">\r\n      <div class=\"col-md\">\r\n        <label for=\"phone\">Phone</label>\r\n        <input\r\n          placeholder=\"Enter phone\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"phone\"\r\n          [(ngModel)]=\"organizationDetails.phoneNumber\"\r\n        />\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <label for=\"email\">Email</label>\r\n        <input\r\n          placeholder=\"Enter email\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"email\"\r\n          [(ngModel)]=\"organizationDetails.email\"\r\n        />\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <label for=\"person\">Contact Person</label>\r\n        <input\r\n          placeholder=\"Enter name\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"person\"\r\n          [(ngModel)]=\"organizationDetails.contactPerson\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <fieldset *ngIf=\"organizationDetails\">\r\n    <legend>Billing address</legend>\r\n    <div class=\"form-row form-group\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md\">\r\n            <label for=\"billing-country\">Country</label>\r\n            <input\r\n              placeholder=\"Enter country\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"billing-country\"\r\n              [(ngModel)]=\"organizationDetails.billingAddress.countryName\"\r\n            />\r\n          </div>\r\n          <div class=\"col-md\">\r\n            <label for=\"billing-city\">City</label>\r\n            <input\r\n              placeholder=\"Enter city\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"billing-city\"\r\n              [(ngModel)]=\"organizationDetails.billingAddress.city\"\r\n            />\r\n          </div>\r\n          <div class=\"col-md-auto\">\r\n            <label for=\"billing-code\">Postal Code</label>\r\n            <input\r\n              placeholder=\"Code...\"\r\n              type=\"text\"\r\n              class=\"form-control form-control--code\"\r\n              id=\"billing-code\"\r\n              [(ngModel)]=\"organizationDetails.billingAddress.postalCode\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md\">\r\n            <label for=\"billing-address\">Address 1</label>\r\n            <input\r\n              placeholder=\"Enter name\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"billing-address\"\r\n              [(ngModel)]=\"organizationDetails.billingAddress.line1\"\r\n            />\r\n          </div>\r\n          <div class=\"col-md\">\r\n            <label for=\"billing-address-2\">Address 2</label>\r\n            <input\r\n              placeholder=\"Enter name\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"billing-address-2\"\r\n              [(ngModel)]=\"organizationDetails.billingAddress.line2\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <fieldset *ngIf=\"organizationDetails\">\r\n    <legend>Shipping address</legend>\r\n    <div class=\"form-row form-group\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md\">\r\n            <label for=\"shipping-country\">Country</label>\r\n            <input\r\n              placeholder=\"Enter country\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"shipping-country\"\r\n              [(ngModel)]=\"organizationDetails.shippingAddress.countryName\"\r\n            />\r\n          </div>\r\n          <div class=\"col-md\">\r\n            <label for=\"shipping-city\">City</label>\r\n            <input\r\n              placeholder=\"Enter city\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"shipping-city\"\r\n              [(ngModel)]=\"organizationDetails.shippingAddress.city\"\r\n            />\r\n          </div>\r\n          <div class=\"col-md-auto\">\r\n            <label for=\"shipping-code\">Postal Code</label>\r\n            <input\r\n              placeholder=\"Code...\"\r\n              type=\"text\"\r\n              class=\"form-control form-control--code\"\r\n              id=\"shipping-code\"\r\n              [(ngModel)]=\"organizationDetails.shippingAddress.postalCode\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md\">\r\n            <label for=\"shipping-address\">Address 1</label>\r\n            <input\r\n              placeholder=\"Enter name\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"shipping-address\"\r\n              [(ngModel)]=\"organizationDetails.shippingAddress.line1\"\r\n            />\r\n          </div>\r\n          <div class=\"col-md\">\r\n            <label for=\"shipping-address-2\">Address 2</label>\r\n            <input\r\n              placeholder=\"Enter name\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"shipping-address-2\"\r\n              [(ngModel)]=\"organizationDetails.shippingAddress.line2\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <fieldset *ngIf=\"organizationDetails\">\r\n    <legend>Return Invalid orders to creator</legend>\r\n    <!-- {{organizationDetails.returnInvalidOrdersToCreator}} -->\r\n    <div class=\"btn-group btn-group--uppercase\">\r\n      <a class=\"btn btn--outline\" [ngClass]=\"{'btn--active': organizationDetails.returnInvalidOrdersToCreator}\" (click)=\"setOrdersProperty(true)\">Yes</a>\r\n      <a class=\"btn btn--outline\" [ngClass]=\"{'btn--active': !organizationDetails.returnInvalidOrdersToCreator}\" (click)=\"setOrdersProperty(false)\">No</a>\r\n    </div>\r\n  </fieldset>\r\n  <a class=\"btn btn--green\" (click)=\"updateCompany()\">Update Company</a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/company-users/company-users.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/company-users/company-users.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs__content\" appRemoveWrapper>\r\n  <a (click)=\"openCreateUserModal()\" class=\"btn btn--green mb-4\">Add new User</a>\r\n  <div class=\"table-responsive\" *ngIf=\"users\">\r\n    <table class=\"table\">\r\n      <colgroup>\r\n        <col class=\"col-w-120\" />\r\n        <col class=\"col-w-120\" />\r\n        <col class=\"col-w-120\" />\r\n        <col class=\"col-w-120\" />\r\n        <col class=\"col-w-120\" />\r\n        <col class=\"col-w-140\" />\r\n        <col class=\"col-w-140\" />\r\n        <col class=\"col-w-120\" />\r\n      </colgroup>\r\n      <thead>\r\n        <tr>\r\n          <th>Account</th>\r\n          <th>First name</th>\r\n          <th>Last name</th>\r\n          <th>Workflow Role</th>\r\n          <th>System Role</th>\r\n          <th>Email</th>\r\n          <th>Phone</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let user of users\" >\r\n        <tr>\r\n          <td>{{user.userName}}</td>\r\n          <td>{{user.firstName}}</td>\r\n          <td>{{user.lastName}}</td>\r\n          <td>Тут workflow role</td>\r\n          <td>{{user.role.name}}</td>\r\n          <td>{{user.email}}</td>\r\n          <td>{{user.phoneNumber}}</td>\r\n          <td>\r\n            <a (click)=\"deleteUser(user)\" class=\"text--red\">Remove user</a>\r\n            |\r\n            <a (click)=\"openEditUserModal(user)\" class=\"text--red\">Edit user</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"page-nav\">\r\n      <div class=\"row align-items-end justify-content-center\">\r\n        <div class=\"col-auto\">\r\n          <div class=\"page-nav__total\">You've viewed {{users?.length}} of {{paginationInfo.collectionSize}} orders</div>\r\n          <ngb-pagination\r\n          [(page)]=\"paginationInfo.page\"\r\n          [pageSize]=\"paginationInfo.pageSize\"\r\n          [collectionSize]=\"paginationInfo.collectionSize\"\r\n          (pageChange)=\"pageChanged()\"></ngb-pagination>\r\n        </div>\r\n        <div class=\"col-auto ml-sm-auto\">\r\n            Show\r\n            <app-page-size-selector [defaultPageSize]=\"paginationInfo.pageSize\" [pageSizes]=\"pageSizes\" (pageSizeChanged)=\"pageSizeChanged($event)\" ></app-page-size-selector>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/company.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/company.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\">\r\n  <div class=\"account\">\r\n    <h1>Company</h1>\r\n\r\n    <!-- Tabs work not js only css -->\r\n    <div class=\"tabs\">\r\n      <input class=\"tabs__input\" type=\"radio\" name=\"tabs\" id=\"tab-1\" checked />\r\n      <label for=\"tab-1\" class=\"tabs__item\">\r\n        Company Details\r\n        <span class=\"mobile-name\">Details</span>\r\n      </label>\r\n\r\n      <input class=\"tabs__input\" type=\"radio\" name=\"tabs\" id=\"tab-2\" />\r\n      <label for=\"tab-2\" class=\"tabs__item\">\r\n        User Management\r\n        <span class=\"mobile-name\">Users</span>\r\n      </label>\r\n\r\n      <input class=\"tabs__input\" type=\"radio\" name=\"tabs\" id=\"tab-3\" />\r\n      <label for=\"tab-3\" class=\"tabs__item\">\r\n        Role Management\r\n        <span class=\"mobile-name\">Roles</span>\r\n      </label>\r\n\r\n      <app-company-details [organization]=\"organization\" [organizationDetails]=\"organizationDetails\"></app-company-details>\r\n\r\n      <app-company-users [organization]=\"organization\"></app-company-users>\r\n\r\n      <app-role-management></app-role-management>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #myform='ngForm' (ngSubmit)='passBack(myform)' class='p-3'>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-title\" *ngIf=\"!editUserMode\">Add new user</h4>\r\n    <h4 class=\"modal-title\" id=\"modal-title\" *ngIf=\"editUserMode\">Edit user</h4>\r\n      <button type=\"button\" class=\"close\" aria-describedby=\"modal-title\" (click)=\"closeModal()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"form-group mt-3\">\r\n    <label for=\"email\">Email</label>\r\n    <input id=\"useremail\" name=\"email\" placeholder=\"Email\" required class=\"form-control\" [(ngModel)]=\"user.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': email.invalid && (email.dirty || email.touched) }\" email>\r\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"email.errors.required\">Email is required.</div>\r\n      <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"firstName\">First Name</label>\r\n    <input id=\"firstName\" name=\"firstName\" placeholder=\"First Name\" type=\"text\" class=\"form-control\" pattern=\"[A-Za-z ]+\" [ngClass]=\"{ 'is-invalid': firstName.invalid && (firstName.dirty || firstName.touched) }\" required [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\">\r\n    <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"firstName.errors.required\">First Name is required.</div>\r\n      <div *ngIf=\"firstName.errors.pattern\">First Name is not valid</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"lastName\">Last Name</label>\r\n    <input id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\" type=\"text\" class=\"form-control\" pattern=\"[A-Za-z -]+\" [ngClass]=\"{ 'is-invalid': lastName.invalid && (lastName.dirty || lastName.touched) }\" required [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\">\r\n    <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"lastName.errors.required\">Last Name is required.</div>\r\n      <div *ngIf=\"lastName.errors.pattern\">Last Name is not valid</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\" *ngIf=\"!editUserMode\">\r\n    <label for=\"userName\">User Name</label>\r\n    <input id=\"userName\" name=\"userName\" placeholder=\"User Name\" type=\"text\" class=\"form-control\" required [ngClass]=\"{ 'is-invalid': userName.invalid && (userName.dirty || userName.touched) }\" required [(ngModel)]=\"user.userName\" #userName=\"ngModel\">\r\n    <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"userName.errors.required\">User Name is required.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"selectRole\">Role</label>\r\n    <select id=\"selectRole\" name=\"selectRole\" class=\"custom-select\" required aria-describedby=\"selectRoleHelpBlock\"  [ngClass]=\"{ 'is-invalid': role.invalid && (role.dirty || role.touched) }\" required [(ngModel)]=\"user.role\" #role=\"ngModel\">\r\n      <option value=\"\" style=\"display:none\">Please select role</option>\r\n      <option value=\"pp-admin\">Administrator</option>\r\n      <option value=\"pp-agent\">Agent</option>\r\n    </select>\r\n    <div *ngIf=\"role.invalid && (role.dirty || role.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"role.errors.required\">Role is required.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\" *ngIf=\"!editUserMode\">\r\n    <label for=\"Password\">Password</label>\r\n    <input id=\"password\" name=\"password\" (change)=\"checkValid(myform)\" placeholder=\"Password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" pattern=\"(^[A-Z])\\w+\\S+\" [ngClass]=\"{ 'is-invalid': password.invalid && (password.dirty || password.touched) }\" required minlength=\"6\">\r\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"password.errors.required\">Password is required</div>\r\n      <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n      <div *ngIf=\"password.errors.pattern\">Password must start with uppercase letter</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\" *ngIf=\"!editUserMode\">\r\n    <label for=\"confirmPassword\">Confirm Password</label>\r\n    <input id=\"confirmPassword\" appConfirmEqualValidator=\"password\" name=\"confirmPassword\" placeholder=\"Confirm Password\" type=\"password\" class=\"form-control\" ngModel #confirmPassword=\"ngModel\" pattern=\"(^[A-Z])\\w+\" [ngClass]=\"{ 'is-invalid': confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) }\" required minlength=\"6\">\r\n    <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\r\nclass=\"alert alert-danger\">\r\n      <div *ngIf=\"confirmPassword.errors.required\">Password is required</div>\r\n      <div *ngIf=\"confirmPassword.errors.notEqual\">Password and Confirm Password does not match</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary mb-4\" (click)=\"closeModal()\">Cancel</button>\r\n    <button name=\"submit\" type=\"submit\" class=\"btn btn--green mb-4\" *ngIf=\"!editUserMode\" [disabled]=\"myform.invalid\">Add</button>\r\n    <button name=\"submit\" type=\"submit\" class=\"btn btn--green mb-4\" *ngIf=\"editUserMode\" [disabled]=\"myform.invalid\">Update user</button>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/role-management/role-management.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/role-management/role-management.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs__content\" appRemoveWrapper>\r\n  <a href=\"#\" class=\"btn btn--green mb-4\">Add new Role</a>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <colgroup>\r\n        <col class=\"col-w-340\" />\r\n        <col class=\"col-w-140\" />\r\n        <col class=\"col-w-140\" />\r\n        <col class=\"col-w-260\" />\r\n      </colgroup>\r\n      <thead>\r\n        <tr>\r\n          <th>Role Name</th>\r\n          <th>Role ID</th>\r\n          <th>Creation Date</th>\r\n          <th>Created By</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Agent Provocateur</td>\r\n          <td>0329032</td>\r\n          <td>Tue, 05/03</td>\r\n          <td>Ivanov Peotr</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/container/footer-panel/footer-panel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/container/footer-panel/footer-panel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n<p>&copy; 2019 VirtoCommerce. All Rights Reserved.<br><a href=\"http://virtocommerce.com\" rel=\"nofollow\"\r\n              target=\"_blank\">.NET ecommerce framework</a> by Virto</p>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/container/header-panel/header-panel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/container/header-panel/header-panel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header-menu [components]=\"menuComponents$ | async\" (select)=\"onSelect($event)\">\r\n</app-header-menu> -->\r\n<!-- <app-header-menu-list [components]=\"menuComponents\" [menuSelectedComponent]=\"selected$ | async\" (select)=\"select.emit($event)\">\r\n</app-header-menu-list> -->\r\n<app-menu></app-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/container/main-panel/main-panel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/container/main-panel/main-panel.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alerts></app-alerts>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forapproval/forapproval-details/forapproval-details.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forapproval/forapproval-details/forapproval-details.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Order details for approval</h2>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forapproval/forapproval.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forapproval/forapproval.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\">\r\n  <div class=\"order\">\r\n    <h1>Awaiting Approval</h1>\r\n    <div class=\"row page__sort\">\r\n      <div class=\"col-md-auto page__sort-date\">\r\n        From\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n             name=\"dp1\" ngbDatepicker #d1=\"ngbDatepicker\" [(ngModel)]=\"startDate\" (ngModelChange)=\"getAllOrders()\" (click)=\"d1.toggle()\">\r\n        To\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n             name=\"dp2\" ngbDatepicker #d2=\"ngbDatepicker\" [(ngModel)]=\"endDate\" (ngModelChange)=\"getAllOrders()\" (click)=\"d2.toggle()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <colgroup>\r\n          <col class=\"col-w-160\" />\r\n          <col class=\"col-w-140\" />\r\n          <col class=\"col-w-100\" />\r\n          <col class=\"col-w-80\" />\r\n          <col class=\"col-w-140\" />\r\n          <col class=\"col-w-130\" />\r\n          <col class=\"col-w-130\" />\r\n        </colgroup>\r\n        <thead>\r\n          <tr>\r\n            <th>Order ID</th>\r\n            <th>Status</th>\r\n            <th>Date</th>\r\n            <th>#Items</th>\r\n            <th>Created by</th>\r\n            <th>Assignet to</th>\r\n            <th>Total</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let order of orders\">\r\n          <tr>\r\n            <td>{{order.number}}</td>\r\n            <td>\r\n              <span class=\"text--blue\">{{order.status}}</span>\r\n            </td>\r\n            <td>{{order.createdDate | date: 'EEE, dd/MM '}}</td>\r\n            <td>{{order.items.length}}</td>\r\n            <td>{{order.createdBy}}</td>\r\n            <td>{{order.assignedTo}}</td>\r\n            <td>{{order.total.formattedAmount}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"page-nav\">\r\n      <div class=\"row align-items-end justify-content-center\">\r\n        <div class=\"col-auto\">\r\n          <div class=\"page-nav__total\">You've viewed {{orders.length}} of {{paginationInfo.collectionSize}} orders</div>\r\n          <ngb-pagination\r\n          [(page)]=\"paginationInfo.page\"\r\n          [pageSize]=\"paginationInfo.pageSize\"\r\n          [collectionSize]=\"paginationInfo.collectionSize\"\r\n          (pageChange)=\"pageChanged()\"></ngb-pagination>\r\n        </div>\r\n        <div class=\"col-auto ml-sm-auto\">\r\n            Show\r\n            <app-page-size-selector [defaultPageSize]=\"paginationInfo.pageSize\" [pageSizes]=\"pageSizes\" (pageSizeChanged)=\"pageSizeChanged($event)\" ></app-page-size-selector>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <!-- Swipe -->\r\n<div class=\"swipe swipe--menu\" [ngClass]=\"{'swipe--opened': isOpen}\">\r\n  <div class=\"swipe__header\">\r\n      <div class=\"swipe__header-t\">Username</div>\r\n      <div class=\"swipe__close\" (click)=\"closeMobileMenu()\"></div>\r\n  </div>\r\n  <div class=\"swipe__body\">\r\n      <ul class=\"nav\">\r\n          <li class=\"nav__item\">\r\n              <a [routerLink]=\"['/catalog']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\" (click)=\"closeMobileMenu()\">Catalog</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n              <a [routerLink]=\"['/orders']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\" (click)=\"closeMobileMenu()\">Orders</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n              <a [routerLink]=\"['/forapproval']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\" (click)=\"closeMobileMenu()\">Awaiting Approval</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n              <a [routerLink]=\"['/company']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\" (click)=\"closeMobileMenu()\">Company</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a [routerLink]=\"['/account']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\" (click)=\"closeMobileMenu()\">My account</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a href=\"/account/logout\" class=\"nav__link\">Logout</a>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n <!-- Header -->\r\n <header class=\"header\">\r\n  <div class=\"header-inner container\">\r\n      <div class=\"row align-items-center\">\r\n          <div class=\"col-auto\">\r\n              <div class=\"header-logo\">Dentalmed</div>\r\n          </div>\r\n          <div class=\"col d-none d-lg-block header-nav\">\r\n              <ul class=\"nav\">\r\n                  <li class=\"nav__item\">\r\n                      <a [routerLink]=\"['/catalog']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\">Catalog</a>\r\n                  </li>\r\n                  <li class=\"nav__item\">\r\n                      <a [routerLink]=\"['/orders']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\">Orders</a>\r\n                  </li>\r\n                  <li class=\"nav__item\">\r\n                      <a [routerLink]=\"['/forapproval']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\">Awaiting Approval</a>\r\n                  </li>\r\n                  <li class=\"nav__item\">\r\n                      <a [routerLink]=\"['/company']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\">Company</a>\r\n                  </li>\r\n                  <li class=\"nav__item\">\r\n                    <a [routerLink]=\"['/account']\" class=\"nav__link\" routerLinkActive=\"nav__link--active\">My account</a>\r\n                  </li>\r\n                  <li class=\"nav__item ml-auto\">\r\n                      <a href=\"/account/logout\" class=\"nav__link\">Logout</a>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n          <div class=\"col-auto d-block d-lg-none ml-auto\">\r\n              <div class=\"header-nav-mobile\">\r\n                  <a class=\"header__link\" [routerLink]=\"['/bulkorder']\">Bulk Order</a>\r\n                  <a class=\"header-toggle\" (click)=\"openMobileMenu()\"></a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</header>\r\n<!-- End Header -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/orders/invoice/invoice.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/orders/invoice/invoice.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\" *ngIf=\"order\">\r\n  <div class=\"order\">\r\n      <h1>Your order successfully</h1>\r\n      <div class=\"order__status\">\r\n          <div class=\"logo-vc\"></div>\r\n          <div class=\"order__status-name\">\r\n              Status <span class=\"status text--green\">{{order.status}}</span>\r\n          </div>\r\n      </div>\r\n      <div class=\"row order__general\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"order__general-date\">\r\n                  Order Date <span class=\"value\">{{order.createdDate | date: 'MM/dd/yyyy h:mm:ss a'}}</span>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"order__general-number\">\r\n                  Order Number <span class=\"value\">{{order.number}}</span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <h2>Details</h2>\r\n      <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n              <colgroup>\r\n                  <col>\r\n                  <col class=\"col-w-340\">\r\n                  <col class=\"col-w-120\">\r\n                  <col class=\"col-w-120\">\r\n                  <col class=\"col-w-120\">\r\n              </colgroup>\r\n              <thead>\r\n                  <tr>\r\n                      <th>#</th>\r\n                      <th>Item Description</th>\r\n                      <th>Unit Price</th>\r\n                      <th>Invoice QTY</th>\r\n                      <th>Line Price</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of items; let i = index \">\r\n                  <tr>\r\n                      <td>{{i+1}}</td>\r\n                      <td>\r\n                          {{item.name}}\r\n                          <div class=\"text--gray\">SKU: {{item.sku}}</div>\r\n                      </td>\r\n                      <td>{{item.placedPrice.formattedAmount}}</td>\r\n                      <td>{{item.quantity}}</td>\r\n                      <td>{{item.extendedPrice.formattedAmount}}</td>\r\n                  </tr>\r\n              </tbody>\r\n          </table>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6 ml-md-auto\">\r\n              <div class=\"list list--total\">\r\n                  <div class=\"list__item\">\r\n                      <b class=\"text--black\">Shipping</b> <span class=\"list__count\">{{order.shippingTotal.formattedAmount}}</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      <b class=\"text--black\">Total Fees</b> <span class=\"list__count free\">0.00</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      <b class=\"text--black\">Order Subtotal</b> <span class=\"list__count\">{{order.subTotal.formattedAmount}}</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      <b class=\"text--black\">GST</b> <span class=\"list__count\">{{order.taxTotal.formattedAmount}}</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      <b class=\"text--black\">Total</b> <span class=\"list__count\">{{order.total.formattedAmount}}</span>\r\n                  </div>\r\n                  <div class=\"list__item\">\r\n                      <b class=\"text--black\">Currency</b> <span class=\"list__count\">{{order.currency.code}}</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"order__actions\">\r\n          <a [routerLink]=\"['/catalog']\" class=\"btn btn--outline\">Back to Catalog</a>\r\n          <a (click)=\"getInvoicePdf(order.number)\" class=\"btn btn--green\">Download</a>\r\n      </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/orders/order-details/order-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/orders/order-details/order-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-active-order-mobile #mobileOrderSidebar></app-active-order-mobile>\r\n<main class=\"main container\">\r\n    <div class=\"order\">\r\n        <h1>Order details information</h1>\r\n        <div class=\"accordion\">\r\n            <div class=\"accordion__item\">\r\n                <div class=\"accordion__header\" (click)=\"toggleAccordion($event)\">\r\n                    <div class=\"accordion__t\">Details</div>\r\n                    <svg class=\"accordion__ico\" width=\"13px\" height=\"8px\" viewBox=\"0 0 13 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                        <g id=\"Version-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                            <g id=\"Catalog\" transform=\"translate(-1027.000000, -961.000000)\" class=\"fill\">\r\n                                <polygon id=\"Fill-1\" transform=\"translate(1033.414000, 964.914000) translate(-1033.414000, -964.914000) \" points=\"1038.414 961 1033.415 966 1028.414 961 1027 962.414 1033.415 968.828 1039.828 962.414\"></polygon>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n                <div class=\"accordion__content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"list list--total\">\r\n                                <div class=\"list__item\">\r\n                                    Subtotal <span class=\"list__count\">{{subTotal}}</span>\r\n                                </div>\r\n                                <div class=\"list__item\">\r\n                                    Shipping <span class=\"list__count\">{{shipping == '$0.00' ? 'Free' : shipping}}</span>\r\n                                </div>\r\n                                <div class=\"list__item\">\r\n                                    Total <span class=\"list__count\">{{total}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"list list--total\">\r\n                                <div class=\"list__item\">\r\n                                    Created by <span class=\"list__count\">{{createdBy}}</span>\r\n                                </div>\r\n                                <div class=\"list__item\">\r\n                                    Status <span class=\"list__count\">{{status}}</span>\r\n                                </div>\r\n                                <div class=\"list__item\">\r\n                                    Assigned to <span class=\"list__count\">Dmitriy Petrov</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"accordion__item\">\r\n                <div class=\"accordion__header\" (click)=\"toggleAccordion($event)\">\r\n                    <div class=\"accordion__t\">Order details</div>\r\n                    <svg class=\"accordion__ico\" width=\"13px\" height=\"8px\" viewBox=\"0 0 13 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                        <g id=\"Version-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                            <g id=\"Catalog\" transform=\"translate(-1027.000000, -961.000000)\" class=\"fill\">\r\n                                <polygon id=\"Fill-1\" transform=\"translate(1033.414000, 964.914000) translate(-1033.414000, -964.914000) \" points=\"1038.414 961 1033.415 966 1028.414 961 1027 962.414 1033.415 968.828 1039.828 962.414\"></polygon>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n                <div class=\"accordion__content\" *ngFor=\"let item of items\">\r\n                    <div class=\"order__item\">\r\n                        <!-- <a class=\"order__item-remove\" href=\"#\">Remove item</a> -->\r\n                        <div class=\"order__item-name\">{{item.name}}</div>\r\n                        <div class=\"order__item-brand\">Impression Tray</div>\r\n                        <div class=\"order__item-model\">Model: 2120 <span class=\"divider\">| </span>SKU: {{item.sku}}</div>\r\n                        <div class=\"order__item-descr\">Case of 10 Bags with 12 per Bag</div>\r\n                        <div class=\"order__item-other\">\r\n                            <div class=\"order__item-price\">Unit price: {{item.placedPrice.formattedAmount}}</div>\r\n                        </div>\r\n                        <div class=\"order__item-other\">\r\n                          <div class=\"order__item-price\">Quantity: {{item.quantity}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"accordion__item\">\r\n                <div class=\"accordion__header\" (click)=\"toggleAccordion($event)\">\r\n                    <div class=\"accordion__t\">Order comments</div>\r\n                    <svg class=\"accordion__ico\" width=\"13px\" height=\"8px\" viewBox=\"0 0 13 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                        <g id=\"Version-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                            <g id=\"Catalog\" transform=\"translate(-1027.000000, -961.000000)\" class=\"fill\">\r\n                                <polygon id=\"Fill-1\" transform=\"translate(1033.414000, 964.914000) translate(-1033.414000, -964.914000) \" points=\"1038.414 961 1033.415 966 1028.414 961 1027 962.414 1033.415 968.828 1039.828 962.414\"></polygon>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n                <div class=\"accordion__content\">\r\n                    <div class=\"list list--comments\">\r\n                        <div class=\"list__item\">\r\n                            <div class=\"list__item-info\">\r\n                                <div class=\"list__item-author\">Dmitriy Petrov</div>\r\n                                <div class=\"list__item-date\">21 Feb 2019 11:45</div>\r\n                            </div>\r\n                            <div class=\"list__item-status\">All is good</div>\r\n                        </div>\r\n                        <div class=\"list__item\">\r\n                            <div class=\"list__item-info\">\r\n                                <div class=\"list__item-author\">Dmitriy Petrov</div>\r\n                                <div class=\"list__item-date\">21 Feb 2019 11:45</div>\r\n                            </div>\r\n                            <div class=\"list__item-status\">All is bad</div>\r\n                        </div>\r\n                        <div class=\"list__item\">\r\n                            <div class=\"list__item-info\">\r\n                                <div class=\"list__item-author\">Dmitriy Petrov</div>\r\n                                <div class=\"list__item-date\">21 Feb 2019 11:45</div>\r\n                            </div>\r\n                            <div class=\"list__item-status\">WTF</div>\r\n                        </div>\r\n                    </div>\r\n                    <a href=\"#\" class=\"btn btn--blue\">Add comment</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"order__actions\" *ngIf=\"order\">\r\n            <a (click)=\"addProductToCart()\" class=\"btn btn--green\">Add to current Order</a>\r\n            <a class=\"btn btn--outline\" [routerLink]=\"['/invoice',order.number]\">View Invoice</a>\r\n        </div>\r\n        <app-mobile-cart-summary [activeOrderMobileSidebar]=\"mobileOrderSidebar\"></app-mobile-cart-summary>\r\n    </div>\r\n    <div class=\"sidebar sidebar--bg-gray d-none d-lg-block\">\r\n        <div class=\"sidebar__inner\">\r\n          <app-active-order></app-active-order>\r\n        </div>\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/orders/orders.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/orders/orders.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main container\">\r\n  <div class=\"order\">\r\n    <h1>Orders</h1>\r\n    <div class=\"row page__sort\">\r\n      <div class=\"col-md-auto page__sort-date\">\r\n        From\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n             name=\"dp1\" ngbDatepicker #d1=\"ngbDatepicker\" [(ngModel)]=\"startDate\" (ngModelChange)=\"filterOrdersByDate()\" (click)=\"d1.toggle()\">\r\n        To\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n             name=\"dp2\" ngbDatepicker #d2=\"ngbDatepicker\" [(ngModel)]=\"endDate\" (ngModelChange)=\"filterOrdersByDate()\" (click)=\"d2.toggle()\">\r\n      </div>\r\n      <div class=\"alert alert-danger col-md-auto m-0\" *ngIf=\"!validFilterDate\">Date is not valid</div>\r\n      <div class=\"col-md-auto page__sort-filter\">\r\n        Filter by status\r\n        <div class=\"dropdown\">\r\n          <div class=\"dropdown__toggle\">{{status}}</div>\r\n          <div class=\"dropdown__menu dropdown__menu--up\">\r\n            <a (click)=\"changeActiveStatus('All')\" class=\"dropdown__menu-item\">All</a>\r\n            <a (click)=\"changeActiveStatus('New')\" class=\"dropdown__menu-item\">New</a>\r\n            <a (click)=\"changeActiveStatus('Awaiting approwal')\" class=\"dropdown__menu-item\">Awaiting approwal</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <colgroup>\r\n          <col class=\"col-w-160\" />\r\n          <col class=\"col-w-140\" />\r\n          <col class=\"col-w-100\" />\r\n          <col class=\"col-w-80\" />\r\n          <col class=\"col-w-140\" />\r\n          <col class=\"col-w-130\" />\r\n          <col class=\"col-w-130\" />\r\n        </colgroup>\r\n        <thead>\r\n          <tr>\r\n            <th>Order ID</th>\r\n            <th>Status</th>\r\n            <th>Date</th>\r\n            <th># Items</th>\r\n            <th>Created by</th>\r\n            <th>Assigned to</th>\r\n            <th>Total</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let order of orders\">\r\n          <tr>\r\n          <td><a [routerLink]=\"['/order-details',order.number]\">{{order.number}}</a></td>\r\n          <td>{{order.status}}</td>\r\n          <td>{{order.createdDate | date: 'EEE, dd/MM '}}</td>\r\n          <td>{{order.items.length}}</td>\r\n          <td>{{order.createdBy}}</td>\r\n          <td>{{order.assignedTo}}</td>\r\n          <td>{{order.total.formattedAmount}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"page-nav\">\r\n        <div class=\"row align-items-end justify-content-center\">\r\n          <div class=\"col-auto\">\r\n            <div class=\"page-nav__total\">You've viewed {{orders.length}} of {{paginationInfo.collectionSize}} orders</div>\r\n            <ngb-pagination\r\n            [(page)]=\"paginationInfo.page\"\r\n            [pageSize]=\"paginationInfo.pageSize\"\r\n            [collectionSize]=\"paginationInfo.collectionSize\"\r\n            (pageChange)=\"pageChanged()\"></ngb-pagination>\r\n          </div>\r\n          <div class=\"col-auto ml-sm-auto\">\r\n              Show\r\n              <app-page-size-selector [defaultPageSize]=\"paginationInfo.pageSize\" [pageSizes]=\"pageSizes\" (pageSizeChanged)=\"pageSizeChanged($event)\" ></app-page-size-selector>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-size-selector/page-size-selector.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-size-selector/page-size-selector.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col\">\r\n  <div class=\"dropdown\">\r\n  <div class=\"dropdown__toggle\">{{pageSize}}</div>\r\n  <div class=\"dropdown__menu dropdown__menu--up\">\r\n    <a *ngFor=\"let ps of pageSizes\" class=\"dropdown__menu-item\" (click)=\"onPageSizeClicked(ps)\">{{ps}}</a>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-secondary\" id=\"dropdownPageSizes\" ngbDropdownToggle>{{pageSize}}</button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownPageSizes\">\r\n        <button ngbDropdownItem *ngFor=\"let ps of pageSizes\" (click)=\"onPageSizeClicked(ps)\">{{ps}}</button>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-details/product-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-details/product-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-active-order-mobile #mobileOrderSidebar></app-active-order-mobile>\r\n<main class=\"main container\">\r\n  <div class=\"content\" *ngIf=\"product\">\r\n    <div class=\"row product\">\r\n      <div class=\"col-md-auto product__gallery\">\r\n        <div class=\"product__gallery-img\">\r\n          <img src=\"{{ product.primaryImage.url }}\" alt=\"\" width=\"300\" height=\"300\" />\r\n        </div>\r\n        <div class=\"list list--gallery\">\r\n          <div class=\"list__item\" *ngFor=\"let img of product.images\">\r\n            <div class=\"list__img\">\r\n              <img\r\n                class=\"list__pic\"\r\n                src=\"{{ img.url }}\"\r\n                alt=\"\"\r\n                (click)=\"openImageModal(content)\"\r\n              />\r\n            </div>\r\n            <ng-template #content let-modal>\r\n              <ngb-carousel *ngIf=\"img\" class=\"text-center\">\r\n                <ng-template ngbSlide>\r\n                  <div class=\"picsum-img-wrapper\">\r\n                    <img [src]=\"img.url\" alt=\"Image\" />\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-carousel>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md product__info\">\r\n        <div class=\"product__general\">\r\n          <h1>{{ product.name }}</h1>\r\n          <div class=\"product__brand\">{{ product.brand }}</div>\r\n          <div class=\"product__descr\" [innerHTML]=\"product.quickReview\">\r\n          </div>\r\n          <div class=\"product__model\">\r\n            Model: {{product.model}}\r\n            <span class=\"sku\">SKU: {{ product.sku }}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"product__other\" *ngIf=\"(cart$ | async) as cart\">\r\n          <div class=\"product__price\">{{ product.price }}</div>\r\n          <app-change-product-quantity\r\n            [cart]=\"cart\"\r\n            [productId]=\"product.id\"\r\n          ></app-change-product-quantity>\r\n        </div>\r\n        <div class=\"product__text\" [innerHTML]=\"product.fullReview\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-mobile-cart-summary [activeOrderMobileSidebar]=\"mobileOrderSidebar\"></app-mobile-cart-summary>\r\n  </div>\r\n  <div class=\"sidebar sidebar--bg-gray d-none d-lg-block\">\r\n    <div class=\"sidebar__inner\">\r\n      <app-active-order></app-active-order>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n"

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
/* harmony import */ var _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/catalog/catalog.component */ "./src/app/components/catalog/catalog.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_forapproval_forapproval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forapproval/forapproval.component */ "./src/app/components/forapproval/forapproval.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_bulk_order_bulk_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bulk-order/bulk-order.component */ "./src/app/components/bulk-order/bulk-order.component.ts");
/* harmony import */ var _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/orders/order-details/order-details.component */ "./src/app/components/orders/order-details/order-details.component.ts");
/* harmony import */ var _components_forapproval_forapproval_details_forapproval_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forapproval/forapproval-details/forapproval-details.component */ "./src/app/components/forapproval/forapproval-details/forapproval-details.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/components/product-details/product-details.component.ts");
/* harmony import */ var _components_orders_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/orders/invoice/invoice.component */ "./src/app/components/orders/invoice/invoice.component.ts");













var routes = [
    // basic routes
    //{ path: '', redirectTo: 'catalog', pathMatch: 'full', canActivate: [AuthGuard] },
    //{ path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
    //{ path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
    //{ path: 'forapproval', component: ForApprovalComponent, canActivate: [AuthGuard] },
    //{ path: 'company', component: CompanyComponent, canActivate: [AuthGuard] },
    //{ path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'activeorder', component: ActiveOrderSummaryComponent, canActivate: [AuthGuard] },
    //{ path: 'invoice', component: ActiveOrderPostCheckoutComponent, canActivate: [AuthGuard] },
    //{ path: 'bulkorder', component: BulkOrderComponent, canActivate: [AuthGuard] },
    //{ path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
    //{ path: 'forapproval-details/:id', component: ForApprovalDetailsComponent, canActivate: [AuthGuard] }
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"] },
    { path: 'product-details/:id', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsComponent"] },
    { path: 'orders', component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"] },
    { path: 'forapproval', component: _components_forapproval_forapproval_component__WEBPACK_IMPORTED_MODULE_5__["ForApprovalComponent"] },
    { path: 'company', component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"] },
    { path: 'bulkorder', component: _components_bulk_order_bulk_order_component__WEBPACK_IMPORTED_MODULE_8__["BulkOrderComponent"] },
    { path: 'order-details/:id', component: _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsComponent"] },
    { path: 'forapproval-details/:id', component: _components_forapproval_forapproval_details_forapproval_details_component__WEBPACK_IMPORTED_MODULE_10__["ForApprovalDetailsComponent"] },
    { path: 'invoice/:id', component: _components_orders_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_12__["InvoiceComponent"] }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'vc-procurement-portal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/confirm-modal/confirm-modal.module */ "./src/app/modules/confirm-modal/confirm-modal.module.ts");
/* harmony import */ var _components_container_header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/container/header-panel/header-panel.component */ "./src/app/components/container/header-panel/header-panel.component.ts");
/* harmony import */ var _components_container_main_panel_main_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/container/main-panel/main-panel.component */ "./src/app/components/container/main-panel/main-panel.component.ts");
/* harmony import */ var _components_container_footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/container/footer-panel/footer-panel.component */ "./src/app/components/container/footer-panel/footer-panel.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_active_order_active_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/active-order/active-order.component */ "./src/app/components/active-order/active-order.component.ts");
/* harmony import */ var _components_bulk_order_bulk_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/bulk-order/bulk-order.component */ "./src/app/components/bulk-order/bulk-order.component.ts");
/* harmony import */ var _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/catalog/catalog.component */ "./src/app/components/catalog/catalog.component.ts");
/* harmony import */ var _components_catalog_search_products_search_products_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/catalog/search-products/search-products.component */ "./src/app/components/catalog/search-products/search-products.component.ts");
/* harmony import */ var _components_catalog_categories_categoires_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/catalog/categories/categoires.component */ "./src/app/components/catalog/categories/categoires.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/orders/order-details/order-details.component */ "./src/app/components/orders/order-details/order-details.component.ts");
/* harmony import */ var _components_forapproval_forapproval_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/forapproval/forapproval.component */ "./src/app/components/forapproval/forapproval.component.ts");
/* harmony import */ var _components_forapproval_forapproval_details_forapproval_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forapproval/forapproval-details/forapproval-details.component */ "./src/app/components/forapproval/forapproval-details/forapproval-details.component.ts");
/* harmony import */ var _components_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/page-size-selector/page-size-selector.component */ "./src/app/components/page-size-selector/page-size-selector.component.ts");
/* harmony import */ var _components_catalog_mobile_cart_summary_mobile_cart_summary_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/catalog/mobile-cart-summary/mobile-cart-summary.component */ "./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.ts");
/* harmony import */ var _components_active_order_active_order_mobile_active_order_mobile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/active-order/active-order-mobile/active-order-mobile.component */ "./src/app/components/active-order/active-order-mobile/active-order-mobile.component.ts");
/* harmony import */ var _directives_remove_wrapper_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./directives/remove-wrapper.directive */ "./src/app/directives/remove-wrapper.directive.ts");
/* harmony import */ var _components_catalog_change_product_quantity_change_product_quantity_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/catalog/change-product-quantity/change-product-quantity.component */ "./src/app/components/catalog/change-product-quantity/change-product-quantity.component.ts");
/* harmony import */ var _services_interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/interceptors/request-interceptor */ "./src/app/services/interceptors/request-interceptor.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/components/product-details/product-details.component.ts");
/* harmony import */ var _components_orders_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/orders/invoice/invoice.component */ "./src/app/components/orders/invoice/invoice.component.ts");
/* harmony import */ var _components_bulk_order_bulk_order_manual_bulk_order_manual_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/bulk-order/bulk-order-manual/bulk-order-manual.component */ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.ts");
/* harmony import */ var _directives_match_value_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./directives/match-value.directive */ "./src/app/directives/match-value.directive.ts");
/* harmony import */ var _components_active_order_change_product_quantity_active_order_change_product_quantity_active_order_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component */ "./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.ts");
/* harmony import */ var _components_bulk_order_bulk_order_manual_bulk_order_item_bulk_order_item_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component */ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.ts");
/* harmony import */ var _components_company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/company/company-details/company-details.component */ "./src/app/components/company/company-details/company-details.component.ts");
/* harmony import */ var _components_company_company_users_company_users_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/company/company-users/company-users.component */ "./src/app/components/company/company-users/company-users.component.ts");
/* harmony import */ var _components_company_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/company/role-management/role-management.component */ "./src/app/components/company/role-management/role-management.component.ts");
/* harmony import */ var _components_bulk_order_bulk_order_csv_bulk_order_csv_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/bulk-order/bulk-order-csv/bulk-order-csv.component */ "./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.ts");
/* harmony import */ var _components_active_order_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/active-order/checkout-modal/checkout-modal.component */ "./src/app/components/active-order/checkout-modal/checkout-modal.component.ts");
/* harmony import */ var _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./directives/only-number.directive */ "./src/app/directives/only-number.directive.ts");
/* harmony import */ var _components_company_edit_company_user_modal_form_edit_company_user_modal_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/company/edit-company-user-modal-form/edit-company-user-modal-form.component */ "./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.ts");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");






// 3d



// custom modules import





















// services
// services modules
// import { SharedService } from './services/shared-service';
// import { AuthGuard } from './guards';
// directives

















// import { initializeAppConfig, AppConfig } from './services/app-config.service';
// import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_container_header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_11__["HeaderPanelComponent"],
                _components_container_main_panel_main_panel_component__WEBPACK_IMPORTED_MODULE_12__["MainPanelComponent"],
                _components_container_footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_13__["FooterPanelComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"],
                _components_active_order_active_order_component__WEBPACK_IMPORTED_MODULE_16__["ActiveOrderComponent"],
                _components_bulk_order_bulk_order_component__WEBPACK_IMPORTED_MODULE_17__["BulkOrderComponent"],
                _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_18__["CatalogComponent"],
                _components_catalog_search_products_search_products_component__WEBPACK_IMPORTED_MODULE_19__["SearchProductsComponent"],
                _components_catalog_categories_categoires_component__WEBPACK_IMPORTED_MODULE_20__["CategoriesComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_21__["CompanyComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_22__["MenuComponent"],
                _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_23__["OrdersComponent"],
                _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_24__["OrderDetailsComponent"],
                _components_forapproval_forapproval_component__WEBPACK_IMPORTED_MODULE_25__["ForApprovalComponent"],
                _components_forapproval_forapproval_details_forapproval_details_component__WEBPACK_IMPORTED_MODULE_26__["ForApprovalDetailsComponent"],
                _components_catalog_mobile_cart_summary_mobile_cart_summary_component__WEBPACK_IMPORTED_MODULE_28__["MobileCartSummaryComponent"],
                _components_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_27__["PageSizeSelectorComponent"],
                _components_catalog_change_product_quantity_change_product_quantity_component__WEBPACK_IMPORTED_MODULE_31__["ChangeProductQuantityComponent"],
                _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_33__["ProductDetailsComponent"],
                _components_orders_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_34__["InvoiceComponent"],
                _components_company_edit_company_user_modal_form_edit_company_user_modal_form_component__WEBPACK_IMPORTED_MODULE_45__["EditCompanyUserModalFormComponent"],
                _components_active_order_change_product_quantity_active_order_change_product_quantity_active_order_component__WEBPACK_IMPORTED_MODULE_37__["ChangeProductQuantityActiveOrderComponent"],
                _components_active_order_active_order_mobile_active_order_mobile_component__WEBPACK_IMPORTED_MODULE_29__["ActiveOrderMobileComponent"],
                // directives
                _directives_remove_wrapper_directive__WEBPACK_IMPORTED_MODULE_30__["RemoveWrapperDirective"],
                _components_bulk_order_bulk_order_manual_bulk_order_manual_component__WEBPACK_IMPORTED_MODULE_35__["BulkOrderManualComponent"],
                _directives_match_value_directive__WEBPACK_IMPORTED_MODULE_36__["ConfirmEqualValidatorDirective"],
                _components_bulk_order_bulk_order_manual_bulk_order_item_bulk_order_item_component__WEBPACK_IMPORTED_MODULE_38__["BulkOrderItemComponent"],
                _components_company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_39__["CompanyDetailsComponent"],
                _components_company_company_users_company_users_component__WEBPACK_IMPORTED_MODULE_40__["CompanyUsersComponent"],
                _components_company_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_41__["RoleManagementComponent"],
                _components_bulk_order_bulk_order_csv_bulk_order_csv_component__WEBPACK_IMPORTED_MODULE_42__["BulkOrderCsvComponent"],
                _components_active_order_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_43__["CheckoutModalComponent"],
                _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_44__["OnlyNumberDirective"],
                _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_46__["AlertsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                // HttpClientXsrfModule
                //     .withOptions({
                //         cookieName: 'XSRF-TOKEN',
                //         headerName: 'X-XSRF-TOKEN'
                //     }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
                // NgbPaginationModule,
                // NgbDropdownModule,
                // NgbDatepickerModule,
                _modules_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUIModule"].forRoot({
                    delayStart: 1000,
                    delayStop: 1000
                }),
            ],
            providers: [
                // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_32__["RequestInterceptor"], multi: true },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateNativeAdapter"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            entryComponents: [_components_company_edit_company_user_modal_form_edit_company_user_modal_form_component__WEBPACK_IMPORTED_MODULE_45__["EditCompanyUserModalFormComponent"], _components_active_order_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_43__["CheckoutModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_converters_user_converter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/converters/user-converter.service */ "./src/app/services/converters/user-converter.service.ts");
/* harmony import */ var src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alerts.service */ "./src/app/services/alerts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AccountComponent = /** @class */ (function () {
    function AccountComponent(userService, userConverter, aletsService) {
        this.userService = userService;
        this.userConverter = userConverter;
        this.aletsService = aletsService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    AccountComponent.prototype.updateUser = function () {
        var _this = this;
        var updatedUser = this.userConverter.toEditCurrentAccount(this.user);
        var newPhoneNumber = this.userConverter.toEditCurrentAccountPhoneNumber(this.user);
        this.userService.updateUser(updatedUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function () { return _this.userService.updatePhoneNumber(newPhoneNumber); }))
            .subscribe(function () { return _this.aletsService.success('Account data is update successfuly!'); });
    };
    AccountComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_converters_user_converter_service__WEBPACK_IMPORTED_MODULE_3__["UserConverterService"] },
        { type: src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_4__["AlertsService"] }
    ]; };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/components/account/account.component.scss")]
        })
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/active-order/active-order-mobile/active-order-mobile.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/active-order/active-order-mobile/active-order-mobile.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZlLW9yZGVyL2FjdGl2ZS1vcmRlci1tb2JpbGUvYWN0aXZlLW9yZGVyLW1vYmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/active-order/active-order-mobile/active-order-mobile.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/active-order/active-order-mobile/active-order-mobile.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ActiveOrderMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrderMobileComponent", function() { return ActiveOrderMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var _checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkout-modal/checkout-modal.component */ "./src/app/components/active-order/checkout-modal/checkout-modal.component.ts");
/* harmony import */ var src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/confirm-modal/confirm-modal-service */ "./src/app/modules/confirm-modal/confirm-modal-service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mobile-view.service */ "./src/app/services/mobile-view.service.ts");







var ActiveOrderMobileComponent = /** @class */ (function () {
    function ActiveOrderMobileComponent(activeOrderService, modalService, confirmService, mobileSidebarService) {
        this.activeOrderService = activeOrderService;
        this.modalService = modalService;
        this.confirmService = confirmService;
        this.mobileSidebarService = mobileSidebarService;
        this.isOpen = false;
    }
    ActiveOrderMobileComponent.prototype.ngOnInit = function () {
        this.cart$ = this.activeOrderService.Cart;
        this.cart$.subscribe();
        this.activeOrderService.refreshCart();
    };
    ActiveOrderMobileComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    ActiveOrderMobileComponent.prototype.closeSidebar = function () {
        this.mobileSidebarService.closeSidebar(this);
    };
    ActiveOrderMobileComponent.prototype.removeItem = function (item) {
        var _this = this;
        this.closeSidebar();
        var confirmOptions = {
            title: 'Line item removing',
            message: 'Are you sure you want to remove this line item from the active order?'
        };
        this.confirmService
            .confirm(confirmOptions)
            .then(function () { return _this.activeOrderService.removeItem(item.id).subscribe(); });
    };
    ActiveOrderMobileComponent.prototype.clear = function () {
        var _this = this;
        this.closeSidebar();
        var confirmOptions = {
            title: 'Active order cleaning',
            message: 'Are you sure you want to clear the active order?'
        };
        this.confirmService
            .confirm(confirmOptions)
            .then(function () { return _this.activeOrderService.clearAllItems().subscribe(); });
    };
    ActiveOrderMobileComponent.prototype.checkout = function (cart) {
        var _this = this;
        this.closeSidebar();
        var modalRef = this.modalService.open(_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutModalComponent"], {
            centered: true,
            backdrop: 'static',
            size: 'lg'
        });
        modalRef.componentInstance.cart = cart;
        modalRef.result.then(function (result) {
            _this.activeOrderService.createOrder().subscribe();
        });
    };
    ActiveOrderMobileComponent.ctorParameters = function () { return [
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_2__["ActiveOrderService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"] },
        { type: src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_6__["MobileViewService"] }
    ]; };
    ActiveOrderMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-order-mobile',
            template: __webpack_require__(/*! raw-loader!./active-order-mobile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/active-order/active-order-mobile/active-order-mobile.component.html"),
            styles: [__webpack_require__(/*! ./active-order-mobile.component.scss */ "./src/app/components/active-order/active-order-mobile/active-order-mobile.component.scss")]
        })
    ], ActiveOrderMobileComponent);
    return ActiveOrderMobileComponent;
}());



/***/ }),

/***/ "./src/app/components/active-order/active-order.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/active-order/active-order.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZlLW9yZGVyL2FjdGl2ZS1vcmRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/active-order/active-order.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/active-order/active-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActiveOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrderComponent", function() { return ActiveOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_active_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/confirm-modal/confirm-modal-service */ "./src/app/modules/confirm-modal/confirm-modal-service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-modal/checkout-modal.component */ "./src/app/components/active-order/checkout-modal/checkout-modal.component.ts");






var ActiveOrderComponent = /** @class */ (function () {
    function ActiveOrderComponent(activeOrderService, confirmService, modalService) {
        this.activeOrderService = activeOrderService;
        this.confirmService = confirmService;
        this.modalService = modalService;
    }
    ActiveOrderComponent.prototype.ngOnInit = function () {
        this.cart$ = this.activeOrderService.Cart;
        this.cart$.subscribe();
        this.activeOrderService.refreshCart();
    };
    ActiveOrderComponent.prototype.removeItem = function (item) {
        var _this = this;
        var confirmOptions = { title: 'Line item removing', message: 'Are you sure you want to remove this line item from the active order?' };
        this.confirmService.confirm(confirmOptions).then(function () { return _this.activeOrderService.removeItem(item.id).subscribe(); }, function () { });
    };
    ActiveOrderComponent.prototype.clear = function () {
        var _this = this;
        var confirmOptions = { title: 'Active order cleaning', message: 'Are you sure you want to clear the active order?' };
        this.confirmService.confirm(confirmOptions).then(function () { return _this.activeOrderService.clearAllItems().subscribe(); });
    };
    ActiveOrderComponent.prototype.decrementQuantity = function (item) {
        if (item.quantity <= 1) {
            this.removeItem(item);
            return;
        }
        item.quantity--;
        this.activeOrderService
            .changeItemQuantity(item.id, item.quantity)
            .subscribe();
    };
    ActiveOrderComponent.prototype.incrementQuantity = function (item) {
        item.quantity++;
        this.activeOrderService
            .changeItemQuantity(item.id, item.quantity)
            .subscribe();
    };
    ActiveOrderComponent.prototype.updateLineItemQuantity = function (lineItem) {
        this.activeOrderService
            .changeItemQuantity(lineItem.id, lineItem.quantity)
            .subscribe();
    };
    ActiveOrderComponent.prototype.checkout = function (cart) {
        var _this = this;
        var modalRef = this.modalService.open(_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutModalComponent"], {
            centered: true,
            backdrop: 'static',
            size: 'lg'
        });
        modalRef.componentInstance.cart = cart;
        modalRef.result.then(function (result) {
            _this.activeOrderService.createOrder().subscribe();
        });
    };
    ActiveOrderComponent.ctorParameters = function () { return [
        { type: _services_active_order_service__WEBPACK_IMPORTED_MODULE_2__["ActiveOrderService"] },
        { type: src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    ActiveOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-order',
            template: __webpack_require__(/*! raw-loader!./active-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/active-order/active-order.component.html"),
            styles: [__webpack_require__(/*! ./active-order.component.scss */ "./src/app/components/active-order/active-order.component.scss")]
        })
    ], ActiveOrderComponent);
    return ActiveOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZlLW9yZGVyL2NoYW5nZS1wcm9kdWN0LXF1YW50aXR5LWFjdGl2ZS1vcmRlci9jaGFuZ2UtcHJvZHVjdC1xdWFudGl0eS1hY3RpdmUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ChangeProductQuantityActiveOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProductQuantityActiveOrderComponent", function() { return ChangeProductQuantityActiveOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/confirm-modal/confirm-modal-service */ "./src/app/modules/confirm-modal/confirm-modal-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ChangeProductQuantityActiveOrderComponent = /** @class */ (function () {
    function ChangeProductQuantityActiveOrderComponent(activeOrderService, confirmService) {
        this.activeOrderService = activeOrderService;
        this.confirmService = confirmService;
        this.productQuantity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ChangeProductQuantityActiveOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quantitySub = this.productQuantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (quantity) {
            console.log('New quantity: ', quantity);
            _this.updateLineItemQuantity(+quantity);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        })).subscribe();
    };
    ChangeProductQuantityActiveOrderComponent.prototype.removeItem = function (item) {
        var _this = this;
        var confirmOptions = { title: 'Line item removing', message: 'Are you sure you want to remove this line item from the active order?' };
        this.confirmService.confirm(confirmOptions).then(function () { return _this.activeOrderService.removeItem(item.id).subscribe(); }, function () { });
    };
    ChangeProductQuantityActiveOrderComponent.prototype.decrementQuantity = function (lineItem) {
        if (lineItem.quantity <= 1) {
            this.removeItem(lineItem);
            return;
        }
        lineItem.quantity--;
        this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
    };
    ChangeProductQuantityActiveOrderComponent.prototype.incrementQuantity = function (lineItem) {
        lineItem.quantity++;
        this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
    };
    ChangeProductQuantityActiveOrderComponent.prototype.onChangeQuantity = function (quantityText) {
        var quantity = +quantityText;
        this.productQuantity$.next(quantity);
    };
    ChangeProductQuantityActiveOrderComponent.prototype.updateLineItemQuantity = function (quantity) {
        var item = this.lineItem;
        this.activeOrderService.changeItemQuantity(item.id, quantity).subscribe();
    };
    ChangeProductQuantityActiveOrderComponent.prototype.ngOnDestroy = function () {
        if (this.quantitySub) {
            this.quantitySub.unsubscribe();
            this.quantitySub = null;
        }
    };
    ChangeProductQuantityActiveOrderComponent.ctorParameters = function () { return [
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_3__["ActiveOrderService"] },
        { type: src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChangeProductQuantityActiveOrderComponent.prototype, "cart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChangeProductQuantityActiveOrderComponent.prototype, "lineItem", void 0);
    ChangeProductQuantityActiveOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-product-quantity-active-order',
            template: __webpack_require__(/*! raw-loader!./change-product-quantity-active-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.html"),
            styles: [__webpack_require__(/*! ./change-product-quantity-active-order.component.scss */ "./src/app/components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component.scss")]
        })
    ], ChangeProductQuantityActiveOrderComponent);
    return ChangeProductQuantityActiveOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/active-order/checkout-modal/checkout-modal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/active-order/checkout-modal/checkout-modal.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZlLW9yZGVyL2NoZWNrb3V0LW1vZGFsL2NoZWNrb3V0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/active-order/checkout-modal/checkout-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/active-order/checkout-modal/checkout-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: CheckoutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModalComponent", function() { return CheckoutModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var CheckoutModalComponent = /** @class */ (function () {
    function CheckoutModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.showOrderItems = false;
    }
    CheckoutModalComponent.prototype.ngOnInit = function () {
    };
    CheckoutModalComponent.prototype.toggleAccordion = function (event) {
        event.target.parentElement.classList.toggle('accordion__item--active');
    };
    CheckoutModalComponent.prototype.toggleOrderDetails = function (event) {
        event.target.parentElement.classList.toggle('accordion__item--active');
        this.showOrderItems = !this.showOrderItems;
    };
    CheckoutModalComponent.prototype.checkout = function () {
        this.activeModal.close(true);
    };
    CheckoutModalComponent.prototype.closeModal = function () {
        this.activeModal.dismiss();
    };
    CheckoutModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CheckoutModalComponent.prototype, "cart", void 0);
    CheckoutModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout-modal',
            template: __webpack_require__(/*! raw-loader!./checkout-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/active-order/checkout-modal/checkout-modal.component.html"),
            styles: [__webpack_require__(/*! ./checkout-modal.component.scss */ "./src/app/components/active-order/checkout-modal/checkout-modal.component.scss")]
        })
    ], CheckoutModalComponent);
    return CheckoutModalComponent;
}());



/***/ }),

/***/ "./src/app/components/alerts/alerts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alerts.service */ "./src/app/services/alerts.service.ts");



var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(alertsService) {
        this.alertsService = alertsService;
        this.dismissible = true;
    }
    AlertsComponent.prototype.ngOnInit = function () {
        this.alerts$ = this.alertsService.alerts$;
    };
    AlertsComponent.prototype.onClosed = function (alert) {
        this.alertsService.dismissAlert(alert);
    };
    AlertsComponent.ctorParameters = function () { return [
        { type: src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_2__["AlertsService"] }
    ]; };
    AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! raw-loader!./alerts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/alerts/alerts.component.html")
        })
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVsay1vcmRlci9idWxrLW9yZGVyLWNzdi9idWxrLW9yZGVyLWNzdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BulkOrderCsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkOrderCsvComponent", function() { return BulkOrderCsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BulkOrderCsvComponent = /** @class */ (function () {
    function BulkOrderCsvComponent() {
    }
    BulkOrderCsvComponent.prototype.ngOnInit = function () {
    };
    BulkOrderCsvComponent.prototype.addItemsToCart = function () {
        // todo
    };
    BulkOrderCsvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-order-csv',
            template: __webpack_require__(/*! raw-loader!./bulk-order-csv.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.html"),
            styles: [__webpack_require__(/*! ./bulk-order-csv.component.scss */ "./src/app/components/bulk-order/bulk-order-csv/bulk-order-csv.component.scss")]
        })
    ], BulkOrderCsvComponent);
    return BulkOrderCsvComponent;
}());



/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n  border-color: #f33;\n  color: #f33;\n}\n\ninput.ng-dirty.ng-invalid {\n  border-color: #f33;\n  color: #f33;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWxrLW9yZGVyL2J1bGstb3JkZXItbWFudWFsL2J1bGstb3JkZXItaXRlbS9DOlxcUHJvamVjdHNcXFZpcnRvQ29tbWVyY2VcXHZjLXByb2N1cmVtZW50LXRoZW1lXFxuZy1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJ1bGstb3JkZXJcXGJ1bGstb3JkZXItbWFudWFsXFxidWxrLW9yZGVyLWl0ZW1cXGJ1bGstb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idWxrLW9yZGVyL2J1bGstb3JkZXItbWFudWFsL2J1bGstb3JkZXItaXRlbS9idWxrLW9yZGVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNkIsa0JBQUE7RUFBcUIsV0FBQTtBQ0dsRDs7QURGQTtFQUEyQixrQkFBQTtFQUFxQixXQUFBO0FDT2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idWxrLW9yZGVyL2J1bGstb3JkZXItbWFudWFsL2J1bGstb3JkZXItaXRlbS9idWxrLW9yZGVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge2JvcmRlci1jb2xvcjogI2YzMzsgIGNvbG9yOiAjZjMzO31cclxuaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7Ym9yZGVyLWNvbG9yOiAjZjMzOyAgY29sb3I6ICNmMzM7fVxyXG4iLCJpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNmMzM7XG4gIGNvbG9yOiAjZjMzO1xufVxuXG5pbnB1dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjMzO1xuICBjb2xvcjogI2YzMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: BulkOrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkOrderItemComponent", function() { return BulkOrderItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");





var BulkOrderItemComponent = /** @class */ (function () {
    function BulkOrderItemComponent(catalogService) {
        var _this = this;
        this.catalogService = catalogService;
        this.removeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.suggestedProductsFormatter = function (item) { return item.name; };
        this.searchProductsSuggestionsByName = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
                return _this.getSuggestedProducts(term).pipe();
            }));
        };
    }
    BulkOrderItemComponent.prototype.ngOnInit = function () {
    };
    BulkOrderItemComponent.prototype.onRemove = function () {
        this.removeClicked.emit(this.index);
    };
    Object.defineProperty(BulkOrderItemComponent.prototype, "id", {
        get: function () { return this.itemForm.get('id'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulkOrderItemComponent.prototype, "sku", {
        get: function () { return this.itemForm.get('sku'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulkOrderItemComponent.prototype, "productName", {
        get: function () { return this.itemForm.get('productName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulkOrderItemComponent.prototype, "qty", {
        get: function () { return this.itemForm.get('qty'); },
        enumerable: true,
        configurable: true
    });
    BulkOrderItemComponent.prototype.suggestedProductSelected = function (event) {
        event.preventDefault();
        if (!!event.item) {
            var product = event.item;
            this.id.setValue(product.id);
            this.sku.setValue(product.sku);
            this.productName.setValue(product.name);
        }
    };
    BulkOrderItemComponent.prototype.getSuggestedProducts = function (keyword) {
        return this.catalogService.getAllProducts(1, 20, null, keyword)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.products; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            console.log('Suggested products loading is failed');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }));
    };
    BulkOrderItemComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["CatalogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BulkOrderItemComponent.prototype, "itemForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BulkOrderItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BulkOrderItemComponent.prototype, "removeClicked", void 0);
    BulkOrderItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-order-item',
            template: __webpack_require__(/*! raw-loader!./bulk-order-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.html"),
            styles: [__webpack_require__(/*! ./bulk-order-item.component.scss */ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component.scss")]
        })
    ], BulkOrderItemComponent);
    return BulkOrderItemComponent;
}());



/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVsay1vcmRlci9idWxrLW9yZGVyLW1hbnVhbC9idWxrLW9yZGVyLW1hbnVhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BulkOrderManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkOrderManualComponent", function() { return BulkOrderManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");







var BulkOrderManualComponent = /** @class */ (function () {
    function BulkOrderManualComponent(formBuilder, catalogService, activeOrderService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.catalogService = catalogService;
        this.activeOrderService = activeOrderService;
        // itemsForms: FormGroup[] = [];
        this.defaultItemsCount = 0;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.suggestedProductsFormatter = function (item) { return item.name; };
        this.searchProductsSuggestionsByName = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this.getSuggestedProducts(term).pipe();
            }));
        };
        this.newItemForm = this.formBuilder.group({
            sku: [''],
            productName: [''],
            qty: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]]
        });
        var itemsForms = [];
        for (var i = 0; i < this.defaultItemsCount; i++) {
            var newItemForm = this.createItemForm();
            itemsForms.push(newItemForm);
        }
        this.itemsForm = this.formBuilder.group({
            items: this.formBuilder.array(itemsForms, this.itemsEmptyValidator)
        });
    }
    Object.defineProperty(BulkOrderManualComponent.prototype, "items", {
        get: function () {
            return this.itemsForm.get('items');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulkOrderManualComponent.prototype, "itemsIsEmpty", {
        get: function () {
            return this.items.controls.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    BulkOrderManualComponent.prototype.ngOnInit = function () { };
    BulkOrderManualComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
    };
    BulkOrderManualComponent.prototype.clearItems = function () {
        this.items.clear();
    };
    BulkOrderManualComponent.prototype.addItem = function () {
        var itemForm = this.createItemForm(this.newItemForm.get('sku').value, this.newItemForm.get('productName').value, this.newItemForm.get('qty').value);
        this.items.push(itemForm);
        this.validateAllFormFields(this.itemsForm);
    };
    BulkOrderManualComponent.prototype.removeItem = function (index) {
        this.items.removeAt(index);
        this.validateAllFormFields(this.itemsForm);
    };
    BulkOrderManualComponent.prototype.addItemsToCart = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.items.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var itemForm = _c.value;
                var productId = itemForm.get('id').value;
                var quantity = itemForm.get('qty').value;
                this.activeOrderService.addItem(productId, quantity).subscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BulkOrderManualComponent.prototype.suggestedProductSelected = function (event) {
        event.preventDefault();
        if (!!event.item) {
            var product = event.item;
            this.newItemForm.get('sku').setValue(product.sku);
            this.newItemForm.get('productName').setValue(product.name);
        }
    };
    BulkOrderManualComponent.prototype.itemsEmptyValidator = function (itemsForms) {
        if (itemsForms == null || itemsForms.controls.length < 1) {
            return { itemsEmpty: true };
        }
        return null;
    };
    // sku unique validator
    BulkOrderManualComponent.prototype.uniqueSkuValidator = function (control) {
        var e_2, _a;
        var itemsForms = (control.parent || { parent: null }).parent;
        if (itemsForms != null) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](itemsForms.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var itemForm = _c.value;
                    if (itemForm !== control.parent && itemForm.get('sku').value === control.value) {
                        return { uniqueSku: true };
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return null;
    };
    BulkOrderManualComponent.prototype.getProduct = function (sku) {
        return !sku ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : this.catalogService.getProductBySku(sku)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            console.log('Finding product by sku is failed');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    BulkOrderManualComponent.prototype.getSuggestedProducts = function (keyword) {
        return this.catalogService.getAllProducts(1, 20, null, keyword)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.products; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            console.log('Suggested products loading is failed');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }));
    };
    BulkOrderManualComponent.prototype.createItemForm = function (sku, productName, qty) {
        var _this = this;
        if (sku === void 0) { sku = ''; }
        if (productName === void 0) { productName = ''; }
        if (qty === void 0) { qty = 1; }
        var itemForm = this.formBuilder.group({
            id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            availableQty: [1],
            sku: [sku, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.uniqueSkuValidator]],
            productName: [productName],
            qty: [qty, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]]
        });
        itemForm.get('sku').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (x) { return _this.getProduct(x); }))
            .subscribe(function (p) {
            itemForm.get('id').setValue(null);
            // itemForm.get('sku').setValidators([Validators.required, this.uniqueSkuValidator]);
            if (p != null) {
                itemForm.get('id').setValue(p.id);
                itemForm.get('productName').setValue(p.name);
                itemForm.get('qty')
                    .setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                    // todo: set to real caonstraint value
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)
                ]);
                itemForm.get('qty').updateValueAndValidity();
            }
            else {
                itemForm.get('id').setValue(null);
                if (itemForm.controls.sku.value !== '') {
                    itemForm.get('sku').setErrors({ skuExists: true });
                }
                itemForm.get('productName').setValue('');
                itemForm.get('qty').setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)
                ]);
            }
        });
        // itemForm.get('sku').updateValueAndValidity();
        if (sku) {
            itemForm.get('sku').markAsDirty();
        }
        itemForm.get('qty').markAsDirty();
        return itemForm;
    };
    BulkOrderManualComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.updateValueAndValidity({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    BulkOrderManualComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["CatalogService"] },
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_6__["ActiveOrderService"] }
    ]; };
    BulkOrderManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-order-manual',
            template: __webpack_require__(/*! raw-loader!./bulk-order-manual.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.html"),
            styles: [__webpack_require__(/*! ./bulk-order-manual.component.scss */ "./src/app/components/bulk-order/bulk-order-manual/bulk-order-manual.component.scss")]
        })
    ], BulkOrderManualComponent);
    return BulkOrderManualComponent;
}());



/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVsay1vcmRlci9idWxrLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/bulk-order/bulk-order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/bulk-order/bulk-order.component.ts ***!
  \***************************************************************/
/*! exports provided: BulkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkOrderComponent", function() { return BulkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_active_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/active-order.service */ "./src/app/services/active-order.service.ts");



var BulkOrderComponent = /** @class */ (function () {
    function BulkOrderComponent(activeOrderService) {
        this.activeOrderService = activeOrderService;
        this.selectedTab = 'manualy'; // manualy or csv
    }
    BulkOrderComponent.prototype.setSelectedTab = function (tabName) {
        this.selectedTab = tabName;
    };
    BulkOrderComponent.prototype.ngOnInit = function () {
    };
    BulkOrderComponent.ctorParameters = function () { return [
        { type: _services_active_order_service__WEBPACK_IMPORTED_MODULE_2__["ActiveOrderService"] }
    ]; };
    BulkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-order',
            template: __webpack_require__(/*! raw-loader!./bulk-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bulk-order/bulk-order.component.html"),
            styles: [__webpack_require__(/*! ./bulk-order.component.scss */ "./src/app/components/bulk-order/bulk-order.component.scss")]
        })
    ], BulkOrderComponent);
    return BulkOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/catalog/catalog.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/catalog/catalog.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/catalog/catalog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/catalog/catalog.component.ts ***!
  \*********************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_active_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/inner/pagination-info */ "./src/app/models/inner/pagination-info.ts");
/* harmony import */ var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json");
var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json", 1);
/* harmony import */ var src_app_services_converters_product_converter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/converters/product-converter.service */ "./src/app/services/converters/product-converter.service.ts");
/* harmony import */ var src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mobile-view.service */ "./src/app/services/mobile-view.service.ts");






//import { AppConfig } from 'src/app/services/app-config.service';



var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(catalogService, activeOrderService, productConverter, mobileSidebarService) {
        this.catalogService = catalogService;
        this.activeOrderService = activeOrderService;
        this.productConverter = productConverter;
        this.mobileSidebarService = mobileSidebarService;
        this.selectedCategory = null;
        this.searchText = '';
        this.settings = src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_6__;
        // paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
        // pageSizes = AppConfig.settings.pageSizes;
        this.paginationInfo = new src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_5__["PaginationInfo"](this.settings.defaultPageSize);
        this.pageSizes = this.settings.pageSizes;
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.showMobileSearch = false;
        // this.currentUser = this.authenticationService.currentUserValue;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.Init();
        this.cart$ = this.activeOrderService.Cart;
        this.cart$.subscribe();
    };
    CatalogComponent.prototype.pageChanged = function () {
        this.getPproducts();
    };
    CatalogComponent.prototype.openMobileCategories = function (mobileCategoies) {
        this.mobileSidebarService.openSidebar(mobileCategoies);
    };
    CatalogComponent.prototype.openMobileSearch = function () {
        this.mobileSidebarService.openMobileSearch();
        this.showMobileSearch = !this.showMobileSearch;
    };
    CatalogComponent.prototype.closeMobileSearch = function () {
        this.mobileSidebarService.closeMobileSearch();
        this.showMobileSearch = !this.showMobileSearch;
    };
    CatalogComponent.prototype.pageSizeChanged = function (eventArgs) {
        this.paginationInfo.pageSize = eventArgs.newPageSize;
        this.getPproducts();
    };
    CatalogComponent.prototype.categoryChanged = function (category) {
        this.selectedCategory = category;
        this.getPproducts();
    };
    CatalogComponent.prototype.getPproducts = function () {
        var _this = this;
        var categoryId = this.selectedCategory ? this.selectedCategory.id : null;
        this.catalogService.getAllProducts(this.paginationInfo.page, this.paginationInfo.pageSize, categoryId, this.searchText).subscribe(function (data) {
            _this.products = data.products.map(function (product) { return _this.productConverter.toProductDetails(product); });
            _this.paginationInfo.page = data.metaData.pageNumber;
            _this.paginationInfo.collectionSize = data.metaData.totalItemCount;
        });
    };
    CatalogComponent.prototype.searchByText = function (searchText) {
        this.searchText = searchText;
        this.getPproducts();
    };
    CatalogComponent.prototype.Init = function () {
        //this.blockUI.start('Loading...');
        this.categories$ = this.catalogService.getAllCategories();
        this.getPproducts();
    };
    CatalogComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["CatalogService"] },
        { type: _services_active_order_service__WEBPACK_IMPORTED_MODULE_3__["ActiveOrderService"] },
        { type: src_app_services_converters_product_converter_service__WEBPACK_IMPORTED_MODULE_7__["ProductConverterService"] },
        { type: src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_8__["MobileViewService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])()
    ], CatalogComponent.prototype, "blockUI", void 0);
    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! raw-loader!./catalog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.scss */ "./src/app/components/catalog/catalog.component.scss")]
        })
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/components/catalog/categories/categoires.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/catalog/categories/categoires.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobile-view.service */ "./src/app/services/mobile-view.service.ts");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(mobileSidebarService) {
        this.mobileSidebarService = mobileSidebarService;
        this.selectedCategory = null;
        this.isOpen = false;
        this.categoryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    CategoriesComponent.prototype.closeSidebar = function () {
        this.mobileSidebarService.closeSidebar(this);
    };
    CategoriesComponent.prototype.isActive = function (category) {
        return this.selectedCategory === category;
    };
    CategoriesComponent.prototype.selectCategory = function (category) {
        this.selectedCategory = category;
        this.categoryChanged.emit(category);
        if (this.isOpen) {
            this.closeSidebar();
        }
    };
    CategoriesComponent.prototype.selectAllProducts = function () {
        this.selectedCategory = null;
        this.categoryChanged.emit(null);
        if (this.isOpen) {
            this.closeSidebar();
        }
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CategoriesComponent.prototype, "categories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CategoriesComponent.prototype, "categoryChanged", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/catalog/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/catalog/categories/categories.component.scss")]
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/catalog/categories/categories.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/catalog/categories/categories.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/catalog/change-product-quantity/change-product-quantity.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/catalog/change-product-quantity/change-product-quantity.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZy9jaGFuZ2UtcHJvZHVjdC1xdWFudGl0eS9jaGFuZ2UtcHJvZHVjdC1xdWFudGl0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/catalog/change-product-quantity/change-product-quantity.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/catalog/change-product-quantity/change-product-quantity.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangeProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProductQuantityComponent", function() { return ChangeProductQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/confirm-modal/confirm-modal-service */ "./src/app/modules/confirm-modal/confirm-modal-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ChangeProductQuantityComponent = /** @class */ (function () {
    function ChangeProductQuantityComponent(activeOrderService, confirmService) {
        this.activeOrderService = activeOrderService;
        this.confirmService = confirmService;
        this.productQuantity$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ChangeProductQuantityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quantitySub = this.productQuantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (quantity) {
            console.log('New quantity: ', quantity);
            _this.updateLineItemQuantity(+quantity);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        })).subscribe();
    };
    Object.defineProperty(ChangeProductQuantityComponent.prototype, "productLineItem", {
        get: function () {
            return this.getProductLineItem(this.productId);
        },
        enumerable: true,
        configurable: true
    });
    ChangeProductQuantityComponent.prototype.removeItem = function (item) {
        var _this = this;
        var confirmOptions = { title: 'Line item removing', message: 'Are you sure you want to remove this line item from the active order?' };
        this.confirmService.confirm(confirmOptions).then(function () { return _this.activeOrderService.removeItem(item.id).subscribe(); }, function () { });
    };
    ChangeProductQuantityComponent.prototype.getProductLineItem = function (productId) {
        var lineItem = this.cart.items.find(function (x) { return x.productId === productId; });
        return lineItem;
    };
    ChangeProductQuantityComponent.prototype.addProductToCart = function () {
        this.activeOrderService.addItem(this.productId).subscribe();
    };
    ChangeProductQuantityComponent.prototype.decrementQuantity = function (lineItem) {
        if (lineItem.quantity <= 1) {
            this.removeItem(lineItem);
            return;
        }
        lineItem.quantity--;
        this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
    };
    ChangeProductQuantityComponent.prototype.incrementQuantity = function (lineItem) {
        lineItem.quantity++;
        this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
    };
    ChangeProductQuantityComponent.prototype.onChangeQuantity = function (quantity) {
        this.productQuantity$.next(quantity);
    };
    ChangeProductQuantityComponent.prototype.updateLineItemQuantity = function (quantity) {
        var lineItem = this.productLineItem;
        this.activeOrderService.changeItemQuantity(lineItem.id, quantity).subscribe();
    };
    ChangeProductQuantityComponent.prototype.ngOnDestroy = function () {
        if (this.quantitySub) {
            this.quantitySub.unsubscribe();
            this.quantitySub = null;
        }
    };
    ChangeProductQuantityComponent.ctorParameters = function () { return [
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_2__["ActiveOrderService"] },
        { type: src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChangeProductQuantityComponent.prototype, "cart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChangeProductQuantityComponent.prototype, "productId", void 0);
    ChangeProductQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-product-quantity',
            template: __webpack_require__(/*! raw-loader!./change-product-quantity.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/catalog/change-product-quantity/change-product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./change-product-quantity.component.scss */ "./src/app/components/catalog/change-product-quantity/change-product-quantity.component.scss")]
        })
    ], ChangeProductQuantityComponent);
    return ChangeProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZy9tb2JpbGUtY2FydC1zdW1tYXJ5L21vYmlsZS1jYXJ0LXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MobileCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileCartSummaryComponent", function() { return MobileCartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mobile-view.service */ "./src/app/services/mobile-view.service.ts");




var MobileCartSummaryComponent = /** @class */ (function () {
    function MobileCartSummaryComponent(activeOrderService, mobileSidebarService) {
        this.activeOrderService = activeOrderService;
        this.mobileSidebarService = mobileSidebarService;
    }
    MobileCartSummaryComponent.prototype.openSidebar = function () {
        this.mobileSidebarService.openSidebar(this.activeOrderMobileSidebar);
    };
    MobileCartSummaryComponent.prototype.ngOnInit = function () {
        this.cart$ = this.activeOrderService.Cart;
        this.cart$.subscribe();
    };
    MobileCartSummaryComponent.ctorParameters = function () { return [
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_2__["ActiveOrderService"] },
        { type: src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_3__["MobileViewService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MobileCartSummaryComponent.prototype, "activeOrderMobileSidebar", void 0);
    MobileCartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-cart-summary',
            template: __webpack_require__(/*! raw-loader!./mobile-cart-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./mobile-cart-summary.component.scss */ "./src/app/components/catalog/mobile-cart-summary/mobile-cart-summary.component.scss")]
        })
    ], MobileCartSummaryComponent);
    return MobileCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/catalog/search-products/search-products.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/catalog/search-products/search-products.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZy9zZWFyY2gtcHJvZHVjdHMvc2VhcmNoLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/catalog/search-products/search-products.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/catalog/search-products/search-products.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductsComponent", function() { return SearchProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SearchProductsComponent = /** @class */ (function () {
    function SearchProductsComponent() {
        this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.searchTextChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyupSubs = this.searchText$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (x) { return _this.searchTextChanged.emit(x); });
    };
    SearchProductsComponent.prototype.ngOnDestroy = function () {
        this.keyupSubs.unsubscribe();
    };
    SearchProductsComponent.prototype.search = function (text) {
        this.searchText$.next(text);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SearchProductsComponent.prototype, "searchTextChanged", void 0);
    SearchProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-products',
            template: __webpack_require__(/*! raw-loader!./search-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/catalog/search-products/search-products.component.html"),
            styles: [__webpack_require__(/*! ./search-products.component.scss */ "./src/app/components/catalog/search-products/search-products.component.scss")]
        })
    ], SearchProductsComponent);
    return SearchProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company-details/company-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/company/company-details/company-details.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LWRldGFpbHMvY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/company/company-details/company-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/company/company-details/company-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/organization.service */ "./src/app/services/organization.service.ts");
/* harmony import */ var src_app_services_converters_organization_converter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/converters/organization-converter.service */ "./src/app/services/converters/organization-converter.service.ts");




var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(organizationService, orgConverter) {
        this.organizationService = organizationService;
        this.orgConverter = orgConverter;
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
    };
    CompanyDetailsComponent.prototype.updateCompany = function () {
        var updatedOrg = this.orgConverter.toUpdateOrganization(this.organizationDetails, this.organization);
        this.organizationService
            .updateOrganization(updatedOrg)
            .subscribe();
    };
    CompanyDetailsComponent.prototype.setOrdersProperty = function (value) {
        this.organizationDetails.returnInvalidOrdersToCreator = value;
        console.log(this.organizationDetails.returnInvalidOrdersToCreator);
    };
    CompanyDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"] },
        { type: src_app_services_converters_organization_converter_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationConverterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CompanyDetailsComponent.prototype, "organization", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CompanyDetailsComponent.prototype, "organizationDetails", void 0);
    CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__(/*! raw-loader!./company-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/company-details/company-details.component.html"),
            styles: [__webpack_require__(/*! ./company-details.component.scss */ "./src/app/components/company/company-details/company-details.component.scss")]
        })
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company-users/company-users.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/company/company-users/company-users.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LXVzZXJzL2NvbXBhbnktdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/company/company-users/company-users.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/company/company-users/company-users.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CompanyUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUsersComponent", function() { return CompanyUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/inner/pagination-info */ "./src/app/models/inner/pagination-info.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_converters_user_converter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/converters/user-converter.service */ "./src/app/services/converters/user-converter.service.ts");
/* harmony import */ var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/organization.service */ "./src/app/services/organization.service.ts");
/* harmony import */ var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json");
var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json", 1);
/* harmony import */ var src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/confirm-modal/confirm-modal-service */ "./src/app/modules/confirm-modal/confirm-modal-service.ts");
/* harmony import */ var _edit_company_user_modal_form_edit_company_user_modal_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-company-user-modal-form/edit-company-user-modal-form.component */ "./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.ts");










var CompanyUsersComponent = /** @class */ (function () {
    function CompanyUsersComponent(userService, modalService, userConverter, organizationService, confirmService) {
        this.userService = userService;
        this.modalService = modalService;
        this.userConverter = userConverter;
        this.organizationService = organizationService;
        this.confirmService = confirmService;
        this.settings = src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_7__;
        this.paginationInfo = new src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_2__["PaginationInfo"](this.settings.defaultPageSize);
        this.pageSizes = this.settings.pageSizes;
    }
    CompanyUsersComponent.prototype.ngOnInit = function () {
        this.fetchUsers();
    };
    CompanyUsersComponent.prototype.pageSizeChanged = function (eventArgs) {
        this.paginationInfo.pageSize = eventArgs.newPageSize;
        this.fetchUsers();
    };
    CompanyUsersComponent.prototype.pageChanged = function () {
        this.fetchUsers();
    };
    CompanyUsersComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.organizationService
            .getOrganizationUsers(this.paginationInfo.page, this.paginationInfo.pageSize)
            .subscribe(function (data) {
            _this.users = data.results;
            _this.paginationInfo.collectionSize = data.totalCount;
        });
    };
    CompanyUsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var confirmOptions = {
            title: 'Delete user',
            message: 'Are you sure you want to delete this user?'
        };
        this.confirmService.confirm(confirmOptions).then(function () {
            return _this.userService.deleteUser(user.id).subscribe(function () {
                _this.fetchUsers();
            });
        });
    };
    CompanyUsersComponent.prototype.openCreateUserModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_edit_company_user_modal_form_edit_company_user_modal_form_component__WEBPACK_IMPORTED_MODULE_9__["EditCompanyUserModalFormComponent"], {
            centered: true,
            backdrop: 'static'
        });
        modalRef.result.then(function (result) {
            var user = _this.userConverter.toAddUser(result, _this.organization);
            _this.userService.registerNewUser(user).subscribe(function () {
                _this.fetchUsers();
            });
        });
    };
    CompanyUsersComponent.prototype.openEditUserModal = function (user) {
        var _this = this;
        var modalRef = this.modalService.open(_edit_company_user_modal_form_edit_company_user_modal_form_component__WEBPACK_IMPORTED_MODULE_9__["EditCompanyUserModalFormComponent"], {
            centered: true,
            backdrop: 'static'
        });
        modalRef.componentInstance.user = user;
        modalRef.componentInstance.editUserMode = true;
        modalRef.result.then(function (result) {
            var updatedUser = _this.userConverter.toEditUser(result, user);
            _this.userService.updateUser(updatedUser).subscribe(function () {
                _this.fetchUsers();
            });
        });
    };
    CompanyUsersComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: src_app_services_converters_user_converter_service__WEBPACK_IMPORTED_MODULE_5__["UserConverterService"] },
        { type: src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_6__["OrganizationService"] },
        { type: src_app_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CompanyUsersComponent.prototype, "organization", void 0);
    CompanyUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-users',
            template: __webpack_require__(/*! raw-loader!./company-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/company-users/company-users.component.html"),
            styles: [__webpack_require__(/*! ./company-users.component.scss */ "./src/app/components/company/company-users/company-users.component.scss")]
        })
    ], CompanyUsersComponent);
    return CompanyUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/organization.service */ "./src/app/services/organization.service.ts");
/* harmony import */ var src_app_services_converters_organization_converter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/converters/organization-converter.service */ "./src/app/services/converters/organization-converter.service.ts");




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(organizationService, orgConverter) {
        this.organizationService = organizationService;
        this.orgConverter = orgConverter;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organizationService.getUserOrganization().subscribe(function (data) {
            _this.organization = data;
            console.log('Import of organization', _this.organization);
            _this.organizationDetails = _this.orgConverter.toOrganizationDetails(_this.organization);
        });
    };
    CompanyComponent.ctorParameters = function () { return [
        { type: src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"] },
        { type: src_app_services_converters_organization_converter_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationConverterService"] }
    ]; };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/components/company/company.component.scss")]
        })
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9lZGl0LWNvbXBhbnktdXNlci1tb2RhbC1mb3JtL2VkaXQtY29tcGFueS11c2VyLW1vZGFsLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditCompanyUserModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyUserModalFormComponent", function() { return EditCompanyUserModalFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var EditCompanyUserModalFormComponent = /** @class */ (function () {
    function EditCompanyUserModalFormComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditCompanyUserModalFormComponent.prototype.ngOnInit = function () {
        if (!this.user) {
            this.user = {};
        }
    };
    EditCompanyUserModalFormComponent.prototype.passBack = function (userView) {
        if (userView.form.valid) {
            this.activeModal.close(userView.value);
        }
    };
    EditCompanyUserModalFormComponent.prototype.checkValid = function (form) {
        form.form.controls.confirmPassword.updateValueAndValidity();
    };
    EditCompanyUserModalFormComponent.prototype.closeModal = function () {
        this.activeModal.dismiss();
    };
    EditCompanyUserModalFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditCompanyUserModalFormComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditCompanyUserModalFormComponent.prototype, "editUserMode", void 0);
    EditCompanyUserModalFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-company-user-modal-form',
            template: __webpack_require__(/*! raw-loader!./edit-company-user-modal-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-company-user-modal-form.component.scss */ "./src/app/components/company/edit-company-user-modal-form/edit-company-user-modal-form.component.scss")]
        })
    ], EditCompanyUserModalFormComponent);
    return EditCompanyUserModalFormComponent;
}());



/***/ }),

/***/ "./src/app/components/company/role-management/role-management.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/company/role-management/role-management.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9yb2xlLW1hbmFnZW1lbnQvcm9sZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/company/role-management/role-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/company/role-management/role-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoleManagementComponent = /** @class */ (function () {
    function RoleManagementComponent() {
    }
    RoleManagementComponent.prototype.ngOnInit = function () {
    };
    RoleManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-management',
            template: __webpack_require__(/*! raw-loader!./role-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/role-management/role-management.component.html"),
            styles: [__webpack_require__(/*! ./role-management.component.scss */ "./src/app/components/company/role-management/role-management.component.scss")]
        })
    ], RoleManagementComponent);
    return RoleManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/container/footer-panel/footer-panel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/container/footer-panel/footer-panel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL2Zvb3Rlci1wYW5lbC9mb290ZXItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/container/footer-panel/footer-panel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/container/footer-panel/footer-panel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FooterPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPanelComponent", function() { return FooterPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterPanelComponent = /** @class */ (function () {
    function FooterPanelComponent() {
    }
    FooterPanelComponent.prototype.ngOnInit = function () {
    };
    FooterPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-panel',
            template: __webpack_require__(/*! raw-loader!./footer-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/container/footer-panel/footer-panel.component.html"),
            styles: [__webpack_require__(/*! ./footer-panel.component.scss */ "./src/app/components/container/footer-panel/footer-panel.component.scss")]
        })
    ], FooterPanelComponent);
    return FooterPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/container/header-panel/header-panel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/container/header-panel/header-panel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL2hlYWRlci1wYW5lbC9oZWFkZXItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/container/header-panel/header-panel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/container/header-panel/header-panel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPanelComponent", function() { return HeaderPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderPanelComponent = /** @class */ (function () {
    function HeaderPanelComponent() {
    }
    HeaderPanelComponent.prototype.ngOnInit = function () {
    };
    HeaderPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-panel',
            template: __webpack_require__(/*! raw-loader!./header-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/container/header-panel/header-panel.component.html"),
            styles: [__webpack_require__(/*! ./header-panel.component.scss */ "./src/app/components/container/header-panel/header-panel.component.scss")]
        })
    ], HeaderPanelComponent);
    return HeaderPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/container/main-panel/main-panel.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/container/main-panel/main-panel.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL21haW4tcGFuZWwvbWFpbi1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/container/main-panel/main-panel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/container/main-panel/main-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: MainPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPanelComponent", function() { return MainPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPanelComponent = /** @class */ (function () {
    function MainPanelComponent() {
    }
    MainPanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MainPanelComponent.prototype, "path", void 0);
    MainPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-panel',
            template: __webpack_require__(/*! raw-loader!./main-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/container/main-panel/main-panel.component.html"),
            styles: [__webpack_require__(/*! ./main-panel.component.scss */ "./src/app/components/container/main-panel/main-panel.component.scss")]
        })
    ], MainPanelComponent);
    return MainPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/forapproval/forapproval-details/forapproval-details.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/forapproval/forapproval-details/forapproval-details.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yYXBwcm92YWwvZm9yYXBwcm92YWwtZGV0YWlscy9mb3JhcHByb3ZhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forapproval/forapproval-details/forapproval-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/forapproval/forapproval-details/forapproval-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ForApprovalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForApprovalDetailsComponent", function() { return ForApprovalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/orders.service */ "./src/app/services/orders.service.ts");




var ForApprovalDetailsComponent = /** @class */ (function () {
    function ForApprovalDetailsComponent(ordersService, activateRoute, router) {
        this.ordersService = ordersService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.id = activateRoute.snapshot.params['id'];
    }
    ForApprovalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getOrders().subscribe(function (data) {
            var orders = data;
            orders = orders.filter(function (order) { return order.id === _this.id; });
            _this.order = orders[0];
            _this.items = orders[0].items;
            //this.comments = orders[0].comments as IOrderComment[];
        });
        console.log("order: ", this.order);
    };
    ForApprovalDetailsComponent.prototype.Decline = function () {
        this.router.navigate(['/forapproval']);
    };
    ForApprovalDetailsComponent.prototype.Approve = function (comment) {
        //   this.ordersService.getApprovalWorkflow().subscribe((data: any) => {
        //     this.approvalWorkFlow = data[0] as IApprovalWorkFlow;
        //     this.roles = data[0].roles as IApprovalWorkFlowStep[];
        //     this.roles.sort((leftSide, rightSide): number => {
        //       if (leftSide.step < rightSide.step) return -1;
        //       if (leftSide.step > rightSide.step) return 1;
        //       return 0;
        //     });
        //     let currentRole = this.roles.filter(role => role.name === this.order.toRole);
        //     let currentId = currentRole[0].step;
        //     let nextRole = this.roles.filter(role => role.step === currentRole[0].step + 1);
        //     if (nextRole.length > 0) {
        //       this.order.toRole = nextRole[0].name;
        //       this.order.comments.push(new OrderComment("userId", "username", comment));
        //       this.ordersService.updateOrder(this.order).subscribe((data: IOrder) => {
        //         if (this.roles.filter(role => role.step === currentRole[0].step + 1).length > 0) {
        //           this.router.navigate(['/forapproval']);
        //         } else {
        //           this.router.navigate(['/activeorder']);
        //         }
        //       })
        //     } else {
        //       this.order.toRole = 'Completed';
        //       this.router.navigate(['/activeorder']);
        //     }
        //     // this.ordersService.fakeGetOrders().subscribe((data: any) => {
        //     //   let orders = data as IOrder[];
        //     //    this.order = orders[0] as IOrder;
        //     //    console.log("order refresh: ", this.order);
        //     // });
        //   });
    };
    ForApprovalDetailsComponent.ctorParameters = function () { return [
        { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ForApprovalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forapproval-details',
            template: __webpack_require__(/*! raw-loader!./forapproval-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forapproval/forapproval-details/forapproval-details.component.html"),
            styles: [__webpack_require__(/*! ./forapproval-details.component.scss */ "./src/app/components/forapproval/forapproval-details/forapproval-details.component.scss")]
        })
    ], ForApprovalDetailsComponent);
    return ForApprovalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/forapproval/forapproval.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/forapproval/forapproval.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yYXBwcm92YWwvZm9yYXBwcm92YWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/forapproval/forapproval.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/forapproval/forapproval.component.ts ***!
  \*****************************************************************/
/*! exports provided: ForApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForApprovalComponent", function() { return ForApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/inner/pagination-info */ "./src/app/models/inner/pagination-info.ts");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json");
var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json", 1);



// import { AppConfig } from 'src/app/services/app-config.service';


var ForApprovalComponent = /** @class */ (function () {
    function ForApprovalComponent(ordersService) {
        this.ordersService = ordersService;
        // paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
        // pageSizes = AppConfig.settings.pageSizes;
        this.orders = [];
        this.settings = src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_4__;
        this.paginationInfo = new src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_2__["PaginationInfo"](this.settings.defaultPageSize);
        this.pageSizes = this.settings.pageSizes;
        this.status = 'All';
    }
    ForApprovalComponent.prototype.ngOnInit = function () {
        console.log("forapproval component. getOrders");
        this.getAllOrders();
    };
    ForApprovalComponent.prototype.pageSizeChanged = function (eventArgs) {
        this.paginationInfo.pageSize = eventArgs.newPageSize;
        this.getAllOrders();
    };
    ForApprovalComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.ordersService
            .getOrders(this.paginationInfo.page, this.paginationInfo.pageSize, this.startDate, this.endDate, this.status)
            .subscribe(function (data) {
            _this.orders = data.results;
            _this.paginationInfo.collectionSize = data.totalCount;
            console.log('Orders ', _this.orders);
        });
    };
    ForApprovalComponent.prototype.pageChanged = function () {
        this.getAllOrders();
    };
    ForApprovalComponent.ctorParameters = function () { return [
        { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }
    ]; };
    ForApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forapproval',
            template: __webpack_require__(/*! raw-loader!./forapproval.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forapproval/forapproval.component.html"),
            styles: [__webpack_require__(/*! ./forapproval.component.scss */ "./src/app/components/forapproval/forapproval.component.scss")]
        })
    ], ForApprovalComponent);
    return ForApprovalComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mobile-view.service */ "./src/app/services/mobile-view.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, mobileSidebarService) {
        this.router = router;
        this.mobileSidebarService = mobileSidebarService;
        this.isOpen = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.openMobileMenu = function () {
        this.mobileSidebarService.openSidebar(this);
    };
    MenuComponent.prototype.closeMobileMenu = function () {
        this.mobileSidebarService.closeSidebar(this);
    };
    MenuComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_mobile_view_service__WEBPACK_IMPORTED_MODULE_3__["MobileViewService"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/invoice/invoice.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/orders/invoice/invoice.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/orders/invoice/invoice.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/orders/invoice/invoice.component.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");





var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params);
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.orderService.getOrder(params.get('id')); }))
            .subscribe(function (data) {
            _this.order = data;
            _this.items = data.items;
        });
    };
    InvoiceComponent.prototype.getInvoicePdf = function (orderNumber) {
        var url = 'storefrontapi/orders/' + ("" + orderNumber) + '/invoice';
        window.open(url, '_blank');
    };
    InvoiceComponent.ctorParameters = function () { return [
        { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-invoice",
            template: __webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/orders/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/components/orders/invoice/invoice.component.scss")]
        })
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/order-details/order-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/orders/order-details/order-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/orders/order-details/order-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/orders/order-details/order-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");


//import { Store, select } from '@ngrx/store';




var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(ordersService, route, activeOrderService) {
        this.ordersService = ordersService;
        this.route = route;
        this.activeOrderService = activeOrderService;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.ordersService.getOrders().subscribe((data: any) => {
        //   let orders = data.results as IOrder[];
        //   orders = orders.filter(order => order.id === this.id);
        //   this.order = orders[0] as IOrder;
        //   this.items = orders[0].items as IOrderItem[];
        //   this.comments = orders[0].comments as IOrderComment[];
        // });
        console.log(this.route.params);
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.ordersService.getOrder(params.get('id')); }))
            .subscribe(function (data) {
            _this.order = data;
            _this.items = data.items;
            _this.subTotal = _this.order.subTotal.formattedAmount;
            _this.shipping = _this.order.shippingTotal.formattedAmount;
            _this.total = _this.order.total.formattedAmount;
            _this.createdBy = _this.order.createdBy;
            _this.status = _this.order.status;
            console.log('Order: ', _this.order);
            console.log('Items: ', _this.items);
        });
    };
    OrderDetailsComponent.prototype.toggleAccordion = function (event) {
        event.target.parentElement.classList.toggle('accordion__item--active');
    };
    OrderDetailsComponent.prototype.addProductToCart = function () {
        var _this = this;
        this.items.forEach(function (item) {
            _this.activeOrderService.addItem(item.productId, item.quantity).subscribe();
        });
    };
    OrderDetailsComponent.ctorParameters = function () { return [
        { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_5__["ActiveOrderService"] }
    ]; };
    OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/orders/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.scss */ "./src/app/components/orders/order-details/order-details.component.scss")]
        })
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/orders/orders.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent, OrderError, GetOrdersSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderError", function() { return OrderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrdersSuccess", function() { return GetOrdersSuccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/inner/pagination-info */ "./src/app/models/inner/pagination-info.ts");
/* harmony import */ var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json");
var src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/config/config.dev.json */ "./src/assets/config/config.dev.json", 1);




// import { Store, select } from '@ngrx/store';


// import { AppConfig } from 'src/app/services/app-config.service';

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService, router) {
        this.ordersService = ordersService;
        this.router = router;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().toISOString());
        this.status = 'All';
        this.validFilterDate = true;
        this.orders = [];
        this.users = [];
        this.displayedColumns = [
            'orderid',
            'status',
            'date',
            'items',
            'createdBy',
            'assignedTo',
            'total'
        ];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.isForApprove = false;
        // paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
        // pageSizes = AppConfig.settings.pageSizes;
        this.settings = src_assets_config_config_dev_json__WEBPACK_IMPORTED_MODULE_6__;
        this.paginationInfo = new src_app_models_inner_pagination_info__WEBPACK_IMPORTED_MODULE_5__["PaginationInfo"](this.settings.defaultPageSize);
        this.pageSizes = this.settings.pageSizes;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        console.log('orders component. getOrders');
        this.getAllOrders();
    };
    OrdersComponent.prototype.changeActiveStatus = function (status) {
        this.status = status;
        this.getAllOrders();
    };
    OrdersComponent.prototype.pageSizeChanged = function (eventArgs) {
        this.paginationInfo.pageSize = eventArgs.newPageSize;
        this.getAllOrders();
    };
    OrdersComponent.prototype.filterOrdersByDate = function () {
        if (this.startDate > this.endDate) {
            this.validFilterDate = false;
        }
        else {
            this.validFilterDate = true;
            this.getAllOrders();
        }
    };
    OrdersComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.ordersService
            .getOrders(this.paginationInfo.page, this.paginationInfo.pageSize, this.startDate, this.endDate, this.status)
            .subscribe(function (data) {
            console.log(data);
            _this.orders = data.results;
            _this.paginationInfo.collectionSize = data.totalCount;
        });
    };
    OrdersComponent.prototype.pageChanged = function () {
        this.getAllOrders();
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrdersComponent.prototype, "isForApprove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrdersComponent.prototype, "role", void 0);
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/components/orders/orders.component.scss")]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());

var OrderError = /** @class */ (function () {
    function OrderError(payload) {
        this.payload = payload;
        console.log(payload);
    }
    OrderError.prototype.ngOnInit = function () { };
    OrderError.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return OrderError;
}());

var GetOrdersSuccess = /** @class */ (function () {
    function GetOrdersSuccess(payload) {
        this.payload = payload;
        console.log('GetHeroesSuccess: ' + payload);
    }
    GetOrdersSuccess.prototype.ngOnInit = function () { };
    GetOrdersSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return GetOrdersSuccess;
}());



/***/ }),

/***/ "./src/app/components/page-size-selector/page-size-selector.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/page-size-selector/page-size-selector.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1zaXplLXNlbGVjdG9yL3BhZ2Utc2l6ZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-size-selector/page-size-selector.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/page-size-selector/page-size-selector.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageSizeChangedArgs, PageSizeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSizeChangedArgs", function() { return PageSizeChangedArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSizeSelectorComponent", function() { return PageSizeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageSizeChangedArgs = /** @class */ (function () {
    function PageSizeChangedArgs(newPageSize) {
        this.newPageSize = newPageSize;
    }
    PageSizeChangedArgs.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return PageSizeChangedArgs;
}());

var PageSizeSelectorComponent = /** @class */ (function () {
    function PageSizeSelectorComponent() {
        this.pageSizeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PageSizeSelectorComponent.prototype.ngOnInit = function () {
        this.pageSize = this.defaultPageSize;
    };
    PageSizeSelectorComponent.prototype.onPageSizeClicked = function (newPageSize) {
        if (this.pageSize !== newPageSize) {
            this.pageSize = newPageSize;
            this.pageSizeChanged.emit(new PageSizeChangedArgs(newPageSize));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PageSizeSelectorComponent.prototype, "pageSizes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PageSizeSelectorComponent.prototype, "defaultPageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PageSizeSelectorComponent.prototype, "pageSizeChanged", void 0);
    PageSizeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-size-selector',
            template: __webpack_require__(/*! raw-loader!./page-size-selector.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-size-selector/page-size-selector.component.html"),
            styles: [__webpack_require__(/*! ./page-size-selector.component.scss */ "./src/app/components/page-size-selector/page-size-selector.component.scss")]
        })
    ], PageSizeSelectorComponent);
    return PageSizeSelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/product-details/product-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/product-details/product-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/active-order.service */ "./src/app/services/active-order.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(catalogService, activeOrderService, route, modalService, config) {
        this.catalogService = catalogService;
        this.activeOrderService = activeOrderService;
        this.route = route;
        this.modalService = modalService;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart$ = this.activeOrderService.Cart;
        this.activeOrderService.refreshCart();
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.catalogService.getProduct(params.get('id')); }))
            .subscribe(function (data) {
            _this.product = data;
        });
    };
    ProductDetailsComponent.prototype.openImageModal = function (content) {
        this.modalService.open(content, { centered: true });
    };
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["CatalogService"] },
        { type: src_app_services_active_order_service__WEBPACK_IMPORTED_MODULE_5__["ActiveOrderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"] }
    ]; };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-details/product-details.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/components/product-details/product-details.component.scss")]
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/directives/match-value.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/match-value.directive.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { notEqual: true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }
            ]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/directives/only-number.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/only-number.directive.ts ***!
  \*****************************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
    }
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    OnlyNumberDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OnlyNumberDirective.prototype, "OnlyNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
    ], OnlyNumberDirective.prototype, "onKeyDown", null);
    OnlyNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[OnlyNumber]'
        })
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/app/directives/remove-wrapper.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/remove-wrapper.directive.ts ***!
  \********************************************************/
/*! exports provided: RemoveWrapperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveWrapperDirective", function() { return RemoveWrapperDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemoveWrapperDirective = /** @class */ (function () {
    function RemoveWrapperDirective(el) {
        this.el = el;
        var parentElement = el.nativeElement.parentElement;
        var element = el.nativeElement;
        parentElement.removeChild(element);
        parentElement.parentNode.insertBefore(element, parentElement.nextSibling);
        parentElement.parentNode.removeChild(parentElement);
    }
    RemoveWrapperDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    RemoveWrapperDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appRemoveWrapper]'
        })
    ], RemoveWrapperDirective);
    return RemoveWrapperDirective;
}());



/***/ }),

/***/ "./src/app/models/dto/category.ts":
/*!****************************************!*\
  !*** ./src/app/models/dto/category.ts ***!
  \****************************************/
/*! exports provided: CategorySearchCriteria, CategoryResponseGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySearchCriteria", function() { return CategorySearchCriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResponseGroup", function() { return CategoryResponseGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_paged_search_criteria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/paged-search-criteria */ "./src/app/models/dto/common/paged-search-criteria.ts");


var CategorySearchCriteria = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategorySearchCriteria, _super);
    function CategorySearchCriteria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFuzzySearch = true;
        return _this;
    }
    return CategorySearchCriteria;
}(_common_paged_search_criteria__WEBPACK_IMPORTED_MODULE_1__["PagedSearchCriteria"]));

var CategoryResponseGroup;
(function (CategoryResponseGroup) {
    CategoryResponseGroup[CategoryResponseGroup["None"] = 0] = "None";
    CategoryResponseGroup[CategoryResponseGroup["Info"] = 1] = "Info";
    CategoryResponseGroup[CategoryResponseGroup["WithImages"] = 2] = "WithImages";
    CategoryResponseGroup[CategoryResponseGroup["WithProperties"] = 4] = "WithProperties";
    CategoryResponseGroup[CategoryResponseGroup["WithLinks"] = 8] = "WithLinks";
    CategoryResponseGroup[CategoryResponseGroup["WithSeo"] = 16] = "WithSeo";
    CategoryResponseGroup[CategoryResponseGroup["WithParents"] = 32] = "WithParents";
    CategoryResponseGroup[CategoryResponseGroup["WithOutlines"] = 64] = "WithOutlines";
    CategoryResponseGroup[CategoryResponseGroup["Small"] = 83] = "Small";
    CategoryResponseGroup[CategoryResponseGroup["Full"] = 127] = "Full";
})(CategoryResponseGroup || (CategoryResponseGroup = {}));


/***/ }),

/***/ "./src/app/models/dto/common/paged-search-criteria.ts":
/*!************************************************************!*\
  !*** ./src/app/models/dto/common/paged-search-criteria.ts ***!
  \************************************************************/
/*! exports provided: PagedSearchCriteria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedSearchCriteria", function() { return PagedSearchCriteria; });
var PagedSearchCriteria = /** @class */ (function () {
    function PagedSearchCriteria() {
    }
    return PagedSearchCriteria;
}());



/***/ }),

/***/ "./src/app/models/dto/iorder.ts":
/*!**************************************!*\
  !*** ./src/app/models/dto/iorder.ts ***!
  \**************************************/
/*! exports provided: OrderSearchCriteria, OrderComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSearchCriteria", function() { return OrderSearchCriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComment", function() { return OrderComment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_paged_search_criteria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/paged-search-criteria */ "./src/app/models/dto/common/paged-search-criteria.ts");


var OrderSearchCriteria = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderSearchCriteria, _super);
    function OrderSearchCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderSearchCriteria;
}(_common_paged_search_criteria__WEBPACK_IMPORTED_MODULE_1__["PagedSearchCriteria"]));

// this entity does not exist on server
var OrderComment = /** @class */ (function () {
    function OrderComment(userId, username, text) {
        this.id = 'AAA';
        this.userId = userId;
        this.username = username;
        this.text = text;
    }
    OrderComment.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return OrderComment;
}());



/***/ }),

/***/ "./src/app/models/dto/product.ts":
/*!***************************************!*\
  !*** ./src/app/models/dto/product.ts ***!
  \***************************************/
/*! exports provided: ProductSearchCriteria, ItemResponseGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchCriteria", function() { return ProductSearchCriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemResponseGroup", function() { return ItemResponseGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_paged_search_criteria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/paged-search-criteria */ "./src/app/models/dto/common/paged-search-criteria.ts");


var ProductSearchCriteria = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductSearchCriteria, _super);
    function ProductSearchCriteria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keyword = '';
        _this.isFuzzySearch = true;
        return _this;
    }
    return ProductSearchCriteria;
}(_common_paged_search_criteria__WEBPACK_IMPORTED_MODULE_1__["PagedSearchCriteria"]));

var ItemResponseGroup;
(function (ItemResponseGroup) {
    ItemResponseGroup[ItemResponseGroup["None"] = 0] = "None";
    /**Only simple product information and properties without meta information */
    ItemResponseGroup[ItemResponseGroup["ItemInfo"] = 1] = "ItemInfo";
    /**With images and assets */
    ItemResponseGroup[ItemResponseGroup["ItemAssets"] = 2] = "ItemAssets";
    /**With properties meta information */
    ItemResponseGroup[ItemResponseGroup["ItemProperties"] = 4] = "ItemProperties";
    /**With product associations */
    ItemResponseGroup[ItemResponseGroup["ItemAssociations"] = 8] = "ItemAssociations";
    /**With descriptions */
    ItemResponseGroup[ItemResponseGroup["ItemEditorialReviews"] = 16] = "ItemEditorialReviews";
    /**With all product variations */
    ItemResponseGroup[ItemResponseGroup["Variations"] = 32] = "Variations";
    /**With product SEO information */
    ItemResponseGroup[ItemResponseGroup["Seo"] = 64] = "Seo";
    /**With outgoing product links to virtual catalog or categories */
    ItemResponseGroup[ItemResponseGroup["Links"] = 128] = "Links";
    /**With product inventory information */
    ItemResponseGroup[ItemResponseGroup["Inventory"] = 256] = "Inventory";
    /**With category outlines */
    ItemResponseGroup[ItemResponseGroup["Outlines"] = 512] = "Outlines";
    /**With product referenced associations */
    ItemResponseGroup[ItemResponseGroup["ReferencedAssociations"] = 1024] = "ReferencedAssociations";
    //the bits of this values must not intersect with domain ItemResponseGroup
    ItemResponseGroup[ItemResponseGroup["ItemWithPrices"] = 1048576] = "ItemWithPrices";
    ItemResponseGroup[ItemResponseGroup["ItemWithDiscounts"] = 2097152] = "ItemWithDiscounts";
    ItemResponseGroup[ItemResponseGroup["ItemWithVendor"] = 4194304] = "ItemWithVendor";
    ItemResponseGroup[ItemResponseGroup["ItemWithPaymentPlan"] = 8388608] = "ItemWithPaymentPlan";
    ItemResponseGroup[ItemResponseGroup["ItemSmall"] = 579] = "ItemSmall";
    ItemResponseGroup[ItemResponseGroup["ItemMedium"] = 599] = "ItemMedium";
    ItemResponseGroup[ItemResponseGroup["ItemLarge"] = 15729535] = "ItemLarge";
    ItemResponseGroup[ItemResponseGroup["Default"] = 7340867] = "Default";
})(ItemResponseGroup || (ItemResponseGroup = {}));


/***/ }),

/***/ "./src/app/models/inner/pagination-info.ts":
/*!*************************************************!*\
  !*** ./src/app/models/inner/pagination-info.ts ***!
  \*************************************************/
/*! exports provided: PaginationInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationInfo", function() { return PaginationInfo; });
var PaginationInfo = /** @class */ (function () {
    function PaginationInfo(pageSize) {
        if (pageSize === void 0) { pageSize = 10; }
        this.pageSize = pageSize;
        this.page = 1;
    }
    PaginationInfo.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return PaginationInfo;
}());



/***/ }),

/***/ "./src/app/models/organization.ts":
/*!****************************************!*\
  !*** ./src/app/models/organization.ts ***!
  \****************************************/
/*! exports provided: OrganizationDetails, UpdateOrganization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetails", function() { return OrganizationDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrganization", function() { return UpdateOrganization; });
var OrganizationDetails = /** @class */ (function () {
    function OrganizationDetails() {
    }
    return OrganizationDetails;
}());

var UpdateOrganization = /** @class */ (function () {
    function UpdateOrganization() {
    }
    return UpdateOrganization;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: ProductDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetails", function() { return ProductDetails; });
var ProductDetails = /** @class */ (function () {
    function ProductDetails() {
    }
    return ProductDetails;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, AddNewUser, EditUser, EditUserPassword, EditUserPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewUser", function() { return AddNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUser", function() { return EditUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPassword", function() { return EditUserPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPhone", function() { return EditUserPhone; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var AddNewUser = /** @class */ (function () {
    function AddNewUser() {
    }
    return AddNewUser;
}());

var EditUser = /** @class */ (function () {
    function EditUser() {
    }
    return EditUser;
}());

var EditUserPassword = /** @class */ (function () {
    function EditUserPassword() {
    }
    return EditUserPassword;
}());

var EditUserPhone = /** @class */ (function () {
    function EditUserPhone() {
    }
    return EditUserPhone;
}());



/***/ }),

/***/ "./src/app/modules/confirm-modal/confirm-modal-service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/confirm-modal/confirm-modal-service.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmState, ConfirmService, ConfirmModalComponent, ConfirmTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmState", function() { return ConfirmState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmTemplateDirective", function() { return ConfirmTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



/**
 * An internal service allowing to access, from the confirm modal component, the options and the modal reference.
 * It also allows registering the TemplateRef containing the confirm modal component.
 *
 * It must be declared in the providers of the NgModule, but is not supposed to be used in application code
 */
var ConfirmState = /** @class */ (function () {
    function ConfirmState() {
    }
    ConfirmState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ConfirmState);
    return ConfirmState;
}());

/**
 * A confirmation service, allowing to open a confirmation modal from anywhere and get back a promise.
 */
var ConfirmService = /** @class */ (function () {
    function ConfirmService(modalService, state) {
        this.modalService = modalService;
        this.state = state;
    }
    /**
     * Opens a confirmation modal
     * @param options the options for the modal (title and message)
     * @returns {Promise<any>} a promise that is fulfilled when the user chooses to confirm, and rejected when
     * the user chooses not to confirm, or closes the modal
     */
    ConfirmService.prototype.confirm = function (options) {
        this.state.options = options;
        this.state.modal = this.modalService.open(this.state.template);
        return this.state.modal.result;
    };
    ConfirmService.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: ConfirmState }
    ]; };
    ConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ConfirmService);
    return ConfirmService;
}());

/**
 * The component displayed in the confirmation modal opened by the ConfirmService.
 */
var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(state) {
        this.state = state;
        this.options = state.options;
        console.log('component initialized');
    }
    ConfirmModalComponent.prototype.yes = function () {
        this.state.modal.close('confirmed');
    };
    ConfirmModalComponent.prototype.no = function () {
        this.state.modal.dismiss('not confirmed');
    };
    ConfirmModalComponent.ctorParameters = function () { return [
        { type: ConfirmState }
    ]; };
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal-component',
            template: "<div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{ options.title}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"no()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{ options.message }}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"yes()\">Yes</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"no()\">No</button>\n  </div>"
        })
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());

/**
 * Directive allowing to get a reference to the template containing the confirmation modal component,
 * and to store it into the internal confirm state service. Somewhere in the view, there must be
 *
 * ```
 * <template confirm>
 *   <confirm-modal-component></confirm-modal-component>
 * </template>
 * ```
 *
 * in order to register the confirm template to the internal confirm state
 */
var ConfirmTemplateDirective = /** @class */ (function () {
    function ConfirmTemplateDirective(confirmTemplate, state) {
        state.template = confirmTemplate;
    }
    ConfirmTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: ConfirmState }
    ]; };
    ConfirmTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirm]'
        })
    ], ConfirmTemplateDirective);
    return ConfirmTemplateDirective;
}());



/***/ }),

/***/ "./src/app/modules/confirm-modal/confirm-modal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/confirm-modal/confirm-modal.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalModule", function() { return ConfirmModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-modal-service */ "./src/app/modules/confirm-modal/confirm-modal-service.ts");





var ConfirmModalModule = /** @class */ (function () {
    function ConfirmModalModule() {
    }
    ConfirmModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], _confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmTemplateDirective"]],
            exports: [_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], _confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmTemplateDirective"]],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"], _confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmState"]]
        })
    ], ConfirmModalModule);
    return ConfirmModalModule;
}());



/***/ }),

/***/ "./src/app/services/active-order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/active-order.service.ts ***!
  \**************************************************/
/*! exports provided: ActiveOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrderService", function() { return ActiveOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ActiveOrderService = /** @class */ (function () {
    function ActiveOrderService(http) {
        this.http = http;
        this.Cart = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.refreshCart();
    }
    ActiveOrderService.prototype.refreshCart = function () {
        // todo
        this.getCart();
    };
    ActiveOrderService.prototype.getCart = function () {
        var _this = this;
        var url = 'storefrontapi/cart';
        this.http.get(url)
            .subscribe(function (x) {
            return _this.Cart.next(x);
        });
    };
    ActiveOrderService.prototype.createOrder = function () {
        var _this = this;
        console.log('createOrder');
        var body = {};
        var url = 'storefrontapi/cart/createorder';
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) { return _this.refreshCart(); }));
    };
    ActiveOrderService.prototype.clearAllItems = function () {
        var _this = this;
        console.log('Clear');
        var url = 'storefrontapi/cart/clear';
        var body = '{}';
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) { return _this.refreshCart(); }));
    };
    ActiveOrderService.prototype.addItem = function (productId, productQuantity) {
        var _this = this;
        if (productQuantity === void 0) { productQuantity = 1; }
        console.log('Add');
        var body = { id: productId, quantity: productQuantity };
        var url = 'storefrontapi/cart/items';
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) { return _this.refreshCart(); }));
    };
    ActiveOrderService.prototype.removeItem = function (lineItemId) {
        var _this = this;
        console.log('Remove');
        var url = 'storefrontapi/cart/items?lineItemId=' + lineItemId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) { return _this.refreshCart(); }));
    };
    ActiveOrderService.prototype.changeItemQuantity = function (lineItemId, quantity) {
        var _this = this;
        var url = 'storefrontapi/cart/items';
        var body = '{"lineItemId":"' + lineItemId + '","Quantity":"' + quantity + '"}';
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) { return _this.refreshCart(); }));
    };
    ActiveOrderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActiveOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ActiveOrderService);
    return ActiveOrderService;
}());



/***/ }),

/***/ "./src/app/services/alerts.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/alerts.service.ts ***!
  \********************************************/
/*! exports provided: Alert, AlertType, AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Alert = /** @class */ (function () {
    function Alert(type, msg, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.type = type;
        this.msg = msg;
        this.keepAfterRouteChange = keepAfterRouteChange;
    }
    Alert.ctorParameters = function () { return [
        { type: undefined },
        { type: String },
        null
    ]; };
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Error"] = "danger";
    AlertType["Info"] = "info";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
var AlertsService = /** @class */ (function () {
    function AlertsService(router) {
        var _this = this;
        this.router = router;
        this.alerts = [];
        this.alerts$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.alerts = _this.alerts.filter(function (alert) { return alert.keepAfterRouteChange; });
            }
        });
    }
    AlertsService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    };
    AlertsService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    };
    AlertsService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    };
    AlertsService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    };
    /**
     * Common method for add alert to list
     * @param type type of alert
     * @param msg text of alert
     * @param keepAfterRouteChange if it keep showing after route changes or neither
     */
    AlertsService.prototype.alert = function (type, msg, keepAfterRouteChange, dismissTimeout) {
        var _this = this;
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        if (dismissTimeout === void 0) { dismissTimeout = 5000; }
        var alert = new Alert(type, msg, keepAfterRouteChange);
        this.alerts.push(alert);
        this.alerts$.next(this.alerts);
        setTimeout(function () { return _this.dismissAlert(alert); }, dismissTimeout);
    };
    AlertsService.prototype.clear = function () {
        this.alerts = [];
        this.alerts$.next(this.alerts);
    };
    AlertsService.prototype.dismissAlert = function (alert) {
        var idx = this.alerts.indexOf(alert);
        if (idx > -1) {
            this.alerts.splice(idx, 1);
            this.alerts$.next(this.alerts);
        }
    };
    AlertsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AlertsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AlertsService);
    return AlertsService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // const currentUser = this.authenticationService.currentUserValue;
        // if (currentUser) {
        //     // check if route is restricted by role
        //     if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        //         // role not authorised so redirect to home page
        //         this.router.navigate(['/']);
        //         return false;
        //     }
        //     // authorised so return true
        //     return true;
        // }
        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/catalog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/catalog.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_dto_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/dto/category */ "./src/app/models/dto/category.ts");
/* harmony import */ var _models_dto_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/dto/product */ "./src/app/models/dto/product.ts");
/* harmony import */ var _converters_product_converter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./converters/product-converter.service */ "./src/app/services/converters/product-converter.service.ts");







// import { IProductSearch, ICatalogSearch } from '../models/ProductSearch';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CatalogService = /** @class */ (function () {
    function CatalogService(http, productConverter) {
        this.http = http;
        this.productConverter = productConverter;
    }
    CatalogService.prototype.getAllProducts = function (pageNumber, pageSize, categoryId, keyword) {
        // const body = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "1000" };
        var searchCriteria = new _models_dto_product__WEBPACK_IMPORTED_MODULE_5__["ProductSearchCriteria"]();
        searchCriteria.pageNumber = pageNumber;
        searchCriteria.pageSize = pageSize;
        searchCriteria.keyword = keyword;
        searchCriteria.outline = categoryId;
        searchCriteria.responseGroup = _models_dto_product__WEBPACK_IMPORTED_MODULE_5__["ItemResponseGroup"].ItemLarge;
        var url = 'storefrontapi/catalog/search';
        return this.http.post(url, searchCriteria);
    };
    CatalogService.prototype.getAllCategories = function () {
        // const searchCriteria = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "1000" };
        var searchCriteria = new _models_dto_category__WEBPACK_IMPORTED_MODULE_4__["CategorySearchCriteria"]();
        searchCriteria.pageSize = 1000;
        searchCriteria.responseGroup = _models_dto_category__WEBPACK_IMPORTED_MODULE_4__["CategoryResponseGroup"].Info;
        var url = 'storefrontapi/categories/search';
        return this.http.post(url, searchCriteria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.categories; }));
    };
    CatalogService.prototype.getProduct = function (productId) {
        var _this = this;
        var url = 'storefrontapi/products?productIds=' + productId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.map(function (p) { return _this.productConverter.toProductDetails(p); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.length > 0 ? x[0] : null; }));
    };
    CatalogService.prototype.getProductBySku = function (sku) {
        var searchCriteria = new _models_dto_product__WEBPACK_IMPORTED_MODULE_5__["ProductSearchCriteria"]();
        searchCriteria.keyword = sku;
        searchCriteria.pageSize = 2;
        searchCriteria.responseGroup = _models_dto_product__WEBPACK_IMPORTED_MODULE_5__["ItemResponseGroup"].ItemLarge;
        var url = 'storefrontapi/catalog/search';
        return this.http.post(url, searchCriteria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            if (x.metaData.totalItemCount === 1 && x.products[0].sku === sku) {
                return x.products[0];
            }
            return null;
        }));
    };
    CatalogService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _converters_product_converter_service__WEBPACK_IMPORTED_MODULE_6__["ProductConverterService"] }
    ]; };
    CatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "./src/app/services/converters/organization-converter.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/converters/organization-converter.service.ts ***!
  \***********************************************************************/
/*! exports provided: OrganizationConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationConverterService", function() { return OrganizationConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_organization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/organization */ "./src/app/models/organization.ts");



var OrganizationConverterService = /** @class */ (function () {
    function OrganizationConverterService() {
    }
    OrganizationConverterService.prototype.toOrganizationDetails = function (orgDto) {
        var result = new src_app_models_organization__WEBPACK_IMPORTED_MODULE_2__["OrganizationDetails"]();
        result.name = orgDto.name;
        result.id = orgDto.id;
        result.billingAddress = orgDto.addresses.find(function (x) { return x.type === 1; });
        result.shippingAddress = orgDto.addresses.find(function (x) { return x.type === 2; });
        result.phoneNumber = orgDto.phones[0];
        result.email = orgDto.email;
        result.contactPerson = orgDto.dynamicProperties.find(function (x) { return x.name === 'contactPerson'; }).values[0].value;
        result.taxNumber = orgDto.dynamicProperties.find(function (x) { return x.name === 'taxNumber'; }).values[0].value;
        result.companyRegistrationNumber = orgDto.dynamicProperties.find(function (x) { return x.name === 'companyRegistrationNumber'; }).values[0].value;
        result.returnInvalidOrdersToCreator = orgDto.dynamicProperties.find(function (x) { return x.name === 'returnInvalidOrdersToCreator'; }).values[0].value.toLowerCase() === 'true';
        return result;
    };
    OrganizationConverterService.prototype.toUpdateOrganization = function (orgView, orgForUpdate) {
        var result = new src_app_models_organization__WEBPACK_IMPORTED_MODULE_2__["UpdateOrganization"]();
        result.addresses = [];
        result.phones = [];
        result.emails = [];
        result.id = orgView.id;
        result.name = orgView.name;
        result.addresses.push(orgView.billingAddress, orgView.shippingAddress);
        result.dynamicProperties = orgForUpdate.dynamicProperties;
        result.dynamicProperties.find(function (x) { return x.name === 'contactPerson'; }).values[0].value = orgView.contactPerson;
        result.dynamicProperties.find(function (x) { return x.name === 'taxNumber'; }).values[0].value = orgView.taxNumber;
        result.dynamicProperties.find(function (x) { return x.name === 'companyRegistrationNumber'; }).values[0].value = orgView.companyRegistrationNumber;
        result.dynamicProperties.find(function (x) { return x.name === 'returnInvalidOrdersToCreator'; }).values[0].value = orgView.returnInvalidOrdersToCreator;
        result.emails.push(orgView.email);
        result.phones.push(orgView.phoneNumber);
        return result;
    };
    OrganizationConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OrganizationConverterService);
    return OrganizationConverterService;
}());



/***/ }),

/***/ "./src/app/services/converters/product-converter.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/converters/product-converter.service.ts ***!
  \******************************************************************/
/*! exports provided: ProductConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConverterService", function() { return ProductConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");



var ProductConverterService = /** @class */ (function () {
    function ProductConverterService() {
    }
    ProductConverterService.prototype.toProductDetails = function (productDto) {
        var result = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["ProductDetails"]();
        result.id = productDto.id;
        result.name = productDto.name;
        result.sku = productDto.sku;
        result.title = productDto.title;
        result.price = productDto.price.actualPrice.formattedAmount;
        var quickReview = productDto.descriptions.find(function (x) { return x.reviewType === 'QuickReview'; });
        result.quickReview = (quickReview || { value: '' }).value;
        var fullReview = productDto.descriptions.find(function (x) { return x.reviewType === 'FullReview'; });
        result.fullReview = (fullReview || { value: '' }).value;
        result.brand = (productDto.properties.find(function (x) { return x.name === 'Brand'; }) || { value: '' }).value;
        result.model = (productDto.properties.find(function (x) { return x.name === 'Model'; }) || { value: '' }).value;
        result.primaryImage = productDto.primaryImage;
        result.images = productDto.images;
        return result;
    };
    ProductConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductConverterService);
    return ProductConverterService;
}());



/***/ }),

/***/ "./src/app/services/converters/user-converter.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/converters/user-converter.service.ts ***!
  \***************************************************************/
/*! exports provided: UserConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConverterService", function() { return UserConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");



var UserConverterService = /** @class */ (function () {
    function UserConverterService() {
    }
    UserConverterService.prototype.toAddUser = function (userView, organization) {
        var result = new _models_user__WEBPACK_IMPORTED_MODULE_2__["AddNewUser"]();
        result.email = userView.email;
        result.firstName = userView.firstName;
        result.lastName = userView.lastName;
        result.fullName = userView.firstName + " " + userView.lastName;
        result.organizationId = organization.id;
        result.password = userView.password;
        result.role = userView.selectRole;
        result.userName = userView.userName;
        return result;
    };
    UserConverterService.prototype.toEditUser = function (userView, user) {
        var result = new _models_user__WEBPACK_IMPORTED_MODULE_2__["EditUser"]();
        result.roles = [];
        result.firstName = userView.firstName;
        result.lastName = userView.lastName;
        result.fullName = userView.firstName + " " + userView.lastName;
        result.roles.push(userView.selectRole);
        result.email = userView.email;
        result.id = user.id;
        return result;
    };
    UserConverterService.prototype.toEditCurrentAccount = function (userView) {
        var result = new _models_user__WEBPACK_IMPORTED_MODULE_2__["EditUser"]();
        result.roles = [];
        result.firstName = userView.firstName;
        result.lastName = userView.lastName;
        result.fullName = userView.firstName + " " + userView.lastName;
        result.email = userView.email;
        result.roles = userView.roles.map(function (x) { return x.id; });
        result.id = userView.id;
        return result;
    };
    UserConverterService.prototype.toEditCurrentAccountPhoneNumber = function (userView) {
        var result = new _models_user__WEBPACK_IMPORTED_MODULE_2__["EditUserPhone"]();
        result.phoneNumber = userView.phoneNumber;
        return result;
    };
    UserConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserConverterService);
    return UserConverterService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: CatalogService, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return _catalog_service__WEBPACK_IMPORTED_MODULE_0__["CatalogService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/services/interceptors/request-interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/interceptors/request-interceptor.ts ***!
  \**************************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");




var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
        this.activeRequests = 0;
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (this.activeRequests === 0) {
            this.blockUI.start();
        }
        this.activeRequests++;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.activeRequests--;
            if (_this.activeRequests === 0) {
                _this.blockUI.stop();
            }
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])()
    ], RequestInterceptor.prototype, "blockUI", void 0);
    RequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/services/mobile-view.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/mobile-view.service.ts ***!
  \*************************************************/
/*! exports provided: MobileViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileViewService", function() { return MobileViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileViewService = /** @class */ (function () {
    function MobileViewService(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    MobileViewService.prototype.openSidebar = function (component) {
        var _this = this;
        var overlayElement = this.renderer.createElement('div');
        this.renderer.addClass(overlayElement, 'overlay');
        this.renderer.appendChild(document.body, overlayElement);
        component.toggle();
        this.renderer.listen(overlayElement, 'click', function () {
            _this.renderer.removeChild(document.body, overlayElement);
            component.toggle();
        });
    };
    MobileViewService.prototype.closeSidebar = function (component) {
        component.toggle();
        var overlayElement = document.querySelector('.overlay');
        this.renderer.removeChild(document.body, overlayElement);
    };
    MobileViewService.prototype.openMobileSearch = function () {
        var searchElement = document.querySelector('.mobile-navbar .search');
        this.renderer.addClass(searchElement, 'opened');
    };
    MobileViewService.prototype.closeMobileSearch = function () {
        var searchElement = document.querySelector('.mobile-navbar .search');
        this.renderer.removeClass(searchElement, 'opened');
    };
    MobileViewService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] }
    ]; };
    MobileViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MobileViewService);
    return MobileViewService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_dto_iorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/dto/iorder */ "./src/app/models/dto/iorder.ts");






var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes';
        this.ordersUrl = 'storefrontapi/orders/search';
        this.usersUrl = 'api/users';
        this.approvalWorkflowUrl = 'api/approvalWorkflow';
        this.orderUrl = 'storefrontapi/orders';
    }
    OrdersService.prototype.getOrders = function (pageNumber, pageSize, startDate, endDate, status) {
        var _this = this;
        if (pageNumber === void 0) { pageNumber = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (startDate === void 0) { startDate = null; }
        if (endDate === void 0) { endDate = null; }
        if (status === void 0) { status = ''; }
        var searchCriteria = new _models_dto_iorder__WEBPACK_IMPORTED_MODULE_5__["OrderSearchCriteria"]();
        searchCriteria.pageNumber = pageNumber;
        searchCriteria.pageSize = pageSize;
        searchCriteria.StartDate = startDate;
        searchCriteria.EndDate = endDate;
        if (status === 'All') {
            searchCriteria.Status = '';
        }
        else {
            searchCriteria.Status = status;
        }
        return this.http.post(this.ordersUrl, searchCriteria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (orders) {
            _this.log("fetched ordersUrl:" + orders);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('ordersUrl', [])));
    };
    OrdersService.prototype.getOrder = function (OrderNumber) {
        var _this = this;
        return this.http.get(this.orderUrl + ("/" + OrderNumber)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (order) {
            _this.log("fetched ordersUrl:" + order);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('orderUrl', [])));
    };
    OrdersService.prototype.updateOrder = function (order) {
        return this.http.post(this.ordersUrl, order);
    };
    OrdersService.prototype.getApprovalWorkflow = function () {
        var _this = this;
        return this.http.get(this.approvalWorkflowUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (workflow) {
            _this.log("fetched approvalWorkflowUrl:" + workflow);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error approvalWorkflowUrl', [])));
    };
    OrdersService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    OrdersService.prototype.log = function (message) {
        console.log('Orders service: ' + message);
    };
    OrdersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/organization.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/organization.service.ts ***!
  \**************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var OrganizationService = /** @class */ (function () {
    function OrganizationService(http) {
        this.http = http;
    }
    OrganizationService.prototype.getUserOrganization = function () {
        var _this = this;
        console.log("getUserOrganization");
        return this.http.get("storefrontapi/account/organization/current?t=").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (organization) {
            _this.log("fetched organization:" + organization);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("organization", [])));
    };
    OrganizationService.prototype.getOrganizationUsers = function (pageNumber, pageSize) {
        var url = 'storefrontapi/account/organization/users/search';
        var body = { pageNumber: pageNumber, start: (pageNumber - 1) * pageSize, pageSize: pageSize };
        return this.http.post(url, body);
    };
    OrganizationService.prototype.updateOrganization = function (organization) {
        var url = 'storefrontapi/account/organization';
        return this.http.put(url, organization);
    };
    OrganizationService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    OrganizationService.prototype.log = function (message) {
        console.log("Organization service: " + message);
    };
    OrganizationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OrganizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], OrganizationService);
    return OrganizationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get("/users/" + id);
    };
    UserService.prototype.getUserName = function () {
        console.log('getUserName');
        var url = 'storefrontapi/account';
        return this.http.get(url);
    };
    UserService.prototype.updateUser = function (user) {
        var url = 'storefrontapi/account';
        return this.http.post(url, user);
    };
    UserService.prototype.updatePhoneNumber = function (phoneNumber) {
        var url = 'storefrontapi/account/phonenumber';
        return this.http.post(url, phoneNumber);
    };
    UserService.prototype.changeUserPassword = function (password) {
        var url = 'storefrontapi/account/password';
        return this.http.post(url, password);
    };
    UserService.prototype.deleteUser = function (userName) {
        return this.http.delete('storefrontapi/account/' + userName);
    };
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        console.log('getCurrentUser');
        return this.http.get('storefrontapi/account?t=').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this.log("fetched user:" + user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('user', [])));
    };
    UserService.prototype.registerNewUser = function (user) {
        var url = 'storefrontapi/account/user';
        return this.http.post(url, user);
    };
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    UserService.prototype.log = function (message) {
        console.log('User service: ' + message);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/assets/config/config.dev.json":
/*!*******************************************!*\
  !*** ./src/assets/config/config.dev.json ***!
  \*******************************************/
/*! exports provided: pageSizes, defaultPageSize, default */
/***/ (function(module) {

module.exports = {"pageSizes":[10,20,30],"defaultPageSize":10};

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
    name: 'dev',
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

module.exports = __webpack_require__(/*! C:\Projects\VirtoCommerce\vc-procurement-theme\ng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map