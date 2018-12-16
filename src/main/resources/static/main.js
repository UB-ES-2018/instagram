(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"./src/app/access-denied/access-denied.module.ts",
		"access-denied-access-denied-module"
	],
	"./edit-user-profile/edit-user-profile.module": [
		"./src/app/secured/edit-user-profile/edit-user-profile.module.ts",
		"edit-user-profile-edit-user-profile-module~login-login-module~secured-secured-module~signup-signup-m~aad4647b",
		"common",
		"edit-user-profile-edit-user-profile-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"edit-user-profile-edit-user-profile-module~login-login-module~secured-secured-module~signup-signup-m~aad4647b",
		"common",
		"login-login-module"
	],
	"./not-found/not-found.module": [
		"./src/app/not-found/not-found.module.ts",
		"not-found-not-found-module"
	],
	"./secured/secured.module": [
		"./src/app/secured/secured.module.ts",
		"edit-user-profile-edit-user-profile-module~login-login-module~secured-secured-module~signup-signup-m~aad4647b",
		"common",
		"secured-secured-module"
	],
	"./signup/signup.module": [
		"./src/app/signup/signup.module.ts",
		"edit-user-profile-edit-user-profile-module~login-login-module~secured-secured-module~signup-signup-m~aad4647b",
		"common",
		"signup-signup-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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


var routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '', loadChildren: './secured/secured.module#SecuredModule' },
    { path: '**', redirectTo: 'not-found' }
];
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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_follow_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/follow.service */ "./src/app/service/follow.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _service_CommentService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/CommentService */ "./src/app/service/CommentService.ts");
/* harmony import */ var _service_LikeComment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/LikeComment */ "./src/app/service/LikeComment.ts");
/* harmony import */ var _service_LikeService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/LikeService */ "./src/app/service/LikeService.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/notification.service */ "./src/app/service/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// AoT requires an exported function for factories
var createTranslateLoader = function (http) {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            providers: [
                _service_auth_service__WEBPACK_IMPORTED_MODULE_10__["authService"],
                _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _service_follow_service__WEBPACK_IMPORTED_MODULE_11__["FollowService"],
                _shared__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _service_post_service__WEBPACK_IMPORTED_MODULE_13__["PostService"],
                _service_CommentService__WEBPACK_IMPORTED_MODULE_14__["CommentService"],
                _service_LikeComment__WEBPACK_IMPORTED_MODULE_15__["LikeCommentService"],
                _service_LikeService__WEBPACK_IMPORTED_MODULE_16__["LikeService"],
                _service_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/const/const.ts":
/*!********************************!*\
  !*** ./src/app/const/const.ts ***!
  \********************************/
/*! exports provided: CONST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST", function() { return CONST; });
var CONST = {
    URL_USERS_ADD: '/users/add',
    URL_USERS_GET_ALL: '/users/all',
    URL_USER_LOGIN: '/users/login/#da#',
    URL_USER_GET_BY_ID: '/users/getById/',
    URL_USER_GET_BY_USERNAME: '/users/getByusername/',
    URL_PUT_USER_PASSWORD: '/users/update/password',
    URL_PUT_UPDATE_ALL: '/users/update/all',
    URL_PUT_UPDATE_PERFIL_PHOTO: '/users/update/photo/{idUser}',
    URL_PUT_UPDATE_PRIVACITY: '/users/update/privacity/{idUser}',
    URL_USER_SEARCH: '/users/search/',
    URL_FOLLOW_CHECK: '/followers/check/',
    URL_FOLLOWER_REQUEST: '/followers/request',
    URL_FOLLOWERS: '/followers/getFollowers/',
    URL_FOLLOWEDS: '/followers/getFolloweds/',
    URL_DELETE_FOLLOW: '/followers/delete',
    URL_POST: '/post/getPost/',
    URL_UPLOAD_IMAGE: '/post/add/',
    URL_GET_POST_BY_IDPOST_AND_IDUSER_LOGGED: '/post/load/{idPost}',
    URL_GET_POSTS_BY_IDUSER: '/post/getPostIDUser/{idUser}',
    URL_GET_USERS_BY_TEXT: '/users/search/',
    URL_GET_FEED_POSTS_BY_IDUSER: '/feed/request/{idUser}',
    URL_COMMENT_ADD: '/comments/add/',
    URL_COMMENT_GET_BY_ID: '/comments/getById/',
    URL_COMMENT_GET_BY_ID_POST: '/comments/getByPost/',
    URL_COMMENT_GET_BY_ID_USER: '/comments/getByUser/',
    URL_PUT_COMMENT_CONTENT: '/comments/update/content/',
    URL_DELETE_COMMENT: '/comments/delete/{id}',
    URL_LIKE_ADD: '/likes/add/',
    URL_LIKE_ALL: '/likes/all/',
    URL_LIKE_GET_BY_ID: '/likes/getById/',
    URL_LIKE_GET_BY_ID_POST: '/likes/getByIdPost/',
    URL_LIKE_GET_LIKERS: '/likes/getLikers/',
    URL_DELETE_LIKE: '/likes/delete',
    URL_COMMENT_LIKE_ADD: '/commentLikes/add',
    URL_COMMENT_LIKE_ALL: '/commentLikes/all/',
    URL_COMMENT_LIKE_GET_BY_ID: '/commentLikes/getById/',
    URL_COMMENT_LIKE_GET_BY_ID_COMMENT: '/commentLikes/getByIdComment/',
    URL_COMMENT_LIKE_GET_COMMENT_LIKERS: '/commentLikes/getCommentLikers/',
    URL_DELETE_COMMENT_LIKE: '/commentLikes/delete/{idComment}/{idUser}',
    URL_HASH_TAG_ADD: '/hashTags/add/',
    URL_HASH_TAG_ALL: '/hashTags/all/',
    URL_POST_TAG_ADD: '/postTags/add/',
    URL_POST_TAG_ALL: '/postTags/all/',
    URL_UPDATE_NAME: '/users/{username}/update/name',
    URL_UPDATE_BIO: '/users/{username}/update/bio',
    URL_UPDATE_PHONE: '/users/{username}/update/phoneNumber',
    URL_UPDATE_GENDER: '/users/{username}/update/gender',
    URL_UPDATE_PASS: '/users/{username}/update/password',
    URL_UPDATE_WEB: '/users/{username}/update/web',
    URL_UPDATE_USERNAME: '/users/{username}/update/userName',
    URL_UPDATE_EMAIL: '/users/{username}/update/email',
    URL_POST_ADD_COMMENT: '/comments/add',
    URL_GET_NOTIFICATION_ALL: '/notification/all/{idUser}',
    URL_GET_NOTIFICATION_REQUEST: '/notification/request/{idUser}',
    URL_GET_NOTIFICATION_ACCEPT: '/notification/accept/{id}',
    URL_GET_NOTIFICATION_HIDE: '/notification/hide/{id}'
};


/***/ }),

/***/ "./src/app/error-handle/error.handling.ts":
/*!************************************************!*\
  !*** ./src/app/error-handle/error.handling.ts ***!
  \************************************************/
/*! exports provided: handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
function handleError(operation, result) {
    if (operation === void 0) { operation = 'operation'; }
    return function (error) {
        // Let the app keep running by returning an empty result.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
    };
}


/***/ }),

/***/ "./src/app/model/CommentDto.ts":
/*!*************************************!*\
  !*** ./src/app/model/CommentDto.ts ***!
  \*************************************/
/*! exports provided: CommentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDto", function() { return CommentDto; });
var CommentDto = /** @class */ (function () {
    function CommentDto() {
    }
    CommentDto.createDummy = function () {
        var commentDto = new CommentDto();
        commentDto.id = -1;
        commentDto.idUser = -1;
        commentDto.idPost = -1;
        commentDto.content = "test";
        return commentDto;
    };
    return CommentDto;
}());



/***/ }),

/***/ "./src/app/model/CommentLikeDto.ts":
/*!*****************************************!*\
  !*** ./src/app/model/CommentLikeDto.ts ***!
  \*****************************************/
/*! exports provided: CommentLikeDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentLikeDto", function() { return CommentLikeDto; });
var CommentLikeDto = /** @class */ (function () {
    function CommentLikeDto() {
    }
    CommentLikeDto.createDummy = function () {
        var commentLikeDto = new CommentLikeDto();
        commentLikeDto.id = -1;
        commentLikeDto.idUser = -1;
        commentLikeDto.idComment = -1;
        return commentLikeDto;
    };
    return CommentLikeDto;
}());



/***/ }),

/***/ "./src/app/model/Follow.ts":
/*!*********************************!*\
  !*** ./src/app/model/Follow.ts ***!
  \*********************************/
/*! exports provided: Follow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Follow", function() { return Follow; });
var Follow = /** @class */ (function () {
    function Follow() {
    }
    Follow.createDummy = function () {
        var follow = new Follow();
        follow.follower = -1;
        follow.followed = -1;
        follow.accepted = null;
        return follow;
    };
    return Follow;
}());



/***/ }),

/***/ "./src/app/model/Like.ts":
/*!*******************************!*\
  !*** ./src/app/model/Like.ts ***!
  \*******************************/
/*! exports provided: Like */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Like", function() { return Like; });
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.createDummy = function () {
        var like = new Like();
        like.id = -1;
        like.idUser = -1;
        like.idPost = -1;
        return like;
    };
    return Like;
}());



/***/ }),

/***/ "./src/app/model/Post.ts":
/*!*******************************!*\
  !*** ./src/app/model/Post.ts ***!
  \*******************************/
/*! exports provided: PostDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDto", function() { return PostDto; });
var PostDto = /** @class */ (function () {
    function PostDto() {
    }
    return PostDto;
}());



/***/ }),

/***/ "./src/app/model/PostLoad.ts":
/*!***********************************!*\
  !*** ./src/app/model/PostLoad.ts ***!
  \***********************************/
/*! exports provided: PostLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoad", function() { return PostLoad; });
var PostLoad = /** @class */ (function () {
    function PostLoad() {
    }
    PostLoad.createDummy = function () {
        var post = new PostLoad();
        post.idPost = null;
        post.idUser = null;
        post.photo = null;
        post.description = null;
        post.createdAt = null;
        post.ownerName = null;
        post.coments = null;
        return post;
    };
    return PostLoad;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.createDummy = function () {
        var user = new User();
        user.id = -1;
        user.name = '';
        user.password = '';
        user.email = '';
        user.username = '';
        user.bio = '';
        user.website = '';
        user.phoneNumber = 0;
        user.gender = '';
        user.photo = '';
        user.privacity = null;
        return user;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/model/passDto.ts":
/*!**********************************!*\
  !*** ./src/app/model/passDto.ts ***!
  \**********************************/
/*! exports provided: PassDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassDto", function() { return PassDto; });
var PassDto = /** @class */ (function () {
    function PassDto() {
    }
    return PassDto;
}());



/***/ }),

/***/ "./src/app/service/CommentService.ts":
/*!*******************************************!*\
  !*** ./src/app/service/CommentService.ts ***!
  \*******************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_CommentDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/CommentDto */ "./src/app/model/CommentDto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentService = /** @class */ (function () {
    function CommentService(httpClient) {
        this.httpClient = httpClient;
    }
    CommentService.prototype.submitNewComment = function (idPost, idUser, content) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_POST_ADD_COMMENT;
        var commentDto = new _model_CommentDto__WEBPACK_IMPORTED_MODULE_5__["CommentDto"]();
        commentDto.content = content;
        commentDto.idPost = idPost;
        commentDto.idUser = idUser;
        return this.httpClient.post(url, commentDto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (commentDto) { return console.log('added new comment'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to add comment', new _model_CommentDto__WEBPACK_IMPORTED_MODULE_5__["CommentDto"]())));
    };
    CommentService.prototype.deleteCommentById = function (idComment) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_DELETE_COMMENT.replace('{id}', idComment.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (deleted) { return console.log('deleted Comment'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to delete comment', false)));
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/service/LikeComment.ts":
/*!****************************************!*\
  !*** ./src/app/service/LikeComment.ts ***!
  \****************************************/
/*! exports provided: LikeCommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeCommentService", function() { return LikeCommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_CommentLikeDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/CommentLikeDto */ "./src/app/model/CommentLikeDto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LikeCommentService = /** @class */ (function () {
    function LikeCommentService(httpClient) {
        this.httpClient = httpClient;
    }
    LikeCommentService.prototype.submitNewLikeToComment = function (idComment, idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_COMMENT_LIKE_ADD;
        var commentLikeDto = new _model_CommentLikeDto__WEBPACK_IMPORTED_MODULE_5__["CommentLikeDto"]();
        commentLikeDto.idComment = idComment;
        commentLikeDto.idUser = idUser;
        return this.httpClient.post(url, commentLikeDto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (commentDto) { return console.log('added new like to comment'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to add like to comment', new _model_CommentLikeDto__WEBPACK_IMPORTED_MODULE_5__["CommentLikeDto"]())));
    };
    LikeCommentService.prototype.deleteLikeToComment = function (idComment, idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_DELETE_COMMENT_LIKE.replace('{idComment}', idComment.toString());
        url = url.replace('{idUser}', idUser.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (deleted) { return console.log('deleted Comment'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to delete comment', false)));
    };
    LikeCommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LikeCommentService);
    return LikeCommentService;
}());



/***/ }),

/***/ "./src/app/service/LikeService.ts":
/*!****************************************!*\
  !*** ./src/app/service/LikeService.ts ***!
  \****************************************/
/*! exports provided: LikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeService", function() { return LikeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_Like__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Like */ "./src/app/model/Like.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LikeService = /** @class */ (function () {
    function LikeService(httpClient) {
        this.httpClient = httpClient;
    }
    LikeService.prototype.submitLikeToImage = function (idPost, idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_LIKE_ADD;
        var likeDto = new _model_Like__WEBPACK_IMPORTED_MODULE_5__["Like"]();
        likeDto.idPost = idPost;
        likeDto.idUser = idUser;
        return this.httpClient.post(url, likeDto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (commentDto) { return console.log('added new like'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to add like', new _model_Like__WEBPACK_IMPORTED_MODULE_5__["Like"]())));
    };
    LikeService.prototype.deleteLike = function (idPost, idUser) {
        var likeDto = new _model_Like__WEBPACK_IMPORTED_MODULE_5__["Like"]();
        likeDto.idPost = idPost;
        likeDto.idUser = idUser;
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_DELETE_LIKE;
        return this.httpClient.post(url, likeDto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (deleted) { return console.log('deleted like'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to delete like', false)));
    };
    LikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LikeService);
    return LikeService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var authService = /** @class */ (function () {
    function authService(httpClient) {
        this.httpClient = httpClient;
        this.logStatus = false;
        if (sessionStorage.getItem('authenticatedUser')) {
            this.logStatus = true;
            this.logUser = JSON.parse(atob(sessionStorage.getItem('authenticatedUser')));
            console.log('authService: recovered user -> ' + JSON.stringify(this.logUser));
        }
    }
    authService.prototype.setLogin = function (username, password) {
        var _this = this;
        var user = new _model_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.username = username;
        user.password = password;
        return this.httpClient.post(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_USER_LOGIN, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) {
            console.log('Loging user');
            _this.logUser = p;
            _this.logStatus = true;
            sessionStorage.setItem('authenticatedUser', btoa(JSON.stringify(_this.logUser)));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('getUsers', _model_User__WEBPACK_IMPORTED_MODULE_5__["User"].createDummy())));
    };
    authService.prototype.removeLogin = function () {
        this.logUser = null;
        this.logStatus = false;
        sessionStorage.removeItem('authenticatedUser');
    };
    authService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], authService);
    return authService;
}());



/***/ }),

/***/ "./src/app/service/follow.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/follow.service.ts ***!
  \*******************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_Follow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Follow */ "./src/app/model/Follow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowService = /** @class */ (function () {
    function FollowService(httpClient) {
        this.httpClient = httpClient;
    }
    FollowService.prototype.requestFollow = function (follower, followed) {
        var follow = new _model_Follow__WEBPACK_IMPORTED_MODULE_5__["Follow"]();
        follow.followed = followed;
        follow.follower = follower;
        return this.httpClient.post(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_FOLLOWER_REQUEST, follow)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) { return console.log("Follow requested"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('getUsers', new _model_Follow__WEBPACK_IMPORTED_MODULE_5__["Follow"]())));
    };
    FollowService.prototype.unFollow = function (follower, followed) {
        var follow = new _model_Follow__WEBPACK_IMPORTED_MODULE_5__["Follow"]();
        follow.accepted = false;
        follow.followed = followed;
        follow.follower = follower;
        return this.httpClient.post(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_DELETE_FOLLOW, follow)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (follow) { return console.log('Follow has been deleted'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('unFollow', new _model_Follow__WEBPACK_IMPORTED_MODULE_5__["Follow"]())));
    };
    FollowService.prototype.checkFollow = function (followed, follower) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_FOLLOW_CHECK + followed + '/' + follower)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) { return console.log(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('checkFollow', _model_Follow__WEBPACK_IMPORTED_MODULE_5__["Follow"].createDummy())));
    };
    FollowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "./src/app/service/notification.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationService = /** @class */ (function () {
    function NotificationService(httpClient) {
        this.httpClient = httpClient;
    }
    NotificationService.prototype.getNotification = function (idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_NOTIFICATION_ALL.replace('{idUser}', idUser.toString());
        ;
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (notification) { return console.log('get Notifications'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to get notifications', [])));
    };
    NotificationService.prototype.getRequest = function (idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_NOTIFICATION_REQUEST.replace('{idUser}', idUser.toString());
        ;
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (deleted) { return console.log('get Request'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to get request', [])));
    };
    NotificationService.prototype.accept = function (idNotification) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_NOTIFICATION_ACCEPT.replace('{id}', idNotification.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (accepted) { return console.log('accepted'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to get request')));
    };
    NotificationService.prototype.hide = function (idNotification) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_NOTIFICATION_HIDE.replace('{id}', idNotification.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (accepted) { return console.log('hide'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to hide')));
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/service/post.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_PostLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/PostLoad */ "./src/app/model/PostLoad.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
    }
    PostService.prototype.requestIdPostByIdPostAndLoggin = function (idPost, idLoggin) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_POST_BY_IDPOST_AND_IDUSER_LOGGED.replace('{idPost}', idPost.toString());
        if (idLoggin) {
            url = url.concat('/?idUser=' + idLoggin.toString());
        }
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (postLoad) { return console.log('requested Photo Data and coments'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to load photo data and coments', new _model_PostLoad__WEBPACK_IMPORTED_MODULE_5__["PostLoad"]())));
    };
    PostService.prototype.requestPhotosForPerfil = function (idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_POSTS_BY_IDUSER.replace('{idUser}', idUser.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (postPerfil) { return console.log('requiested photos for perfil'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to load photos for perfil', [])));
    };
    PostService.prototype.requestPhotosForFeed = function (idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_FEED_POSTS_BY_IDUSER.replace('{idUser}', idUser.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (postFeed) { return console.log('requiested photos for feed'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to load photos for feed', [])));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/app/const/const.ts");
/* harmony import */ var _error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handle/error.handling */ "./src/app/error-handle/error.handling.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _model_passDto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/passDto */ "./src/app/model/passDto.ts");
/* harmony import */ var _model_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/Post */ "./src/app/model/Post.ts");
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
    function UserService(httpClient, authenticationService) {
        this.httpClient = httpClient;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getUsers = function () {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_USERS_GET_ALL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) { return console.log("fetched users"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('getUsers', [])));
    };
    UserService.prototype.registerUser = function (user) {
        return this.httpClient.post(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_USERS_ADD, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("registered user"); }));
    };
    UserService.prototype.changeUserData = function (user) {
        return this.httpClient.put(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_PUT_UPDATE_ALL, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log('user data has been change'); }));
    };
    UserService.prototype.getProfile = function (name) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_USER_GET_BY_USERNAME + name);
    };
    UserService.prototype.getAmountFollowers = function (id) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_FOLLOWERS + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) { return users.length; }));
    };
    UserService.prototype.getAmountFolloweds = function (id) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_FOLLOWEDS + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) { return users.length; }));
    };
    UserService.prototype.getFollowers = function (id) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_FOLLOWERS + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) { return users; }));
    };
    UserService.prototype.getFolloweds = function (id) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_FOLLOWEDS + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) { return users; }));
    };
    UserService.prototype.getAmountPost = function (id) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_POST + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (posts) { return posts.length; }));
    };
    UserService.prototype.modifyPass = function (oldpass, userName, newPass) {
        var passDto = new _model_passDto__WEBPACK_IMPORTED_MODULE_7__["PassDto"]();
        passDto.username = userName;
        passDto.newPassword = newPass;
        passDto.oldPassword = oldpass;
        var URL = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_PUT_USER_PASSWORD;
        return this.httpClient.put(URL, passDto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) { return console.log("changed password"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('getUsers', false)));
    };
    UserService.prototype.uploadImage = function (foto, descripcion, id, fecha) {
        var postDto = new _model_Post__WEBPACK_IMPORTED_MODULE_8__["PostDto"]();
        postDto.idUser = id;
        postDto.photo = foto;
        postDto.description = descripcion;
        postDto.createdAt = fecha;
        return this.httpClient.post(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_UPLOAD_IMAGE, postDto);
    };
    UserService.prototype.updatePerfilPhoto = function (idUser, photo) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_PUT_UPDATE_PERFIL_PHOTO.replace('{idUser}', idUser.toString());
        return this.httpClient.put(url, photo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) { return console.log('updated user photo'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to update photo')));
    };
    UserService.prototype.searchUsers = function (text) {
        return this.httpClient.get(_const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_GET_USERS_BY_TEXT + text)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (searchResult) { return console.log('requested users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to load photos for perfil', [])));
    };
    UserService.prototype.updatePrivacity = function (idUser) {
        var url = _const_const__WEBPACK_IMPORTED_MODULE_3__["CONST"].URL_PUT_UPDATE_PRIVACITY.replace('{idUser}', idUser.toString());
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) { return console.log('updated privacity'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_error_handle_error_handling__WEBPACK_IMPORTED_MODULE_4__["handleError"])('failed to update privacity', new _model_User__WEBPACK_IMPORTED_MODULE_5__["User"])));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["authService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authenticationService.logUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedPipesModule, PageHeaderModule, StatModule, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"]; });

/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ "./src/app/shared/guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });






/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule, StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"]; });





/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{heading}}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n        </ol>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
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

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/shared/modules/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
            exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
        })
    ], PageHeaderModule);
    return PageHeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-{{bgClass}}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{icon}} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{count}}</div>\n                <div class=\"d-block\">{{label}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{data}}</span>\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
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

var StatComponent = /** @class */ (function () {
    function StatComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "bgClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StatComponent.prototype, "event", void 0);
    StatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat',
            template: __webpack_require__(/*! ./stat.component.html */ "./src/app/shared/modules/stat/stat.component.html"),
            styles: [__webpack_require__(/*! ./stat.component.scss */ "./src/app/shared/modules/stat/stat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat.component */ "./src/app/shared/modules/stat/stat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = /** @class */ (function () {
    function StatModule() {
    }
    StatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]],
            exports: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]]
        })
    ], StatModule);
    return StatModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedPipesModule);
    return SharedPipesModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    api: 'http://localhost:8080/',
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abel/Documentos/instagram/Instagram-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map