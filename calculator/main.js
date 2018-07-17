(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <app-calculator> </app-calculator>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _calculator_calculator_button_calculator_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator-button/calculator-button.component */ "./src/app/calculator/calculator-button/calculator-button.component.ts");
/* harmony import */ var _calculator_calculator_display_calculator_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator/calculator-display/calculator-display.component */ "./src/app/calculator/calculator-display/calculator-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"],
                _calculator_calculator_button_calculator_button_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorButtonComponent"],
                _calculator_calculator_display_calculator_display_component__WEBPACK_IMPORTED_MODULE_5__["CalculatorDisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator-button/calculator-button.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/calculator/calculator-button/calculator-button.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    width: 100%; \n    height: 100%; \n}"

/***/ }),

/***/ "./src/app/calculator/calculator-button/calculator-button.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/calculator/calculator-button/calculator-button.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button role =\"button\" (click) = \"onClick()\">\n  {{value.label}}\n</button>"

/***/ }),

/***/ "./src/app/calculator/calculator-button/calculator-button.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/calculator/calculator-button/calculator-button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CalculatorButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorButtonComponent", function() { return CalculatorButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorButtonComponent = /** @class */ (function () {
    function CalculatorButtonComponent() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalculatorButtonComponent.prototype.onClick = function () {
        this.output.emit(this.value);
    };
    CalculatorButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalculatorButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalculatorButtonComponent.prototype, "output", void 0);
    CalculatorButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator-button',
            template: __webpack_require__(/*! ./calculator-button.component.html */ "./src/app/calculator/calculator-button/calculator-button.component.html"),
            styles: [__webpack_require__(/*! ./calculator-button.component.css */ "./src/app/calculator/calculator-button/calculator-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorButtonComponent);
    return CalculatorButtonComponent;
}());



/***/ }),

/***/ "./src/app/calculator/calculator-display/calculator-display.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/calculator/calculator-display/calculator-display.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display {\n  display: flex;\n  flex-flow: row wrap; \n  border: solid 1px black;\n  padding: 1em;\n  justify-content: flex-end;\n\n  width: 20em;\n  margin: 1em auto;\n\n}\n\n.display span {\n  font-family: monospace;\n  font-size: 2em;\n  text-align: center; \n  width: 1.2em;\n}\n\n"

/***/ }),

/***/ "./src/app/calculator/calculator-display/calculator-display.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/calculator/calculator-display/calculator-display.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"display\" #me tabindex =\"0\">\n  <span class=\"symbol\" *ngFor=\"let sym of opString.split('')\">{{sym}}</span>\n</div>"

/***/ }),

/***/ "./src/app/calculator/calculator-display/calculator-display.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/calculator/calculator-display/calculator-display.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CalculatorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorDisplayComponent", function() { return CalculatorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorDisplayComponent = /** @class */ (function () {
    function CalculatorDisplayComponent() {
    }
    CalculatorDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focusEmitter.subscribe(function (e) {
            setTimeout(function () { return _this.me.nativeElement.focus(); }, 50);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('me'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CalculatorDisplayComponent.prototype, "me", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalculatorDisplayComponent.prototype, "opString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalculatorDisplayComponent.prototype, "focusEmitter", void 0);
    CalculatorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator-display',
            template: __webpack_require__(/*! ./calculator-display.component.html */ "./src/app/calculator/calculator-display/calculator-display.component.html"),
            styles: [__webpack_require__(/*! ./calculator-display.component.css */ "./src/app/calculator/calculator-display/calculator-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorDisplayComponent);
    return CalculatorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons {\n    display: -ms-grid;\n    display: grid; \n    -ms-grid-columns: (1fr)[3]; \n        grid-template-columns: repeat(3, 1fr);\n    -ms-grid-rows: (3em)[6];\n        grid-template-rows: repeat(6, 3em) ;\n    grid-row-gap: 0.5em;\n    grid-column-gap: 0.5em;\n\n    width: 20em; \n    margin: 1em auto; \n}"

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <app-calculator-display [opString] = \"currentString\" [focusEmitter] =\"focusEmitter\">\n\n  </app-calculator-display>\n\n  <div class=\"buttons\">\n    <app-calculator-button *ngFor=\"let sym of symbols\" [value]=\"sym\" (output)=\"onOutput($event)\"></app-calculator-button>\n    <app-calculator-button [value] = \"{label: '=', isOperation: true}\" (output) = \"onCalculate($event)\"></app-calculator-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol */ "./src/app/calculator/symbol.ts");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "./src/app/calculator/engine.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.onOutput = function (value) {
        this.engine.addSymbol(value);
        this.currentString = this.engine.getOperationsAsString() || this.currentString;
    };
    CalculatorComponent.prototype.onCalculate = function (value) {
        var result;
        try {
            result = this.engine.calculate();
        }
        catch (e) {
            result = "err";
        }
        if (result !== undefined) {
            this.currentString = result.toString();
            this.focusEmitter.emit(true);
        }
    };
    CalculatorComponent.prototype.ngOnInit = function () {
        this.engine = new _engine__WEBPACK_IMPORTED_MODULE_2__["CalculatorEngine"]();
        this.symbols = Object.values(_symbol__WEBPACK_IMPORTED_MODULE_1__["CalcSymbol"]);
        this.currentString = "0";
        this.focusEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log(this.focusEmitter);
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/calculator/engine.ts":
/*!**************************************!*\
  !*** ./src/app/calculator/engine.ts ***!
  \**************************************/
/*! exports provided: CalculatorEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorEngine", function() { return CalculatorEngine; });
/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbol */ "./src/app/calculator/symbol.ts");

var CalculatorEngine = /** @class */ (function () {
    function CalculatorEngine() {
        this.operationsList = [];
    }
    CalculatorEngine.prototype.getOperations = function () {
        return this.operationsList;
    };
    CalculatorEngine.prototype.getOperationsAsString = function () {
        return this.operationsList.reduce(function (acc, v) {
            acc += v.label;
            return acc;
        }, '');
    };
    CalculatorEngine.prototype.calculate = function () {
        if (this.operationsList.length === 0 || this.operationsList[this.operationsList.length - 1].isOperation) {
            return;
        }
        if (!this.operationsList.some(function (v) { return v.isOperation; })) {
            return;
        }
        var result;
        try {
            result = eval(this.getOperationsAsString());
        }
        catch (e) {
            throw (e);
        }
        finally {
            this.operationsList = [];
        }
        return result;
    };
    CalculatorEngine.prototype.addSymbol = function (sym) {
        if (sym.isOperation) {
            if (this.operationsList.length === 0 || this.operationsList[this.operationsList.length - 1].isOperation) {
                if (sym === _symbol__WEBPACK_IMPORTED_MODULE_0__["CalcSymbol"].DOT) {
                    this.operationsList.push(_symbol__WEBPACK_IMPORTED_MODULE_0__["CalcSymbol"].ZERO);
                }
                else
                    return; // Do nothing
            }
        }
        this.operationsList.push(sym);
    };
    return CalculatorEngine;
}());



/***/ }),

/***/ "./src/app/calculator/symbol.ts":
/*!**************************************!*\
  !*** ./src/app/calculator/symbol.ts ***!
  \**************************************/
/*! exports provided: CalcSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcSymbol", function() { return CalcSymbol; });
// Symbol is taken by Javascript
var CalcSymbol = {
    ONE: {
        label: '1',
        isOperation: false
    },
    TWO: {
        label: '2',
        isOperation: false
    },
    THREE: {
        label: '3',
        isOperation: false
    },
    FOUR: {
        label: '4',
        isOperation: false
    },
    FIVE: {
        label: '5',
        isOperation: false
    },
    SIX: {
        label: '6',
        isOperation: false
    },
    SEVEN: {
        label: '7',
        isOperation: false
    },
    EIGHT: {
        label: '8',
        isOperation: false
    },
    NINE: {
        label: '9',
        isOperation: false
    },
    ZERO: {
        label: '0',
        isOperation: false
    },
    DOT: {
        label: '.',
        isOperation: false
    },
    PLUS: {
        label: '+',
        isOperation: true
    },
    MINUS: {
        label: '-',
        isOperation: true
    },
    TIMES: {
        label: '*',
        isOperation: true
    },
    DIVIDE: {
        label: '/',
        isOperation: true
    }
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/davidj/git-workspace/calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map