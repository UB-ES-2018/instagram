(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <body style=\"background-color: #F8F8F8\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"column\" style=\"width: 21%\">       \n                <br>\n                <div style=\"width: 9cm; text-align: center; margin-bottom: 10px; padding: 15px;\" class=\"jumbotron\">\n                    <img class=\"user-avatar\" src=\"assets/images/logo.png\" width=\"225px\" />\n    \n                    <br>\n                    \n    \n                    <form role=\"form\">\n                        <div class=\"form-control-range\" style=\"text-align: center;\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" [(ngModel)]=\"username\"  style=\"font-size: 13.5px\" class=\"form-control input-underline input-lg\" name=\"username\"  placeholder=\"Teléfono, usuario o correo electrónico\">\n                            </div>\n            \n                            <div class=\"form-group\">\n                                <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control input-underline input-lg\" name=\"password\" placeholder=\"Password\">\n                            </div>\n                            <p>\n\n                            <button (click)=\"onClickRegisterButton()\" class=\"btn btn-primary btn-sm\">Entrar</button>\n                            </p>\n\n                \n                            <div style=\"height: 1px; border-top: 1px solid #D3D3D3; text-align: center; position: relative; \">\n                                <span style=\"position: relative; top: -.7em; background: #E8ECEF; display: inline-block; \">&nbsp;&nbsp;&nbsp; o &nbsp;&nbsp;&nbsp;</span>\n                            </div>\n\n                            <br>\n                            <p>\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm\" role=\"button\" size=\"105px\">\n                                    <i style=\"font-size:24px\" class=\"fa\">&#xf230;</i>        Iniciar sesión con Facebook</a>\n                            </p>\n\n                            <span style=\"color: black; font-size: 13px\"> <a [routerLink]=\"['/signup']\">¿Has olvidado la contraseña?</a></span>\n\n                        </div>\n                    </form>\n    \n                </div>\n                <div style=\"width: 9cm; height: 2cm; margin-bottom: 10px; padding: 15px; text-align: center;\" class=\"jumbotron\">\n                        <span style=\"color: black; font-size: 13.5px\">¿No tienes una cuenta? <a [routerLink]=\"['/signup']\">Regístrate</a></span>\n                </div>\n                <div style=\"margin: auto; text-align: center;\">\n                    <span >Descarga la aplicación.</span>\n                </div>\n                \n                <div class=\"row\">\n                        <img class=\"user-avatar\" src=\"assets/images/banners/bannerApple.png\" style=\" width: 3cm; height: 1cm;\"/>\n                        &nbsp;\n                        <img class=\"user-avatar\" src=\"assets/images/banners/bannerGoogle.png\" style=\" width: 3cm; height: 1cm;\"/>\n                        &nbsp;\n                        <img class=\"user-avatar\" src=\"assets/images/banners/bannerMicrosoft.png\" style=\" width: 3cm; height: 1cm;\"/>\n                </div>\n            </div>\n        </div>\n    </body>\n\n\n    <!-- Footer -->\n    <footer class=\"page-footer font-small cyan darken-3\" style=\"background: #F8F8F8;\">\n        <!-- Footer Elements -->\n        <div class=\"container\">\n    \n            <!-- Grid row-->\n            <div class=\"row\">\n    \n                <!-- Grid column -->\n                <div class=\"col-md-12 py-5\">\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                </div>\n                <!-- Grid column -->\n    \n            </div>\n            <!-- Grid row-->\n    \n        </div>\n        <!-- Footer Elements -->\n        <div class=\"footer-copyright text-center py-3\">\n                <!-- Información -->\n                <a [routerLink]=\"['/feed']\" class=\"info-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    INFORMACIÓN \n                </a>\n                &nbsp; &nbsp;\n                <!-- Asistencia -->\n                <a [routerLink]=\"['/feed']\" class=\"assistance-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    ASISTENCIA \n                </a>\n                &nbsp; &nbsp;\n                <!-- Prensa-->\n                <a [routerLink]=\"['/feed']\" class=\"press-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    PRENSA \n                </a>\n                &nbsp; &nbsp;\n                <!-- Api -->\n                <a [routerLink]=\"['/feed']\" class=\"api-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    API \n                </a>\n                &nbsp; &nbsp;\n                <!-- Empleo -->\n                <a [routerLink]=\"['/feed']\" class=\"jobs-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    EMPLEO \n                </a>\n                &nbsp; &nbsp;\n                <!-- Privacidad -->\n                <a [routerLink]=\"['/feed']\" class=\"privacy-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    PRIVACIDAD \n                </a>   \n                &nbsp; &nbsp;\n                <!--Condiciones-->\n                <a [routerLink]=\"['/feed']\" class=\"tos-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    CONDICIONES \n                </a>  \n                &nbsp; &nbsp;\n                <!--Directorio-->\n                <a [routerLink]=\"['/feed']\" class=\"dir-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    DIRECTORIO \n                </a>  \n                &nbsp; &nbsp;\n                <!--Perfiles-->\n                <a [routerLink]=\"['/feed']\" class=\"profiles-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    PERFILES \n                </a>  \n                &nbsp; &nbsp;\n                <!--Hashtags-->\n                <a [routerLink]=\"['/feed']\" class=\"hastags-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    HASHTAGS \n                </a>  \n                &nbsp; &nbsp;\n                <!--Idioma-->\n                <a [routerLink]=\"['/feed']\" class=\"language-link\" style=\"font-weight: bold; color: darkslategray;\">\n                    IDIOMA \n                </a> \n                &nbsp; &nbsp; &nbsp; &nbsp;\n                    \n                © 2018 INSTAGRAM     \n            </div>\n    </footer>\n    <!-- Footer -->\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_follow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/follow.service */ "./src/app/service/follow.service.ts");
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
    function LoginComponent(router, authService, followService) {
        this.router = router;
        this.authService = authService;
        this.followService = followService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.logStatus) {
            this.router.navigateByUrl('/perfil');
        }
    };
    LoginComponent.prototype.onLoggedin = function () {
        localStorage.setItem('isLoggedin', 'true');
    };
    LoginComponent.prototype.onClickRegisterButton = function () {
        var _this = this;
        this.authService.setLogin(this.username, this.password).subscribe(function (user) {
            _this.user = user;
            _this.router.navigateByUrl('');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["authService"],
            _service_follow_service__WEBPACK_IMPORTED_MODULE_4__["FollowService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map