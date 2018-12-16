(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: #F8F8F8; max-width: 100%; overflow-x: hidden;\" onload=\"carousel()\">\n    <div class=\"row justify-content-md-center\">    \n        <div class=\"column\" style=\"width: 21%; vertical-align: bottom; z-index: 3;\">\n                <div class=\"phone-slider\" style=\"width: 440px;\n                    height: 510px;\n                    background-image: url(../assets/images/phoneSliders/backgroundPhones.png);\n                    background-repeat: no-repeat;\n                    background-size: contain;\n                    padding-top: 81px; \n                    padding-left: 125px;\n                    padding-right: 0px;\n                    padding-bottom: 0px;\n                    vertical-align: middle;\n                    position:absolute;\n                    top:0;\n                    bottom:0;\n                    margin:auto;\n                    \">\n                    <div class=\"carousel-inner\" role=\"listbox\" style=\"height: 100% !important;\n                    object-fit: cover;\">\n                        <img  class=\"mySlides w3-animate-fading\" src=\"../assets/images/phoneSliders/phoneImage1.jpg\" width=\"200\">\n                        <img  class=\"mySlides w3-animate-fading\" src=\"../assets/images/phoneSliders/phoneImage2.jpg\" width=\"200\" style=\"display: none;\">\n                        <img  class=\"mySlides w3-animate-fading\" src=\"../assets/images/phoneSliders/phoneImage3.jpg\" width=\"200\" style=\"display: none;\">\n                        <img  class=\"mySlides w3-animate-fading\" src=\"../assets/images/phoneSliders/phoneImage4.jpg\" width=\"200\" style=\"display: none;\">\n                        <img  class=\"mySlides w3-animate-fading\" src=\"../assets/images/phoneSliders/phoneImage5.jpg\" width=\"200\" style=\"display: none;\">\n                        \n                        \n                        <!--\n                        <div class=\"item active\">\n                            <img src=\"../assets/images/phoneSliders/phoneImage1.jpg\" alt=\"...\" width=\"200\">\n                            <div class=\"carousel-caption\">\n                            First slide label\n                            </div>\n                        </div>\n                        <div class=\"item\" style=\"height: 100% !important;\n                        object-fit: cover;\">\n                            <img src=\"../assets/images/phoneSliders/phoneImage2.jpg\" alt=\"...\">\n                            <div class=\"carousel-caption\">\n                            Second slide label\n                            </div>\n                        </div>-->\n                    </div>    \n                             \n                </div>\n                \n            <!-- <img class=\"phone-image\"\n                style=\"vertical-align: middle;\n                width: 11cm; height: 16cm;\n                position:absolute;\n                top:0;\n                bottom:0;\n                margin:auto;\"\n                src=\"../assets/images/phoneSliders/backgroundPhones.png\" />-->\n        </div>\n        <div class=\"column\" style=\"width: 21%; z-index: 4;\">\n            <br>\n            <div style=\"width: 9cm; text-align: center; margin-bottom: 10px; padding: 15px;\" class=\"jumbotron\">\n                <img class=\"user-avatar\" src=\"../assets/images/logo.png\" width=\"225px\" />\n\n                <p>\n                    Regístrate para ver fotos y vídeos de tus amigos.\n                </p>\n                <p>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm\" role=\"button\" size=\"105px\" onclick=\"carousel();\">\n                        <i style=\"font-size:24px\" class=\"fa\">&#xf230;</i>        Iniciar sesión con Facebook</a>\n                </p>\n\n                <div style=\"height: 1px; border-top: 1px solid #D3D3D3; text-align: center; position: relative; \">\n                    <span style=\"position: relative; top: -.7em; background: #E8ECEF; display: inline-block; \">&nbsp;&nbsp;&nbsp; o &nbsp;&nbsp;&nbsp;</span>\n                </div>\n                <br>\n                <form data-toggle=\"validator\" #registerForm=\"ngForm\" role=\"form\" id=\"registerForm\" name=\"registerForm\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input type=\"email\" placeholder=\"Número de móvil o correo electrónico\" style=\"font-size: 13.5px\" class=\"form-control width-input\" id=\"email\" name=\"email\" type=\"text\" [(ngModel)]=\"user.email\" #email=\"ngModel\" email>\n                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger width-input\">Email</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control width-input\" placeholder=\"Nombre completo\" style=\"font-size: 13.5px\" id=\"name\" name=\"name\" type=\"text\" minlength=\"4\" [(ngModel)]=\"user.name\" #name=\"ngModel\" required>\n                            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger width-input\">No void</div>\n                        </div>                            \n                        <div class=\"form-group\">\n                            <input type=\"username\" placeholder=\"Nombre de usuario\" style=\"font-size: 13.5px\" class=\"form-control width-input\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required>\n                            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger width-input\">Invalid Username</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control width-input\" placeholder=\"Contraseña\" style=\"font-size: 13.5px\" id=\"password\" name=\"password\" type=\"password\" minlength=\"4\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger width-input\">No void</div>\n                        </div>\n                    </fieldset>\n                    <br>\n                    <button (click)=\"onClickRegisterButton()\" [disabled]=\"!registerForm.valid\" class=\"btn btn-primary btn-sm\">Siguiente</button>\n                    <br>\n                    <span style=\"font-size: 13.5px;\">\n                        Al registrarte, aceptas nuestras <b>Condiciones</b>.\n                        Obtén más información sobre cómo recopilamos,\n                        usamos y compartimos tu información en la <b>Política de datos</b>,\n                        así como el uso que hacemos de las cookies y tecnologías similares en nuestra <b>Política de cookies.</b>\n                    </span>\n                </form>\n\n            </div>\n            <div style=\"width: 9cm; height: 2cm; margin-bottom: 10px; padding: 15px; text-align: center;\" class=\"jumbotron\">\n                    <span style=\"color: black; font-size: 13.5px\">¿Tienes una cuenta? <a [routerLink]=\"['/login']\">Entrar</a></span>\n            </div>\n            <div style=\"text-align: center;\">\n                <span>Descarga la aplicación</span>\n            </div>\n            \n            <div class=\"row\">\n                    <img class=\"user-avatar\" src=\"../assets/images/banners/bannerApple.png\" style=\" width: 3cm; height: 1cm;\"/>\n                    &nbsp;\n                    <img class=\"user-avatar\" src=\"../assets/images/banners/bannerGoogle.png\" style=\" width: 3cm; height: 1cm;\"/>\n                    &nbsp;\n                    <img class=\"user-avatar\" src=\"../assets/images/banners/bannerMicrosoft.png\" style=\" width: 3cm; height: 1cm;\"/>\n            </div>\n        </div>\n    </div>\n</body>\n\n\n<ng-template #modalOk let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header alert alert-success\">\n        <h4 class=\"modal-title \">SuccessModalTitle</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>SuccessModalBody</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<ng-template #modalError let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header alert alert-danger\">\n        <h4 class=\"modal-title\">Error</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>{{ errorMessage }}</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small cyan darken-3\" style=\"background: #F8F8F8;\">\n\n    <!-- Footer Elements -->\n    <div class=\"container\">\n\n        <!-- Grid row-->\n        <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-12 py-5\">\n                <br>\n                <br>\n                <br>\n            </div>\n            <!-- Grid column -->\n\n        </div>\n        <!-- Grid row-->\n\n    </div>\n    <!-- Footer Elements -->\n    <div class=\"footer-copyright text-center py-3\">\n            <!-- Información -->\n            <a [routerLink]=\"['/feed']\" class=\"info-link\" style=\"font-weight: bold; color: darkslategray;\">\n                INFORMACIÓN \n            </a>\n            &nbsp; &nbsp;\n            <!-- Asistencia -->\n            <a [routerLink]=\"['/feed']\" class=\"assistance-link\" style=\"font-weight: bold; color: darkslategray;\">\n                ASISTENCIA \n            </a>\n            &nbsp; &nbsp;\n            <!-- Prensa-->\n            <a [routerLink]=\"['/feed']\" class=\"press-link\" style=\"font-weight: bold; color: darkslategray;\">\n                PRENSA \n            </a>\n            &nbsp; &nbsp;\n            <!-- Api -->\n            <a [routerLink]=\"['/feed']\" class=\"api-link\" style=\"font-weight: bold; color: darkslategray;\">\n                API \n            </a>\n            &nbsp; &nbsp;\n            <!-- Empleo -->\n            <a [routerLink]=\"['/feed']\" class=\"jobs-link\" style=\"font-weight: bold; color: darkslategray;\">\n                EMPLEO \n            </a>\n            &nbsp; &nbsp;\n            <!-- Privacidad -->\n            <a [routerLink]=\"['/feed']\" class=\"privacy-link\" style=\"font-weight: bold; color: darkslategray;\">\n                PRIVACIDAD \n            </a>   \n            &nbsp; &nbsp;\n            <!--Condiciones-->\n            <a [routerLink]=\"['/feed']\" class=\"tos-link\" style=\"font-weight: bold; color: darkslategray;\">\n                CONDICIONES \n            </a>  \n            &nbsp; &nbsp;\n            <!--Directorio-->\n            <a [routerLink]=\"['/feed']\" class=\"dir-link\" style=\"font-weight: bold; color: darkslategray;\">\n                DIRECTORIO \n            </a>  \n            &nbsp; &nbsp;\n            <!--Perfiles-->\n            <a [routerLink]=\"['/feed']\" class=\"profiles-link\" style=\"font-weight: bold; color: darkslategray;\">\n                PERFILES \n            </a>  \n            &nbsp; &nbsp;\n            <!--Hashtags-->\n            <a [routerLink]=\"['/feed']\" class=\"hastags-link\" style=\"font-weight: bold; color: darkslategray;\">\n                HASHTAGS \n            </a>  \n            &nbsp; &nbsp;\n            <!--Idioma-->\n            <a [routerLink]=\"['/feed']\" class=\"language-link\" style=\"font-weight: bold; color: darkslategray;\">\n                IDIOMA \n            </a> \n            &nbsp; &nbsp; &nbsp; &nbsp;\n                \n            © 2018 INSTAGRAM     \n        </div>\n</footer>\n<!-- Footer -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router, modalService) {
        this.userService = userService;
        this.router = router;
        this.modalService = modalService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = new _model_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.confirmPassword = '';
    };
    SignupComponent.prototype.onClickRegisterButton = function () {
        var _this = this;
        if (!this.registerForm.valid) {
            this.errorMessage = 'NoValidForm';
            this.modalService.open(this.modalError);
            return;
        }
        this.userService.registerUser(this.user).subscribe(function (newUser) {
            _this.modalService.open(_this.modalOk).result.then(function (result) {
                _this.router.navigateByUrl('/login');
            }, function (reason) {
                _this.router.navigateByUrl('/login');
            });
        }, function (error) {
            _this.errorMessage = _this.getErrorMessage(error);
            _this.modalService.open(_this.modalError);
        });
    };
    SignupComponent.prototype.getErrorMessage = function (error) {
        if (error.error === null || error.error === undefined) {
            return 'ERROR';
        }
        var code = error.error.code;
        if (code === null || code === undefined) {
            return 'ERROR';
        }
        if (code === 1003) {
            return 'RepeatedUsername';
        }
        else if (code === 1002) {
            return 'InvalidUsername';
        }
        else if (code === 1004) {
            return 'RepeatedEmail';
        }
    };
    SignupComponent.prototype.onClickCancelButton = function () {
        this.router.navigateByUrl('/login');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalOk'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignupComponent.prototype, "modalOk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalError'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignupComponent.prototype, "modalError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], SignupComponent.prototype, "registerForm", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignupRoutingModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map