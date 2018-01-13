webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(route) {
        this.route = route;
        this._isLoggedIn = false;
        this._userPartyId = '';
    }
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        set: function (newValue) {
            this._isLoggedIn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "userPartyId", {
        get: function () {
            return this._userPartyId;
        },
        set: function (newValue) {
            this._userPartyId = newValue;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isLogin = function () {
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(255),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClient__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = (function () {
    function UserService(http, app, _router) {
        this.http = http;
        this.app = app;
        this.router = _router;
    }
    UserService.prototype.login = function (login) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'oauth/token', login)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        this.app.isLoggedIn = false;
        this.setAccessToken('');
        this.setUserName('');
        this.setRoleId('');
        this.router.navigateByUrl('/');
    };
    UserService.prototype.register = function (register) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'register', register)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //   logout(): Observable<any> {
    //     return this.http.post(environment.apiRoute + this.userUrl + 'logout', {});
    //   }
    UserService.prototype.setAccessToken = function (token) {
        this.http.setAccessToken(token);
    };
    UserService.prototype.setUserName = function (username) {
        this.http.setUserName(username);
    };
    UserService.prototype.setRoleId = function (id) {
        this.http.setRoleId(id);
    };
    UserService.prototype.getUserInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'user')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserInfoByID = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'user/' + id)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        return Promise.reject(error.json());
    };
    UserService.prototype.sendToken = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'password/email', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.resetPassword = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'password/reset', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.addpropic = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */];
        headers.delete('content-type');
        headers.set('Authorization', localStorage.getItem('authToken'));
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'propic/add', data, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteCVfile = function (user_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'propic/' + user_id)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiRoute: 'http://45.76.166.130/',
    //apiRoute: 'http://localhost:8000/',
    uploadsRoute: 'http://'
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClient__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobService = (function () {
    function JobService(http) {
        this.http = http;
    }
    /**
     * Gets the list of all articles
     */
    JobService.prototype.getJobs = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs')
            .map(function (res) { return res.json().data; });
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/' + id)
            .map(function (res) { return res.json().data; });
    };
    JobService.prototype.getJobByUser = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/user/' + id)
            .map(function (res) { return res.json().data; });
    };
    JobService.prototype.add = function (job) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs', job)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    JobService.prototype.getJobsSortBy = function (sortby) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/sort-by/' + sortby)
            .map(function (res) { return res.json().data; });
    };
    JobService.prototype.searchJobs = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'search', data)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    JobService.prototype.handleError = function (error) {
        return Promise.reject(error.json());
    };
    JobService.prototype.update = function (job) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/update', job)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    JobService.prototype.addStatus = function (stats) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/addstatus', stats)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    JobService.prototype.updateStatus = function (stats) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/updatestatus', stats)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    JobService.prototype.getStatus = function (job_id, user_id) {
        if (job_id == 0) {
            job_id = '';
        }
        if (user_id == 0) {
            user_id = '';
        }
        var data = { "job_id": job_id, "user_id": user_id };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/getstatus/', data)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    JobService.prototype.getAllJobs = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'jobs/getjobs/all')
            .map(function (res) { return res.json().data; });
    };
    return JobService;
}());
JobService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object])
], JobService);

var _a;
//# sourceMappingURL=job.service.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = (function () {
    function UserInfo() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.role_id = '';
        this.propic_status = false;
        this.updated_at = '';
    }
    return UserInfo;
}());

//# sourceMappingURL=user.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClient = (function (_super) {
    __extends(HttpClient, _super);
    function HttpClient(backend, options) {
        return _super.call(this, backend, options) || this;
    }
    HttpClient.prototype.setAccessToken = function (token) {
        localStorage.setItem('authToken', token);
    };
    HttpClient.prototype.setUserName = function (username) {
        localStorage.setItem('username', username);
    };
    HttpClient.prototype.setRoleId = function (id) {
        localStorage.setItem('role_id', id);
    };
    HttpClient.prototype.deleteWithBody = function (url, data) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            body: data,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Delete
        });
        return this.delete(url, options);
    };
    HttpClient.prototype.objectToRequestOptions = function (data) {
        var urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        for (var property in data) {
            if (data.hasOwnProperty(property)) {
                urlParams.set(property, data[property]);
            }
        }
        return urlParams;
    };
    return HttpClient;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]));
HttpClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]) === "function" && _b || Object])
], HttpClient);

var _a, _b;
//# sourceMappingURL=HttpClient.js.map

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomJavascriptService; });
var CustomJavascriptService = (function () {
    function CustomJavascriptService() {
    }
    CustomJavascriptService.prototype.appendToBody = function (src) {
        var existing = document.getElementById(src);
        if (existing != null) {
            return;
        }
        var element = document.createElement('script');
        element.setAttribute('type', 'text/javascript');
        element.setAttribute('src', src);
        element.setAttribute('id', src);
        document.body.appendChild(element);
    };
    CustomJavascriptService.prototype.removeFromBody = function (src) {
        var element = document.getElementById(src);
        element.parentNode.removeChild(element);
    };
    return CustomJavascriptService;
}());

//# sourceMappingURL=custom-javascript.service.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClient__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CVservice; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CVservice = (function () {
    function CVservice(http, app, _router) {
        this.http = http;
        this.app = app;
        this.router = _router;
    }
    CVservice.prototype.getCV = function (user_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/' + user_id)
            .map(function (res) { return res.json().data; });
    };
    CVservice.prototype.addCVfile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */];
        headers.delete('content-type');
        headers.set('Authorization', localStorage.getItem('authToken'));
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/addfile', data, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CVservice.prototype.deleteCVfile = function (user_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/file/' + user_id)
            .map(function (res) { return res.json(); });
    };
    CVservice.prototype.addCV = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/add', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CVservice.prototype.deleteCV = function (user_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/' + user_id)
            .map(function (res) { return res.json(); });
    };
    CVservice.prototype.updateCV = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/update', data)
            .map(function (res) { return res.json(); });
    };
    CVservice.prototype.searchCV = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiRoute + 'cv/search', data)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CVservice.prototype.handleError = function (error) {
        return Promise.reject(error.json());
    };
    return CVservice;
}());
CVservice = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CVservice);

var _a, _b, _c;
//# sourceMappingURL=cv.service.js.map

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CV; });
var CV = (function () {
    function CV() {
        this.id = 0;
        this.user_id = 0;
        this.professional_title = '';
        this.address = '';
        this.skills = '';
        this.wish = '';
        this.cv_link = '';
        this.status = '';
    }
    return CV;
}());

//# sourceMappingURL=cv.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
var Search = (function () {
    function Search() {
        this.type = 'search';
        this.keyword = '';
        this.location = '';
    }
    return Search;
}());

//# sourceMappingURL=search.js.map

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClient__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = (function () {
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.send = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'sendmail', data)
            .map(function (res) { return res.json().data; });
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
var Mail = (function () {
    function Mail() {
        this.name = '';
        this.byemail = '';
        this.toemail = '';
        this.message = '';
    }
    return Mail;
}());

//# sourceMappingURL=mail.js.map

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClient__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    /**
     * Gets the list of all articles
     */
    CategoryService.prototype.getCategories = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'categories')
            .map(function (res) { return res.json().data; });
    };
    CategoryService.prototype.getCategory = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'categories/' + id)
            .map(function (res) { return res.json().data; });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var Job = (function () {
    function Job() {
        this.id = '';
        this.title = '';
        this.description = '';
        this.category_id = 0;
        this.company_name = '';
        this.company_website = '';
        this.company_email = '';
        this.company_phone = '';
        this.company_logo = '';
        this.company_facebook = '';
        this.company_video = '';
        this.keywords = '';
        this.type = '';
        this.requirements = '';
        this.updated_at = '';
        this.user_id = 0;
        this.finish = '';
        this.created_at = '';
        this.city = '';
        this.district = '';
        this.country = 'Nepal';
        this.zone = '';
        this.filled = false;
        this.applicant_count = 0;
    }
    return Job;
}());

//# sourceMappingURL=job.js.map

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 121;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(9);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_job__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddJobComponent = (function () {
    function AddJobComponent(app, route, _router, jobService, userService) {
        this.app = app;
        this.route = route;
        this.jobService = jobService;
        this.userService = userService;
        this.job = new __WEBPACK_IMPORTED_MODULE_3__job_job__["a" /* Job */]();
        this.router = _router;
    }
    AddJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
        this.route.params.subscribe(function (params) {
            _this.todo = (params['todo']);
        });
        if (this.todo != 'add') {
            this.getJob();
        }
    };
    AddJobComponent.prototype.getJob = function () {
        var _this = this;
        this.jobService.getJob(this.todo).subscribe(function (data) {
            _this.job = data;
        });
    };
    AddJobComponent.prototype.update = function () {
        var _this = this;
        this.jobService.update(this.job).subscribe(function (data) {
            _this.success = data.message;
            _this.router.navigateByUrl('/manage-jobs');
        }, function (error) { return _this.handleError(error); });
    };
    AddJobComponent.prototype.add = function () {
        var _this = this;
        this.job.user_id = this.userInfo.id;
        this.jobService.add(this.job).subscribe(function (data) {
            _this.success = data.message;
            confirm(data.message);
            _this.router.navigateByUrl('/manage-jobs');
        }, function (error) { return _this.handleError(error); });
    };
    AddJobComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            _this.job.company_name = data.name;
            _this.job.company_email = data.email;
        });
    };
    AddJobComponent.prototype.handleError = function (error) {
        this.joberror = null;
        this.error = '';
        if (error.title || error.description || error.category_id || error.company_name || error.company_email || error.company_phone || error.keywords || error.type || error.requirements || error.user_id || error.finish || error.city || error.country) {
            confirm('Please fill all the required fields.');
            this.joberror = error;
        }
        else {
            this.error = error;
            confirm(error.message);
        }
    };
    return AddJobComponent;
}());
AddJobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-job',
        template: __webpack_require__(252),
        styles: [__webpack_require__(214)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__job_job_service__["a" /* JobService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _e || Object])
], AddJobComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-job.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cv_cv__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cv_cv_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddResumeComponent = (function () {
    function AddResumeComponent(app, _router, cvService, userService, elem) {
        this.app = app;
        this.cvService = cvService;
        this.userService = userService;
        this.elem = elem;
        this.cv = new __WEBPACK_IMPORTED_MODULE_1__cv_cv__["a" /* CV */]();
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserInfo */]();
        this.cverror = null;
        this.router = _router;
    }
    AddResumeComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
    };
    AddResumeComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 2) {
                if (confirm("Employer not allowed. Create a new account as an employee")) {
                    _this.router.navigateByUrl('/manage-jobs');
                }
            }
        });
    };
    AddResumeComponent.prototype.add = function () {
        var _this = this;
        this.cv.user_id = this.userInfo.id;
        this.cv.cv_link = this.returnedcvfilename;
        this.cvService.addCV(this.cv).subscribe(function (data) {
            confirm(data.message);
            _this.router.navigateByUrl('/manage-resume');
        }, function (error) { return _this.handleError(error); });
    };
    AddResumeComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.cverror = null;
        this.error = '';
        this.success = '';
        this.cvfileerror = '';
        var files = this.elem.nativeElement.querySelector('#cvfileinput').files;
        var formData = new FormData();
        var file = files[0];
        this.cvfilename = file.name;
        formData.append('cv_file', file, file.name);
        formData.append('user_id', (this.userInfo.id).toString());
        this.cvService.addCVfile(formData).subscribe(function (data) {
            if (data.success) {
                _this.success = data.success;
                _this.returnedcvfilename = data.filename;
            }
            else {
                _this.error = data.error;
            }
        }, function (error) { return _this.handleError(error); });
    };
    AddResumeComponent.prototype.handleError = function (error) {
        this.cverror = null;
        if (error.cv_file) {
            this.cvfileerror = error.cv_file[0];
        }
        else {
            this.cverror = error;
            if (error.user_id) {
                if (confirm("CV already exists. Go to update or delete sections for the changes.")) {
                    this.router.navigateByUrl('/manage-resume');
                }
            }
        }
    };
    return AddResumeComponent;
}());
AddResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-resume',
        template: __webpack_require__(253),
        styles: [__webpack_require__(215)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__cv_cv_service__["a" /* CVservice */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cv_cv_service__["a" /* CVservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cv_cv_service__["a" /* CVservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object])
], AddResumeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-resume.component.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminpanelComponent = (function () {
    function AdminpanelComponent(app, _router, jobService, userService) {
        this.app = app;
        this.jobService = jobService;
        this.userService = userService;
        this.sliceStart = 0;
        this.sliceEnd = 10;
        this.router = _router;
    }
    AdminpanelComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
    };
    AdminpanelComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id != 3) {
                if (confirm("You need to be an Admin :-).")) {
                    _this.router.navigateByUrl('/login');
                }
            }
            _this.getAllJobs();
        });
    };
    AdminpanelComponent.prototype.getAllJobs = function () {
        var _this = this;
        this.jobService.getAllJobs().subscribe(function (data) {
            _this.jobs = data;
            _this.count = data.length;
            _this.page = Math.ceil(_this.count / 10);
            _this.numOfPages = new Array(_this.page);
        });
    };
    AdminpanelComponent.prototype.changePage = function (i) {
        this.sliceStart = i * 10;
        this.sliceEnd = this.sliceStart + 10;
        for (var x = 0; x <= this.page; x++) {
            if (i == x) {
                document.getElementById('pagination' + i).className += " current-page";
            }
            else {
                document.getElementById('pagination' + x).classList.remove("current-page");
            }
        }
    };
    AdminpanelComponent.prototype.markFilled = function (id) {
        var _this = this;
        for (var i = 0; i <= this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs[i].filled = true;
                this.jobService.update(this.jobs[i]).subscribe(function (data) {
                    _this.success = data.message;
                    _this.getAllJobs();
                }, function (error) { return _this.handleError(error); });
            }
        }
    };
    AdminpanelComponent.prototype.markNotFilled = function (id) {
        var _this = this;
        for (var i = 0; i <= this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs[i].filled = false;
                this.jobService.update(this.jobs[i]).subscribe(function (data) {
                    _this.success = data.message;
                    _this.getAllJobs();
                }, function (error) { return _this.handleError(error); });
            }
        }
    };
    AdminpanelComponent.prototype.markAllow = function (id) {
        var _this = this;
        for (var i = 0; i <= this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs[i].status = true;
                this.jobService.update(this.jobs[i]).subscribe(function (data) {
                    _this.success = data.message;
                    _this.getAllJobs();
                }, function (error) { return _this.handleError(error); });
            }
        }
    };
    AdminpanelComponent.prototype.markBan = function (id) {
        var _this = this;
        for (var i = 0; i <= this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs[i].status = false;
                this.jobService.update(this.jobs[i]).subscribe(function (data) {
                    _this.success = data.message;
                    _this.getAllJobs();
                }, function (error) { return _this.handleError(error); });
            }
        }
    };
    AdminpanelComponent.prototype.handleError = function (error) {
        this.error = '';
        this.error = error;
    };
    return AdminpanelComponent;
}());
AdminpanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminpanel',
        template: __webpack_require__(254),
        styles: [__webpack_require__(216)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], AdminpanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=adminpanel.component.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpClient__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_limit_limitto__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_datediff_pipe__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__errorpage_errorpage_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_secondary_header_secondary_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_job_add_job_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__job_job_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__category_category_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__browse_categories_browse_categories_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__browse_jobs_browse_jobs_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_resume_add_resume_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__resume_page_resume_page_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__manage_resume_manage_resume_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__job_alerts_job_alerts_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__manage_jobs_manage_jobs_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__manage_applications_manage_applications_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__browse_resume_browse_resume_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_account_user_account_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__appliedjobs_appliedjobs_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__adminpanel_adminpanel_component__ = __webpack_require__(130);
/* unused harmony export httpClientFactory */
/* unused harmony export DefaultRequestOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































function httpClientFactory(backend, defaultOptions) {
    return new __WEBPACK_IMPORTED_MODULE_5__HttpClient__["a" /* HttpClient */](backend, defaultOptions);
}
var DefaultRequestOptions = (function (_super) {
    __extends(DefaultRequestOptions, _super);
    function DefaultRequestOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({});
        return _this;
    }
    DefaultRequestOptions.prototype.merge = function (options) {
        var newOptions = _super.prototype.merge.call(this, options);
        newOptions.headers.set('Authorization', localStorage.getItem('authToken'));
        //newOptions.headers.set('Accept', 'application/json');
        newOptions.headers.set('Content-Type', 'application/json');
        return newOptions;
    };
    return DefaultRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* BaseRequestOptions */]));
DefaultRequestOptions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DefaultRequestOptions);

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'job/:job-id', component: __WEBPACK_IMPORTED_MODULE_17__job_job_component__["a" /* JobComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */] },
    { path: 'add-job/:todo', component: __WEBPACK_IMPORTED_MODULE_16__add_job_add_job_component__["a" /* AddJobComponent */] },
    { path: 'browse-categories', component: __WEBPACK_IMPORTED_MODULE_19__browse_categories_browse_categories_component__["a" /* BrowseCategoriesComponent */] },
    { path: 'browse-jobs', component: __WEBPACK_IMPORTED_MODULE_20__browse_jobs_browse_jobs_component__["a" /* BrowseJobsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'add-resume', component: __WEBPACK_IMPORTED_MODULE_22__add_resume_add_resume_component__["a" /* AddResumeComponent */] },
    { path: 'resume-page/:user_id/:email', component: __WEBPACK_IMPORTED_MODULE_23__resume_page_resume_page_component__["a" /* ResumePageComponent */] },
    { path: 'manage-resume', component: __WEBPACK_IMPORTED_MODULE_24__manage_resume_manage_resume_component__["a" /* ManageResumeComponent */] },
    { path: 'job-alerts', component: __WEBPACK_IMPORTED_MODULE_25__job_alerts_job_alerts_component__["a" /* JobAlertsComponent */] },
    { path: 'manage-jobs', component: __WEBPACK_IMPORTED_MODULE_26__manage_jobs_manage_jobs_component__["a" /* ManageJobsComponent */] },
    { path: 'manage-application/:job-id', component: __WEBPACK_IMPORTED_MODULE_27__manage_applications_manage_applications_component__["a" /* ManageApplicationsComponent */] },
    { path: 'browse-resume', component: __WEBPACK_IMPORTED_MODULE_28__browse_resume_browse_resume_component__["a" /* BrowseResumeComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_11__errorpage_errorpage_component__["a" /* ErrorpageComponent */] },
    { path: 'user-account', component: __WEBPACK_IMPORTED_MODULE_29__user_account_user_account_component__["a" /* UserAccountComponent */] },
    { path: 'appliedjobs', component: __WEBPACK_IMPORTED_MODULE_30__appliedjobs_appliedjobs_component__["a" /* AppliedjobsComponent */] },
    { path: 'adminpanel', component: __WEBPACK_IMPORTED_MODULE_31__adminpanel_adminpanel_component__["a" /* AdminpanelComponent */] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__errorpage_errorpage_component__["a" /* ErrorpageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_secondary_header_secondary_component__["a" /* HeaderSecondaryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__add_job_add_job_component__["a" /* AddJobComponent */],
            __WEBPACK_IMPORTED_MODULE_17__job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_18__category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__browse_categories_browse_categories_component__["a" /* BrowseCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_limit_limitto__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_20__browse_jobs_browse_jobs_component__["a" /* BrowseJobsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_22__add_resume_add_resume_component__["a" /* AddResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__resume_page_resume_page_component__["a" /* ResumePageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__manage_resume_manage_resume_component__["a" /* ManageResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__job_alerts_job_alerts_component__["a" /* JobAlertsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__manage_jobs_manage_jobs_component__["a" /* ManageJobsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__manage_applications_manage_applications_component__["a" /* ManageApplicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__browse_resume_browse_resume_component__["a" /* BrowseResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__["PdfViewerComponent"],
            __WEBPACK_IMPORTED_MODULE_29__user_account_user_account_component__["a" /* UserAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_30__appliedjobs_appliedjobs_component__["a" /* AppliedjobsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__adminpanel_adminpanel_component__["a" /* AdminpanelComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_datediff_pipe__["a" /* DateDiff */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__HttpClient__["a" /* HttpClient */],
                useFactory: httpClientFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]]
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */],
                useClass: DefaultRequestOptions
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedjobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppliedjobsComponent = (function () {
    function AppliedjobsComponent(app, route, router, jobService, userService) {
        this.app = app;
        this.route = route;
        this.router = router;
        this.jobService = jobService;
        this.userService = userService;
        this.applied = '';
        this.success = '';
        this.error = '';
        this.sliceStart = 0;
        this.sliceEnd = 4;
        this.count = 0;
    }
    AppliedjobsComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
    };
    AppliedjobsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            _this.getUserJobs();
        });
    };
    AppliedjobsComponent.prototype.getUserJobs = function () {
        var _this = this;
        this.jobService.getStatus(0, this.userInfo.id).subscribe(function (data) {
            _this.jobs = data;
            _this.count = data.length;
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
        }, function (error) {
            _this.applied = error.data.status;
        });
    };
    AppliedjobsComponent.prototype.changePage = function (i) {
        this.sliceStart = i * 4;
        this.sliceEnd = this.sliceStart + 4;
        for (var x = 0; x <= this.page; x++) {
            if (i == x) {
                document.getElementById('pagination' + i).className += " current-page";
            }
            else {
                document.getElementById('pagination' + x).classList.remove("current-page");
            }
        }
    };
    return AppliedjobsComponent;
}());
AppliedjobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-appliedjobs',
        template: __webpack_require__(256),
        styles: [__webpack_require__(218)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__job_job_service__["a" /* JobService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _e || Object])
], AppliedjobsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=appliedjobs.component.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseCategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowseCategoriesComponent = (function () {
    function BrowseCategoriesComponent(_router, route) {
        this.route = route;
        this.router = _router;
    }
    BrowseCategoriesComponent.prototype.ngOnInit = function () {
    };
    BrowseCategoriesComponent.prototype.searchJobs = function (keyword) {
        localStorage.setItem('type', 'search');
        localStorage.setItem('keyword', keyword);
        this.router.navigateByUrl('/browse-jobs');
    };
    return BrowseCategoriesComponent;
}());
BrowseCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse-categories',
        template: __webpack_require__(257),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], BrowseCategoriesComponent);

var _a, _b;
//# sourceMappingURL=browse-categories.component.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BrowseJobsComponent = (function () {
    function BrowseJobsComponent(app, _router, route, jobService, categoryService, userService) {
        this.app = app;
        this.route = route;
        this.jobService = jobService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.count = 0;
        this.search = new __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* Search */];
        this.sliceStart = 0;
        this.sliceEnd = 4;
        this.router = _router;
    }
    BrowseJobsComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == true) {
            this.getUserInfo();
        }
        this.type = localStorage.getItem('type');
        if (this.type == '') {
            this.type = 'alljobs';
        }
        if (this.type == 'category') {
            this.catid = localStorage.getItem('catid');
            this.getJobsByCategory();
        }
        else if (this.type == 'alljobs') {
            this.getJobs(1);
        }
        else if (this.type == 'search') {
            this.search.keyword = localStorage.getItem('keyword');
            this.search.location = localStorage.getItem('location');
            this.searchJobs();
        }
        localStorage.setItem('type', '');
        localStorage.setItem('keyword', '');
        localStorage.setItem('location', '');
        localStorage.setItem('catid', '');
    };
    BrowseJobsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 2) {
                if (confirm("Employer not allowed. Create a new account as an employee.")) {
                    _this.router.navigateByUrl('/manage-jobs');
                }
            }
        });
    };
    BrowseJobsComponent.prototype.getJobsByCategory = function () {
        var _this = this;
        this.categoryService.getCategory(this.catid).subscribe(function (data) {
            _this.jobs = data.jobs.data;
            _this.count = data.jobs.data.length;
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
            _this.categorytype = data.name;
        });
    };
    BrowseJobsComponent.prototype.getJobs = function (pn) {
        var _this = this;
        this.jobService.getJobs().subscribe(function (data) {
            _this.jobs = data;
            _this.count = data.length;
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
        });
    };
    BrowseJobsComponent.prototype.searchJobs = function () {
        var _this = this;
        this.jobs = null;
        this.count = 0;
        this.jobService.searchJobs(this.search).subscribe(function (data) {
            _this.jobs = data;
            _this.count = data.length;
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
        });
    };
    BrowseJobsComponent.prototype.changePage = function (i) {
        this.sliceStart = i * 4;
        this.sliceEnd = this.sliceStart + 4;
        for (var x = 0; x <= this.page; x++) {
            if (i == x) {
                document.getElementById('pagination' + i).className += " current-page";
            }
            else {
                document.getElementById('pagination' + x).classList.remove("current-page");
            }
        }
    };
    return BrowseJobsComponent;
}());
BrowseJobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse-jobs',
        template: __webpack_require__(258),
        styles: [__webpack_require__(220)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_4__category_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_6__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__category_category_service__["a" /* CategoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_user_service__["a" /* UserService */]) === "function" && _f || Object])
], BrowseJobsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=browse-jobs.component.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_mail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_mail_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cv_cv_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BrowseResumeComponent = (function () {
    function BrowseResumeComponent(app, _router, cvService, userService, mailservice) {
        this.app = app;
        this.cvService = cvService;
        this.userService = userService;
        this.mailservice = mailservice;
        this.mail = new __WEBPACK_IMPORTED_MODULE_1__mail_mail__["a" /* Mail */]();
        this.picture_link_start = '';
        this.picture_link_end = '';
        this.picture_error = '';
        this.count = 0;
        this.search = new __WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* Search */];
        this.sliceStart = 0;
        this.sliceEnd = 4;
        this.router = _router;
    }
    BrowseResumeComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
        this.searchCV();
        this.picture_error = 'error.png';
        this.picture_link_start = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/';
        this.picture_link_end = '_propic.png?' + new Date().getTime();
    };
    BrowseResumeComponent.prototype.updateLink = function () {
        this.picture_link_end = this.picture_error;
    };
    BrowseResumeComponent.prototype.searchCV = function () {
        var _this = this;
        this.cvs = null;
        this.count = 0;
        this.cvService.searchCV(this.search).subscribe(function (data) {
            _this.cvs = data;
            _this.count = data.length;
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
        });
    };
    BrowseResumeComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 1) {
                if (confirm("Employee not allowed. Create a new account as an employer.")) {
                    _this.router.navigateByUrl('/manage-resume');
                }
            }
        });
    };
    BrowseResumeComponent.prototype.sendMail = function () {
        var _this = this;
        this.success = null;
        this.error = null;
        this.mail.toemail = this.userInfo.email;
        this.mailservice.send(this.mail).subscribe(function (data) {
            _this.success = data.success;
            _this.error = data.error;
        });
    };
    return BrowseResumeComponent;
}());
BrowseResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse-resume',
        template: __webpack_require__(259),
        styles: [__webpack_require__(221)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__cv_cv_service__["a" /* CVservice */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__mail_mail_service__["a" /* MailService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cv_cv_service__["a" /* CVservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cv_cv_service__["a" /* CVservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__mail_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mail_mail_service__["a" /* MailService */]) === "function" && _e || Object])
], BrowseResumeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=browse-resume.component.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(260),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], CategoryComponent);

//# sourceMappingURL=category.component.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_mail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_mail_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_custom_javascript_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(route, jsService, mailservice) {
        this.route = route;
        this.jsService = jsService;
        this.mailservice = mailservice;
        this.mail = new __WEBPACK_IMPORTED_MODULE_2__mail_mail__["a" /* Mail */]();
    }
    ContactComponent.prototype.ngOnInit = function () {
        // this.jsService.appendToBody('./../../assets/scripts/jquery.gmaps.min.js');
        // this.jsService.appendToBody('./../../assets/scripts/maprun.js');
        // $('body').customMap();
    };
    ContactComponent.prototype.sendMail = function () {
        var _this = this;
        this.success = null;
        this.error = null;
        this.mail.toemail = "creative@hopnep.com";
        this.mailservice.send(this.mail).subscribe(function (data) {
            _this.success = data.success;
            _this.error = data.error;
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(261),
        styles: [__webpack_require__(223)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_4__custom_custom_javascript_service__["a" /* CustomJavascriptService */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__mail_mail_service__["a" /* MailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__custom_custom_javascript_service__["a" /* CustomJavascriptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__custom_custom_javascript_service__["a" /* CustomJavascriptService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__mail_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mail_mail_service__["a" /* MailService */]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageComponent = (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    return ErrorpageComponent;
}());
ErrorpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-errorpage',
        template: __webpack_require__(262),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], ErrorpageComponent);

//# sourceMappingURL=errorpage.component.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(263),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSecondaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderSecondaryComponent = (function () {
    function HeaderSecondaryComponent(_router, jsService, app, userService) {
        this.jsService = jsService;
        this.app = app;
        this.userService = userService;
        this.new_applicant = '';
        this.username = '';
        this.error = '';
        this.role_id = '';
        this.matching_jobs = '';
        this.picture_link = '';
        this.picture_error = '';
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserInfo */]();
        this.router = _router;
    }
    HeaderSecondaryComponent.prototype.ngOnInit = function () {
        //this.jsService.appendToBody('./../../assets/scripts/custom.js');
        $('body').customJquery();
        if (this.app.isLoggedIn == true) {
            this.getUserInfo();
        }
        this.picture_error = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/error.png';
        this.matching_jobs = localStorage.getItem('matching_jobs');
    };
    HeaderSecondaryComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderSecondaryComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.checkAll(data);
        });
    };
    HeaderSecondaryComponent.prototype.checkAll = function (data) {
        if (this.app.isLoggedIn == false) {
            if (localStorage.getItem('authToken') != '') {
                this.app.isLoggedIn = true;
                this.username = data.name;
                this.role_id = data.role_id;
                this.picture_link = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + data.id + '_propic.png?' + new Date().getTime();
            }
        }
        else {
            this.username = data.name;
            this.role_id = data.role_id;
            this.picture_link = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + data.id + '_propic.png?' + new Date().getTime();
        }
    };
    HeaderSecondaryComponent.prototype.updateLink = function () {
        this.picture_link = this.picture_error;
    };
    return HeaderSecondaryComponent;
}());
HeaderSecondaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header-secondary',
        template: __webpack_require__(264),
        styles: [__webpack_require__(226)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], HeaderSecondaryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header-secondary.component.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(jsService, userService, app) {
        this.jsService = jsService;
        this.userService = userService;
        this.app = app;
        this.new_applicant = '';
        this.role_id = '';
        this.error = '';
        this.matching_jobs = '';
        this.picture_link = '';
        this.picture_error = '';
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserInfo */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        //      this.jsService.appendToBody('./../../assets/scripts/custom.js');
        $('body').customJquery();
        if (this.app.isLoggedIn == true) {
            this.getUserInfo();
        }
        this.picture_error = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/error.png';
        this.matching_jobs = localStorage.getItem('matching_jobs');
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.checkAll(data);
        });
    };
    HeaderComponent.prototype.checkAll = function (data) {
        if (this.app.isLoggedIn == false) {
            if (localStorage.getItem('authToken') != '') {
                this.app.isLoggedIn = true;
                this.username = data.name;
                this.role_id = data.role_id;
                this.picture_link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + data.id + '_propic.png?' + new Date().getTime();
            }
        }
        else {
            this.username = data.name;
            this.role_id = data.role_id;
            this.picture_link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + data.id + '_propic.png?' + new Date().getTime();
        }
    };
    HeaderComponent.prototype.updateLink = function () {
        this.picture_link = this.picture_error;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(265),
        styles: [__webpack_require__(227)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(jobService, jsService, categoryService, _router) {
        this.jobService = jobService;
        this.jsService = jsService;
        this.categoryService = categoryService;
        this.error = '';
        this.search = new __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* Search */];
        this.router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getJobs();
        this.getCategories();
        this.getJobsSortBy();
    };
    HomeComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobService.getJobs().subscribe(function (data) {
            _this.jobs = data;
            _this.jobscount = _this.jobs.length;
            (function (error) { return _this.error = error.json().error; });
        });
    };
    HomeComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    HomeComponent.prototype.getJobsSortBy = function () {
        var _this = this;
        this.jobService.getJobsSortBy('finish').subscribe(function (data) {
            _this.endsoonjobs = data;
        });
    };
    HomeComponent.prototype.searchJobs = function () {
        localStorage.setItem('type', this.search.type);
        localStorage.setItem('keyword', this.search.keyword);
        localStorage.setItem('location', this.search.location);
        this.router.navigateByUrl('/browse-jobs');
    };
    HomeComponent.prototype.showByCategory = function (id) {
        localStorage.setItem('type', 'category');
        localStorage.setItem('catid', id);
        this.router.navigateByUrl('/browse-jobs');
    };
    HomeComponent.prototype.showAll = function () {
        localStorage.setItem('type', 'alljobs');
        this.router.navigateByUrl('/browse-jobs');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(266),
        styles: [__webpack_require__(228)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */]],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__job_job_service__["a" /* JobService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cv_cv__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cv_cv_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobAlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JobAlertsComponent = (function () {
    function JobAlertsComponent(app, jobService, _router, cvService, userService) {
        this.app = app;
        this.jobService = jobService;
        this.cvService = cvService;
        this.userService = userService;
        this.cv = new __WEBPACK_IMPORTED_MODULE_2__cv_cv__["a" /* CV */]();
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserInfo */]();
        this.error = "";
        this.search = new __WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* Search */];
        this.sliceStart = 0;
        this.sliceEnd = 4;
        this.router = _router;
    }
    JobAlertsComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
    };
    JobAlertsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 2) {
                if (confirm("Employer not allowed. Create a new account as an employee.")) {
                    _this.router.navigateByUrl('/manage-jobs');
                }
            }
            _this.getCV();
        });
    };
    JobAlertsComponent.prototype.getCV = function () {
        var _this = this;
        this.cvService.getCV(this.userInfo.id).subscribe(function (data) {
            if (data.status == 'not_found') {
                _this.error = "You have not added your CV. Go to Add Resume, to get alerts of jobs.";
                _this.cv = data;
            }
            else {
                _this.cv = data;
                _this.search.keyword = data.skills;
                _this.searchJobs();
            }
        });
    };
    JobAlertsComponent.prototype.searchJobs = function () {
        var _this = this;
        this.jobs = null;
        this.count = 0;
        this.jobService.searchJobs(this.search).subscribe(function (data) {
            _this.jobs = data;
            _this.count = data.length;
            localStorage.setItem('matching_jobs', data.length);
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
        }, function (error) {
            _this.error = "No alerts.";
        });
    };
    JobAlertsComponent.prototype.changePage = function (i) {
        this.sliceStart = i * 4;
        this.sliceEnd = this.sliceStart + 4;
        for (var x = 0; x <= this.page; x++) {
            if (i == x) {
                document.getElementById('pagination' + i).className += " current-page";
            }
            else {
                document.getElementById('pagination' + x).classList.remove("current-page");
            }
        }
    };
    return JobAlertsComponent;
}());
JobAlertsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-alerts',
        template: __webpack_require__(267),
        styles: [__webpack_require__(229)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__cv_cv_service__["a" /* CVservice */], __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__job_job_service__["a" /* JobService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__job_job_service__["a" /* JobService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__cv_cv_service__["a" /* CVservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cv_cv_service__["a" /* CVservice */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _e || Object])
], JobAlertsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job-alerts.component.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobstatus__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobComponent = (function () {
    function JobComponent(route, router, jobService, userService, app) {
        this.route = route;
        this.router = router;
        this.jobService = jobService;
        this.userService = userService;
        this.app = app;
        this.applied = '';
        this.success = '';
        this.error = '';
        this.jobstatus = new __WEBPACK_IMPORTED_MODULE_6__jobstatus__["a" /* JobStatus */]();
        this.job = new __WEBPACK_IMPORTED_MODULE_4__job__["a" /* Job */]();
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.job_id = (params['job-id']);
        });
        if (this.app.isLoggedIn == true) {
            this.getUserInfo();
        }
        this.getJob();
    };
    JobComponent.prototype.getJob = function () {
        var _this = this;
        this.jobService.getJob(this.job_id).subscribe(function (data) {
            _this.job = data;
        });
    };
    JobComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            _this.getStatus();
        });
    };
    JobComponent.prototype.addStatus = function () {
        var _this = this;
        this.success = '';
        this.error = '';
        this.jobstatus.job_id = this.job.id;
        this.jobstatus.user_id = this.userInfo.id;
        this.jobstatus.status = 'New';
        this.jobService.addStatus(this.jobstatus).subscribe(function (data) {
            _this.success = data.message;
            document.getElementById('applybutton').innerText = 'Applied';
        }, function (error) {
            _this.error = error.message;
        });
    };
    JobComponent.prototype.getStatus = function () {
        var _this = this;
        this.applied = '';
        this.jobService.getStatus(this.job_id, this.userInfo.id).subscribe(function (data) {
            _this.jobstatus = data;
        }, function (error) {
            _this.applied = error.data.status;
        });
    };
    return JobComponent;
}());
JobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job',
        template: __webpack_require__(268),
        styles: [__webpack_require__(230)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _e || Object])
], JobComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job.component.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStatus; });
var JobStatus = (function () {
    function JobStatus() {
        this.user_id = '';
        this.job_id = '';
        this.status = '';
    }
    return JobStatus;
}());

//# sourceMappingURL=jobstatus.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_register__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_forgotpassword__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(jsService, _router, userService, app) {
        this.jsService = jsService;
        this.userService = userService;
        this.app = app;
        this.username = '';
        this.loginData = new __WEBPACK_IMPORTED_MODULE_2__user_login__["a" /* LoginData */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_3__user_register__["a" /* Register */]();
        this.registererror = null;
        this.forgotpassword = new __WEBPACK_IMPORTED_MODULE_7__user_forgotpassword__["a" /* ForgotPassword */]();
        this.token = '';
        this.router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if (this.app.isLoggedIn == false) {
        //   this.token = localStorage.getItem('authToken');
        //   if (this.token != '') {
        //     this.app.isLoggedIn = true;
        //     this.router.navigateByUrl('/add-job/add');
        //   }
        // }else if(this.app.isLoggedIn == true){
        //     this.router.navigateByUrl('/add-job/add');
        //   }
        this.token = localStorage.getItem('authToken');
        if (this.token != null && this.token.length >= 1) {
            this.app.isLoggedIn = true;
            this.router.navigateByUrl('/add-job/add');
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = '';
        this.userService.login(this.loginData).subscribe(function (data) {
            _this.handleSuccess(data);
        }, function (error) { return _this.handleError(error.error); });
    };
    LoginComponent.prototype.registerUser = function () {
        var _this = this;
        this.registererror = null;
        if (this.register.role_id == 2) {
            this.register.gender = '4';
        }
        this.userService.register(this.register).subscribe(function () {
        }, function (error) {
            _this.registererror = error;
            _this.loginData.username = _this.register.email;
            _this.loginData.password = _this.register.password;
            _this.login();
        });
    };
    LoginComponent.prototype.handleSuccess = function (data) {
        this.userService.setAccessToken(data.token_type + ' ' + data.access_token);
        // this.app.userPartyId = data.PARTY_ID;
        this.app.isLoggedIn = true;
        this.getUserInfo();
    };
    LoginComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userService.setUserName(data.name);
            _this.userService.setRoleId(data.role_id);
            (function (error) { return _this.error = error.json().error; });
            _this.navigateuser(data);
        });
    };
    LoginComponent.prototype.navigateuser = function (data) {
        if (data.role_id == "1") {
            this.router.navigateByUrl('/job-alerts');
        }
        else if (data.role_id == "2") {
            this.router.navigateByUrl('/manage-jobs');
        }
        else if (data.role_id == "3") {
            this.router.navigateByUrl('/adminpanel');
        }
    };
    LoginComponent.prototype.handleError = function (error) {
        this.error = error;
    };
    LoginComponent.prototype.reset = function () {
        this.error = '';
    };
    LoginComponent.prototype.sendToken = function () {
        var _this = this;
        this.registererror = null;
        this.error = '';
        this.userService.sendToken(this.forgotpassword).subscribe(function (data) {
            if (data.status == true) {
                _this.forgotpassword.checktoken = true;
            }
        }, function (error) {
            _this.error = error.message;
            _this.registererror = error;
        });
    };
    LoginComponent.prototype.resetPassword = function () {
        var _this = this;
        this.registererror = null;
        this.error = '';
        this.userService.resetPassword(this.forgotpassword).subscribe(function (data) {
            if (data.status == true) {
                _this.loginData.username = _this.forgotpassword.email;
                _this.loginData.password = _this.forgotpassword.password;
                _this.login();
            }
        }, function (error) {
            _this.error = error.message;
            _this.registererror = error;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(269),
        styles: [__webpack_require__(231)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */], __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_custom_javascript_service__["a" /* CustomJavascriptService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageApplicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageApplicationsComponent = (function () {
    function ManageApplicationsComponent(app, route, _router, jobService, userService) {
        this.app = app;
        this.route = route;
        this.jobService = jobService;
        this.userService = userService;
        this.picture_link_start = '';
        this.picture_link_end = '';
        this.picture_error = '';
        this.router = _router;
    }
    ManageApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.route.params.subscribe(function (params) {
            _this.job_id = (params['job-id']);
            if (_this.job_id == 'none') {
                _this.job_id = '';
            }
        });
        this.getUserInfo();
        this.getApplicants();
        this.picture_error = 'error.png';
        this.picture_link_start = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/';
        this.picture_link_end = '_propic.png?' + new Date().getTime();
    };
    ManageApplicationsComponent.prototype.updateLink = function () {
        this.picture_link_end = this.picture_error;
    };
    ManageApplicationsComponent.prototype.getApplicants = function () {
        var _this = this;
        this.error = '';
        this.jobService.getStatus(this.job_id, 0).subscribe(function (data) {
            _this.applicants = data;
        }, function (error) {
            _this.error = error.data.status;
        });
    };
    ManageApplicationsComponent.prototype.changejob = function (job_id) {
        this.job_id = job_id;
        this.getApplicants();
    };
    ManageApplicationsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 1) {
                if (confirm("Employee not allowed. Create a new account as an employer.")) {
                    _this.router.navigateByUrl('/manage-resume');
                }
            }
            _this.getJobsByUser();
        });
    };
    ManageApplicationsComponent.prototype.getJobsByUser = function () {
        var _this = this;
        this.jobService.getJobByUser(this.userInfo.id).subscribe(function (data) {
            _this.jobs = data;
        });
    };
    return ManageApplicationsComponent;
}());
ManageApplicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-applications',
        template: __webpack_require__(270),
        styles: [__webpack_require__(232)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _e || Object])
], ManageApplicationsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manage-applications.component.js.map

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_job_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageJobsComponent = (function () {
    function ManageJobsComponent(app, _router, jobService, userService) {
        this.app = app;
        this.jobService = jobService;
        this.userService = userService;
        this.sliceStart = 0;
        this.sliceEnd = 4;
        this.router = _router;
    }
    ManageJobsComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
    };
    ManageJobsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 1) {
                if (confirm("Employee not allowed. Create a new account as an employer.")) {
                    _this.router.navigateByUrl('/manage-resume');
                }
            }
            _this.getJobsByUser();
        });
    };
    ManageJobsComponent.prototype.getJobsByUser = function () {
        var _this = this;
        this.jobService.getJobByUser(this.userInfo.id).subscribe(function (data) {
            _this.jobs = data;
            _this.count = data.length;
            _this.page = Math.ceil(_this.count / 4);
            _this.numOfPages = new Array(_this.page);
        });
    };
    ManageJobsComponent.prototype.changePage = function (i) {
        this.sliceStart = i * 4;
        this.sliceEnd = this.sliceStart + 4;
        for (var x = 0; x <= this.page; x++) {
            if (i == x) {
                document.getElementById('pagination' + i).className += " current-page";
            }
            else {
                document.getElementById('pagination' + x).classList.remove("current-page");
            }
        }
    };
    ManageJobsComponent.prototype.markFilled = function (id) {
        var _this = this;
        for (var i = 0; i <= this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs[i].filled = true;
                this.jobService.update(this.jobs[i]).subscribe(function (data) {
                    _this.success = data.message;
                    _this.getJobsByUser();
                }, function (error) { return _this.handleError(error); });
            }
        }
    };
    ManageJobsComponent.prototype.markNotFilled = function (id) {
        var _this = this;
        for (var i = 0; i <= this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs[i].filled = false;
                this.jobService.update(this.jobs[i]).subscribe(function (data) {
                    _this.success = data.message;
                    _this.getJobsByUser();
                }, function (error) { return _this.handleError(error); });
            }
        }
    };
    ManageJobsComponent.prototype.handleError = function (error) {
        this.error = '';
        this.error = error;
    };
    return ManageJobsComponent;
}());
ManageJobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-jobs',
        template: __webpack_require__(271),
        styles: [__webpack_require__(233)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__job_job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ManageJobsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manage-jobs.component.js.map

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cv_cv__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cv_cv_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageResumeComponent = (function () {
    function ManageResumeComponent(app, _router, cvService, userService) {
        this.app = app;
        this.cvService = cvService;
        this.userService = userService;
        this.cv = new __WEBPACK_IMPORTED_MODULE_2__cv_cv__["a" /* CV */]();
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserInfo */]();
        this.router = _router;
    }
    ManageResumeComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
    };
    ManageResumeComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (data.role_id == 2) {
                if (confirm("Employer not allowed. Create a new account as an employee.")) {
                    _this.router.navigateByUrl('/manage-jobs');
                }
            }
            _this.getCV();
        });
    };
    ManageResumeComponent.prototype.getCV = function () {
        var _this = this;
        this.cvService.getCV(this.userInfo.id).subscribe(function (data) {
            _this.cv = data;
            _this.count = data.length;
        });
    };
    ManageResumeComponent.prototype.deleteCV = function () {
        this.cvService.deleteCV(this.userInfo.id).subscribe(function (data) {
        });
        this.getCV();
    };
    return ManageResumeComponent;
}());
ManageResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-resume',
        template: __webpack_require__(272),
        styles: [__webpack_require__(234)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__cv_cv_service__["a" /* CVservice */], __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cv_cv_service__["a" /* CVservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cv_cv_service__["a" /* CVservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ManageResumeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manage-resume.component.js.map

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateDiff; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateDiff = (function () {
    function DateDiff() {
    }
    DateDiff.prototype.transform = function (value, args) {
        if (!value)
            return value;
        //Set the two dates
        var expiredate = new Date(value); //Month is 0-11 in JavaScript
        var today = new Date();
        //Get 1 day in milliseconds
        var one_day = 1000 * 60 * 60 * 24;
        //Calculate difference btw the two dates, and convert to days
        return (Math.ceil((expiredate.getTime() - today.getTime()) / (one_day)) + ' days left');
    };
    return DateDiff;
}());
DateDiff = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'datediff' })
], DateDiff);

//# sourceMappingURL=datediff.pipe.js.map

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        // let trail = args.length > 1 ? args[1] : '...';
        var limit = args ? parseInt(args, 10) : 10;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'limitTo'
    })
], TruncatePipe);

//# sourceMappingURL=limitto.js.map

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_mail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_mail_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cv_cv__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cv_cv_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ResumePageComponent = (function () {
    function ResumePageComponent(app, _router, route, cvService, userService, mailservice) {
        this.app = app;
        this.route = route;
        this.cvService = cvService;
        this.userService = userService;
        this.mailservice = mailservice;
        this.cv = new __WEBPACK_IMPORTED_MODULE_5__cv_cv__["a" /* CV */];
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserInfo */]();
        this.mail = new __WEBPACK_IMPORTED_MODULE_3__mail_mail__["a" /* Mail */]();
        this.picture_link = '';
        this.picture_error = '';
        this.router = _router;
    }
    ResumePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.route.params.subscribe(function (params) {
            _this.user_id = (params['user_id']);
            _this.toemail = (params['email']);
        });
        if (this.user_id != 'myself') {
            this.getCV(this.user_id);
            this.getUserByID(this.user_id);
        }
        else {
            this.getUserInfo();
            if (this.userInfo.role_id == '2') {
                if (confirm("Employer not allowed. Create a new account as an employee.")) {
                    this.router.navigateByUrl('/manage-jobs');
                }
            }
        }
        this.picture_error = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/error.png';
    };
    ResumePageComponent.prototype.updateLink = function () {
        this.picture_link = this.picture_error;
    };
    ResumePageComponent.prototype.getUserByID = function (id) {
        var _this = this;
        this.userService.getUserInfoByID(id).subscribe(function (data) {
            _this.userInfo = data;
            _this.toemail = data.email;
        });
    };
    ResumePageComponent.prototype.getCV = function (user_id) {
        var _this = this;
        this.cvService.getCV(user_id).subscribe(function (data) {
            _this.cv = data;
            _this.cvlink = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiRoute + 'storage/cv/' + user_id + '_cv.pdf';
            _this.picture_link = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + user_id + '_propic.png?' + new Date().getTime();
        });
    };
    ResumePageComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            _this.toemail = data.email;
            _this.getCV(_this.userInfo.id);
        });
    };
    ResumePageComponent.prototype.sendMail = function () {
        var _this = this;
        this.success = null;
        this.error = null;
        this.mail.toemail = this.toemail;
        this.mailservice.send(this.mail).subscribe(function (data) {
            _this.success = data.success;
            _this.error = data.error;
        });
    };
    return ResumePageComponent;
}());
ResumePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resume-page',
        template: __webpack_require__(273),
        styles: [__webpack_require__(235)],
        providers: [__WEBPACK_IMPORTED_MODULE_7__cv_cv_service__["a" /* CVservice */], __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__mail_mail_service__["a" /* MailService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__cv_cv_service__["a" /* CVservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__cv_cv_service__["a" /* CVservice */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__mail_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mail_mail_service__["a" /* MailService */]) === "function" && _f || Object])
], ResumePageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=resume-page.component.js.map

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAccountComponent = (function () {
    function UserAccountComponent(app, _router, elem, userService) {
        this.app = app;
        this.elem = elem;
        this.userService = userService;
        this.imagefilename = '';
        this.picture_link = '';
        this.picture_error = '';
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserInfo */]();
        this.propicerror = null;
        this.router = _router;
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        if (this.app.isLoggedIn == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserInfo();
        this.picture_error = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/error.png';
    };
    UserAccountComponent.prototype.updateLink = function () {
        this.picture_link = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/error.png';
    };
    UserAccountComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.propicerror = null;
        this.error = '';
        this.success = '';
        this.propicfileerror = '';
        var files = this.elem.nativeElement.querySelector('#propicfileinput').files;
        var formData = new FormData();
        var file = files[0];
        this.propicfilename = file.name;
        formData.append('propic', file, file.name);
        formData.append('user_id', (this.userInfo.id).toString());
        this.userService.addpropic(formData).subscribe(function (data) {
            if (data.success) {
                _this.success = data.success;
                _this.picture_link = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + _this.userInfo.id + '_propic.png?' + new Date().getTime();
            }
            else {
                _this.error = data.error;
            }
        }, function (error) { return _this.handleError(error); });
    };
    UserAccountComponent.prototype.handleError = function (error) {
        console.log(error);
        this.propicerror = null;
        if (error.propic) {
            this.propicfileerror = error.propic[0];
        }
    };
    UserAccountComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            _this.picture_link = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRoute + 'storage/propic/' + _this.userInfo.id + '_propic.png?' + new Date().getTime();
        });
    };
    return UserAccountComponent;
}());
UserAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-account',
        template: __webpack_require__(274),
        styles: [__webpack_require__(236)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], UserAccountComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-account.component.js.map

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword; });
var ForgotPassword = (function () {
    function ForgotPassword() {
        this.email = '';
        this.token = '';
        this.password = '';
        this.password_confirmation = '';
        this.checktoken = false;
    }
    return ForgotPassword;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginData; });
var LoginData = (function () {
    function LoginData() {
        this.grant_type = 'password';
        this.client_id = 2;
        this.client_secret = 'P1QH5Ealfi7hsjzy3inuUoeO4vOU6DSOPzJbhAsK';
        this.username = '';
        this.password = '';
    }
    return LoginData;
}());

//# sourceMappingURL=login.js.map

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var Register = (function () {
    function Register() {
        this.name = '';
        this.role_id = 1;
        this.email = '';
        this.password = '';
        this.password_confirmation = '';
        this.gender = '';
    }
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single submit-page\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2><i class=\"fa fa-plus-circle\"></i> Add Job</h2>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Submit Page -->\n\t<div class=\"sixteen columns\">\n\t\t<div class=\"submit-page\">\n\n\t\t\t<!-- Title -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Job Title<label *ngIf=\"joberror?.title\" style=\"color:red;\">*{{joberror?.title[0]}}</label></h5>\n\t\t\t\t<input class=\"search-field\" type=\"text\" [(ngModel)]=\"job.title\" />\n\t\t\t</div>\n\n\t\t\t<!-- Location -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Location<label *ngIf=\"joberror?.city || joberror?.country\" style=\"color:red;\">*City and Country field is required.</label></h5>\n\t\t\t\t<input class=\"search-field three columns\" type=\"text\" placeholder=\"e.g. City\" [(ngModel)]=\"job.city\" />\n\t\t\t\t<input class=\"search-field three columns\" type=\"text\" placeholder=\"e.g. District\" [(ngModel)]=\"job.district\" />\n\t\t\t\t<input class=\"search-field three columns\" type=\"text\" placeholder=\"e.g. Zone\" [(ngModel)]=\"job.zone\" />\n\t\t\t\t<input class=\"search-field three columns\" type=\"text\" placeholder=\"e.g. Country\" [(ngModel)]=\"job.country\" />\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t<p class=\"note\">Leave this blank if the location is not important</p>\n\t\t\t</div>\n\n\t\t\t<!-- Job Type -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Job Type<label *ngIf=\"joberror?.type\" style=\"color:red;\">*{{joberror?.type[0]}}</label></h5>\n\t\t\t\t<select style=\"height:50px;\" [(ngModel)]=\"job.type\" data-placeholder=\"Full-Time\" >\n\t\t\t\t\t<option value=\"Full-Time\">Full-Time</option>\n\t\t\t\t\t<option value=\"Part-Time\">Part-Time</option>\n\t\t\t\t\t<option value=\"Internship\">Internship</option>\n\t\t\t\t\t<option value=\"Freelance\">Freelance</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\n\t\t\t<!-- Choose Category -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<div class=\"select\">\n\t\t\t\t\t<h5>Category Type<label *ngIf=\"joberror?.type\" style=\"color:red;\">*{{joberror?.type[0]}}</label></h5>\n\t\t\t\t\t<select style=\"height:50px;\" [(ngModel)]=\"job.category_id\"  >\n\t\t\t\t\t\t<option value=\"1\">Accounting / Finance</option>\n\t\t\t\t\t\t<option value=\"2\">Computer / IT</option>\n\t\t\t\t\t\t<option value=\"3\">Restaurant / Food Service</option>\n\t\t\t\t\t\t<option value=\"4\">Healthcare</option>\n\t\t\t\t\t\t<option value=\"5\">Construction / Facilities</option>\n\t\t\t\t\t\t<option value=\"6\">Automotive Jobs</option>\n\t\t\t\t\t\t<option value=\"7\">Education Training</option>\n\t\t\t\t\t\t<option value=\"8\">Healthcare</option>\n\t\t\t\t\t\t<option value=\"9\">Transportation / Logistics</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Tags -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>keywords<label *ngIf=\"joberror?.keywords\" style=\"color:red;\">*{{joberror?.keywords[0]}}</label></h5>\n\t\t\t\t<input class=\"search-field\" type=\"text\" placeholder=\"e.g. PHP, Social Media, Management\" [(ngModel)]=\"job.keywords\" />\n\t\t\t\t<p class=\"note\">Comma separate keywords, such as required skills or technologies, for the job.</p>\n\t\t\t</div>\n\n\n\t\t\t<!-- Description -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Description<label *ngIf=\"joberror?.description\" style=\"color:red;\">*{{joberror?.description[0]}}</label></h5>\n\t\t\t\t<textarea class=\"WYSIWYG\" [(ngModel)]=\"job.description\" name=\"summary\" cols=\"40\" rows=\"3\" id=\"summary\" spellcheck=\"true\"></textarea>\n\t\t\t</div>\n\n\t\t\t<!-- Requirements -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Requirements<label *ngIf=\"joberror?.requirements\" style=\"color:red;\">*{{joberror?.requirements[0]}}</label></h5>\n\t\t\t\t<textarea class=\"WYSIWYG\" [(ngModel)]=\"job.requirements\" name=\"summary\" cols=\"40\" rows=\"3\" id=\"summary\" spellcheck=\"true\"></textarea>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<!-- Created Date -->\n\t\t\t<div *ngIf=\"todo == 'add'\" class=\"form\">\n\t\t\t\t<h5>Created Date <span>(optional)</span></h5>\n\t\t\t\t<input style=\"height:30px;\" data-role=\"date\" type=\"date\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"job.created_at.date\">\n\t\t\t\t<p class=\"note\">Created date for new applicants.</p>\n\t\t\t</div>\n\n\t\t\t<!-- TClosing Date -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Deadline <label *ngIf=\"joberror?.finish\" style=\"color:red;\">*{{joberror?.finish[0]}}</label><label style=\"font-size:10px;\" *ngIf=\"todo != 'add'\">Current deadline: {{job.finish | date:'mediumDate'}}, Change the box if you want to change.</label></h5>\n\t\t\t\t<input style=\"height:30px;\" data-role=\"date\" type=\"date\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"job.finish\">\n\t\t\t\t<p class=\"note\">Deadline for new applicants.</p>\n\t\t\t</div>\n\n\n\t\t\t<!-- Company Details -->\n\t\t\t<div class=\"divider\">\n\t\t\t\t<h3>Company Details</h3>\n\t\t\t</div>\n\n\t\t\t<!-- Email -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Company Email<label *ngIf=\"joberror?.company_email\" style=\"color:red;\">*{{joberror?.company_email[0]}}</label></h5>\n\t\t\t\t<input class=\"search-field\" type=\"email\" placeholder=\"mail@example.com\" [(ngModel)]=\"job.company_email\"/>\n\t\t\t</div>\n\n\t\t\t<!-- Company Name -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Company Name</h5>\n\t\t\t\t<input type=\"text\" placeholder=\"Enter the name of the company\" [(ngModel)]=\"job.company_name\">\n\t\t\t</div>\n\n\t\t\t<!-- Company Phone -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Company Phone<label *ngIf=\"joberror?.company_phone\" style=\"color:red;\">*{{joberror?.company_phone[0]}}</label></h5>\n\t\t\t\t<input type=\"text\" placeholder=\"eg. 00977XXXXXX with country code.\" [(ngModel)]=\"job.company_phone\">\n\t\t\t</div>\n\n\t\t\t<!-- Website -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Company Website <span>(optional)</span></h5>\n\t\t\t\t<input type=\"text\" placeholder=\"http://\" [(ngModel)]=\"job.company_website\">\n\t\t\t</div>\n\n\t\t\t<!-- Teagline -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Tagline <span>(optional)</span></h5>\n\t\t\t\t<input type=\"text\" placeholder=\"Briefly describe your company\">\n\t\t\t</div>\n\n\t\t\t<!-- Video -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Video <span>(optional)</span></h5>\n\t\t\t\t<input type=\"text\" placeholder=\"A link to a video about your company\" [(ngModel)]=\"job.company_video\">\n\t\t\t</div>\n\n\t\t\t<!-- Twitter -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Facebook Link<span>(optional)</span></h5>\n\t\t\t\t<input type=\"text\" placeholder=\"@yourcompany\" [(ngModel)]=\"job.company_facebook\">\n\t\t\t</div>\n\n\t\t\t<!-- Link to Logo -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Link to Company Logo<span>(optional)</span></h5>\n\t\t\t\t<input type=\"text\" placeholder=\"http://\" [(ngModel)]=\"job.company_logo\">\n\t\t\t</div>\n\t\t\t<!--<div class=\"form\">\n\t\t\t\t<h5>Logo <span>(optional)</span></h5>\n\t\t\t\t<label class=\"upload-btn\">\n\t\t\t\t    <input type=\"file\" multiple />\n\t\t\t\t    <i class=\"fa fa-upload\"></i> Browse\n\t\t\t\t</label>\n\t\t\t\t<span class=\"fake-input\">No file selected</span>\n\t\t\t</div>-->\n\n\n\t\t\t<div class=\"divider margin-top-0\"></div>\n\t\t\t<a *ngIf=\"todo == 'add'\" (click)=\"add()\" class=\"button big margin-top-5\">ADD<i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t\t<a *ngIf=\"todo != 'add'\" (click)=\"update()\" class=\"button big margin-top-5\">UPDATE<i class=\"fa fa-arrow-circle-right\"></i></a>\n\n\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single submit-page\">\n  <div class=\"container\">\n\n    <div class=\"sixteen columns\">\n      <h2><i class=\"fa fa-plus-circle\"></i> Add Resume</h2>\n    </div>\n\n  </div>\n</div>\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n  <!-- Submit Page -->\n  <div class=\"sixteen columns\">\n    <div class=\"submit-page\">\n\n      <!-- Email -->\n      <div class=\"form\">\n        <h5>Your Name</h5>\n        <input class=\"search-field\" [(ngModel)]=\"userInfo.name\" type=\"text\" placeholder=\"Your full name\" value=\"\" />\n      </div>\n\n      <!-- Email -->\n      <div class=\"form\">\n        <h5>Your Email</h5>\n        <input class=\"search-field\" [(ngModel)]=\"userInfo.email\" type=\"text\" placeholder=\"mail@example.com\" value=\"\" />\n      </div>\n\n      <!-- Title -->\n      <div class=\"form\">\n        <h5>Professional Title<label *ngIf=\"cverror?.professional_title\" style=\"color:red;\">*{{cverror?.professional_title[0]}}</label></h5>\n        <input class=\"search-field\" [(ngModel)]=\"cv.professional_title\" type=\"text\" placeholder=\"e.g. Web Developer\" value=\"\" />\n      </div>\n\n      <!-- Location -->\n      <div class=\"form\">\n        <h5>Location<label *ngIf=\"cverror?.address\" style=\"color:red;\">*{{cverror?.address[0]}}</label></h5>\n        <input class=\"search-field\" [(ngModel)]=\"cv.address\" type=\"text\" placeholder=\"e.g. London, UK\" value=\"\" />\n      </div>\n\n      <!-- Skills -->\n      <div class=\"notification notice closeable margin-bottom-40\">\n        <p> Skills you have seperated by comma.</p>\n      </div>\n      <div class=\"form\">\n        <h5>Skills<label *ngIf=\"cverror?.skills\" style=\"color:red;\">*{{cverror?.skills[0]}}</label></h5>\n        <input class=\"search-field\" [(ngModel)]=\"cv.skills\" type=\"text\" placeholder=\"e.g. HTML, Java\" value=\"\" />\n      </div>\n\n      <!-- Logo -->\n      <!-- <div class=\"form\">\n        <h5>Photo <span>(optional)</span></h5>\n        <label class=\"upload-btn\">\n\t\t\t\t    <input type=\"file\" multiple />\n\t\t\t\t    <i class=\"fa fa-upload\"></i> Browse\n\t\t\t\t</label>\n        <span class=\"fake-input\">No file selected</span>\n      </div> -->\n\n\n      <!-- Description -->\n      <div class=\"form\">\n        <h5>About and Wish:  <i>Maxmimum: 1300 characters</i></h5>\n        <label *ngIf=\"cverror?.wish\" style=\"color:red;\">*{{cverror?.wish[0]}}</label>\n        <textarea [(ngModel)]=\"cv.wish\" class=\"WYSIWYG\" name=\"summary\" cols=\"40\" rows=\"3\" id=\"summary\" spellcheck=\"true\"></textarea>\n      </div>\n\n      <!-- cv -->\n      <div *ngIf=\"error || cvfileerror || cverror?.cv_link\" class=\"notification error closeable\">\n        <p><span>Error!</span> {{error}} {{cvfileerror}} {{cverror?.cv_link[0]}}</p>\n        <a class=\"close\" href=\"#\"></a>\n      </div>\n\n      <div *ngIf=\"success\" class=\"notification success closeable\">\n        <p><span>Success!</span> {{success}}</p>\n        <a class=\"close\" href=\"#\"></a>\n      </div>\n\n      <div class=\"form\">\n        <h5>CV <span></span></h5>\n        <label class=\"upload-btn\">\n\t\t\t\t    <input id=\"cvfileinput\" (change)=\"fileChangeEvent($event)\" type=\"file\" />\n\t\t\t\t    <i class=\"fa fa-upload\"></i> Browse\n\t\t\t\t</label>\n        <span class=\"fake-input\"><span *ngIf=\"cvfilename\">{{cvfilename}}</span><span *ngIf=\"!cvfilename\">No file selected.</span></span>\n      </div>\n\n\n\n\n      <div class=\"divider margin-top-0 padding-reset\"></div>\n      <a (click)=\"add()\" class=\"button big margin-top-5\">ADD <i class=\"fa fa-arrow-circle-right\"></i></a>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>Admin Panel</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t<li>Admin Panel</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Table -->\n\t<div class=\"sixteen columns\">\n\n\t\t<p class=\"margin-bottom-25\">All job listings are shown in the table below.</p>\n\n\t\t<table class=\"manage-table responsive-table\">\n\n\t\t\t<tr>\n\t\t\t\t<th><i class=\"fa fa-file-text\"></i> Title</th>\n\t\t\t\t<th><i class=\"fa fa-check-square-o\"></i> Filled?</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Date Posted</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Date Expires</th>\n\t\t\t\t<th><i class=\"fa fa-user\"></i> Applications</th>\n\t\t\t\t<th><i class=\"fa fa-user\"></i> Approval</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\n\t\t\t<!-- Item #2 -->\n\t\t\t<tr *ngFor=\"let job of jobs | slice:sliceStart:sliceEnd; let j =index\">\n\t\t\t\t<td class=\"title\"><a href=\"#\">{{ job.title }}</a></td>\n\t\t\t\t<td class=\"centered\">\n\t\t\t\t\t<span *ngIf=\"job.filled == 1\"><i class=\"fa fa-check\"></i></span><span *ngIf=\"job.filled == 0\"><i class=\"fa fa-times\"></i></span></td>\n\t\t\t\t<td>{{ job.created_at.date | date:'mediumDate' }}</td>\n\t\t\t\t<td>{{ job.finish | date:'mediumDate' }}</td>\n\t\t\t\t<td class=\"centered\">\n\t\t\t\t\t<a *ngIf=\"job.applicant_count > 0\" routerLink=\"/manage-application/{{job.id}}\" class=\"button\">Show ({{job.applicant_count}})</a>\n\t\t\t\t\t<span *ngIf=\"job.applicant_count == 0\">0</span>\n\t\t\t\t</td>\n\t\t\t\t<td><span *ngIf=\"job.status == 0\">Pending</span><span *ngIf=\"job.status == 1\">Approved</span></td>\n\t\t\t\t<td class=\"action\">\n\t\t\t\t\t<a routerLink=\"/add-job/{{job.id}}\"><i class=\"fa fa-pencil\"></i> Edit</a>\n\t\t\t\t\t<a *ngIf=\"job.filled == 0\" (click)='markFilled(job.id)' style=\"cursor:pointer;\"><i class=\"fa  fa-check \"></i> Mark Filled</a>\n\t\t\t\t\t<a *ngIf=\"job.filled == 1\" (click)='markNotFilled(job.id)' style=\"cursor:pointer;\"><i class=\"fa fa-times \"></i> Mark Not Filled</a>\n          <a routerLink=\"/job/{{job.id}}\" style=\"cursor:pointer;\"><i class=\"fa fa-eye\"></i>View</a>\n\t\t\t\t\t<a *ngIf=\"job.status == 0\" (click)='markAllow(job.id)' style=\"cursor:pointer;\"><i class=\"fa  fa-check \"></i> Allow</a>\n\t\t\t\t\t<a *ngIf=\"job.status == 1\" (click)='markBan(job.id)' style=\"cursor:pointer;\"><i class=\"fa fa-times \"></i> Ban</a>\n          \n\t\t\t\t</td>\n\t\t\t</tr>\n\n\t\t</table>\n\n\t\t<br>\n\t\t<a routerLink=\"/add-job/add\" class=\"button\">Add Job</a>\n\n\t\t<div class=\"pagination-container\">\n\t\t\t<nav class=\"pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li style=\"margin-left:5px; cursor: pointer;\" (click)=\"changePage(i)\" *ngFor=\"let page of numOfPages; let i = index\"><a id=\"pagination{{i}}\">{{i+1}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t\t<nav class=\"pagination-next-prev\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"#\" class=\"prev\">Previous</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"next\">Next</a></li> -->\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>My Applied Jobs</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t<li>Applied Jobs</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Table -->\n\t<div class=\"sixteen columns\">\n\n\t\t<p class=\"margin-bottom-25\">Your listings are shown in the table below. Expired listings will be automatically removed after 30 days.</p>\n\n\t\t<table class=\"manage-table responsive-table\">\n\n\t\t\t<tr>\n\t\t\t\t<th><i class=\"fa fa-file-text\"></i> Title</th>\n\t\t\t\t<th><i class=\"fa fa-check-square-o\"></i> Filled?</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Date Posted</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Deadline</th>\n\t\t\t\t<th><i class=\"fa fa-user\"></i> Status</th>\n\t\t\t</tr>\n\n\t\t\t<!-- Item #2 -->\n\t\t\t<tr routerLink=\"/job/{{job.id}}\" style=\"cursor:pointer;\" *ngFor=\"let job of jobs | slice:sliceStart:sliceEnd; let j =index\">\n\t\t\t\t<td class=\"title\"><a href=\"#\">{{ job.title }}</a></td>\n\t\t\t\t<td class=\"centered\">\n\t\t\t\t\t<span *ngIf=\"job.filled == 1\"><i class=\"fa fa-check\"></i></span><span *ngIf=\"job.filled == 0\"><i class=\"fa fa-times\"></i></span>\n\t\t\t\t</td>\n\t\t\t\t<td>{{ job.created_at.date | date:'mediumDate' }}</td>\n\t\t\t\t<td style=\"font-weight: bolder;\">{{ job.finish | date:'mediumDate' }}</td>\n\t\t\t\t<td class=\"centered\">Applied</td>\n\t\t\t</tr>\n\n\t\t</table>\n\t\t<div class=\"pagination-container\">\n\t\t\t<nav class=\"pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li style=\"margin-left:5px; cursor: pointer;\" (click)=\"changePage(i)\" *ngFor=\"let page of numOfPages; let i = index\"><a id=\"pagination{{i}}\">{{i+1}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t\t<nav class=\"pagination-next-prev\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"#\" class=\"prev\">Previous</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"next\">Next</a></li> -->\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\t\t<br>\n\t\t<p *ngIf=\"applied == 'none'\">Sorry! you don't have applied any jobs. Go to <a routerLink=\"/browse-jobs\">Browse Jobs</a></p>\n\n\n\n\t</div>\n\n</div>\n"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"photo-bg\" style=\"background-image: url(images/all-categories-photo.jpg);\">\n\t<div class=\"container\">\n\t\t<div class=\"ten columns\">\n\t\t\t<h2>All Categories</h2>\n\t\t</div>\n\n\t\t<div class=\"six columns\">\n\t\t\t<a href=\"add-job.html\" class=\"button\">Post a Job, It’s Free!</a>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div id=\"categories\">\n\t<!-- Categories Group -->\n\t<div class=\"categories-group\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"four columns\"><h4>Web, Software & IT</h4></div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('PHP')\">PHP</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Android')\">Android</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('WordPress')\">WordPress</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Design')\">Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Developer')\">Developer</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('iOS')\">iOS</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Mobile')\">Mobile</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('MySQL')\">MySQL</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('JavaScript')\">JavaScript</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Software')\">Software</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Website Design')\">Website Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Programming')\">Programming</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('SEO')\">SEO</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Java')\">Java</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('CSS')\">CSS</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('HTML5')\">HTML5</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Web Development')\">Web Development</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Web Design')\">Web Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('eCommerce')\">eCommerce</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Categories Group -->\n\t<div class=\"categories-group\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"four columns\"><h4>Design, Art & Multimedia</h4></div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Design')\">Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Logo Design')\">Logo Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Graphic Design')\">Graphic Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Video')\">Video</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Adnimation')\">Adnimation</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Adobe Photoshop')\">Adobe Photoshop</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Illustration')\">Illustration</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Art')\">Art</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('3D')\">3D</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Adobe Illustrator')\">Adobe Illustrator</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Drawing')\">Drawing</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Web Design')\">Web Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Cartoon')\">Cartoon</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Graphics')\">Graphics</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Fashion Design')\">Fashion Design</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('WordPress')\">WordPress</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Editing')\">Editing</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Writing')\">Writing</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('T-Shirt Design')\">T-Shirt Design</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Categories Group -->\n\t<div class=\"categories-group\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"four columns\"><h4>Sales & Marketing</h4></div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Display Advertising')\">Display Advertising</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Email Marketing')\">Email Marketing</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Lead Generation')\">Lead Generation</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Market & Customer Research')\">Market & Customer Research</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Marketing Strategy')\">Marketing Strategy</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Public Relations')\">Public Relations</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Telemarketing & Telesales')\">Telemarketing & Telesales</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('Other - Sales & Marketing')\">Other - Sales & Marketing</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"four columns\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('SEM - Search Engine Marketing')\">SEM - Search Engine Marketing</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('SEO - Search Engine Optimization')\">SEO - Search Engine Optimization</a></li>\n\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"searchJobs('SMM - Social Media Marketing')\">SMM - Social Media Marketing</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\">\n\t<div class=\"container sixteen columns\">\n\t\t<div class=\"ten columns\">\n\n\t\t\t<h2 *ngIf=\"type == 'category'\">{{categorytype}}</h2>\n\t\t\t<h2 *ngIf=\"type == 'alljobs'\">All Jobs</h2>\n\t\t\t<h2 *ngIf=\"type == 'search'\">Search Jobs</h2>\n\t\t\t<span *ngIf=\"count != 0\">We found {{count}} jobs matching:</span>\n\t\t\t<span *ngIf=\"count == 0\">No jobs found.</span>\n\t\t</div>\n\n\t\t<div class=\"six columns\">\n\t\t\t<a routerLink=\"/login\" class=\"button\">Post a Job, It’s Free!</a>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n===================================================== -->\n<div class=\"container\">\n\t<div class=\"eleven columns\">\n\t\t<div class=\"search-container\" style=\"padding:0px 0px 30px 0px !important;\">\n\t\t\t<!-- Form -->\n\t\t\t<input type=\"text\" style=\"border:1px solid;\" class=\"ico-01\" [(ngModel)]=\"search.keyword\" placeholder=\"Keywords\"\n\t\t\t value=\"\" />\n\t\t\t<input type=\"text\" style=\"border:1px solid;\" class=\"ico-02\" [(ngModel)]=\"search.location\" placeholder=\"Location\"\n\t\t\t value=\"\" />\n\t\t\t<button (click)=\"searchJobs()\"><i class=\"fa fa-search\"></i></button>\n\t\t</div>\n\t</div>\n\t<!-- Recent Jobs -->\n\t<div class=\"eleven columns\">\n\t\t<div class=\"padding-right\">\n\n\n\t\t\t<ul class=\"job-list full\">\n\n\t\t\t\t<div *ngFor=\"let job of jobs | slice:sliceStart:sliceEnd; let j =index\">\n\t\t\t\t\t<li *ngIf=\"job.status == 1\">\n\n\t\t\t\t\t\t<a routerLink=\"/job/{{job.id}}\">\n\t\t\t\t\t\t\t<img src=\"./assets/images/job-list-logo-02.png\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"job-list-content\">\n\t\t\t\t\t\t\t<h4>{{job.title}} <span class=\"part-time\">{{job.type}}</span></h4>\n\t\t\t\t\t\t\t<div class=\"job-icons\">\n\t\t\t\t\t\t\t\t<span><i class=\"fa fa-briefcase\"></i> {{job.company_name}}</span>\n\t\t\t\t\t\t\t\t<span><i class=\"fa fa-map-marker\"></i> {{job.district}}</span>\n\t\t\t\t\t\t\t\t<span style=\"padding: 5px; background-color: rgb(52, 156, 78); color: white; border-radius: 5px;\"><i class=\"fa fa-date\"></i>Deadline: {{job.finish | datediff}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n            \t\t\t</a>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\n\t\t\t</ul>\n\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t<div class=\"pagination-container\">\n\t\t\t\t<nav class=\"pagination\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li style=\"margin-left:5px; cursor: pointer;\" (click)=\"changePage(i)\" *ngFor=\"let page of numOfPages; let i = index\"><a id=\"pagination{{i}}\">{{i+1}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\n\t\t\t\t<nav class=\"pagination-next-prev\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<!-- <li><a href=\"#\" class=\"prev\">Previous</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"next\">Next</a></li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n\t<!-- Widgets -->\n\t<div class=\"five columns\">\n\n\t\t<!-- Sort by -->\n\t\t<div class=\"widget\">\n\t\t\t<h4>Interesting</h4>\n\t\t\tFind your desire job.\n\t\t</div>\n\t</div>\n\t<!-- Widgets / End -->\n\t\n</div>"

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\">\n\t<div class=\"container sixteen columns\">\n\t\t<div class=\"ten columns\">\n\t\t\t<h2>Search resume</h2>\n\t\t\t<span *ngIf=\"count != 0\">We found {{count}} resume matching:</span>\n\t\t\t<span *ngIf=\"count == 0\">No resume found.</span>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n===================================================== -->\n<div class=\"container\">\n\t<div class=\"eleven columns\">\n\t\t<div class=\"search-container\" style=\"padding:0px 0px 30px 0px !important;\">\n\t\t\t<!-- Form -->\n\t\t\t<input type=\"text\" style=\"border:1px solid;\" class=\"ico-01\" [(ngModel)]=\"search.keyword\" placeholder=\"Keywords\" value=\"\"\n\t\t\t/>\n\t\t\t<input type=\"text\" style=\"border:1px solid;\" class=\"ico-02\" [(ngModel)]=\"search.location\" placeholder=\"Location\" value=\"\"\n\t\t\t/>\n\t\t\t<button (click)=\"searchCV()\"><i class=\"fa fa-search\"></i></button>\n\t\t</div>\n\t</div>\n\t<!-- Recent Jobs -->\n\t<div class=\"eleven columns\">\n\t\t<div class=\"padding-right\">\n\n\t\t\t<ul class=\"resumes-list\">\n\t\t\t\t<div *ngFor=\"let cv of cvs | slice:sliceStart:sliceEnd; let j =index\">\n\t\t\t\t\t<li><a routerLink=\"/resume-page/{{cv.user.data.id}}/{{cv.user.data.email}}\">\n\t\t\t\t\t\t<img *ngIf=\"cv.user.data.propic == 1\"  [src]=\"picture_link_start + cv.user.data.id + picture_link_end\"  style=\"max-width:200px; max-height:200px; border-radius:20px;\">\n\t\t\t\t\t\t<img *ngIf=\"cv.user.data.propic == 0\"  [src]=\"picture_link_start + picture_error\" style=\"max-width:200px; max-height:200px; border-radius:20px;\">\n\t\t\t\t\t\t<div class=\"resumes-list-content\">\n\t\t\t\t\t\t\t<h4>{{cv.user.data.name}} <span>{{cv.professional_title}}</span></h4>\n\t\t\t\t\t\t\t<span><i class=\"fa fa-map-marker\"></i>{{cv.address}}</span>\n\t\t\t\t\t\t\t<span><i class=\"fa fa-money\"></i>Good</span>\n\t\t\t\t\t\t\t<p>{{cv.wish}}</p>\n\n\t\t\t\t\t\t\t<div class=\"skills\">\n\t\t\t\t\t\t\t\t<span>{{cv.skills}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t</ul>\n\n\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t<div class=\"pagination-container\">\n\t\t\t\t<nav class=\"pagination\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li style=\"margin-left:5px; cursor: pointer;\" (click)=\"changePage(i)\" *ngFor=\"let page of numOfPages; let i = index\"><a id=\"pagination{{i}}\">{{i+1}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\n\t\t\t\t<nav class=\"pagination-next-prev\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<!-- <li><a href=\"#\" class=\"prev\">Previous</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"next\">Next</a></li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n\t<!-- Widgets -->\n\t<div class=\"five columns\">\n\n\t\t<!-- Sort by -->\n\t\t<div class=\"widget\">\n\t\t\t<h4>Interesting</h4>\n\t\t\tFind a good resume for your job.\n\t\t</div>\n\t</div>\n\t<!-- Widgets / End -->\n\n</div>"

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = "<p>\n  category works!\n</p>\n"

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n  <div class=\"container\">\n\n    <div class=\"sixteen columns\">\n      <h2>Contact</h2>\n      <nav id=\"breadcrumbs\">\n        <ul>\n          <li>You are here:</li>\n          <li><a href=\"#\">Home</a></li>\n          <li>Contact</li>\n        </ul>\n      </nav>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n<!-- Content\n================================================== -->\n<!-- Container -->\n<!-- <div class=\"container\">\n  <div class=\"sixteen columns\">\n\n    <h3 class=\"margin-bottom-20\">Our Office</h3>\n\n    \n    <section class=\"google-map-container\">\n      <div id=\"googlemaps\" class=\"google-map google-map-full\"></div>\n    </section>\n    \n\n  </div>\n</div> -->\n<!-- Container / End -->\n\n\n<!-- Container -->\n<div class=\"container\">\n\n  <div class=\"eleven columns\">\n\n    <h3 class=\"margin-bottom-15\">Contact Form</h3>\n\n    <!-- Contact Form -->\n    <section id=\"contact\" class=\"padding-right\">\n\n      <!-- Success Message -->\n      <div *ngIf=\"success\" class=\"notification success closeable\">\n        <p><span>Success!</span> {{success}}</p>\n        <a class=\"close\" href=\"#\"></a>\n      </div>\n\n      <!-- Form -->\n      <form name=\"contactform\" id=\"contactform\">\n\n        <fieldset>\n\n          <div>\n            <label>Name:</label>\n            <input [(ngModel)]=\"mail.name\" name=\"name\" type=\"text\" id=\"name\" />\n          </div>\n\n          <div>\n            <label>Email: <span>*</span></label>\n            <input [(ngModel)]=\"mail.byemail\" name=\"email\" type=\"email\" id=\"email\" pattern=\"^[A-Za-z0-9](([_\\.\\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\\.\\-]?[a-zA-Z0-9]+)*)\\.([A-Za-z]{2,})$\"\n            />\n          </div>\n\n          <div>\n            <label>Message: <span>*</span></label>\n            <textarea [(ngModel)]=\"mail.message\" name=\"comment\" cols=\"40\" rows=\"3\" id=\"comment\" spellcheck=\"true\"></textarea>\n          </div>\n\n        </fieldset>\n        <div id=\"result\"></div>\n        <button (click)=\"sendMail()\" type=\"submit\" class=\"submit\" id=\"submit\">Send Message</button>\n\n        <div class=\"clearfix\"></div>\n        <div class=\"margin-bottom-10\"></div>\n        <div *ngIf=\"error\" class=\"notification error closeable\">\n          <p><span>Error!</span> {{ error }} Please fill in all the fields required.</p>\n          <a class=\"close\" href=\"#\"></a>\n        </div>\n        <div class=\"margin-bottom-40\"></div>\n      </form>\n\n    </section>\n    <!-- Contact Form / End -->\n\n  </div>\n  <!-- Container / End -->\n\n\n  <!-- Sidebar\n================================================== -->\n  <div class=\"five columns\">\n\n    <!-- Information -->\n    <h3 class=\"margin-bottom-10\">Information</h3>\n    <div class=\"widget-box\">\n      <p>This website is developed in order to provide better searching and finding jobs over the internet in Nepal. We don't\n        have any office but there's digital contact information down below for contact.</p>\n\n      <ul class=\"contact-informations\">\n        <li>Chitwan, Nepal</li>\n        <li>Bharatpur-24, Chitwan, Nepal </li>\n      </ul>\n\n      <ul class=\"contact-informations second\">\n        <!--<li><i class=\"fa fa-envelope\"></i>\n          <p>mail@example.com</p>\n        </li>-->\n        <li><i class=\"fa fa-globe\"></i>\n          <p>creative@hopnep.com</p>\n        </li>\n      </ul>\n\n    </div>\n\n    <!-- Social -->\n    <div class=\"widget margin-top-30\">\n      <h3 class=\"margin-bottom-5\">Social Media</h3>\n      <ul class=\"social-icons\">\n        <li><a class=\"facebook\" href=\"https://www.facebook.com/jobssinnepal/\"><i class=\"icon-facebook\"></i></a></li>\n        <!--<li><a class=\"twitter\" href=\"#\"><i class=\"icon-twitter\"></i></a></li>\n        <li><a class=\"gplus\" href=\"#\"><i class=\"icon-gplus\"></i></a></li>\n        <li><a class=\"linkedin\" href=\"#\"><i class=\"icon-linkedin\"></i></a></li>-->\n      </ul>\n      <div class=\"clearfix\"></div>\n      <div class=\"margin-bottom-50\"></div>\n    </div>\n\n  </div>\n</div>\n<!-- Container / End -->"

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<div class=\"margin-top-45\"></div>\n\n<!-- Info Banner\n================================================== -->\n\n<!-- Container -->\n<div class=\"container\">\n  <div class=\"sixteen columns\">\n\n    <div class=\"info-banner\">\n      <div class=\"info-content\">\n        <h3>The page you are looking for can't be found.</h3>\n        <p>Want to report this to us?</p>\n      </div>\n      <a routerLink=\"/contact\" class=\"button\">Contact</a>\n      <div class=\"clearfix\"></div>\n    </div>\n\n  </div>\n</div>\n<!-- Container / End -->"

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = " <!-- Footer\n================================================== -->\n  <div class=\"margin-top-15\"></div>\n\n  <div id=\"footer\">\n    <!-- Main -->\n    <div class=\"container\">\n\n      <div class=\"seven columns\">\n        <h4>About</h4>\n        <p>This website is developed in order to provide better searching and finding jobs over the internet in Nepal. We don't\n          have any office but there's digital contact information in contact section for contact.</p>\n        <a routerLink=\"/login\" class=\"button\">Get Started</a>\n      </div>\n\n      <div class=\"three columns\">\n        <h4>Company</h4>\n        <ul class=\"footer-links\">\n          <li><a routerLink=\"/\">Home</a></li>\n          <li><a  routerLink=\"/contact\">Contact Us</a></li>\n          <li><a routerLink=\"/browse-jobs\">Browse Jobs</a></li>\n          <li><a routerLink=\"/browse-categories\">Browse Categories</a></li>\n          <li><a routerLink=\"/login\">Login / Register</a></li>\n        </ul>\n      </div>\n\n      <div class=\"three columns\">\n        <h4>Press</h4>\n        <ul class=\"footer-links\">\n          <li><a >In the News</a></li>\n          <li><a >Press Releases</a></li>\n          <li><a >Awards</a></li>\n          <li><a >Testimonials</a></li>\n          <li><a >Timeline</a></li>\n        </ul>\n      </div>\n\n      <div class=\"three columns\">\n        <h4>Browse</h4>\n        <ul class=\"footer-links\">\n          <li><a routerLink=\"/browse-categories\">Jobs by Category</a></li>\n          <li><a routerLink=\"/browse-jobs\">Jobs by Location</a></li>\n\n        </ul>\n      </div>\n\n    </div>\n\n    <!-- Bottom -->\n    <div class=\"container\">\n      <div class=\"footer-bottom\">\n        <div class=\"sixteen columns\">\n          <h4>Follow Us</h4>\n          <ul class=\"social-icons\">\n            <li><a class=\"facebook\" href=\"https://www.facebook.com/jobssinnepal/\"><i class=\"icon-facebook\"></i></a></li>\n            <!-- <li><a class=\"twitter\" href=\"#\"><i class=\"icon-twitter\"></i></a></li>\n            <li><a class=\"gplus\" href=\"#\"><i class=\"icon-gplus\"></i></a></li>\n            <li><a class=\"linkedin\" href=\"#\"><i class=\"icon-linkedin\"></i></a></li> -->\n          </ul>\n          <div class=\"copyrights\">© Copyright 2018 by <a routerLink=\"/\" >HopNep</a>. All Rights Reserved.</div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Back To Top Button -->\n  <div id=\"backtotop\"><a href=\"#\"></a></div>"

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "<!-- Header\n================================================== -->\n<header class=\"sticky-header\">\n\t<div class=\"container\">\n\t\t<div class=\"sixteen columns\">\n\n\t\t\t<!-- Logo -->\n\t\t\t<div id=\"logo\">\n\t\t\t\t<h1><a routerLink=\"/\"><img src=\"./assets/images/logo.png\" alt=\"HopNep\" /></a></h1>\n\t\t\t</div>\n\n\t\t\t<!-- Menu -->\n\t\t\t<nav id=\"navigation\" class=\"menu\">\n\t\t\t\t<ul id=\"responsive\">\n\n\t\t\t\t\t<li><a routerLink=\"/\" id=\"current\">Home</a></li>\n\n\t\t\t\t\t<li *ngIf=\"role_id\"><a>Pages <i class=\"ln ln-icon-Arrow-Down\"></i></a>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a routerLink=\"/browse-jobs\">Browse Jobs</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/browse-categories\">Browse Categories</a></li>\n\t\t\t\t\t\t\t<!--<li><a href=\"pricing-tables.html\">Pricing Tables</a></li>-->\n\t\t\t\t\t\t\t<li><a routerLink=\"/contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"!role_id\"><a routerLink=\"/browse-jobs\">Browse Jobs</a></li>\n\t\t\t\t\t<li *ngIf=\"!role_id\"><a routerLink=\"/browse-categories\">Browse Categories</a></li>\n\t\t\t\t\t<!--<li><a href=\"pricing-tables.html\">Pricing Tables</a></li>-->\n\t\t\t\t\t<li *ngIf=\"!role_id\"><a routerLink=\"/contact\">Contact</a></li>\n\n\t\t\t\t\t<li *ngIf=\"role_id == '1'\"><a>For Candidates <i class=\"ln ln-icon-Arrow-Down\"></i></a>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a routerLink=\"/resume-page/myself/none\">Resume Page</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/add-resume\">Add Resume</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/manage-resume\">Manage Resumes</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/job-alerts\">Job Alerts</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/appliedjobs\">Applied Jobs</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"role_id == '2'\"><a>For Employers <i class=\"ln ln-icon-Arrow-Down\"></i></a>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a routerLink=\"/add-job/add\">Add Job</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/manage-jobs\">Manage Jobs</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/manage-application/none\">Manage Applications</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/browse-resume\">Browse Resumes</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li><a href=\"blog.html\">Blog</a></li> -->\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class=\"responsive float-right\">\n\t\t\t\t\t<li *ngIf=\"!username\">\n\t\t\t\t\t\t<a routerLink=\"/login\"><i class=\"fa fa-lock\"></i> Log In / <i class=\"fa fa-user\"></i> Register</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"username\">\n\t\t\t\t\t\t<a>{{username}}</a>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a routerLink=\"/user-account\">Account</a></li>\n\t\t\t\t\t\t\t<li><a style=\"cursor:pointer;\" (click)=\"logout()\">LogOut</a></li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"role_id == '1'\" style=\"position:relative;\"><span *ngIf=\"matching_jobs\" style=\"position:absolute; overflow:visible; font-size:7; top:-7px; right:-7px; border-radius:7px; background:red; z-index: 1; color:white; padding:2px;\">{{matching_jobs}}</span>\n\t\t\t\t\t\t<a routerLink=\"/job-alerts\" style=\"padding:0px;\">\n\t\t\t\t\t\t\t<img [src]=\"picture_link\" (error)=\"updateLink($event)\" style=\"width:40px; height:40px; border-radius:20px;\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"role_id == '2'\" style=\"position:relative;\"><span *ngIf=\"new_applicant\" style=\"position:absolute; overflow:visible; font-size:7; top:-7px; right:-7px; border-radius:7px; background:red; z-index: 1; color:white; padding:2px;\">{{new_applicant}}</span>\n\t\t\t\t\t\t<a routerLink=\"/manage-jobs\" style=\"padding:0px;\">\n\t\t\t\t\t\t\t<img [src]=\"picture_link\" (error)=\"updateLink($event)\" style=\"width:40px; height:40px; border-radius:20px;\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"role_id == '3'\" style=\"position:relative;\"><span *ngIf=\"new_applicant\" style=\"position:absolute; overflow:visible; font-size:7; top:-7px; right:-7px; border-radius:7px; background:red; z-index: 1; color:white; padding:2px;\">*</span>\n\t\t\t\t\t\t<a routerLink=\"/adminpanel\" style=\"padding:0px;\">\n\t\t\t\t\t\t\t<img [src]=\"picture_link\" (error)=\"updateLink($event)\" style=\"width:40px; height:40px; border-radius:20px;\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</nav>\n\n\t\t\t<!-- Navigation -->\n\t\t\t<div id=\"mobile-navigation\">\n\t\t\t\t<a href=\"#menu\" class=\"menu-trigger\"><i class=\"fa fa-reorder\"></i> Menu</a>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</header>\n<div class=\"clearfix\"></div>"

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = "\n<!-- Header\n================================================== -->\n<header class=\"transparent sticky-header full-width\">\n  <div class=\"container\">\n    <div class=\"sixteen columns\">\n\n      <!-- Logo -->\n      <div id=\"logo\">\n        <h1><a routerLink=\"/\"><img src=\"./assets/images/logo.png\" alt=\"HopNep\" /></a></h1>\n      </div>\n\n      <!-- Menu -->\n      <nav id=\"navigation\" class=\"menu\">\n        <ul id=\"responsive\">\n\n          <li><a routerLink=\"/\" id=\"current\">Home</a></li>\n\n\t\t\t\t\t<li *ngIf=\"role_id\"><a>Pages <i class=\"ln ln-icon-Arrow-Down\"></i></a>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a routerLink=\"/browse-jobs\">Browse Jobs</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/browse-categories\">Browse Categories</a></li>\n\t\t\t\t\t\t\t<!--<li><a href=\"pricing-tables.html\">Pricing Tables</a></li>-->\n\t\t\t\t\t\t\t<li><a routerLink=\"/contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"!role_id\"><a routerLink=\"/browse-jobs\">Browse Jobs</a></li>\n\t\t\t\t\t<li *ngIf=\"!role_id\"><a routerLink=\"/browse-categories\">Browse Categories</a></li>\n\t\t\t\t\t<!--<li><a href=\"pricing-tables.html\">Pricing Tables</a></li>-->\n\t\t\t\t\t<li *ngIf=\"!role_id\"><a routerLink=\"/contact\">Contact</a></li>\n\n          <li *ngIf=\"role_id == '1'\"><a>For Candidates <i class=\"ln ln-icon-Arrow-Down\"></i></a>\n            <ul>\n              <li><a routerLink=\"/resume-page/myself/none\">Resume Page</a></li>\n              <li><a routerLink=\"/add-resume\">Add Resume</a></li>\n              <li><a routerLink=\"/manage-resume\">Manage Resumes</a></li>\n              <li><a routerLink=\"/job-alerts\">Job Alerts</a></li>\n              <li><a routerLink=\"/appliedjobs\">Applied Jobs</a></li>\n            </ul>\n          </li>\n\n          <li *ngIf=\"role_id == '2'\"><a>For Employers <i class=\"ln ln-icon-Arrow-Down\"></i></a>\n            <ul>\n\t\t\t\t\t\t\t<li><a routerLink=\"/add-job/add\">Add Job</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/manage-jobs\">Manage Jobs</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/manage-application/none\">Manage Applications</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/browse-resume\">Browse Resumes</a></li>\n            </ul>\n          </li>\n          <!-- <li><a href=\"blog.html\">Blog</a></li> -->\n        </ul>\n\n\n        <ul  class=\"responsive float-right\">\n          <li *ngIf=\"!username\">\n            <a routerLink=\"/login\"><i class=\"fa fa-lock\"></i> Log In / <i class=\"fa fa-user\"></i> Register</a></li>\n          <li *ngIf=\"username\">\n            <a>{{username}}</a>\n            <ul>\n              <li><a routerLink=\"/user-account\">Account</a></li>\n              <li><a style=\"cursor:pointer;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n          </li>\n          <li *ngIf=\"role_id == '1'\" style=\"position:relative;\"><span *ngIf=\"matching_jobs\" style=\"position:absolute; overflow:visible; font-size:7; top:-7px; right:-7px; border-radius:7px; background:red; z-index: 1; color:white; padding:2px;\">{{matching_jobs}}</span>\n\t\t\t\t\t\t<a routerLink=\"/job-alerts\" style=\"padding:0px;\">\n\t\t\t\t\t\t\t<img [src]=\"picture_link\" (error)=\"updateLink($event)\" style=\"width:40px; height:40px; border-radius:20px;\">\n\t\t\t\t\t\t</a>\n          </li>\n          <li *ngIf=\"role_id == '2'\" style=\"position:relative;\"><span *ngIf=\"new_applicant\" style=\"position:absolute; overflow:visible; font-size:7; top:-7px; right:-7px; border-radius:7px; background:red; z-index: 1; color:white; padding:2px;\">{{new_applicant}}</span>\n\t\t\t\t\t\t<a routerLink=\"/manage-jobs\" style=\"padding:0px;\">\n\t\t\t\t\t\t\t<img [src]=\"picture_link\" (error)=\"updateLink($event)\" style=\"width:40px; height:40px; border-radius:20px;\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n        </ul>\n\n      </nav>\n\n      <!-- Navigation -->\n      <div id=\"mobile-navigation\">\n        <a href=\"#menu\" class=\"menu-trigger\"><i class=\"fa fa-reorder\"></i> Menu</a>\n      </div>\n\n    </div>\n  </div>\n</header>\n<div class=\"clearfix\"></div>\n"

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n<div id=\"wrapper\">\n\n\n\n  <!-- Banner\n================================================== -->\n  <div id=\"banner\" class=\"with-transparent-header parallax background\" style=\"background-image: url(./assets/images/banner-home-02.jpg)\"\n    data-img-width=\"2000\" data-img-height=\"1330\" data-diff=\"300\">\n    <div class=\"container\">\n      <div class=\"sixteen columns\">\n\n        <div class=\"search-container\">\n\n          <!-- Form -->\n          <h2>Find job</h2>\n          <input type=\"text\" class=\"ico-01\" [(ngModel)]=\"search.keyword\" placeholder=\"job title, keywords or company name\" value=\"\"\n          />\n          <input type=\"text\" class=\"ico-02\" [(ngModel)]=\"search.location\" placeholder=\"city, province or region\" value=\"\" />\n          <span>\n          <a (click)=\"searchJobs()\"><button><i class=\"fa fa-search\"></i></button></a>\n          </span>\n          <!-- Browse Jobs -->\n          <div class=\"browse-jobs\">\n            Browse job offers by <a routerLink=\"/browse-categories\"> category</a> or <a routerLink=\"/browse-categories\">location</a>\n          </div>\n\n          <!-- Announce -->\n          <div class=\"announce\">\n            We’ve over <strong>{{jobscount}}</strong> job offers for you!\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Content\n================================================== -->\n\n  <!-- Categories -->\n  <div class=\"container\">\n    <div class=\"sixteen columns\">\n      <h3 class=\"margin-bottom-25\">Popular Categories</h3>\n      <ul id=\"popular-categories\">\n        <li *ngFor=\"let category of categories | slice:0:8; let j =index\"><a style=\"cursor:pointer;\" (click)=\"showByCategory(category.id)\"><i class=\"ln  ln-icon-Bar-Chart-3\"></i>{{ category.name }}</a></li>\n      </ul>\n\n      <div class=\"clearfix\"></div>\n      <div class=\"margin-top-30\"></div>\n\n      <a routerLink=\"/browse-categories\" class=\"button centered\">Browse All Categories</a>\n      <div class=\"margin-bottom-50\"></div>\n    </div>\n  </div>\n\n\n  <div class=\"container\">\n\n    <!-- Recent Jobs -->\n    <div class=\"eleven columns\">\n      <div class=\"padding-right\">\n        <h3 class=\"margin-bottom-25\">Recent Jobs</h3>\n        <ul class=\"job-list\">\n\n          <!--<li class=\"highlighted\"><a href=\"job-page.html\">\n\t\t\t\t<img src=\"./assets/images/job-list-logo-01.png\" alt=\"\">\n\t\t\t\t<div class=\"job-list-content\">\n\t\t\t\t\t<h4>Marketing Coordinator - SEO / SEM Experience <span class=\"full-time\">Full-Time</span></h4>\n\t\t\t\t\t<div class=\"job-icons\">\n\t\t\t\t\t\t<span><i class=\"fa fa-briefcase\"></i> King</span>\n\t\t\t\t\t\t<span><i class=\"fa fa-map-marker\"></i> Sydney</span>\n\t\t\t\t\t\t<span><i class=\"fa fa-money\"></i> 00 / hour</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</a>\n            <div class=\"clearfix\"></div>\n          </li>-->\n          <div *ngFor=\"let job of jobs | slice:0:4; let j =index\">\n            <li *ngIf=\"job.status == 1\" >\n\n              <a routerLink=\"/job/{{job.id}}\">\n            <img src=\"./assets/images/job-list-logo-02.png\" alt=\"\">\n            <div class=\"job-list-content\">\n              <h4>{{job.title}} <span class=\"part-time\">{{job.type}}</span></h4>\n              <div class=\"job-icons\">\n                <span><i class=\"fa fa-briefcase\"></i> {{job.company_name}}</span>\n                <span><i class=\"fa fa-map-marker\"></i> {{job.district}}</span>\n                <span><i class=\"fa fa-money\"></i> Good</span>\n                <span style=\"padding: 5px; background-color: rgb(52, 156, 78); color: white; border-radius: 5px;\"><i class=\"fa fa-date\"></i>Deadline: {{job.finish | datediff}}</span>\n              </div>\n            </div>\n            </a>\n              <div class=\"clearfix\"></div>\n\n            </li>\n          </div>\n        </ul>\n\n        <a (click)=\"showAll()\" class=\"button centered\"><i class=\"fa fa-plus-circle\"></i> Show More Jobs</a>\n        <div class=\"margin-bottom-55\"></div>\n      </div>\n    </div>\n\n    <!-- Job Spotlight -->\n    <div class=\"five columns\">\n      <h3 class=\"margin-bottom-5\">Job Spotlight</h3>\n\n      <!-- Navigation -->\n      <div class=\"showbiz-navigation \">\n        <div id=\"showbiz_left_1\" class=\"sb-navigation-left\"><i class=\"fa fa-angle-left\"></i></div>\n        <div id=\"showbiz_right_1\" class=\"sb-navigation-right\"><i class=\"fa fa-angle-right\"></i></div>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <!-- Showbiz Container -->\n      <div id=\"job-spotlight\" class=\"showbiz-container \">\n        <div class=\"showbiz \" data-left=\"#showbiz_left_1\" data-right=\"#showbiz_right_1\" data-play=\"#showbiz_play_1\">\n          <div class=\"overflowholder \">\n\n            <ul>\n              <div *ngFor=\"let job of endsoonjobs | slice:0:4; let j =index\">\n                <li class=\"five columns\">\n                  <div class=\"job-spotlight\">\n                    <a href=\"#\">\n                      <h4>{{job.title}} <span class=\"part-time\">{{job.type}}</span></h4>\n                    </a>\n                    <span><i class=\"fa fa-briefcase\"></i> {{job.city}}</span>\n                    <span><i class=\"fa fa-map-marker\"></i> {{job.district}}</span>\n                    <span><i class=\"fa fa-money\"></i> Good </span>\n                    <p>{{ job.description | limitTo:'100'}}...</p>\n                    <a routerLink=\"/login\" class=\"button\">Apply For This Job</a>\n                  </div>\n                </li>\n              </div>\n            </ul>\n            <div class=\"clearfix\"></div>\n\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <!-- Testimonials -->\n  <div id=\"testimonials\">\n    <!-- Slider -->\n    <div class=\"container\">\n      <div class=\"sixteen columns\">\n        <div class=\"testimonials-slider\">\n          <ul class=\"slides\">\n            <li>\n              <p>This is an awesome and most usable website for both employer and employees. I found job within  15 days using through this website. <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i> \n                <span>Suraj Shrestha</span></p>\n            </li>\n\n            <li>\n              <p>This website helps me alot for the job market analysis of my course. I recommend all of you for you better carrer.<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n                <span>Saroj Adhikari</span></p>\n            </li>\n\n            <li>\n              <p>Woow! Great, Very user friendly design. So easy to use and find job. If I can give a rating for this website, I'll definitely give 10 of 10. <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i> \n                <span>Bhawana Shahi Adhikari</span></p>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Infobox -->\n  <div class=\"infobox\">\n    <div class=\"container\">\n      <div class=\"sixteen columns\">Start Building Your Own Job Board Now <a routerLink=\"/login\">Get Started</a></div>\n    </div>\n  </div>\n</div>\n<!-- Wrapper / End -->"

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>Job Alerts</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t<li>Job Alerts</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t\t<div class=\"ten columns\">\n\t\t\t<span *ngIf=\"count != 0\">We have {{count}} jobs matching according to your resume:</span>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Table -->\n\t<div class=\"sixteen columns\">\n\n\t\t<p class=\"margin-bottom-25\">Your job alerts are shown below.</p>\n\n\t\t<table class=\"manage-table resumes responsive-table\">\n\n\t\t\t<tr>\n\t\t\t\t<th><i class=\"fa fa-file-text\"></i> Alert Name</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Created Date</th>\n\t\t\t\t<th><i class=\"fa fa-tags\"></i> Keywords</th>\n\t\t\t\t<th><i class=\"fa fa-map-marker\"></i> Location</th>\n\t\t\t\t<th><i class=\"fa fa-clock-o\"></i> Deadline</th>\n\t\t\t\t<th><i class=\"fa fa-check-square-o\"></i> Status</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\n\t\t\t<!-- Item #1 -->\n\t\t\t<tr routerLink=\"/job/{{job.id}}\" style=\"cursor: pointer; cursor: hand;\" *ngFor=\"let job of jobs | slice:sliceStart:sliceEnd; let j =index\">\n\t\t\t\t<td class=\"alert-name\">{{job.title | limitTo:40}}</td>\n\t\t\t\t<td>{{job.created_at.date | date:'mediumDate'}}</td>\n\t\t\t\t<td class=\"keywords\">{{job.keywords | limitTo:30}}</td>\n\t\t\t\t<td>{{job.district | limitTo:20}}</td>\n\t\t\t\t<td>{{job.finish | date:'mediumDate'}}</td>\n\t\t\t\t<td><span *ngIf=\"job.status == 1\">Enabled</span><span *ngIf=\"job.status == 0\">Disabled</span></td>\n\t\t\t\t<td class=\"action\">\n\t\t\t\t\t<a class=\"button\" style=\"color:white; padding:10px;\">See Details</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<br>\n\t\t<div *ngIf=\"error != ''\" class=\"notification error closeable\">\n\t\t\t<p><span>Oops!</span> {{error}}</p>\n\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t</div>\n\n\t\t<a *ngIf=\"cv.status == 'not_found'\" routerLink=\"/add-resume\" class=\"button\">Add Resume</a>\n\t\t<br>\n\t\t<div class=\"clearfix\"></div>\n\n\t\t<div class=\"pagination-container\">\n\t\t\t<nav class=\"pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li style=\"margin-left:5px; cursor: pointer;\" (click)=\"changePage(i)\" *ngFor=\"let page of numOfPages; let i = index\"><a id=\"pagination{{i}}\">{{i+1}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t\t<nav class=\"pagination-next-prev\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"#\" class=\"prev\">Previous</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"next\">Next</a></li> -->\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t\t<!-- <div id=\"small-dialog\" class=\"zoom-anim-dialog mfp-hide apply-popup\">\n\t\t\t<div class=\"small-dialog-headline\">\n\t\t\t\t<h2>Add Alert</h2>\n\t\t\t</div>\n\n\t\t\t<div class=\"small-dialog-content\">\n\t\t\t\t<form action=\"#\" method=\"get\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"Alert Name\" value=\"\" />\n\t\t\t\t\t<input type=\"text\" placeholder=\"Keyword\" value=\"\" />\n\t\t\t\t\t<input type=\"text\" placeholder=\"Location\" value=\"\" />\n\n\t\t\t\t\t<!-- Select -->\n\n\t\t<!--\n\t\t\t\t\t<select data-placeholder=\"Email Frequency\" class=\"chosen-select-no-single\">\n\t\t\t\t\t\t<option value=\"\">Email Frequency</option>\n\t\t\t\t\t\t<option value=\"1\">Daily</option>\n\t\t\t\t\t\t<option value=\"2\">Weekly</option>\n\t\t\t\t\t\t<option value=\"3\">Fortnightly</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<div class=\"margin-top-15\"></div>\n\n\t\t\t\t\t<!-- Select -->\n\n\t\t<!--\n\t\t\t\t\t<select data-placeholder=\"Job Type\" class=\"chosen-select\" multiple>\n\t\t\t\t\t\t<option value=\"1\">Full-Time</option>\n\t\t\t\t\t\t<option value=\"2\">Part-Time</option>\n\t\t\t\t\t\t<option value=\"3\">Internship</option>\n\t\t\t\t\t\t<option value=\"4\">Freelance</option>\n\t\t\t\t\t\t<option value=\"5\">Temporary</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t\t<div class=\"margin-top-20\"></div>\n\t\t\t\t\t<div class=\"divider\"></div>\n\n\t\t\t\t\t<button class=\"send\">Save Alert</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n\n</div>"

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\">\n\t<div class=\"container\">\n\t\t<div class=\"ten columns\">\n\t\t\t<span><a href=\"browse-jobs.html\">{{job.category?.data.name}}</a></span>\n\t\t\t<h2>{{job.title}}<span class=\"full-time\">{{job.type}}</span></h2>\n\t\t</div>\n\n\t\t<div class=\"six columns\">\n\t\t\t<!-- <a href=\"#\" class=\"button dark\"><i class=\"fa fa-star\"></i> Bookmark This Job</a> -->\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\t\n\t<!-- Recent Jobs -->\n\t<div class=\"eleven columns\">\n\t<div class=\"padding-right\">\n\t\t\n\t\t<!-- Company Info -->\n\t\t<div class=\"company-info\">\n\t\t\t<img *ngIf=\"job.company_logo != ''\" src=\"./../../assets/images/company-logo.png\" alt=\"\">\n\t\t\t<img *ngIf=\"job.company_logo == ''\" src=\"./../../assets/images/company-logo.png\" alt=\"\">\n\t\t\t<div class=\"content\">\n\t\t\t\t<h4>{{job.company_name}}</h4>\n\t\t\t\t<span *ngIf=\"job.company_website != ''\"><a href=\"#\"><i class=\"fa fa-link\"></i> {{job.company_website}}</a></span>\n\t\t\t\t<span *ngIf=\"job.company_facebook != ''\"><a href=\"#\"><i class=\"fa fa-facebook\"></i> {{job.company_facebook}}</a></span>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</div>\n\n\t\t{{job.description}}\n\t\t\n\t\t<br>\n\n\t\t<h4 class=\"margin-bottom-10\">Job Requirment</h4>\n\n\t\t{{job.requirements}}\n\n\t</div>\n\t</div>\n\n\n\t<!-- Widgets -->\n\t<div class=\"five columns\">\n\n\t\t<!-- Sort by -->\n\t\t<div class=\"widget\">\n\t\t\t<h4>Overview</h4>\n\n\t\t\t<div class=\"job-overview\">\n\t\t\t\t\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<strong>Location:</strong>\n\t\t\t\t\t\t\t<span>{{job.city + ', ' + job.district +  ', ' + job.zone + ', ' + job.country}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<strong>Job Title:</strong>\n\t\t\t\t\t\t\t<span>{{job.title}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<strong>Hours:</strong>\n\t\t\t\t\t\t\t<span>Good</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class=\"fa fa-money\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<strong>Rate:</strong>\n\t\t\t\t\t\t\t<span>Good</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\n\t\t\t\t<a *ngIf=\"userInfo?.role_id == 1 && applied != ''\" (click)=\"addStatus()\" id=\"applybutton\"  class=\"button\">Apply For This Job</a>\n\t\t\t\t<a *ngIf=\"userInfo?.role_id == 1 && applied == ''\" id=\"applybutton\"  class=\"button\">Already applied on {{jobstatus[0]?.created_at.date | date:\"medium\"}}. if you get selected then you will get an email from the employer. Thankyou for surfing our website.</a>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\t<!-- Widgets / End -->\n\n\n</div>"

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>My Account</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>My Account</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n\n<!-- Container -->\n<div class=\"container\">\n\n\t<div class=\"my-account\">\n\n\t\t<ul class=\"tabs-nav\">\n\t\t\t<li class=\"\">\n\t\t\t\t<a (click)='reset()' href=\"#tab1\">Login</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a (click)='reset()' href=\"#tab2\">Register</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a (click)='reset()' href=\"#tab3\">Forgot Password?</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<div class=\"tabs-container\">\n\t\t\t<!-- Login -->\n\t\t\t<div class=\"tab-content\" id=\"tab1\" style=\"display: none;\">\n\t\t\t\t<div *ngIf=\"error\" class=\"notification error closeable\">\n\t\t\t\t\t<p *ngIf=\"error == 'invalid_request'\">\n\t\t\t\t\t\t<span>Error!</span> Login doesn't match. </p>\n\t\t\t\t\t<p *ngIf=\"error == 'invalid_credentials'\">\n\t\t\t\t\t\t<span>Error!</span> The user credentials were incorrect. </p>\n\t\t\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t\t\t</div>\n\t\t\t\t<form method=\"post\" class=\"login\">\n\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label for=\"username\">Username:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Male\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"input-text\" name=\"username\" id=\"username\" [(ngModel)]=\"loginData.username\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label for=\"password\">Password:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Lock-2\"></i>\n\t\t\t\t\t\t\t<input class=\"input-text\" [(ngModel)]=\"loginData.password\" type=\"password\" name=\"password\" id=\"password\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class=\"form-row\">\n\t\t\t\t\t\t<input type=\"submit\" (click)=\"login()\" class=\"button border fw margin-top-10\" name=\"login\" value=\"Login\" />\n\n\t\t\t\t\t\t<!-- <label for=\"rememberme\" class=\"rememberme\">\n\t\t\t\t\t\t<input name=\"rememberme\" type=\"checkbox\" id=\"rememberme\" value=\"forever\" /> Remember Me</label>\n\t\t\t\t\t -->\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<!-- <p class=\"lost_password\">\n\t\t\t\t\t\t<a href=\"#\">Lost Your Password?</a>\n\t\t\t\t\t</p> -->\n\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<!-- Register -->\n\t\t\t<div class=\"tab-content\" id=\"tab2\" style=\"display: none;\">\n\n\t\t\t\t<form method=\"post\" class=\"register\">\n\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.name\" style=\"color:red;\">*{{registererror?.name[0]}}</label>\n\t\t\t\t\t\t<label for=\"username2\">Name:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Male\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"input-text\" name=\"username\" id=\"username2\" [(ngModel)]=\"register.name\" />\n\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<!-- Job Type -->\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.role_id\" style=\"color:red;\">*{{registererror?.role_id[0]}}</label>\n\t\t\t\t\t\t<label for=\"username2\">Looking For:\n\t\t\t\t\t\t\t<select style=\"height:50px;\" [(ngModel)]=\"register.role_id\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t\t\t\t<option selected=\"selected\" [value]=\"1\">Job</option>\n\t\t\t\t\t\t\t\t<option [value]=\"2\">Employee</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<!-- <select id=\"roletype\" (change)=\"changeRole()\" data-placeholder=\"Job\" class=\"chosen-select-no-single\">\n\t\t\t\t\t\t\t<option value=\"1\">Job</option>\n\t\t\t\t\t\t\t<option value=\"2\">Employee</option>\n\t\t\t\t\t\t</select> -->\n\n\t\t\t\t\t\t</label>\n\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p *ngIf=\"register.role_id == 1\" class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.gender\" style=\"color:red;\">*{{registererror?.gender[0]}}</label>\n\t\t\t\t\t\t<label for=\"username2\">Gender:\n\t\t\t\t\t\t\t<select style=\"height:50px;\" [(ngModel)]=\"register.gender\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t\t\t\t<option [value]=\"1\">Male</option>\n\t\t\t\t\t\t\t\t<option [value]=\"2\">Female</option>\n\t\t\t\t\t\t\t\t<option [value]=\"3\">Other</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<!-- <select id=\"roletype\" (change)=\"changeRole()\" data-placeholder=\"Job\" class=\"chosen-select-no-single\">\n\t\t\t\t\t\t\t<option value=\"1\">Job</option>\n\t\t\t\t\t\t\t<option value=\"2\">Employee</option>\n\t\t\t\t\t\t</select> -->\n\n\t\t\t\t\t\t</label>\n\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.email\" style=\"color:red;\">*{{registererror?.email[0]}}</label>\n\t\t\t\t\t\t<label for=\"email2\">Email Address:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Mail\"></i>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"input-text\" name=\"email\" id=\"email2\" [(ngModel)]=\"register.email\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.password\" style=\"color:red;\">*{{registererror?.password[0]}}</label>\n\t\t\t\t\t\t<label for=\"password1\">Password:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Lock-2\"></i>\n\t\t\t\t\t\t\t<input class=\"input-text\" type=\"password\" name=\"password1\" id=\"password1\" [(ngModel)]=\"register.password\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.password\" style=\"color:red;\">*{{registererror?.password[0]}}</label>\n\t\t\t\t\t\t<label for=\"password2\">Repeat Password:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Lock-2\"></i>\n\t\t\t\t\t\t\t<input class=\"input-text\" type=\"password\" name=\"password2\" id=\"password2\" [(ngModel)]=\"register.password_confirmation\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class=\"form-row\">\n\t\t\t\t\t\t<input type=\"submit\" (click)=\"registerUser()\" class=\"button border fw margin-top-10\" name=\"register\" value=\"Register\" />\n\t\t\t\t\t</p>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- Forgot password -->\n\t\t\t<div class=\"tab-content\" id=\"tab3\" style=\"display: none;\">\n\t\t\t\t<div *ngIf=\"error\" class=\"notification error closeable\">\n\t\t\t\t\t<p><span>Error!</span> {{error}} </p>\n\t\t\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t\t\t</div>\n\t\t\t\t<form method=\"post\" class=\"register\">\n\n\t\t\t\t\t<p>If you have lost your password, please complete this wizard for the new password. </p>\n\t\t\t\t\t<p *ngIf=\"forgotpassword.checktoken == false\" class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.email\" style=\"color:red;\">*{{registererror?.email[0]}}</label>\n\t\t\t\t\t\t<label for=\"email2\">Email Address:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Mail\"></i>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"input-text\" name=\"email\" id=\"email2\" [(ngModel)]=\"forgotpassword.email\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p *ngIf=\"forgotpassword.checktoken == true\" class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.token\" style=\"color:red;\">*{{registererror?.token[0]}}</label>\n\t\t\t\t\t\t<label for=\"username2\">Token: <i>If you don't get email within 5 minute, Please repeat the process agagin.</i>\n\t\t\t\t\t\t\t<i class=\"fa fa-shield\"></i>\n\t\t\t\t\t\t\t<input placeholder=\"Check your email for the token.\" type=\"text\" class=\"input-text\" name=\"username\" id=\"username2\" [(ngModel)]=\"forgotpassword.token\"\n\t\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p *ngIf=\"forgotpassword.checktoken == true\" class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.password\" style=\"color:red;\">*{{registererror?.password[0]}}</label>\n\t\t\t\t\t\t<label for=\"password1\">Password:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Lock-2\"></i>\n\t\t\t\t\t\t\t<input class=\"input-text\" type=\"password\" name=\"password1\" id=\"password1\" [(ngModel)]=\"forgotpassword.password\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p *ngIf=\"forgotpassword.checktoken == true\" class=\"form-row form-row-wide\">\n\t\t\t\t\t\t<label *ngIf=\"registererror?.password\" style=\"color:red;\">*{{registererror?.password[0]}}</label>\n\t\t\t\t\t\t<label for=\"password2\">Repeat Password:\n\t\t\t\t\t\t\t<i class=\"ln ln-icon-Lock-2\"></i>\n\t\t\t\t\t\t\t<input class=\"input-text\" type=\"password\" name=\"password2\" id=\"password2\" [(ngModel)]=\"forgotpassword.password_confirmation\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p *ngIf=\"forgotpassword.checktoken == true\" class=\"form-row\">\n\t\t\t\t\t\t<input type=\"submit\" (click)=\"resetPassword()\" class=\"button border fw margin-top-10\" name=\"change\" value=\"Change\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<p *ngIf=\"forgotpassword.checktoken == false\" class=\"form-row\">\n\t\t\t\t\t\t<input type=\"submit\" (click)=\"sendToken()\" class=\"button border fw margin-top-10\" name=\"token\" value=\"Next\" />\n\t\t\t\t\t</p>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>Manage Applications</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a>Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>Job Dashboard</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Table -->\n\t<div class=\"sixteen columns\">\n\n\t\t<p class=\"margin-bottom-25\" style=\"float: left;\">Select the job to see the\n\t\t\t<strong> applicants</strong>.</p>\n\n\t\t<!-- Select -->\n\t\t<select (change)=\"changejob($event.target.value)\" style=\"height:50px;\">\n\t\t\t<option> Choose one of the job below</option>\n\t\t\t<option *ngFor=\"let job of jobs\" [value]=\"job.id\"> {{job.title}} , Posted: {{ job.created_at.date | date:'mediumDate' }}</option>\n\t\t</select>\n\t\t<div class=\"margin-bottom-15\"></div>\n\t</div>\n\n\t<!-- <div class=\"eight columns\">\n\t\t<select data-placeholder=\"Filter by status\" class=\"chosen-select-no-single\">\n\t\t\t<option value=\"\">Filter by status</option>\n\t\t\t<option value=\"new\">New</option>\n\t\t\t<option value=\"interviewed\">Interviewed</option>\n\t\t\t<option value=\"offer\">Offer extended</option>\n\t\t\t<option value=\"hired\">Hired</option>\n\t\t\t<option value=\"archived\">Archived</option>\n\t\t</select>\n\t\t<div class=\"margin-bottom-15\"></div>\n\t</div>\n\n\t<div class=\"eight columns\">\n\t\t<select data-placeholder=\"Newest first\" class=\"chosen-select-no-single\">\n\t\t\t<option value=\"\">Newest first</option>\n\t\t\t<option value=\"name\">Sort by name</option>\n\t\t\t<option value=\"rating\">Sort by rating</option>\n\t\t</select>\n\t\t<div class=\"margin-bottom-35\"></div>\n\t</div> -->\n\n\n\t<!-- Applications -->\n\t<div class=\"sixteen columns\">\n\t\t<div *ngIf=\"error != ''\" class=\"notification warning closeable\">\n\t\t\t<p>\n\t\t\t\t<span>Oops!</span> This job don't have any applicant yet. Please select/change job to see the applicants. </p>\n\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t</div>\n\t\t<!-- Application #1 -->\n\t\t<div *ngFor=\"let applicant of applicants\" class=\"application\">\n\t\t\t<div class=\"app-content\">\n\n\t\t\t\t<!-- Name / Avatar -->\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<img *ngIf=\"applicant.propic == 1\" [src]=\"picture_link_start + applicant.id + picture_link_end\" style=\"max-width:200px; max-height:200px; border-radius:20px;\">\n\t\t\t\t\t<img *ngIf=\"applicant.propic == 0\" [src]=\"picture_link_start + picture_error\" style=\"max-width:200px; max-height:200px; border-radius:20px;\">\n\n\t\t\t\t\t<span>{{applicant.name}}</span>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-file-text\"></i> Download CV</a>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t<li>\n\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i> Applicant\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Buttons -->\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<!-- <a href=\"#one-1\" class=\"button gray app-link\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil\"></i> Edit</a>\n\t\t\t\t\t<a href=\"#two-1\" class=\"button gray app-link\">\n\t\t\t\t\t\t<i class=\"fa fa-sticky-note\"></i> Add Note</a> -->\n\t\t\t\t\t<a routerLink=\"/resume-page/{{applicant.id}}/{{applicant.email}}\" class=\"button gray app-link\">\n\t\t\t\t\t\t<i class=\"fa fa-plus-circle\"></i> Show Details</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t</div>\n\n\t\t\t<!-- Footer -->\n\t\t\t<div class=\"app-footer\">\n\n\t\t\t\t<div class=\"rating no-stars\">\n\t\t\t\t\t<div class=\"star-rating\"></div>\n\t\t\t\t\t<div class=\"star-bg\"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- <ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class=\"fa fa-file-text-o\"></i> New</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class=\"fa fa-calendar\"></i> September 24, 2015</li>\n\t\t\t\t</ul> -->\n\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>Manage Jobs</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t<li>Job Dashboard</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Table -->\n\t<div class=\"sixteen columns\">\n\n\t\t<p class=\"margin-bottom-25\">Your listings are shown in the table below.</p>\n\n\t\t<table class=\"manage-table responsive-table\">\n\n\t\t\t<tr>\n\t\t\t\t<th><i class=\"fa fa-file-text\"></i> Title</th>\n\t\t\t\t<th><i class=\"fa fa-check-square-o\"></i> Filled?</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Date Posted</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Date Expires</th>\n\t\t\t\t<th><i class=\"fa fa-user\"></i> Applications</th>\n\t\t\t\t<th><i class=\"fa fa-user\"></i> Approval</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\n\t\t\t<!-- Item #2 -->\n\t\t\t<tr *ngFor=\"let job of jobs | slice:sliceStart:sliceEnd; let j =index\">\n\t\t\t\t<td class=\"title\"><a href=\"#\">{{ job.title }}</a></td>\n\t\t\t\t<td class=\"centered\">\n\t\t\t\t\t<span *ngIf=\"job.filled == 1\"><i class=\"fa fa-check\"></i></span><span *ngIf=\"job.filled == 0\"><i class=\"fa fa-times\"></i></span></td>\n\t\t\t\t<td>{{ job.created_at.date | date:'mediumDate' }}</td>\n\t\t\t\t<td>{{ job.finish | date:'mediumDate' }}</td>\n\t\t\t\t<td class=\"centered\">\n\t\t\t\t\t<a *ngIf=\"job.applicant_count > 0\" routerLink=\"/manage-application/{{job.id}}\" class=\"button\">Show ({{job.applicant_count}})</a>\n\t\t\t\t\t<span *ngIf=\"job.applicant_count == 0\">0</span>\n\t\t\t\t</td>\n\t\t\t\t<td><span *ngIf=\"job.status == 0\">Pending</span><span *ngIf=\"job.status == 1\">Approved</span></td>\n\t\t\t\t<td class=\"action\">\n\t\t\t\t\t<a routerLink=\"/add-job/{{job.id}}\"><i class=\"fa fa-pencil\"></i> Edit</a>\n\t\t\t\t\t<a *ngIf=\"job.filled == 0\" (click)='markFilled(job.id)' style=\"cursor:pointer;\"><i class=\"fa  fa-check \"></i> Mark Filled</a>\n\t\t\t\t\t<a *ngIf=\"job.filled == 1\" (click)='markNotFilled(job.id)' style=\"cursor:pointer;\"><i class=\"fa fa-times \"></i> Mark Not Filled</a>\n\t\t\t\t\t<a routerLink=\"/job/{{job.id}}\" style=\"cursor:pointer;\"><i class=\"fa fa-eye\"></i>View</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\n\t\t</table>\n\n\t\t<br>\n\t\t<a routerLink=\"/add-job/add\" class=\"button\">Add Job</a>\n\n\t\t<div class=\"pagination-container\">\n\t\t\t<nav class=\"pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li style=\"margin-left:5px; cursor: pointer;\" (click)=\"changePage(i)\" *ngFor=\"let page of numOfPages; let i = index\"><a id=\"pagination{{i}}\">{{i+1}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t\t<nav class=\"pagination-next-prev\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"#\" class=\"prev\">Previous</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"next\">Next</a></li> -->\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2>Manage Resumes</h2>\n\t\t\t<nav id=\"breadcrumbs\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>You are here:</li>\n\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t<li>Candidate Dashboard</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Table -->\n\t<div class=\"sixteen columns\">\n\n\t\t<div *ngIf=\"message\" class=\"notification success closeable\">\n\t\t\t<p><span></span> {{message}}</p>\n\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t</div>\n\n\t\t<p class=\"margin-bottom-25\">Your resume can be viewed, edited or removed below.</p>\n\n\t\t<table class=\"manage-table resumes responsive-table\">\n\n\t\t\t<tr>\n\t\t\t\t<th><i class=\"fa fa-user\"></i> Name</th>\n\t\t\t\t<th><i class=\"fa fa-file-text\"></i> Title</th>\n\t\t\t\t<th><i class=\"fa fa-map-marker\"></i> Location</th>\n\t\t\t\t<th><i class=\"fa fa-calendar\"></i> Date Posted</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\n\t\t\t<!-- Item #1 -->\n\t\t\t<tr *ngIf=\"cv.status != 'not_found'\">\n\t\t\t\t<td class=\"title\"><a href=\"#\">{{userInfo.name}}{{cv.status}}</a></td>\n\t\t\t\t<td>{{cv.professional_title | limitTo:20}}</td>\n\t\t\t\t<td>{{cv.address | limitTo:20}}</td>\n\t\t\t\t<td>{{cv.updated_at?.date | date:'mediumDate'}}</td>\n\t\t\t\t<td class=\"action\">\n\t\t\t\t\t<a routerLink=\"/resume-page\"><i class=\"fa  fa-eye\"></i> Show</a>\n\t\t\t\t\t<a (click)=\"deleteCV()\" style=\"cursor: pointer;\"  class=\"delete\"><i class=\"fa fa-remove\"></i> Delete</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\n\t\t</table>\n\t\t<br>\n\t\t<!-- cv -->\n\t\t<div *ngIf=\"cv.status == 'not_found'\" class=\"notification error closeable\">\n\t\t\t<p><span>Oops!</span> You have not added your CV. Go to Add Resume, More chances to get hired.</p>\n\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t</div>\n\t\t<br>\n\n\t\t<a *ngIf=\"cv.status == 'not_found'\" routerLink=\"/add-resume\" class=\"button\">Add Resume</a>\n\n\t</div>\n\n</div>"

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"resume\">\n  <div class=\"container\">\n    <div class=\"ten columns\">\n      <div class=\"resume-titlebar\">\n        <img [src]=\"picture_link\" (error)=\"updateLink()\" alt=\"profile_image\" style=\"max-width:110px; max-height:110px;\">\n        <div class=\"resumes-list-content\">\n          <h4> {{userInfo.name}} <span *ngIf=\"cv.status != 'not_found'\">{{cv.professional_title}}</span></h4>\n          <span  *ngIf=\"cv.status != 'not_found'\" class=\"icons\"><i class=\"fa fa-map-marker\"></i>{{cv.address}}</span>\n          <span class=\"icons\"><i class=\"fa fa-money\"></i> Good</span>\n          <span class=\"icons\"><a href=\"#\"><i class=\"fa fa-link\"></i> </a></span>\n          <span class=\"icons\"><a><i class=\"fa fa-envelope\"></i> {{userInfo.email}}</a></span>\n          <div class=\"skills\">\n            <span  *ngIf=\"cv.status != 'not_found'\">{{cv.skills}}</span>\n            <span  *ngIf=\"cv.status == 'not_found'\">{{userInfo.name}} haven't added Resume yet.</span>\n          </div>\n          <div class=\"clearfix\"></div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"six columns\">\n      <div class=\"two-buttons\">\n\n        <a href=\"#small-dialog\" class=\"popup-with-zoom-anim button\"><i class=\"fa fa-envelope\"></i> Send Message</a>\n\n        <div id=\"small-dialog\" class=\"zoom-anim-dialog mfp-hide apply-popup\">\n          <div class=\"small-dialog-headline\">\n            <h2>Send Message to {{userInfo.name}}</h2>\n          </div>\n\n          <div class=\"small-dialog-content\">\n            <!-- Success Message -->\n            <div *ngIf=\"success\" class=\"notification success closeable\">\n              <p><span>Success!</span> {{success}}</p>\n              <a class=\"close\" href=\"#\"></a>\n            </div>\n            <div *ngIf=\"error\" class=\"notification error closeable\">\n              <p><span>Error!</span> {{ error }}</p>\n              <a class=\"close\" href=\"#\"></a>\n            </div>\n            <form >\n              <input type=\"text\" [(ngModel)]=\"mail.name\" placeholder=\"Full Name\" name=\"fullname\"  />\n              <input type=\"text\" [(ngModel)]=\"mail.byemail\" placeholder=\"Email Address\" name=\"sender\"  />\n              <textarea [(ngModel)]=\"mail.message\" placeholder=\"Message\" name=\"message\"></textarea>\n\n              <button (click)=\"sendMail()\" class=\"send\">Send Application</button>\n            </form>\n          </div>\n\n        </div>\n        <!-- <a  class=\"button dark\"><i class=\"fa fa-star\"></i> Bookmark This Resume</a> -->\n\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div *ngIf=\"cv.status != 'not_found'\" class=\"container\">\n  <!-- Recent Jobs -->\n  <div class=\"sixteen columns\">\n    <div class=\"padding-right\">\n\n      <h3 class=\"margin-bottom-15\">About and Wish</h3>\n\n      <p class=\"margin-reset\">{{cv.wish}}\n      </p>\n\n      <br>\n\n    </div>\n  </div>\n\n\n  <!-- Widgets -->\n  <div class=\"sixteen columns\">\n\n    <h3 class=\"margin-bottom-20\">Curriculum Vitae</h3>\n\n    <!-- Resume Table -->\n     <pdf-viewer [src]=\"cvlink\" [page]=\"page\" [original-size]=\"true\" style=\"display: block;\"></pdf-viewer>\n\n    <!-- <embed src=\"{{cvlink}}\" width=\"500\" height=\"375\" type='application/pdf'>  -->\n\n      <!-- <embed src=\"{{cvlink}}\" width=\"500\" height=\"375\" type='application/pdf'> -->\n\n  </div>\n\n</div>"

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = "<app-header-secondary></app-header-secondary>\n<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"single submit-page\">\n\t<div class=\"container\">\n\n\t\t<div class=\"sixteen columns\">\n\t\t\t<h2><i class=\"fa fa-cog\"></i>Account settings</h2>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<div class=\"container\">\n\n\t<!-- Submit Page -->\n\t<div class=\"sixteen columns\">\n\t\t<div class=\"submit-page\">\n\n\t\t\t<!-- Title -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Name</h5>\n\t\t\t\t<input class=\"search-field\" [(ngModel)]=\"userInfo.name\" type=\"text\" placeholder=\"\" readonly/>\n\t\t\t</div>\n\n\n\t\t\t<!-- Email -->\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Email</h5>\n\t\t\t\t<input class=\"search-field\" [(ngModel)]=\"userInfo.email\" type=\"text\" placeholder=\"mail@example.com\" readonly/>\n\t\t\t</div>\n\n\t\t\t<!-- cv -->\n\t\t\t<div *ngIf=\"error || propicfileerror || propicerror?.cv_link\" class=\"notification error closeable\">\n\t\t\t\t<p><span>Error!</span> {{error}} {{propicfileerror}} {{propicerror?.propic[0]}}</p>\n\t\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"success\" class=\"notification success closeable\">\n\t\t\t\t<p><span>Success!</span> {{success}}</p>\n\t\t\t\t<a class=\"close\" href=\"#\"></a>\n\t\t\t</div>\n\n\t\t\t<div class=\"form\">\n\t\t\t\t<h5>Profile picture <span></span></h5>\n\t\t\t\t<label class=\"upload-btn\">\n\t\t\t\t    <input id=\"propicfileinput\" (change)=\"fileChangeEvent($event)\" type=\"file\" />\n\t\t\t\t    <i class=\"fa fa-upload\"></i> Upload New\n\t\t\t\t</label>\n\t\t\t\t<img [src]=\"picture_link\" (error)=\"updateLink()\" style=\"max-width:200px; max-height:200px; border-radius:20px;\">\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 314 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 315 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 316 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ })
],[317]);
//# sourceMappingURL=main.bundle.js.map