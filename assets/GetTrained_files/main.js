(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GetTrained';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_prevent_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/prevent-access.service */ "./src/app/services/prevent-access.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/routes */ "./src/app/routes/routes.ts");
/* harmony import */ var _components_activate_activate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/activate/activate.component */ "./src/app/components/activate/activate.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_query_query_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/query/query.component */ "./src/app/components/query/query.component.ts");
/* harmony import */ var _components_querylist_querylist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/querylist/querylist.component */ "./src/app/components/querylist/querylist.component.ts");
/* harmony import */ var _components_addquery_addquery_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/addquery/addquery.component */ "./src/app/components/addquery/addquery.component.ts");
/* harmony import */ var _components_listCategory_listCategory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/listCategory/listCategory.component */ "./src/app/components/listCategory/listCategory.component.ts");
/* harmony import */ var _components_createCategory_createCategory_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/createCategory/createCategory.component */ "./src/app/components/createCategory/createCategory.component.ts");
/* harmony import */ var _components_create_course_area_create_course_area_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/create-course-area/create-course-area.component */ "./src/app/components/create-course-area/create-course-area.component.ts");
/* harmony import */ var _components_create_content_create_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/create-content/create-content.component */ "./src/app/components/create-content/create-content.component.ts");
/* harmony import */ var _components_course_create_course_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/course-create/course-create.component */ "./src/app/components/course-create/course-create.component.ts");
/* harmony import */ var _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/course-list/course-list.component */ "./src/app/components/course-list/course-list.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_remove_slide_dialog_remove_slide_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/remove-slide-dialog/remove-slide-dialog.component */ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.ts");
/* harmony import */ var _components_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/view-course/view-course.component */ "./src/app/components/view-course/view-course.component.ts");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/esm5/ngx-mat-select-search.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_activate_activate_component__WEBPACK_IMPORTED_MODULE_15__["ActivateComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_query_query_component__WEBPACK_IMPORTED_MODULE_17__["QueryComponent"],
                _components_querylist_querylist_component__WEBPACK_IMPORTED_MODULE_18__["QuerylistComponent"],
                _components_addquery_addquery_component__WEBPACK_IMPORTED_MODULE_19__["AddqueryComponent"],
                _components_createCategory_createCategory_component__WEBPACK_IMPORTED_MODULE_21__["CreateCategoryComponent"],
                _components_listCategory_listCategory_component__WEBPACK_IMPORTED_MODULE_20__["ListCategoryComponent"],
                _components_create_course_area_create_course_area_component__WEBPACK_IMPORTED_MODULE_22__["CreateCourseAreaComponent"],
                _components_create_content_create_content_component__WEBPACK_IMPORTED_MODULE_23__["CreateContentComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
                _components_course_create_course_create_component__WEBPACK_IMPORTED_MODULE_24__["CourseCreateComponent"],
                _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__["CourseListComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
                _components_remove_slide_dialog_remove_slide_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RemoveSlideDialogComponent"],
                _components_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_28__["ViewCourseComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__["NgxMatSelectSearchModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes_routes__WEBPACK_IMPORTED_MODULE_14__["appRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
            ],
            entryComponents: [_components_remove_slide_dialog_remove_slide_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RemoveSlideDialogComponent"]],
            providers: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_2__["PreventAccessService"], _services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/activate/activate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/activate/activate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Account Activation</h1>\n</div>\n\n<div [hidden]=\"!successMessage\">\n  <mat-label>{{ successMessage }}</mat-label>\n</div>\n<div [hidden]=\"!errorMessage\">\n  <mat-label>{{ errorMessage }}</mat-label>\n</div>\n"

/***/ }),

/***/ "./src/app/components/activate/activate.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/activate/activate.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/activate/activate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/activate/activate.component.ts ***!
  \***********************************************************/
/*! exports provided: ActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateComponent", function() { return ActivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateComponent = /** @class */ (function () {
    function ActivateComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.route.snapshot.paramMap.get('token');
        console.log(this.token);
        this.userService.activate(this.token).subscribe(function (data) {
            if (data.success) {
                _this.successMessage = data.message;
            }
            else {
                _this.errorMessage = data.message;
            }
        });
    };
    ActivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate',
            template: __webpack_require__(/*! ./activate.component.html */ "./src/app/components/activate/activate.component.html"),
            styles: [__webpack_require__(/*! ./activate.component.scss */ "./src/app/components/activate/activate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ActivateComponent);
    return ActivateComponent;
}());



/***/ }),

/***/ "./src/app/components/addquery/addquery.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/addquery/addquery.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\n  <h2>Send Feedback</h2>\n</section>\n<mat-divider></mat-divider>\n<mat-card-content>\n  <form #queryForm=\"ngForm\" (ngSubmit)=\"queryForm.valid && onSubmit(queryForm)\" class=\"my-form\">\n    <div>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Query Title</mat-label>\n        <input matInput #query_title=\"ngModel\" name=\"query_title\" [(ngModel)]=\"queryService.selectedQuery.query_title\"\n          placeholder=\"Query Title\" required [ngClass]=\"{'invalid-textbox' :queryForm.submitted && !query_title.valid }\">\n        <div *ngIf=\"queryForm.submitted && !query_title.valid\">\n          <mat-error class=\"validation-message\">This field is required</mat-error>\n        </div>\n      </mat-form-field>\n      &nbsp;\n      &nbsp;\n      <mat-form-field class=\"full-width\">\n          <mat-label>Query Type</mat-label>\n          <mat-select #query_type=\"ngModel\" name=\"query_type\" [(ngModel)]=\"queryService.selectedQuery.query_type\"\n            required>\n            <mat-option value=\"request\">Request</mat-option>\n            <mat-option value=\"complain\">Complain</mat-option>\n            <mat-option value=\"feedback\">Feedback</mat-option>\n          </mat-select>\n        </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"full-width-fields\">\n        <mat-label>Query Content</mat-label>\n        <input matInput type=\"text\" #query_content=\"ngModel\" name=\"query_content\" [(ngModel)]=\"queryService.selectedQuery.query_content\"\n          placeholder=\"Query Content\" required [ngClass]=\"{'invalid-textbox' :queryForm.submitted && !query_content.valid }\">\n        <div *ngIf=\"queryForm.submitted && !query_content.valid\">\n          <mat-error class=\"validation-message\">This field is required</mat-error>\n        </div>\n      </mat-form-field>\n    </div>\n    <button mat-raised-button class=\"query-buttons\" routerLink=\"/home\">BACK</button>\n    <button mat-raised-button class=\"query-buttons\" type=\"submit\">SUBMIT</button>\n  </form>\n</mat-card-content>\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSuccessMessage\">\n  Feedback submitted successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessage\">\n  {{serverErrorMessage}}\n</div>"

/***/ }),

/***/ "./src/app/components/addquery/addquery.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/addquery/addquery.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field.mat-form-field {\n  font-size: 16px; }\n\n.my-form {\n  width: 95%;\n  margin: 1em 1em 1em 1em; }\n\n.full-width {\n  width: 100%; }\n\n.mat-typography {\n  margin: 1em 1em 1em 1em; }\n\n.full-width {\n  width: 30%; }\n\n.full-width-fields {\n  width: 100%; }\n\nmat-label {\n  text-transform: uppercase; }\n\n.query-buttons {\n  margin: 1em 1em auto auto;\n  background-color: #1A3741;\n  color: #F3D410;\n  width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvYWRkcXVlcnkvYWRkcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLFdBQVU7RUFDVix3QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZHF1ZXJ5L2FkZHF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLm15LWZvcm17XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46MWVtIDFlbSAxZW0gMWVtO1xuICB9XG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWF0LXR5cG9ncmFwaHl7XG4gICAgbWFyZ2luOiAxZW0gMWVtIDFlbSAxZW07XG59XG4uZnVsbC13aWR0aHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5mdWxsLXdpZHRoLWZpZWxkc3tcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtbGFiZWx7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5xdWVyeS1idXR0b25ze1xuICBtYXJnaW46IDFlbSAxZW0gYXV0byBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEzNzQxO1xuICBjb2xvcjogI0YzRDQxMDtcbiAgd2lkdGg6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/addquery/addquery.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/addquery/addquery.component.ts ***!
  \***********************************************************/
/*! exports provided: AddqueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddqueryComponent", function() { return AddqueryComponent; });
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddqueryComponent = /** @class */ (function () {
    function AddqueryComponent(queryService) {
        this.queryService = queryService;
    }
    AddqueryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.req = { 'value': form.value, 'user_id': localStorage.getItem('id') };
        this.queryService.postQuery(this.req).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessage = err.error.join('<br/>');
            }
            else {
                _this.serverErrorMessage = 'Error occured while submitting the form';
            }
        });
    };
    AddqueryComponent.prototype.resetForm = function (form) {
        this.queryService.selectedQuery = {
            query_title: '',
            query_content: '',
            query_type: '',
            query_createdby: ''
        };
        form.resetForm();
        this.serverErrorMessage = '';
    };
    AddqueryComponent.prototype.ngOnInit = function () {
    };
    AddqueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addquery',
            template: __webpack_require__(/*! ./addquery.component.html */ "./src/app/components/addquery/addquery.component.html"),
            styles: [__webpack_require__(/*! ./addquery.component.scss */ "./src/app/components/addquery/addquery.component.scss")],
            providers: [_services_query_service__WEBPACK_IMPORTED_MODULE_0__["QueryService"]]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_0__["QueryService"]])
    ], AddqueryComponent);
    return AddqueryComponent;
}());



/***/ }),

/***/ "./src/app/components/course-create/course-create.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/course-create/course-create.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n  <form #courseCreateFrom=\"ngForm\" (ngSubmit)=\"courseCreateFrom.valid && onSubmit(courseCreateFrom)\" class=\"course-create-form\">\n    <section class=\"mat-typography\">\n      <h2>Create Course</h2>\n    </section>\n    <mat-divider></mat-divider>\n    <div class=\"create-course-container\">\n      <div>\n        <mat-form-field class=\"full-width\">\n          <mat-label>Course Title</mat-label>\n          <input matInput #course_title=\"ngModel\" name=\"course_title\" [(ngModel)]=\"courseService.selectedCourse.course_title\"\n            placeholder=\"Course Title\" required [ngClass]=\"{'invalid-textbox' :courseCreateFrom.submitted && !course_title.valid }\" #title>\n          <div *ngIf=\"courseCreateFrom.submitted && !course_title.valid\">\n            <mat-error class=\"validation-message\">This field is required</mat-error>\n          </div>\n        </mat-form-field>\n        &nbsp;\n        &nbsp;\n\n        <mat-form-field class=\"full-width\">\n          <mat-select #course_category=\"ngModel\" placeholder=\"Select Category\" name=\"course_category\" [(ngModel)]=\"courseService.selectedCourse.course_category\"\n            required>\n            <mat-option *ngFor=\"let category of categories\" [value]=\"category._id\">{{category.category_name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      </div>\n\n      <div>\n        <mat-form-field class=\"full-width-fields\">\n          <mat-label>Course Description</mat-label>\n          <input matInput #course_description=\"ngModel\" name=\"course_description\" [(ngModel)]=\"courseService.selectedCourse.course_description\"\n            placeholder=\"Course Description\" required [ngClass]=\"{'invalid-textbox' :courseCreateFrom.submitted && !course_description.valid }\">\n          <div *ngIf=\"courseCreateFrom.submitted && !course_description.valid\">\n            <mat-error class=\"validation-message\">This field is required</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n\n      <div>\n        <mat-form-field class=\"full-width-fields\">\n          <mat-select #course_learners=\"ngModel\" placeholder=\"Select Users\" name=\"course_learners\" [(ngModel)]=\"courseService.selectedCourse.course_learners\"\n            required multiple>\n            <ngx-mat-select-search></ngx-mat-select-search>\n            <mat-option *ngFor=\"let user of users\" [value]=\"user.email\">{{user.first_name}} {{user.last_name}} - {{user.email}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <button mat-raised-button color=\"primary\" class=\"course-buttons\" (click)=\"addContent()\">ADD CONTENT</button>\n    <div></div>\n    <br>\n    <mat-divider></mat-divider>\n    <br>\n    <button mat-raised-button class=\"course-buttons\" type=\"submit\">SAVE COURSE</button>\n    <button mat-raised-button class=\"course-buttons\" type=\"submit\">PUBLISH COURSE</button>\n  </form>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/components/course-create/course-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/course-create/course-create.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".course-buttons {\n  margin: 1em 1em auto 1em;\n  background-color: #1A3741;\n  color: #F3D410; }\n\n.mat-typography {\n  margin: 1em 1em 1em 1em; }\n\n.create-course-container {\n  margin: 1em 1em 1em 1em; }\n\n.course-create-form {\n  min-width: 150px;\n  width: 100%; }\n\n.full-width {\n  width: 30%; }\n\n.full-width-fields {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1idXR0b25ze1xuICAgIG1hcmdpbjogMWVtIDFlbSBhdXRvIDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEzNzQxO1xuICAgIGNvbG9yOiAjRjNENDEwO1xufVxuXG4ubWF0LXR5cG9ncmFwaHl7XG4gICAgbWFyZ2luOiAxZW0gMWVtIDFlbSAxZW07XG59XG5cbi5jcmVhdGUtY291cnNlLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDFlbSAxZW0gMWVtIDFlbTtcbn1cblxuLmNvdXJzZS1jcmVhdGUtZm9ybXtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMzAlO1xufVxuLmZ1bGwtd2lkdGgtZmllbGRze1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/course-create/course-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/course-create/course-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: CourseCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCreateComponent", function() { return CourseCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseCreateComponent = /** @class */ (function () {
    function CourseCreateComponent(courseService, categoryService, userService, router) {
        this.categoryService = categoryService;
        this.userService = userService;
        this.router = router;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.courseService = courseService;
        this.categoryService = categoryService;
        this.userService = userService;
    }
    CourseCreateComponent.prototype.addContent = function () {
        this.router.navigate(['createCourseContent']);
    };
    CourseCreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        form.value.course_created_by = localStorage.getItem('id');
        form.value.course_contents = this.courseService.selectedCourse.course_contents;
        console.log(form.value);
        this.courseService.postCourse(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessage = err.error.join('<br/>');
            }
            else {
                _this.serverErrorMessage = 'Error occured while submitting the form';
            }
        });
    };
    CourseCreateComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add email
        if ((value || '').trim()) {
            this.learners.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    CourseCreateComponent.prototype.resetForm = function (form) {
        this.courseService.selectedCourse = {
            course_title: '',
            course_description: '',
            course_category: '',
            course_learners: [],
            course_created_date: '',
            course_modified_date: '',
            course_contents: [],
            course_status: '',
            course_created_by: ''
        };
        form.resetForm();
        this.serverErrorMessage = '';
    };
    CourseCreateComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categoryService
            .getCategories()
            .subscribe(function (data) {
            _this.categories = data;
            console.log('Data requested...');
            console.log(_this.categories);
        });
    };
    CourseCreateComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.userService
            .getUsers()
            .subscribe(function (data) {
            _this.users = data;
            console.log('Data requested...');
            console.log(_this.users);
        });
    };
    CourseCreateComponent.prototype.ngOnInit = function () {
        this.fetchCategories();
        this.fetchUsers();
    };
    CourseCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-create',
            template: __webpack_require__(/*! ./course-create.component.html */ "./src/app/components/course-create/course-create.component.html"),
            styles: [__webpack_require__(/*! ./course-create.component.scss */ "./src/app/components/course-create/course-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], CourseCreateComponent);
    return CourseCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/course-list/course-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/course-list/course-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button class=\"course-buttons\" routerLink=\"/createCourse\">CREATE COURSE</button>\n<mat-divider></mat-divider>\n<section class=\"mat-typography\">\n    <h2>Course List</h2>\n</section>\n<div id=\"\">\n    <ul *ngFor=\"let course of courses\">\n        <li><a routerLink=\"/\">{{course.course_title }}</a></li>\n        <li>{{course.course_description}}</li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/course-list/course-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/course-list/course-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  background: #F2F2F2;\n  border-radius: 8px;\n  padding: 20px;\n  margin: 1em 1em 0 1em; }\n  ul li a {\n    color: #1A3741;\n    display: block;\n    margin-bottom: 8px;\n    font-weight: bold;\n    text-transform: uppercase;\n    text-decoration: none; }\n  .course-buttons {\n  margin: 1em 1em 1em 1em;\n  background-color: #1A3741;\n  color: #F3D410; }\n  .mat-typography {\n  margin: 1em 1em 1em 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isc0JBQXFCLEVBWXhCO0VBakJEO0lBU1ksZUFBYztJQUNkLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLDBCQUF5QjtJQUN6QixzQkFBcUIsRUFDeEI7RUFJVDtFQUNJLHdCQUF1QjtFQUN2QiwwQkFBeUI7RUFDekIsZUFBYyxFQUNqQjtFQUVEO0VBQ0ksd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAxZW07XG5cbiAgICBsaSB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICMxQTM3NDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvdXJzZS1idXR0b25ze1xuICAgIG1hcmdpbjogMWVtIDFlbSAxZW0gMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTM3NDE7XG4gICAgY29sb3I6ICNGM0Q0MTA7XG59XG5cbi5tYXQtdHlwb2dyYXBoeXtcbiAgICBtYXJnaW46IDFlbSAxZW0gMWVtIDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/course-list/course-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/course-list/course-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(courseService) {
        this.courseService = courseService;
    }
    CourseListComponent.prototype.ngOnInit = function () {
        this.fetchCourses();
    };
    CourseListComponent.prototype.fetchCourses = function () {
        var _this = this;
        this.courseService
            .getCourses()
            .subscribe(function (data) {
            _this.courses = data;
            console.log('Data requested...');
            console.log(_this.courses);
        });
    };
    CourseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/components/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.scss */ "./src/app/components/course-list/course-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/components/create-content/create-content.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-content/create-content.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n  <form #slideContent = \"ngForm\" class=\"myForm\">\n    <div>\n      <mat-form-field>\n        <mat-label>Title:</mat-label>\n        <input matInput #slide_title=\"ngModel\" [(ngModel)]=\"title\" name=\"slide_title\"\n        required [ngClass]=\"{'invalid-textbox': slideContent.submitted && !slide_title.valid}\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field>\n        <mat-label>Content:</mat-label>\n        <input matInput #slide_content=\"ngModel\" [(ngModel)]=\"text\" name=\"slide_content\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" (click)=\"onAddText()\">Add</button>\n      <button mat-raised-button color=\"primary\" (click)=\"onRemoveText()\">Remove</button>\n    </div>\n    <div>\n      <mat-list>\n        <mat-list-item *ngFor=\"let content of textContent\">\n          <h4>{{ content }}</h4>\n        </mat-list-item>\n      </mat-list>\n    </div>\n    <div>\n      <input type=\"file\" (change)=\"onFileSelected($event)\" accept=\"image/*\" #inputImg hidden>\n      <button mat-raised-button color=\"primary\" (click)=\"inputImg.click()\">Add Image</button>\n    </div>\n    <div>\n      <mat-form-field>\n        <mat-label>Video:</mat-label>\n        <input matInput #slide_video=\"ngModel\" [(ngModel)]=\"video\" name=\"slide_video\">\n      </mat-form-field>\n    </div>\n    <button mat-raised-button color=\"primary\" (click)=\"onSaveSlide()\">Save Slide</button>\n  </form>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/components/create-content/create-content.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-content/create-content.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".course-buttons {\n  margin: 1em 1em auto 1em; }\n\n.mat-typography {\n  margin: 1em 1em 1em 1em; }\n\n.create-course-container {\n  margin: 1em 1em 1em 1em; }\n\n.course-create-form {\n  min-width: 150px;\n  width: 100%; }\n\n.full-width {\n  width: 30%; }\n\n.full-width-fields {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNvbnRlbnQvY3JlYXRlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY29udGVudC9jcmVhdGUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2UtYnV0dG9uc3tcbiAgbWFyZ2luOiAxZW0gMWVtIGF1dG8gMWVtO1xufVxuXG4ubWF0LXR5cG9ncmFwaHl7XG4gIG1hcmdpbjogMWVtIDFlbSAxZW0gMWVtO1xufVxuXG4uY3JlYXRlLWNvdXJzZS1jb250YWluZXJ7XG4gIG1hcmdpbjogMWVtIDFlbSAxZW0gMWVtO1xufVxuXG4uY291cnNlLWNyZWF0ZS1mb3Jte1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGh7XG4gIHdpZHRoOiAzMCU7XG59XG4uZnVsbC13aWR0aC1maWVsZHN7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/create-content/create-content.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-content/create-content.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContentComponent", function() { return CreateContentComponent; });
/* harmony import */ var js_video_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-video-url-parser */ "./node_modules/js-video-url-parser/dist/jsVideoUrlParser.js");
/* harmony import */ var js_video_url_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_video_url_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_content_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/content.model */ "./src/app/models/content.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateContentComponent = /** @class */ (function () {
    function CreateContentComponent() {
        this.content = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.slide_content = new _models_content_model__WEBPACK_IMPORTED_MODULE_1__["Content"]();
    }
    CreateContentComponent.prototype.ngOnInit = function () {
        this.textContent = [];
    };
    CreateContentComponent.prototype.onAddText = function () {
        this.textContent.push(this.text);
    };
    CreateContentComponent.prototype.onRemoveText = function () {
        this.textContent.pop();
    };
    CreateContentComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.slide_content.image = event.target.value;
    };
    CreateContentComponent.prototype.onSaveSlide = function () {
        var video = js_video_url_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(this.video);
        if (video === undefined) {
            video = '';
        }
        this.slide_content.title = this.title;
        this.slide_content.content = this.textContent;
        this.slide_content.video = video;
        this.content.emit(this.slide_content);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], CreateContentComponent.prototype, "content", void 0);
    CreateContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-content',
            template: __webpack_require__(/*! ./create-content.component.html */ "./src/app/components/create-content/create-content.component.html"),
            styles: [__webpack_require__(/*! ./create-content.component.scss */ "./src/app/components/create-content/create-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateContentComponent);
    return CreateContentComponent;
}());



/***/ }),

/***/ "./src/app/components/create-course-area/create-course-area.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/create-course-area/create-course-area.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n    <app-create-content (content)=\"addSlide($event)\" *ngFor=\"let count of counter\"></app-create-content>\n    <button mat-raised-button color=\"primary\" (click)=\"addNewSlide()\">Add Slide</button>\n    <button mat-raised-button color=\"primary\" (click)=\"removeSlide()\">Remove Slide</button><br/><br/>\n    <button mat-raised-button color=\"primary\" (click)=\"createCourseContent()\" routerLink=\"/createCourse\">Create</button>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/components/create-course-area/create-course-area.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/create-course-area/create-course-area.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNvdXJzZS1hcmVhL2NyZWF0ZS1jb3Vyc2UtYXJlYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/create-course-area/create-course-area.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/create-course-area/create-course-area.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateCourseAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseAreaComponent", function() { return CreateCourseAreaComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _remove_slide_dialog_remove_slide_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../remove-slide-dialog/remove-slide-dialog.component */ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCourseAreaComponent = /** @class */ (function () {
    function CreateCourseAreaComponent(courseService, dialog) {
        this.courseService = courseService;
        this.dialog = dialog;
        this.content = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.courseContent = [];
        this.counter = [1];
    }
    CreateCourseAreaComponent.prototype.ngOnInit = function () {
    };
    CreateCourseAreaComponent.prototype.addSlide = function (content) {
        this.courseContent.push(content);
    };
    CreateCourseAreaComponent.prototype.resetContentFields = function () {
        this.courseService.selectedSlide = {
            title: '',
            content: [],
            image: '',
            video: ''
        };
    };
    CreateCourseAreaComponent.prototype.addNewSlide = function () {
        this.counter.push(1);
        this.resetContentFields();
    };
    CreateCourseAreaComponent.prototype.removeSlide = function () {
        if (this.counter.length === 1) {
            this.dialog.open(_remove_slide_dialog_remove_slide_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RemoveSlideDialogComponent"], {
                width: '250px'
            });
        }
        else {
            this.counter.pop();
            this.courseContent.pop();
        }
    };
    CreateCourseAreaComponent.prototype.createCourseContent = function () {
        this.courseService.selectedCourse.course_contents = this.courseContent;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], CreateCourseAreaComponent.prototype, "content", void 0);
    CreateCourseAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-course-area',
            template: __webpack_require__(/*! ./create-course-area.component.html */ "./src/app/components/create-course-area/create-course-area.component.html"),
            styles: [__webpack_require__(/*! ./create-course-area.component.scss */ "./src/app/components/create-course-area/create-course-area.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], CreateCourseAreaComponent);
    return CreateCourseAreaComponent;
}());



/***/ }),

/***/ "./src/app/components/createCategory/createCategory.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/createCategory/createCategory.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <section class = \"mat-typography\">\n      <h2>Create Category</h2>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"createCategoryForm\" class=\"create-category-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Category Name\" formControlName=\"category_name\" #category_name>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <button mat-raised-button class=\"create-category-buttons\" routerLink=\"/categories\">BACK</button>\n      &nbsp;\n      <button mat-raised-button type=\"submit\" class=\"create-category-buttons\" (click)=\"addCategory(category_name.value)\"\n        [disabled]=\"createCategoryForm.pristine || createCategoryForm.invalid\">SAVE</button>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/createCategory/createCategory.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/createCategory/createCategory.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-category-form {\n  min-width: 150px;\n  width: 100%; }\n\n.field-full-width {\n  width: 25%; }\n\n.create-category-buttons {\n  margin: 1em 1em auto 1em; }\n\nbutton {\n  background-color: #1a3741;\n  color: #f3D410;\n  width: 10%;\n  margin: 1em 37% auto 37%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlQ2F0ZWdvcnkvY3JlYXRlQ2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxXQUFVO0VBQ1YseUJBQXdCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGVDYXRlZ29yeS9jcmVhdGVDYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtY2F0ZWdvcnktZm9ybXtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQtZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uY3JlYXRlLWNhdGVnb3J5LWJ1dHRvbnN7XG4gICAgbWFyZ2luOiAxZW0gMWVtIGF1dG8gMWVtO1xufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMzc0MTtcbiAgICBjb2xvcjogI2YzRDQxMDtcbiAgICB3aWR0aDogMTAlO1xuICAgIG1hcmdpbjogMWVtIDM3JSBhdXRvIDM3JTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/createCategory/createCategory.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/createCategory/createCategory.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCategoryComponent = /** @class */ (function () {
    function CreateCategoryComponent(categoryService, fb, router) {
        this.categoryService = categoryService;
        this.fb = fb;
        this.router = router;
        this.createCategoryForm = this.fb.group({
            category_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    CreateCategoryComponent.prototype.addCategory = function (category_name) {
        var _this = this;
        this.categoryService.addCategory(category_name).subscribe(function () {
            _this.router.navigate(['/categories']);
        });
    };
    CreateCategoryComponent.prototype.ngOnInit = function () {
    };
    CreateCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./createCategory.component.html */ "./src/app/components/createCategory/createCategory.component.html"),
            styles: [__webpack_require__(/*! ./createCategory.component.scss */ "./src/app/components/createCategory/createCategory.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateCategoryComponent);
    return CreateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"15px\">\n\n    <mat-card class=\"card\" fxFlex=\"33\" *ngFor=\"let courses of enrolledCourses\">\n        <mat-card-header>\n            <li id=\"title\">\n                {{courses.course.course_title}}\n\n            </li>\n\n        </mat-card-header>\n        <mat-card-content flex>\n\n            <li id=\"content\">\n\n                {{courses.course.course_description}}\n            </li>\n\n            <mat-progress-spinner class=\"progress\" [diameter]=\"5\" value=\"70\"></mat-progress-spinner>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button (click)=\"gotoView(courses)\"> Get Trained </button>\n            <!-- <button mat-button>Continue</button> -->\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n\n\n<!-- <mat-card class=\"card\">\n    <mat-card-header >\n        <img mat-card-avatar>\n        header\n    </mat-card-header>\n    <mat-card-content>\n      content\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button>Get Started</button>\n        <button mat-button>Continue</button>\n    </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"card\">\n    <mat-card-header >\n        <img mat-card-avatar>\n        header\n    </mat-card-header>\n    <mat-card-content>\n      content\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button>Get Started</button>\n        <button mat-button>Continue</button>\n    </mat-card-actions>\n</mat-card>\n\n -->"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 25%;\n  height: 100px;\n  float: left;\n  margin: 2%; }\n\n#title {\n  font-weight: bold;\n  font-size: 1.7em;\n  list-style: none; }\n\n#content {\n  margin-top: 1em;\n  font-size: 1em;\n  list-style: none; }\n\n.progress {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2IsWUFBVztFQUNYLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMiU7XG59XG5cbiN0aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbiNjb250ZW50e1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ucHJvZ3Jlc3N7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(courseService, router) {
        this.courseService = courseService;
        this.router = router;
    }
    //   ngOnInit() {
    //     this.courseService.getEnrolledCourses(localStorage.getItem('id')).subscribe(
    //       (res:any) => {
    //         this.enrolledCourses = res.body;
    //         console.log(this.enrolledCourses);
    //         console.log("In ts of front end",this.enrolledCourses);
    //       },
    //       err => {
    //       }
    //     );
    //   }
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getEnrolledCourses(localStorage.getItem('id')).subscribe(function (data) {
            _this.enrolledCourses = data;
            console.log(_this.enrolledCourses);
            console.log("In ts of front end", _this.enrolledCourses);
        }, function (err) {
        });
    };
    DashboardComponent.prototype.gotoView = function (course) {
        localStorage.setItem('course', JSON.stringify(course));
        this.router.navigate(['dashboard/' + course.course._id]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/listCategory/listCategory.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/listCategory/listCategory.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdENhdGVnb3J5L2xpc3RDYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/listCategory/listCategory.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/listCategory/listCategory.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <section class=\"mat-typography\">\n      <h2>Manage Categories</h2>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <button mat-raised-button id=\"create-category\" routerLink=\"/createCategory\">CREATE CATEGORY</button>\n    <br><br>\n    <mat-divider></mat-divider>\n    <br>\n    <table mat-table [dataSource]=\"categories\">\n      <ng-container matColumnDef=\"category_name\">\n        <th mat-header-cell *matHeaderCellDef>CATEGORY NAME</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.category_name}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"active\">\n        <th mat-header-cell *matHeaderCellDef>IS ACTIVE?</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.active}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef>DELETE</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-raised-button id=\"delete-category\" color=\"warn\" (click)=\"deleteCategory(element._id)\">DELETE CATEGORY</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-divider></mat-divider>\n    <br>\n    <button mat-raised-button color=\"primary\" routerLink=\"/dashboard\">BACK</button>\n    <br><br>\n    <mat-divider></mat-divider>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/listCategory/listCategory.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/listCategory/listCategory.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoryComponent", function() { return ListCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListCategoryComponent = /** @class */ (function () {
    function ListCategoryComponent(categoryService) {
        this.categoryService = categoryService;
        //displayedColumns = ['category_name', ];
        this.displayedColumns = ['category_name', 'active', 'delete'];
    }
    ListCategoryComponent.prototype.ngOnInit = function () {
        this.fetchCategories();
    };
    ListCategoryComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categoryService
            .getCategories()
            .subscribe(function (data) {
            _this.categories = data;
            console.log('Data requested...');
            console.log(_this.categories);
        });
    };
    ListCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.categoryService.deleteCategory(id).subscribe(function () {
            _this.fetchCategories();
        });
    };
    ListCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./listCategory.component.html */ "./src/app/components/listCategory/listCategory.component.html"),
            styles: [__webpack_require__(/*! ./listCategory.component.css */ "./src/app/components/listCategory/listCategory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ListCategoryComponent);
    return ListCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-login-container\">\n<mat-card-content>\n    <form #loginForm = \"ngForm\" (ngSubmit) = \"loginForm.valid && onSubmit(loginForm)\" class=\"my-form\">\n    <Img src = \"./assets/HomeScreenLogo.png\" width=\"220\" height=\"140\">\n      <div>\n          <mat-form-field class=\"full-width\">\n            <mat-label>Email</mat-label>\n            <input matInput type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n            required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !email.valid }\">\n            <div *ngIf=\"loginForm.submitted && email.errors\">\n              <mat-error *ngIf=\"email?.errors.required\" class=\"validation-message\">This field is required.</mat-error>\n              <mat-error *ngIf=\"email?.errors.pattern\" class=\"validation-message\">Invalid email address.</mat-error>\n            </div>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class=\"full-width\">\n            <mat-label>Password</mat-label>\n            <input matInput type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n            minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !password.valid }\">\n            <div *ngIf=\"loginForm.submitted && password.errors\">\n              <mat-error *ngIf=\"password?.errors.required\" class=\"validation-message\">This field is required.</mat-error>\n              <mat-error *ngIf=\"password?.errors.minlength\" class=\"validation-message\">Enter at least 6 characters.</mat-error>\n            </div>\n          </mat-form-field>\n        </div>\n        <button mat-raised-button type=\"submit\" >LOG IN</button>\n  </form>\n</mat-card-content>\n<div class=\"alert\" *ngIf=\"showErrorMessage\">\n  {{ errorMessage }}\n</div>\n<div>\n  <p class=\"new-user\">NEW USER? <a href=\"http://localhost:4200/register\">SIGN UP</a></p>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field.mat-form-field {\n  font-size: 16px;\n  color: #1a3741; }\n\n.full-width {\n  width: 90%;\n  margin: auto 5% auto 5%; }\n\n.main-login-container {\n  background-color: #f3D410;\n  border-radius: 10px;\n  width: 40%;\n  position: absolute;\n  top: 20%;\n  left: 30%; }\n\n.my-form {\n  margin: 2em 2em 2em 2em; }\n\nbutton {\n  background-color: #1a3741;\n  color: #f3D410;\n  width: 20%;\n  margin: 1em 37% auto 37%; }\n\nimg {\n  display: inline; }\n\n.new-user {\n  margin: auto 34% 2em 34%;\n  font-weight: bold; }\n\nmat-label {\n  text-transform: uppercase; }\n\nimg {\n  margin: auto 24% 1em 24%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLGVBQWMsRUFDZjs7QUFDRDtFQUNFLFdBQVU7RUFDVix3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFVBQVMsRUFDVjs7QUFDRjtFQUNHLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsV0FBVTtFQUNWLHlCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UseUJBQXdCO0VBQ3hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDSDtFQUNFLHlCQUF3QixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMWEzNzQxO1xuICB9XG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0byA1JSBhdXRvIDUlO1xuICB9XG4gIC5tYWluLWxvZ2luLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNENDEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgbGVmdDogMzAlO1xuICB9XG4gLm15LWZvcm17XG4gICAgbWFyZ2luOiAyZW0gMmVtIDJlbSAyZW07XG4gIH1cbiAgYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTM3NDE7XG4gICAgY29sb3I6ICNmM0Q0MTA7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IDFlbSAzNyUgYXV0byAzNyU7XG4gIH1cbiAgaW1ne1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAubmV3LXVzZXJ7XG4gICAgbWFyZ2luOiBhdXRvIDM0JSAyZW0gMzQlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgbWF0LWxhYmVse1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbmltZ3tcbiAgbWFyZ2luOiBhdXRvIDI0JSAxZW0gMjQlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.router = router;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.userService = userService;
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.loginUser(form.value).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                // redirect to main home page
                console.log(res);
                localStorage.setItem('id', res.loggedUser);
                _this.router.navigate(['/dashboard']);
                localStorage.setItem('role', res.role);
            }
            else {
                _this.errorMessage = res.message;
                _this.showErrorMessage = true;
                setTimeout(function () { return _this.showErrorMessage = false; }, 5000);
            }
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                //this.serverErrorMessage = err.error.join('<br/>');
            }
            else {
                //this.serverErrorMessage = 'Error occured while submitting the form';
            }
        });
    };
    LoginComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        form.resetForm();
    };
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf = \"isLoggedIn()\">\n  <mat-toolbar-row>\n    <p class=\"app-name\">GetTrained</p>\n    <span class=\"example-spacer\"></span>\n    <button mat-button *ngIf=\"isAdmin()\" (click) = \"gotoCategories()\">Category</button>\n    <button mat-button (click) = \"gotoCourses()\">Course Creation</button>\n    <button mat-button (click) = \"viewCourse()\">View Course</button>\n    <button mat-button [matMenuTriggerFor]=\"feedback\">Feedback</button>\n    <mat-menu #feedback=\"matMenu\">\n      <button mat-menu-item (click) = \"gotoCreateFeedback()\">Add Feedback</button>\n      <button mat-menu-item (click) = \"gotoViewFeedback()\" >View All Feedbacks</button>\n    </mat-menu>\n    <button mat-button (click) = \"logout()\">Logout</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.app-name {\n  color: #f3D410; }\n\nmat-toolbar {\n  background-color: #1a3741;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWMsRUFDZjs7QUFFSDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbi5hcHAtbmFtZXtcbiAgY29sb3I6ICNmM0Q0MTA7XG59XG5cbm1hdC10b29sYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEzNzQxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isAdmin = function () {
        return localStorage.getItem("role") === "admin" ? true : false;
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem("id") ? true : false;
    };
    NavbarComponent.prototype.gotoCategories = function () {
        this.router.navigate(['categories']);
    };
    NavbarComponent.prototype.gotoCreateFeedback = function () {
        this.router.navigate(['addquery']);
    };
    NavbarComponent.prototype.gotoViewFeedback = function () {
        this.router.navigate(['queries']);
    };
    NavbarComponent.prototype.logout = function () {
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.gotoCourses = function () {
        this.router.navigate(['courses']);
    };
    NavbarComponent.prototype.viewCourse = function () {
        this.router.navigate(['course']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/query/query.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/query/query.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  query works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/query/query.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/query/query.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlcnkvcXVlcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/query/query.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/query/query.component.ts ***!
  \*****************************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
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

var QueryComponent = /** @class */ (function () {
    function QueryComponent() {
    }
    QueryComponent.prototype.ngOnInit = function () {
    };
    QueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query',
            template: __webpack_require__(/*! ./query.component.html */ "./src/app/components/query/query.component.html"),
            styles: [__webpack_require__(/*! ./query.component.scss */ "./src/app/components/query/query.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QueryComponent);
    return QueryComponent;
}());



/***/ }),

/***/ "./src/app/components/querylist/querylist.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/querylist/querylist.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <!-- li *ngFor=\"let query of queries\">{{query.query_id}}</li> -->\n      <br>\n      <mat-card>\n          <h2>User Feedback</h2>\n        <table mat-table [dataSource]=\"queries\">\n  \n          <!-- <ng-container matColumnDef=\"query_id\">\n            <th mat-header-cell *matHeaderCellDef>QueryId</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.query_id}}</td>\n          </ng-container> -->\n  \n          <ng-container matColumnDef=\"query_title\">\n              <th mat-header-cell *matHeaderCellDef>QUERY TITLE</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.query_title}}</td>\n          </ng-container>\n  \n          <ng-container matColumnDef=\"query_content\">\n              <th mat-header-cell *matHeaderCellDef>CONTENT</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.query_content}}</td>\n            </ng-container> \n  \n            <ng-container matColumnDef=\"query_createdby\">\n                <th mat-header-cell *matHeaderCellDef>CREATED BY</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.query_createdby}}</td>\n            </ng-container>\n  \n            <ng-container matColumnDef=\"query_type\">\n                <th mat-header-cell *matHeaderCellDef>TYPE</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.query_type}}</td>\n              </ng-container>\n    \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    \n        </table>\n        \n      </mat-card>\n    </div>\n  \n    <!-- <div>\n      <div *ngFor=\"let query of queries\">\n        <ul>\n          <li>Title:{{query.query_title}}</li>\n          <li>Content:{{query.query_content}}</li>\n          <li>Query Type:{{query.query_type}}</li>\n          <li>Created By:{{query.query_createdby}}</li>\n        </ul>\n      </div>\n    </div> -->"

/***/ }),

/***/ "./src/app/components/querylist/querylist.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/querylist/querylist.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\nul li {\n    background: #fff;\n    border-radius: 8px;\n    margin-bottom: 8px; }\n\nul li ul {\n      margin-top: 20px; }\n\nul li ul li {\n        padding: 0; }\n\nul li ul li span {\n          color: #00A8FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlcnlsaXN0L3F1ZXJ5bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0osRUFBQzs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQixVQUFRO0VBQUMsV0FBUyxFQW9CckI7O0FBdEJEO0lBS1EsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUVsQixtQkFBa0IsRUFhckI7O0FBckJMO01BWVksaUJBQWdCLEVBUW5COztBQXBCVDtRQWVnQixXQUFTLEVBSVo7O0FBbkJiO1VBaUJnQixlQUFhLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1ZXJ5bGlzdC9xdWVyeWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46MDtwYWRkaW5nOjA7XG5cbiAgICBsaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgLy8gcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBjb2xvcjojMDBBOEZGO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/querylist/querylist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/querylist/querylist.component.ts ***!
  \*************************************************************/
/*! exports provided: QuerylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerylistComponent", function() { return QuerylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuerylistComponent = /** @class */ (function () {
    function QuerylistComponent(queryService) {
        this.queryService = queryService;
        this.displayedColumns = ['query_title', 'query_content', 'query_type', 'query_createdby'];
    }
    QuerylistComponent.prototype.ngOnInit = function () {
        this.fetchQueries();
    };
    QuerylistComponent.prototype.fetchQueries = function () {
        var _this = this;
        this.queryService
            .getQueries()
            .subscribe(function (data) {
            _this.queries = data;
            console.log('Data requested ...');
            console.log(_this.queries);
        });
    };
    QuerylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-querylist',
            template: __webpack_require__(/*! ./querylist.component.html */ "./src/app/components/querylist/querylist.component.html"),
            styles: [__webpack_require__(/*! ./querylist.component.scss */ "./src/app/components/querylist/querylist.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"]])
    ], QuerylistComponent);
    return QuerylistComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-registration-container\">\n  <h2>Register</h2>\n  <mat-card-content>\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"registerForm.valid && onSubmit(registerForm)\" class=\"my-form\">\n      <div>\n        <mat-form-field class=\"full-width\">\n          <mat-label>First Name</mat-label>\n          <input matInput #first_name=\"ngModel\" [(ngModel)]=\"userService.selectedUser.first_name\" name=\"first_name\"\n            placeholder=\"First Name\" required [ngClass]=\"{'invalid-textbox' :registerForm.submitted && !first_name.valid }\">\n          <div *ngIf=\"registerForm.submitted && !first_name.valid\">\n            <mat-error class=\"validation-message\">This field is required</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"full-width\">\n          <mat-label>Last Name</mat-label>\n          <input matInput #last_name=\"ngModel\" [(ngModel)]=\"userService.selectedUser.last_name\" name=\"last_name\"\n            placeholder=\"Last Name\" required [ngClass]=\"{'invalid-textbox' :registerForm.submitted && !last_name.valid }\">\n          <div *ngIf=\"registerForm.submitted && !last_name.valid\">\n            <mat-error class=\"validation-message\">This field is required</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"full-width\">\n          <mat-label>Email</mat-label>\n          <input matInput type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\"\n            placeholder=\"Email\" required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :registerForm.submitted && !email.valid }\">\n          <div *ngIf=\"registerForm.submitted && email.errors\">\n            <mat-error *ngIf=\"email?.errors.required\" class=\"validation-message\">This field is required.</mat-error>\n            <mat-error *ngIf=\"email?.errors.pattern\" class=\"validation-message\">Invalid email address.</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"full-width\">\n          <mat-label>Password</mat-label>\n          <input matInput type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\"\n            placeholder=\"Password\" minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :registerForm.submitted && !password.valid }\">\n          <div *ngIf=\"registerForm.submitted && password.errors\">\n            <mat-error *ngIf=\"password?.errors.required\" class=\"validation-message\">This field is required.</mat-error>\n            <mat-error *ngIf=\"password?.errors.minlength\" class=\"validation-message\">Enter at least 6 characters.</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <button mat-raised-button routerLink=\"/login\">BACK</button>\n      <button mat-raised-button type=\"submit\">REGISTER</button>\n    </form>\n  </mat-card-content>\n</div>\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSuccessMessage\">\n  Registration Successful. Please check your email for the activation link!\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessage\">\n  {{serverErrorMessage}}\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field.mat-form-field {\n  font-size: 16px;\n  color: #1a3741; }\n\n.my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.full-width {\n  width: 90%;\n  margin: auto 5% auto 5%; }\n\n.user-registration-container {\n  background-color: #f3D410;\n  border-radius: 10px;\n  width: 40%;\n  position: absolute;\n  top: 20%;\n  left: 30%; }\n\nbutton {\n  background-color: #1a3741;\n  color: #f3D410;\n  width: 20%;\n  margin: 1em auto 2em 19%; }\n\nh2 {\n  margin: 1em 37% 0.5em 37%;\n  font-weight: bold; }\n\nmat-label {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUNEO0VBQ0UsV0FBVTtFQUNWLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN2QixvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUyxFQUNaOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxXQUFVO0VBQ1YseUJBQXdCLEVBQ3pCOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxYTM3NDE7XG59XG5cbi5teS1mb3Jte1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvIDUlIGF1dG8gNSU7XG59XG5cbi51c2VyLXJlZ2lzdHJhdGlvbi1jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM0Q0MTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAzMCU7XG59IFxuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEzNzQxO1xuICBjb2xvcjogI2YzRDQxMDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAxZW0gYXV0byAyZW0gMTklO1xufVxuaDJ7XG4gIG1hcmdpbjogMWVtIDM3JSAwLjVlbSAzNyU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxubWF0LWxhYmVse1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService) {
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.userService = userService;
    }
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessage = err.error.join('<br/>');
            }
            else {
                _this.serverErrorMessage = 'Error occured while submitting the form';
            }
        });
    };
    RegisterComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessage = '';
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/remove-slide-dialog/remove-slide-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <p>This course needs at least one slide. </p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">OK</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/remove-slide-dialog/remove-slide-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVtb3ZlLXNsaWRlLWRpYWxvZy9yZW1vdmUtc2xpZGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/remove-slide-dialog/remove-slide-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RemoveSlideDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSlideDialogComponent", function() { return RemoveSlideDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveSlideDialogComponent = /** @class */ (function () {
    function RemoveSlideDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    RemoveSlideDialogComponent.prototype.ngOnInit = function () {
    };
    RemoveSlideDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RemoveSlideDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-slide-dialog',
            template: __webpack_require__(/*! ./remove-slide-dialog.component.html */ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.html"),
            styles: [__webpack_require__(/*! ./remove-slide-dialog.component.scss */ "./src/app/components/remove-slide-dialog/remove-slide-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], RemoveSlideDialogComponent);
    return RemoveSlideDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"formContent\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/view-course/view-course.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/view-course/view-course.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- <h1>Welcome to the course {{course.course_title}}</h1><br>\n -->\n\n<h1>Welcome to the course {{course_title}}</h1><br>\n<!-- <h2>{{course.course_description}}</h2> -->\n<h2>{{course_description}}</h2>\n\n<button mat-button (click)=\"update()\">back</button>\n\n<div class={{type}} >\n  <div class=\"title\">{{course[current_page].title}}</div><br>\n  <div *ngIf=\"textflag\" class={{textarea}} id='text_area'>\n      <li *ngFor=\"let  textcontent of course[current_page].text\">{{textcontent}}{{current_page}}</li>\n  </div>\n  <br>\n  <br>\n  <!-- <div style=\"height:'400px';width:'450px'\" > -->\n  <div id=\"image\" *ngIf=\"imageflag\">\n    <img [src]=course[current_page].image>\n  </div>\n  <div id=\"video\" *ngIf=\"videoflag\">\n      <iframe [src]=\"getEmbedURL(course[current_page].video)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <!-- </div>\n    <button mat-button [disabled]=\"isprevDisabled\" class=\"prev\" (click)=\"dec_page(current_page)\"><</button>\n<button mat-button [disabled]=\"isnextDisabled\" class=\"next\" (click)=\"inc_page(current_page)\">></button> -->\n\n</div>\n  </div>\n  <!-- </div> -->\n  <div class = \"flex\">\n  <button mat-button [disabled]=\"isprevDisabled\" class=\"flex-item\" (click)=\"dec_page(current_page)\">previous</button>\n  <button mat-button [disabled]=\"isnextDisabled\" class=\"flex-item\" (click)=\"inc_page(current_page)\">next</button>\n</div>\n<!-- <div *ngFor=\"let cor of course\">\n  <div> <iframe width=\"560\" height=\"315\" [src]=\"getEmbedURL(cor.video)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/view-course/view-course.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/view-course/view-course.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: aqua; }\n\n.title {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 40px;\n  margin-left: 14px;\n  margin-top: 10px; }\n\n.all, .two, .one {\n  max-width: 1000px;\n  height: 500px;\n  background: white;\n  position: relative;\n  margin: auto; }\n\n#text_area {\n  font-size: 20px;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; }\n\nli {\n  margin-right: 10px;\n  padding: 5px;\n  margin-left: 35px; }\n\n.all .textarea {\n  background: pink;\n  width: 97%;\n  height: 48%; }\n\n.all img {\n  width: 47%;\n  height: 50%;\n  float: left;\n  margin-right: 2%;\n  margin-left: 2%; }\n\n.all iframe {\n  width: 47%;\n  height: 100%;\n  float: left;\n  margin-right: 2%; }\n\n.all #video {\n  height: 59%; }\n\n.two .textarea {\n  width: 97%;\n  height: 35%;\n  margin-left: 2%;\n  margin-bottom: 2%; }\n\n.two img {\n  width: 100%;\n  height: 100%; }\n\n.two #image {\n  height: 47%;\n  margin-bottom: 2%;\n  width: 97%;\n  margin-left: 2%; }\n\n.two iframe {\n  width: 97%;\n  height: 47%;\n  margin-left: 13px; }\n\n.one .textarea {\n  width: 97%;\n  height: 85%;\n  margin-left: 13px; }\n\n.one img {\n  width: 97%;\n  height: 85%;\n  margin-left: 13px; }\n\n.one iframe {\n  width: 97%;\n  height: 85%;\n  margin-left: 13px; }\n\n.flex {\n  display: flex;\n  justify-content: center; }\n\n.flex-item + .flex-item {\n  margin-left: 10px; }\n\n.button {\n  margin-top: 15px;\n  background-color: #0066FF;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1pdGphbmF3bGVrYXIvRGVza3RvcC9XZWJEZXNpZ25fQXNzaWdubWVudHMvZmluYWwtcHJvamVjdC1waXhlbHMvR2V0VHJhaW5lZC9zcmMvYXBwL2NvbXBvbmVudHMvdmlldy1jb3Vyc2Uvdmlldy1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSx5Q0FBd0M7RUFDeEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWUsRUFFbEI7O0FBR0Q7RUFLSSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWSxFQUNmOztBQUdEO0VBRUksZ0JBQWU7RUFDZix1SEFDSixFQUFDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFHUSxpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLFlBQVcsRUFDZDs7QUFOTDtFQVFRLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLGlCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBYkw7RUFlUSxXQUFVO0VBQ1YsYUFBWTtFQUNaLFlBQVc7RUFDWCxpQkFBZSxFQUNsQjs7QUFuQkw7RUFxQlEsWUFBVyxFQUNkOztBQUVMO0VBR1EsV0FBVTtFQUNWLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFQTDtFQVdRLFlBQVc7RUFDWCxhQUFZLEVBRWY7O0FBZEw7RUFnQlEsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsZ0JBQWUsRUFDbEI7O0FBcEJMO0VBc0JRLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCLEVBQ3BCOztBQUVMO0VBRVEsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUIsRUFDcEI7O0FBTEw7RUFPUSxXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQixFQUNwQjs7QUFWTDtFQVlRLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCLEVBQ3BCOztBQTRCTDtFQUNJLGNBQWE7RUFDYix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctY291cnNlL3ZpZXctY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kOiBhcXVhO1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIC8vIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cblxuLmFsbCwgLnR3bywgLm9uZXtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAvLyB3aWR0aDogODUwcHg7XG4gICAgLy8gaGVpZ2h0OiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cblxuI3RleHRfYXJlYXtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcbn1cblxubGl7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLmFsbHtcbiAgIFxuICAgIC50ZXh0YXJlYXtcbiAgICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgaGVpZ2h0OiA0OCU7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgfVxuICAgIGlmcmFtZXtcbiAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIH1cbiAgICAjdmlkZW97XG4gICAgICAgIGhlaWdodDogNTklO1xuICAgIH1cbn1cbi50d297XG5cbiAgICAudGV4dGFyZWF7XG4gICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgIGhlaWdodDogMzUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIC8vIHdpZHRoOiA5NyU7XG4gICAgICAgIC8vIGhlaWdodDogNDglO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMiU7XG4gICAgfVxuICAgICNpbWFnZXtcbiAgICAgICAgaGVpZ2h0OiA0NyU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgfVxuICAgIGlmcmFtZXtcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgaGVpZ2h0OiA0NyU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIH1cbn1cbi5vbmV7XG4gICAgLnRleHRhcmVhe1xuICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIH1cbiAgICBpZnJhbWV7XG4gICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgIGhlaWdodDogODUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICB9XG59XG5cbi8vIC5wcmV2OmhvdmVyLCAubmV4dDpob3ZlciB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuLy8gICB9XG5cbi8vICAgLnByZXYsIC5uZXh0IHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogNTAlO1xuLy8gICAgIHdpZHRoOiBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IC0yMnB4O1xuLy8gICAgIHBhZGRpbmc6IDE2cHg7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4vLyAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4vLyAgIC5uZXh0IHtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbi8vICAgfVxuXG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZmxleC1pdGVtICsgLmZsZXgtaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZGRjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/view-course/view-course.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/view-course/view-course.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCourseComponent", function() { return ViewCourseComponent; });
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var js_video_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-video-url-parser */ "./node_modules/js-video-url-parser/dist/jsVideoUrlParser.js");
/* harmony import */ var js_video_url_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_video_url_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { UserService } from './../../services/user.service';



var ViewCourseComponent = /** @class */ (function () {
    function ViewCourseComponent(sanitizer, userService) {
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.course_title = 'course title';
        this.courseid = '5c09fcd8639e7b21f0067836';
        this.current_page = 0;
        this.progress = 0;
        this.course_description = 'course description';
        this.course = [
            {
                title: 'title1',
                text: ['text1', 'text2'],
                image: 'assets/img1.png',
                video: 'https://www.youtube.com/watch?v=L4QSwT8WhmM'
            },
            {
                title: 'title2',
                text: ['text3', 'text4', 'dwedfaefdwfdew', 'ewdwedwedwe', 'dewdqewdqewx', 'weqxeqw'],
                image: "assets/img1.png",
                video: ''
            },
            {
                title: 'title3',
                text: [],
                image: "assets/img3.png",
                video: "https://www.youtube.com/watch?v=PH_5lXxSpww"
            },
            {
                title: 'title4',
                text: ['text5', 'text6'],
                image: "",
                video: "https://youtube.com/playlist?feature=share&list=PL46F0A159EC02DF82"
            },
            {
                title: 'title5',
                text: [],
                image: "assets/img1.png",
                video: ''
            },
            {
                title: 'title6',
                text: ['text5', 'text6'],
                image: "",
                video: ""
            },
            {
                title: 'title7',
                text: [],
                image: "",
                video: "http://vimeopro.com/staff/frame/video/24069938"
            }
        ];
    }
    ViewCourseComponent.prototype.ngOnInit = function () {
        this.checkDisability();
        this.check_type(this.course[this.current_page]);
        // console.log(this.temp);
    };
    ViewCourseComponent.prototype.dispalyCourse = function (getCourse) {
        this.course = getCourse;
    };
    ViewCourseComponent.prototype.getEmbedURL = function (video) {
        if (video === '') {
            console.log(this.isVideo + 'I AM HERE');
            var obj2 = js_video_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.parse('http://vimeopro.com/staff/frame/video/24069938');
            this.temp = js_video_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.create({ videoInfo: obj2, format: 'embed' });
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.temp);
        }
        else {
            this.seeing = 'unhidden';
            var obj1 = js_video_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(video);
            this.temp = js_video_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.create({ videoInfo: obj1, format: 'embed' });
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.temp);
        }
    };
    ViewCourseComponent.prototype.dec_page = function (current_page) {
        current_page = current_page - 1;
        this.current_page = current_page;
        this.checkDisability();
        this.check_type(this.course[this.current_page]);
    };
    ViewCourseComponent.prototype.inc_page = function (current_page) {
        if (current_page === this.progress) {
            this.progress = this.progress + 1;
            this.checkDisability();
            console.log('hi');
        }
        current_page = current_page + 1;
        this.current_page = current_page;
        this.checkDisability();
        this.check_type(this.course[this.current_page]);
    };
    ViewCourseComponent.prototype.checkDisability = function () {
        if (this.current_page === 0) {
            this.isprevDisabled = true;
        }
        else {
            this.isprevDisabled = false;
        }
        if (this.current_page === this.course.length - 1) {
            this.isnextDisabled = true;
        }
        else {
            this.isnextDisabled = false;
        }
    };
    ViewCourseComponent.prototype.update = function () {
        this.req = {
            current_page: this.current_page,
            course_id: this.courseid,
            progress: this.progress,
            user_id: localStorage.getItem('id')
        };
        this.userService.updateUser(this.req).subscribe(function (data) {
            if (data.success) {
                console.log('success');
            }
            else {
                console.log('failure');
            }
        });
    };
    ViewCourseComponent.prototype.check_type = function (course) {
        console.log("i am inside");
        if (course.text.length === 0) {
            console.log('empty text');
            this.textflag = false;
        }
        else {
            console.log(course.text.length);
            this.textflag = true;
        }
        if (course.image === '') {
            console.log('empty');
            this.imageflag = false;
        }
        else {
            console.log(course.image);
            this.imageflag = true;
        }
        if (course.video === '') {
            console.log('empty video');
            console.log("i am here");
            this.videoflag = false;
        }
        else {
            console.log(course.video);
            this.videoflag = true;
        }
        this.assign_layout(this.textflag, this.imageflag, this.videoflag);
    };
    ViewCourseComponent.prototype.assign_layout = function (isText, isImage, isVideo) {
        console.log("assign");
        if (isText && isImage && isVideo) {
            console.log('all');
            this.type = 'all';
            console.log(this.type);
        }
        else if ((isText && isImage && !isVideo) || (isText && !isImage && isVideo) || (!isText && isImage && isVideo)) {
            this.type = 'two';
        }
        else {
            this.type = 'one';
        }
    };
    ViewCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-course',
            template: __webpack_require__(/*! ./view-course.component.html */ "./src/app/components/view-course/view-course.component.html"),
            styles: [__webpack_require__(/*! ./view-course.component.scss */ "./src/app/components/view-course/view-course.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], ViewCourseComponent);
    return ViewCourseComponent;
}());



/***/ }),

/***/ "./src/app/models/content.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/content.model.ts ***!
  \*****************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
var Content = /** @class */ (function () {
    function Content() {
    }
    return Content;
}());



/***/ }),

/***/ "./src/app/routes/routes.ts":
/*!**********************************!*\
  !*** ./src/app/routes/routes.ts ***!
  \**********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_create_course_area_create_course_area_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/create-course-area/create-course-area.component */ "./src/app/components/create-course-area/create-course-area.component.ts");
/* harmony import */ var _services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/prevent-access.service */ "./src/app/services/prevent-access.service.ts");
/* harmony import */ var _components_activate_activate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/activate/activate.component */ "./src/app/components/activate/activate.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_addquery_addquery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/addquery/addquery.component */ "./src/app/components/addquery/addquery.component.ts");
/* harmony import */ var _components_query_query_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/query/query.component */ "./src/app/components/query/query.component.ts");
/* harmony import */ var _components_querylist_querylist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/querylist/querylist.component */ "./src/app/components/querylist/querylist.component.ts");
/* harmony import */ var _components_listCategory_listCategory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/listCategory/listCategory.component */ "./src/app/components/listCategory/listCategory.component.ts");
/* harmony import */ var _components_createCategory_createCategory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/createCategory/createCategory.component */ "./src/app/components/createCategory/createCategory.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_course_create_course_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/course-create/course-create.component */ "./src/app/components/course-create/course-create.component.ts");
/* harmony import */ var _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/course-list/course-list.component */ "./src/app/components/course-list/course-list.component.ts");
/* harmony import */ var _components_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/view-course/view-course.component */ "./src/app/components/view-course/view-course.component.ts");


// import { ViewCourseComponent } from './../components/view-course/view-course.component';














var appRoutes = [
    {
        path: 'register', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        children: [{ path: '', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'home',
        component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'activate/:token', component: _components_activate_activate_component__WEBPACK_IMPORTED_MODULE_2__["ActivateComponent"]
    },
    {
        path: 'addquery',
        component: _components_addquery_addquery_component__WEBPACK_IMPORTED_MODULE_7__["AddqueryComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'queries',
        component: _components_querylist_querylist_component__WEBPACK_IMPORTED_MODULE_9__["QuerylistComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'query/:id',
        component: _components_query_query_component__WEBPACK_IMPORTED_MODULE_8__["QueryComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'createCategory',
        component: _components_createCategory_createCategory_component__WEBPACK_IMPORTED_MODULE_11__["CreateCategoryComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'categories',
        component: _components_listCategory_listCategory_component__WEBPACK_IMPORTED_MODULE_10__["ListCategoryComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
        pathMatch: 'full',
    },
    {
        path: 'dashboard/:id',
        component: _components_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_15__["ViewCourseComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'createCourseContent',
        component: _components_create_course_area_create_course_area_component__WEBPACK_IMPORTED_MODULE_0__["CreateCourseAreaComponent"]
    },
    {
        path: 'courses',
        component: _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_14__["CourseListComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    {
        path: 'createCourse',
        component: _components_course_create_course_create_component__WEBPACK_IMPORTED_MODULE_13__["CourseCreateComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    },
    // {
    //   path: 'course',
    //   component: ViewCourseComponent,
    //   pathMatch: 'full',
    //   canActivate: [PreventAccessService]
    // },
    {
        path: 'users',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        pathMatch: 'full',
        canActivate: [_services_prevent_access_service__WEBPACK_IMPORTED_MODULE_1__["PreventAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/categories");
    };
    CategoryService.prototype.addCategory = function (category_name) {
        var category = {
            category_name: category_name
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/categories", category);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/categories/" + id);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.selectedSlide = {
            title: '',
            content: [],
            image: '',
            video: ''
        };
        this.selectedCourse = {
            course_title: '',
            course_description: '',
            course_category: '',
            course_learners: [],
            course_created_date: '',
            course_modified_date: '',
            course_contents: [],
            course_status: '',
            course_created_by: ''
        };
    }
    CourseService.prototype.getEnrolledCourses = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/dashboard/" + id);
    };
    // setSelectedCourse(course: Course) {
    //   this.selectedCourse = course;
    // }
    // getSelectedCourse(): Course {
    //   return this.selectedCourse;
    // }
    CourseService.prototype.getCourses = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/courses/?userId=" + localStorage.getItem('id'));
    };
    CourseService.prototype.postCourse = function (course) {
        console.log(course);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/courses", course);
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/prevent-access.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/prevent-access.service.ts ***!
  \****************************************************/
/*! exports provided: PreventAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventAccessService", function() { return PreventAccessService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreventAccessService = /** @class */ (function () {
    function PreventAccessService(router) {
        this.router = router;
    }
    PreventAccessService.prototype.canActivate = function () {
        if (localStorage.getItem('id')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    PreventAccessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], PreventAccessService);
    return PreventAccessService;
}());



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Observable} from 'rxjs/Observable';
var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
        this.selectedQuery = {
            query_title: '',
            query_content: '',
            query_type: '',
            query_createdby: ''
        };
    }
    // query_id: String, query_title: String, query_content: String, query_createdby: String, query_type: String
    // createQuery(query: Query): Observable<Query>{
    //     return this.http.post<Query>(environment.apiBaseUrl, {
    //       'query_id': query_id,
    //       'query_title': query_title,
    //       'query_content': query_content,
    //       'query_createdby': query_createdby,
    //       'query_type': query_type
    //     });
    // }
    // postQuery(query: Query) {
    //   return this.http.post(`${environment.apiBaseUrl}/queries`, query);
    // }
    QueryService.prototype.postQuery = function (req) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/queries", req);
    };
    QueryService.prototype.getQueries = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/queries");
        // return this.http.get(environment.apiBaseUrl + '/queries');
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QueryService);
    return QueryService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
    }
    UserService.prototype.postUser = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/register', user);
    };
    UserService.prototype.activate = function (token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/activate/' + token, token);
    };
    UserService.prototype.loginUser = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/login', { 'email': user.email, 'password': user.password });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/users");
    };
    UserService.prototype.updateUser = function (req) {
        console.log("user.service");
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/updateprogress', req);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
    production: false,
    apiBaseUrl: 'http://localhost:3003'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sumitjanawlekar/Desktop/WebDesign_Assignments/final-project-pixels/GetTrained/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/sumitjanawlekar/Desktop/WebDesign_Assignments/final-project-pixels/GetTrained/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map