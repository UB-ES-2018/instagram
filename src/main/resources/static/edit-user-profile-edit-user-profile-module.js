(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-profile-edit-user-profile-module"],{

/***/ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-password/edit-password.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenidoPass\">\n    <div id=\"nameTitle\">\n        <div class=\"left\">\n            <img alt=\"profile image\" [src]=\"fotoPerfil\" width=\"40px\" />\n        </div>\n        <div class=\"right\">\n            <div><a>{{username}}</a></div>\n        </div>\n    </div>\n    <div class=\"left\">\n        <div><label>Contraseña antigua</label></div>\n        <div><label>Contraseña nueva</label></div>\n        <div><label>Confirmar nueva contraseña</label></div>\n    </div>\n    <div class=\"right\">\n        <input [(ngModel)]=\"pass\" type=\"password\" />\n        <input [(ngModel)]=\"newPass\" type=\"password\" />\n        <input [(ngModel)]=\"confirmNewPass\" type=\"password\" />\n    </div>\n    <div class=\"hidenm\" *ngIf=\"oldPasswordWrong\">\n        <a style=\"color: red; width: 100%; float: left; text-align: center; font-weight: 600;\">Contraseña incorrecta</a>\n    </div>\n    <div class=\"hidenm\" *ngIf=\"passwordsMissmatch\">\n        <a style=\"color: red; width: 100%; float: left; text-align: center; font-weight: 600;\">Contraseñas no\n            coincidentes</a>\n    </div>\n    <div>\n        <!--<input type=\"button\" value=\"Cambiar contraseña\" (click)=\"cambiarPassword()\" />-->\n        <div id=\"boton\"><input type=\"button\" [disabled]=\"changedPass()\" class=\"btn btn-primary btn-sm\" value=\"Cambiar contraseña\" (click)=\"cambiarPassword()\" /></div>\n    </div>\n    <div class=\"info\">\n        <a style=\"color:rgb(65, 168, 202); font-weight: 600\">¿Has olvidado la contraseña?</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-password/edit-password.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenidoPass {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\n  width: 60%;\n  float: left;\n  position: relative;\n  padding-left: 20px;\n  border: solid 1px;\n  border-color: wheat;\n  height: 600px;\n  padding-top: 20px;\n  background-color: white; }\n\n.left {\n  width: 30%;\n  float: left;\n  position: relative;\n  text-align: right;\n  margin-right: 20px; }\n\n.right {\n  width: 60%;\n  float: left;\n  position: relative; }\n\n.right input {\n  margin-bottom: 22px;\n  width: 100%;\n  background: #fafafa;\n  margin-bottom: 22px;\n  border: 1px solid #efefef;\n  padding-left: 10px;\n  border-bottom: 1px;\n  border-right: 1px;\n  width: 100%;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: #262626; }\n\n.left div {\n  font-weight: 600;\n  margin-bottom: 16px; }\n\n#nameTitle {\n  width: 100%;\n  float: left;\n  position: relative;\n  margin-bottom: 16px;\n  font-weight: 500;\n  font-size: 24px; }\n\n#boton {\n  float: left;\n  padding-left: 25%;\n  width: 100%;\n  margin-top: 50px; }\n\n.hidenm {\n  width: 100%; }\n\n.info {\n  width: 100%;\n  position: relative;\n  float: left;\n  color: blue;\n  padding-left: 25%;\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-password/edit-password.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordComponent", function() { return EditPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPasswordComponent = /** @class */ (function () {
    function EditPasswordComponent(authentiactionService, userService) {
        this.authentiactionService = authentiactionService;
        this.userService = userService;
        this.passwordsMissmatch = false;
        this.oldPasswordWrong = false;
    }
    EditPasswordComponent.prototype.ngOnInit = function () {
        this.username = this.authentiactionService.logUser.username;
        this.fotoPerfil = this.authentiactionService.logUser.photo;
    };
    EditPasswordComponent.prototype.cambiarPassword = function () {
        var _this = this;
        this.oldPasswordWrong = false;
        this.passwordsMissmatch = false;
        if (this.confirmNewPass === this.newPass) {
            this.userService.modifyPass(this.pass, this.username, this.newPass).subscribe(function (response) {
                if (!response) {
                    _this.oldPasswordWrong = true;
                }
            }, function (error) {
                _this.oldPasswordWrong = true;
            });
        }
        else {
            this.passwordsMissmatch = true;
        }
    };
    EditPasswordComponent.prototype.changedPass = function () {
        return !((this.confirmNewPass) && (this.newPass) && (this.pass));
    };
    EditPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-password',
            template: __webpack_require__(/*! ./edit-password.component.html */ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.html"),
            styles: [__webpack_require__(/*! ./edit-password.component.scss */ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["authService"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], EditPasswordComponent);
    return EditPasswordComponent;
}());



/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenidoPass\">\n    <div id=\"nameTitle\">\n        <div><a>Privacidad de la cuenta</a></div>\n    </div>\n    \n    <div style=\"float:left; margin-left: 40px; border-bottom: 1px solid #d8d8d8;\">\n        <div (click)=\"changePrivacy()\">\n            <input type=\"checkbox\" [checked]=\"privacy\" value=\"private\" style=\"outline-width: 0;\" disabled> <b>Cuenta privada</b>\n        </div>        \n        <br>\n        <a style=\"color: gray; \">Cuando tu cuenta es privada, solo las personas que tu apruevas pueden ver tus fotos y videos en Instagram. \n            Tus seguidores existentes no serán afectados.</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenidoPass {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\n  width: 60%;\n  float: left;\n  position: relative;\n  padding-left: 20px;\n  border: solid 1px;\n  border-color: wheat;\n  height: 600px;\n  padding-top: 20px;\n  background-color: white; }\n\n.left {\n  width: 30%;\n  float: left;\n  position: relative;\n  text-align: right;\n  margin-right: 20px; }\n\n.right {\n  width: 60%;\n  float: left;\n  position: relative; }\n\n.right input {\n  margin-bottom: 22px;\n  width: 100%;\n  background: #fafafa;\n  margin-bottom: 22px;\n  border: 1px solid #efefef;\n  padding-left: 10px;\n  border-bottom: 1px;\n  border-right: 1px;\n  width: 100%;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: #262626; }\n\n.left div {\n  font-weight: 600;\n  margin-bottom: 16px; }\n\n#nameTitle {\n  width: 100%;\n  float: left;\n  position: relative;\n  margin-bottom: 16px;\n  margin-left: 40px;\n  font-weight: 500;\n  font-size: 24px; }\n\n#boton {\n  float: left;\n  padding-left: 25%;\n  width: 100%;\n  margin-top: 50px; }\n\n.hidenm {\n  width: 100%; }\n\n.info {\n  width: 100%;\n  position: relative;\n  float: left;\n  color: blue;\n  padding-left: 25%;\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPrivacyComponent", function() { return EditPrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPrivacyComponent = /** @class */ (function () {
    function EditPrivacyComponent(authentiactionService, userService) {
        this.authentiactionService = authentiactionService;
        this.userService = userService;
    }
    EditPrivacyComponent.prototype.ngOnInit = function () {
        this.privacy = this.authentiactionService.logUser.privacity;
    };
    EditPrivacyComponent.prototype.changePrivacy = function () {
        var _this = this;
        this.userService.updatePrivacity(this.authentiactionService.logUser.id).subscribe(function (user) {
            _this.authentiactionService.logUser = user;
            sessionStorage.setItem('authenticatedUser', btoa(JSON.stringify(_this.authentiactionService.logUser)));
            _this.privacy = _this.authentiactionService.logUser.privacity;
        });
    };
    EditPrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-privacy',
            template: __webpack_require__(/*! ./edit-privacy.component.html */ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.html"),
            styles: [__webpack_require__(/*! ./edit-privacy.component.scss */ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["authService"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], EditPrivacyComponent);
    return EditPrivacyComponent;
}());



/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenidoEditPerfil\">\n    <form [formGroup]=\"form\" (submit)=\"enviar()\">\n        <div>\n            <div id=\"nameTitle\">\n                <div class=\"left\" id=\"cambiarFotoPerfil\" (click)=\"changePhotoProfilePopup()\" style=\"cursor: pointer;\">\n                    <img alt=\"Profile image\" [src]=\"fotoPerfil\" width=\"40px\" />\n                </div>\n                <div class=\"right\">\n                    <div><a id=\"nombUsu\">{{name}}</a></div>\n                    <div id=\"cambiarFotoPerfil\" (click)=\"changePhotoProfilePopup()\" style=\"cursor: pointer;\"><a style=\"color:rgb(0, 170, 255); font-weight: 600\">Cambiar\n                            foto del perfil</a></div>\n\n                </div>\n            </div>\n            <div class=\"left\">\n                <div><label>Nombre</label></div>\n                <div><label>Nombre de usuario</label></div>\n                <div><label>Sitio Web</label></div>\n                <div><label>Biografia</label></div>\n            </div>\n            <div class=\"right\">\n                <input formControlName=\"name\" />\n                <input formControlName=\"username\" disabled/>\n                <input formControlName=\"website\" />\n                <textarea formControlName=\"bio\" style=\"resize:none\"></textarea>\n            </div>\n            <div class=\"separa\">\n                <a>Información privada</a>\n            </div>\n            <div class=\"left\">\n                <div><label>Correo electrónico</label></div>\n                <div><label>Número de teléfono</label></div>\n                <div><label>Sexo</label></div>\n            </div>\n            <div class=\"right\">\n                <input formControlName=\"email\" />\n                <input formControlName=\"phoneNumber\" />\n                <select>\n                    <option value=\"Hombre\">Hombre</option>\n                    <option value=\"Mujer\">Mujer</option>\n                    <option value=\"no\">Sin especificar</option>\n                </select>\n            </div>\n            <div id=\"boton\"><input type=\"submit\" class=\"btn btn-primary btn-sm\" value=\"Enviar\" /></div>\n            <div class=\"hidenm\" *ngIf=\"profileUpdated\">\n                <a style=\"color: rgb(5, 196, 53); width: 100%; float: left; text-align: center; font-weight: 600;\">Perfil\n                    actualizado satisfactoriamente</a>\n            </div>\n        </div>\n    </form>\n</div>\n\n<ng-template #modalChangePhotoProfile let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"titleChangeMenu\">Cambiar foto de perfil</h4>\n    </div>\n    <div id=\"menu_change_photo\">\n        <div id=\"espacioFoto\" *ngIf=\"imagePresent\">\n            <img id=\"fotoCambiar\" alt=\"\" [src]=\"foto\" />\n        </div>\n        <div *ngIf=\"imagePresent\" id=\"enviarFoto\" style=\"cursor: pointer;\">\n            <input type=\"button\" value=\"Cambiar\" (click)=\"enviarFoto()\" (click)=\"d('Cross click')\" class=\"btn btn-primary btn-sm\" />\n        </div>\n        <div class=\"editPerfilOpt\" id=\"inputFotoPerfil\" *ngIf=\"!imagePresent\">\n            <label for=\"inputFotoHid\"><a style=\"color:rgb(0, 170, 255); font-weight: 600\">Subir foto</a></label>\n            <input type=\"file\" id=\"inputFotoHid\" style=\"display: none;\" [(ngModel)]=\"image64\" (change)=subirFoto($event)\n                accept=\"image/*\" />\n        </div>\n        <div class=\"editPerfilOpt\" *ngIf=\"!imagePresent\">\n            <label style=\"color:rgb(248, 0, 0); font-weight: 600\" (click)=\"eliminarFoto()\" (click)=\"d('Cross click')\">\n                Eliminar foto\n            </label>\n        </div>\n        <div class=\"editPerfilOpt\">\n            <label (click)=\"d('Cross click')\">\n                Cancelar\n            </label>\n        </div>\n    </div>\n\n\n\n</ng-template>"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenidoEditPerfil {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\n  width: 60%;\n  float: left;\n  position: relative;\n  padding-left: 20px;\n  border: solid 1px;\n  border-color: wheat;\n  height: 600px;\n  padding-top: 20px;\n  background-color: white; }\n\n.left {\n  width: 30%;\n  float: left;\n  position: relative;\n  text-align: right;\n  margin-right: 20px; }\n\n.right {\n  width: 60%;\n  float: left;\n  position: relative; }\n\n.right input {\n  margin-bottom: 22px;\n  border: 1px solid #efefef;\n  padding-left: 10px;\n  border-bottom: 1px;\n  border-right: 1px;\n  width: 100%;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: #262626; }\n\n.right textarea {\n  margin-bottom: 22px;\n  border: none;\n  width: 100%; }\n\n.left div {\n  font-weight: 600;\n  margin-bottom: 16px; }\n\n.separa {\n  font-weight: 600;\n  width: 100%;\n  float: left;\n  position: relative;\n  text-align: center;\n  margin-bottom: 16px; }\n\n#nameTitle {\n  width: 100%;\n  float: left;\n  position: relative;\n  margin-bottom: 16px; }\n\n#nombUsu {\n  font-size: 24px; }\n\n#boton {\n  float: left;\n  padding-left: 25%; }\n\nselect {\n  margin-bottom: 22px; }\n\n.hidenm {\n  font-weight: 600;\n  margin-top: 10px;\n  position: relative;\n  float: left;\n  padding-left: 20px; }\n\n#titleChangeMenu {\n  position: relative;\n  width: 100%;\n  float: left;\n  text-align: center;\n  padding: 5px;\n  font-weight: 600; }\n\n#menu_change_photo {\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n  list-style-position: inside;\n  margin-bottom: 10px; }\n\n.editPerfilOpt {\n  float: left;\n  position: relative;\n  width: 100%;\n  padding-top: 5px; }\n\n.editPerfilOpt:hover {\n  font-weight: bold;\n  background-color: gray;\n  cursor: pointer; }\n\n#espacioFoto {\n  float: left;\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  max-height: 800px;\n  text-align: center; }\n\n#fotoCambiar {\n  max-width: 395px;\n  max-height: 395px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditProfileDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileDataComponent", function() { return EditProfileDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileDataComponent = /** @class */ (function () {
    function EditProfileDataComponent(formBuilder, authentiactionService, userService, modalService) {
        this.formBuilder = formBuilder;
        this.authentiactionService = authentiactionService;
        this.userService = userService;
        this.modalService = modalService;
    }
    EditProfileDataComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [this.authentiactionService.logUser.name],
            username: [this.authentiactionService.logUser.username],
            email: [this.authentiactionService.logUser.email],
            bio: [this.authentiactionService.logUser.bio],
            website: [this.authentiactionService.logUser.website],
            phoneNumber: [this.authentiactionService.logUser.phoneNumber],
            gender: [this.authentiactionService.logUser.gender]
        });
        this.username = this.authentiactionService.logUser.username;
        this.name = this.authentiactionService.logUser.name;
        this.profileUpdated = false;
        this.fotoPerfil = this.authentiactionService.logUser.photo;
    };
    EditProfileDataComponent.prototype.enviar = function () {
        var _this = this;
        this.profileUpdated = false;
        var user = this.authentiactionService.logUser;
        if (this.form.get('name').touched) {
            user.name = this.form.get('name').value;
        }
        if (this.form.get('username').touched) {
            user.username = this.form.get('username').value;
        }
        if (this.form.get('bio').touched) {
            user.bio = this.form.get('bio').value;
        }
        if (this.form.get('email').touched) {
            user.email = this.form.get('email').value;
        }
        if (this.form.get('phoneNumber').touched) {
            user.phoneNumber = this.form.get('phoneNumber').value;
        }
        if (this.form.get('gender').touched) {
            user.gender = this.form.get('gender').value;
        }
        if (this.form.get('website').touched) {
            user.website = this.form.get('website').value;
        }
        this.userService.changeUserData(user).subscribe(function (response) {
            _this.authentiactionService.logUser = response;
            _this.name = response.name;
        });
        this.profileUpdated = true;
    };
    EditProfileDataComponent.prototype.changePhotoProfilePopup = function () {
        this.modalService.open(this.modalChangePhotoProfile, { centered: true, size: 'sm', windowClass: 'modal-cs' });
    };
    EditProfileDataComponent.prototype.subirFoto = function (event) {
        var _this = this;
        this.fotoSubida = false;
        this.imagePresent = false;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                _this.foto = reader.result.toString();
            };
        }
        if (this.foto !== '') {
            this.imagePresent = true;
        }
    };
    EditProfileDataComponent.prototype.enviarFoto = function () {
        var _this = this;
        this.userService.updatePerfilPhoto(this.authentiactionService.logUser.id, this.foto).subscribe(function (resposta) {
            console.log('updated!');
            _this.fotoSubida = true;
            _this.imagePresent = false;
            _this.fotoPerfil = _this.foto;
            _this.authentiactionService.logUser.photo = _this.foto;
        });
    };
    EditProfileDataComponent.prototype.eliminarFoto = function () {
        var _this = this;
        this.foto = 'assets/images/defaultlogo.png';
        this.userService.updatePerfilPhoto(this.authentiactionService.logUser.id, this.foto).subscribe(function (resposta) {
            console.log('updated!');
            _this.fotoSubida = true;
            _this.imagePresent = false;
            _this.fotoPerfil = _this.foto;
            _this.authentiactionService.logUser.photo = _this.foto;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalChangePhotoProfile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditProfileDataComponent.prototype, "modalChangePhotoProfile", void 0);
    EditProfileDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile-data',
            template: __webpack_require__(/*! ./edit-profile-data.component.html */ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile-data.component.scss */ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], EditProfileDataComponent);
    return EditProfileDataComponent;
}());



/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"configuracion\">\n  <div class=\"contenidoMenu\">\n      <div class=\"menuItem\" id=\"editPerfil\" routerLinkActive=\"active\" [routerLink]=\"[ 'edit' ]\"><a class=\"menuOption\"  >Editar Perfil</a></div>\n      <div class=\"menuItem\" id=\"editPass\" routerLinkActive=\"active\" [routerLink]=\"[ 'password' ]\"><a  class=\"menuOption\"  >Cambiar Contraseña</a></div>\n      <div class=\"menuItem\" id=\"editPass\"  [routerLink]=\"[ 'password' ]\"><a  class=\"menuOption\"  >Aplicaciones autorizadas</a></div>\n      <div class=\"menuItem\" id=\"editPass\"  [routerLink]=\"[ 'password' ]\"><a  class=\"menuOption\"  >Correo electrónico y SMS</a></div>\n      <div class=\"menuItem\" id=\"editPass\"  [routerLink]=\"[ 'password' ]\"><a  class=\"menuOption\"  >Administrar contactos</a></div>\n      <div class=\"menuItem\" id=\"editPass\" [routerLink]=\"[ 'privacy' ]\"><a  class=\"menuOption\"  >Privacidad y seguridad</a></div>\n  </div>\n  <div><router-outlet></router-outlet></div>\n</div>\n"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#configuracion {\n  width: 80%;\n  float: left;\n  position: relative;\n  margin-left: 10%;\n  margin-top: 50px;\n  height: 1000px; }\n\n.contenidoMenu {\n  width: 25%;\n  float: left;\n  position: relative;\n  margin-left: 10%;\n  height: 600px;\n  border: solid wheat 1px;\n  border-right: none;\n  background-color: white;\n  outline-width: 0; }\n\n.menuOption {\n  color: black;\n  text-decoration: none;\n  outline-width: 0; }\n\n.menuItem {\n  width: 99%;\n  float: left;\n  position: relative;\n  height: 70px;\n  padding-top: 20px;\n  padding-left: 30px;\n  border-left: solid transparent 2px;\n  outline-width: 0; }\n\n.menuItem:hover {\n  border-left: solid #d8d7d7 2px;\n  background-color: #f8f8f8;\n  cursor: pointer; }\n\n.menuItem:active {\n  color: #969696; }\n\n.active {\n  border: none;\n  border-left: solid black 2px;\n  font-weight: 600; }\n\n#editPass:focus, #editPerfil:focus {\n  outline: -webkit-focus-ring-color auto 0px; }\n"

/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
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

var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-user-profile-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-user-profile-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditUserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileRoutingModule", function() { return EditUserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _edit_profile_data_edit_profile_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile-data/edit-profile-data.component */ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.ts");
/* harmony import */ var _edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-password/edit-password.component */ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.ts");
/* harmony import */ var _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-privacy/edit-privacy.component */ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"],
        children: [
            { path: '', redirectTo: 'edit' },
            { path: 'edit', component: _edit_profile_data_edit_profile_data_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileDataComponent"] },
            { path: 'password', component: _edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_4__["EditPasswordComponent"] },
            { path: 'privacy', component: _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_5__["EditPrivacyComponent"] }
        ]
    }
];
var EditUserProfileRoutingModule = /** @class */ (function () {
    function EditUserProfileRoutingModule() {
    }
    EditUserProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EditUserProfileRoutingModule);
    return EditUserProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/secured/edit-user-profile/edit-user-profile.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/secured/edit-user-profile/edit-user-profile.module.ts ***!
  \***********************************************************************/
/*! exports provided: EditUserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileModule", function() { return EditUserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/secured/edit-user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _edit_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user-profile-routing.module */ "./src/app/secured/edit-user-profile/edit-user-profile-routing.module.ts");
/* harmony import */ var _edit_profile_data_edit_profile_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile-data/edit-profile-data.component */ "./src/app/secured/edit-user-profile/edit-profile-data/edit-profile-data.component.ts");
/* harmony import */ var _edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-password/edit-password.component */ "./src/app/secured/edit-user-profile/edit-password/edit-password.component.ts");
/* harmony import */ var _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-privacy/edit-privacy.component */ "./src/app/secured/edit-user-profile/edit-privacy/edit-privacy.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditUserProfileModule = /** @class */ (function () {
    function EditUserProfileModule() {
    }
    EditUserProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _edit_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditUserProfileRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"], _edit_profile_data_edit_profile_data_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileDataComponent"], _edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_5__["EditPasswordComponent"], _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_6__["EditPrivacyComponent"]]
        })
    ], EditUserProfileModule);
    return EditUserProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=edit-user-profile-edit-user-profile-module.js.map