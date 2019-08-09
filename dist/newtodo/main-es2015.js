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

module.exports = "<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0 text-white\">To do</a>\n    <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"\" *ngIf=\"state.logOut\" (click)=\"logOut()\">Log out</a>\n        </li>\n    </ul>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\" style=\"margin-top: 100px\">\n    <div class=\"card col-3\" [ngSwitch]=\"formState\">\n        <div class=\"card-body\" [ngSwitch]=\"formState\">\n            <form [formGroup]=\"form\">\n                <div class=\"justify-content-centr\">\n                    <h1 class=\"h3 mb-3 font-weight-normal d-flex justify-content-center\" *ngSwitchCase=\"1\">Please sign in</h1>\n                    <h1 class=\"h3 mb-3 font-weight-normal d-flex justify-content-center\" *ngSwitchCase=\"2\">Please sign up</h1>\n                </div>\n                <div class=\"form-group \">\n                    <label for=\"exampleInputEmail1\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" formControlName=\"email\">\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"form.get('email').invalid\">\n                        Incorrect email!\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password</label>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"form.get('password').invalid\">\n                        The length of the password should be 8-15 squirrels\n                    </div>\n                </div>\n                <div class=\"form-group\" *ngSwitchCase=\"2\">\n                    <label for=\"exampleInputPassword1\">Confirm Password</label>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\n                    <div class=\"alert alert-danger mt-1\" role=\"alert\" *ngIf=\"form.get('confirmPassword').invalid\">\n                        The length of the password should be 8-15 squirrels\n                    </div>\n                </div>\n                <div class=\"alert alert-danger mt-1\" role=\"alert\" *ngIf=\"error\">\n                    {{error}}\n                </div>\n                <div class=\"row justify-content-md-around\">\n                    <button class=\"btn btn-primary\" *ngSwitchCase=\"1\" (click)=\"logIn()\">log in</button>\n                    <button type=\"button\" class=\"btn btn-light\" *ngSwitchCase=\"1\" (click)=\"formState=2; error = ''\">Sign up</button>\n                </div>\n                <div class=\"row justify-content-md-around\">\n                    <button class=\"btn btn-primary \" *ngSwitchCase=\"2\" (click)=\"regUser()\">Sign up</button>\n                    <button type=\"button\" class=\"btn btn-light\" *ngSwitchCase=\"2\" (click)=\"formState=1; error = ''\">Log In</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"list-group container center-block mb-2 w-50\">\n        <h1 class=\"d-flex justify-content-center\">Tasks list</h1>\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start \">\n            <div class=\"d-flex w-100 justify-content-between\">\n                <input type=\"text\" class=\"form-control mr-3\" placeholder=\"Enter task\" [(ngModel)]=\"addTaskTitle\" #input (blur)=\"input.value=''\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                    <button class=\"btn btn-secondary\" (click)=\"addTask()\">Add</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"list-group  container center-block mb-2 w-50\" *ngFor=\"let task of tasks\">\n        <a class=\"list-group-item  flex-column align-items-start \">\n            <div class=\"d-flex w-100 justify-content-between mb-2\">\n                <h5 class=\"mb-1 align-self-center \">{{task.title}}</h5>\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-secondary\" (click)=\"delTask(task)\"><div class=\"material-icons align-bottom\" >delete_forever</div></button>\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editBtn(task)\"><i class=\"material-icons align-bottom\" >edit</i></button>\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-between border noEdit\" [class.edit]=\"task !== editTask\">\n                <div class=\"m-3\">\n                    <h6 class=\"mb-3\">Owner: {{task.owner.email}}</h6>\n                    <h6 *ngIf=\"task.co_owner != ''\">Co-owners:</h6>\n                    <div *ngFor=\"let co_owner of task.co_owner\" class=\"d-flex align-items-start flex-column\">\n                        <div>{{co_owner.email}}</div>\n                    </div>\n                </div>\n                <div class=\"m-3\">\n                    <label>Edit task</label>\n                    <div class=\"d-flex w-100 justify-content-between mb-3\">\n                        <input type=\"text\" class=\"form-control mr-1\" #edit value={{task.title}}>\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editTaskFn(task, edit.value)\"><i class=\"material-icons align-bottom\" >save</i></button>\n                    </div>\n                    <label>Share task</label>\n                    <div class=\"d-flex w-100 justify-content-between\">\n                        <input type=\"text\" class=\"form-control mr-1\" placeholder=\"Enter email\" #coOwner (blur)=\"input.value=''\">\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addCoOwner(task, coOwner.value)\"><i class=\"material-icons align-bottom\">share</i></button>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _task_task_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.guard */ "./src/app/task/task.guard.ts");






const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'task', component: _task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], canActivate: [_task_task_guard__WEBPACK_IMPORTED_MODULE_5__["TaskGuard"]] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_task_task_guard__WEBPACK_IMPORTED_MODULE_5__["TaskGuard"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




let AppComponent = class AppComponent {
    constructor() {
        this.isLoggetIn = _data__WEBPACK_IMPORTED_MODULE_2__["IsLoggetIn"];
        this.state = _data__WEBPACK_IMPORTED_MODULE_2__["State"];
    }
    logOut() {
        this.isLoggetIn.status = false;
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('id');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: IsLoggetIn, State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggetIn", function() { return IsLoggetIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
const IsLoggetIn = {
    status: false,
    id: false
};
const State = {
    formState: 1,
    logOut: false
};


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");







let LoginComponent = class LoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.formState = _data__WEBPACK_IMPORTED_MODULE_5__["State"].formState;
        this.isLoggetIn = _data__WEBPACK_IMPORTED_MODULE_5__["IsLoggetIn"];
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])
        });
    }
    regUser() {
        this.error = '';
        if (this.form.get('email').value !== '' || this.form.get('password').value !== '' || this.form.get('confirmPassword').value !== '') {
            if (this.form.get('password').value === this.form.get('confirmPassword').value) {
                const body = {
                    email: this.form.get('email').value,
                    password: this.form.get('password').value
                };
                this.service.regUser(body)
                    .subscribe(res => {
                    if (res === true) {
                        this.formState = 1;
                    }
                    else {
                        this.error = res;
                    }
                });
            }
            else {
                this.error = 'Passwords do not match!';
            }
        }
    }
    logIn() {
        this.error = '';
        const body = {
            email: this.form.get('email').value,
            password: this.form.get('password').value
        };
        this.service.logIn(body)
            .subscribe((res) => {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('id', res.id);
            if (res.ok) {
                this.router.navigate(['task']);
                this.isLoggetIn.status = true;
            }
            else {
                this.error = res.error;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.apiLogin = '/api/login';
        this.apiReg = '/api/register';
    }
    logIn(body) {
        return this.http.post(this.apiLogin, body);
    }
    regUser(body) {
        return this.http.post(this.apiReg, body);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\r\n    display: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);






let TaskComponent = class TaskComponent {
    constructor(router) {
        this.router = router;
        this.isLoggetIn = _data__WEBPACK_IMPORTED_MODULE_2__["IsLoggetIn"];
        this.state = _data__WEBPACK_IMPORTED_MODULE_2__["State"];
        this.state.logOut = true;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__["connect"]('');
        this.socket.on('initialTask', (res) => {
            console.log(res);
            this.tasks = res.filter(filterByOwner);
            function filterByOwner(task) {
                if (task.owner._id === ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('id') || filterByCoOwner(task.co_owner)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            function filterByCoOwner(owners) {
                if (owners.length !== 0) {
                    for (let i = 0; i <= owners.length; i++) {
                        if (owners[i]._id === ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('id')) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        });
    }
    addTask() {
        if (this.addTaskTitle !== undefined) {
            this.socket.emit('addTask', {
                title: this.addTaskTitle,
                owner: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('id')
            });
        }
    }
    delTask(task) {
        this.socket.emit('delTask', task);
    }
    editTaskFn(task, title) {
        if (title !== '') {
            this.socket.emit('editTask', { id: task._id, title: title });
        }
    }
    addCoOwner(task, email) {
        if (email !== '') {
            this.socket.emit('addCoOwner', { id: task._id, email: email });
        }
    }
    editBtn(task) {
        if (this.editTask === task) {
            this.editTask = '';
        }
        else {
            this.editTask = task;
        }
    }
    ngOnInit() {
    }
};
TaskComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html"),
        styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/task/task.guard.ts":
/*!************************************!*\
  !*** ./src/app/task/task.guard.ts ***!
  \************************************/
/*! exports provided: TaskGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskGuard", function() { return TaskGuard; });
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");



class TaskGuard {
    constructor(router) {
        this.router = router;
        this.state = _data__WEBPACK_IMPORTED_MODULE_2__["State"];
    }
    canActivate(route, state) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_0__["Cookie"].get('id') === 'null' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_0__["Cookie"].get('id') === null) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    }
}
TaskGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\github\newtodo\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map