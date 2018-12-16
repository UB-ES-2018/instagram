(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["secured-secured-module"],{

/***/ "./src/app/secured/explore/explore.component.html":
/*!********************************************************!*\
  !*** ./src/app/secured/explore/explore.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"titulosec\">\n      <a>Descubre Personas</a>\n    </div>\n    <div class=\"fotos\">\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n    </div>\n    <div class=\"titulosec\" id=\"explorar\">\n        <a>Explorar</a>\n      </div>\n    <div class=\"fotos\">\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n        <div><img src=\"/assets/images/X.png\" /></div>\n\n    </div>\n</div>\n  \n  "

/***/ }),

/***/ "./src/app/secured/explore/explore.component.scss":
/*!********************************************************!*\
  !*** ./src/app/secured/explore/explore.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  min-width: 1000px;\n  width: 100%;\n  position: relative;\n  float: left;\n  padding-top: 60px; }\n\n.titulosec {\n  margin-left: 25%;\n  width: 100%;\n  position: relative;\n  float: left;\n  margin-bottom: 20px; }\n\n#explorar {\n  margin-top: 70px; }\n\n.fotos {\n  margin-left: 25%;\n  width: 1000px;\n  position: relative;\n  float: left; }\n\n.fotos div {\n  width: 33%;\n  position: relative;\n  float: left;\n  margin-left: -40px; }\n\n.fotos div img {\n  width: 200px; }\n"

/***/ }),

/***/ "./src/app/secured/explore/explore.component.ts":
/*!******************************************************!*\
  !*** ./src/app/secured/explore/explore.component.ts ***!
  \******************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
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

var ExploreComponent = /** @class */ (function () {
    function ExploreComponent() {
    }
    ExploreComponent.prototype.ngOnInit = function () {
    };
    ExploreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/secured/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.scss */ "./src/app/secured/explore/explore.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/secured/feed/feed.component.html":
/*!**************************************************!*\
  !*** ./src/app/secured/feed/feed.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div >\n    <div style=\"flex-direction: column; padding-top: 0px\">\n      <article class=\"publish\" *ngFor=\"let p of posts\">\n        <header class=\"header\">\n            \n            <div class=\"user\" style=\"border-bottom: 1px solid #f8f8f8;\">\n                <img alt=\"profile image\" [src]=p.photoPerfil width=\"40px\" />\n                <b [routerLink]=\"['/', p.ownerName]\" style=\"cursor: pointer; outline-width: 0;\">  {{p.ownerName}}</b>\n            </div>\n            \n        </header>\n        <div class=\"image\">\n\n            <div>\n                <img alt=\"feed image\" [src]=\"p.photo\" width=\"600px\" height=\"600px\"/>\n            </div>\n          \n        </div>\n        <div class=\"likes\" style=\"border-bottom: 1px solid #f8f8f8; border-top: 1px solid #f8f8f8; margin: 20px;\">\n            \n            <div class='react'>\n                <span *ngIf=\"!p.liked\" (click)=\"sendLike(p.idPost)\" class='love'></span>\n                <span *ngIf=\"p.liked\" (click)=\"sendDislike(p.idPost)\" class='loved'></span>\n                &nbsp;\n                <span style=\"cursor: pointer;\" onclick=\"focusComment()\" class='comment'></span>\n                <span style=\"float: right; cursor: pointer;\"  onclick=\"toggleSaved(this)\" class='save'></span>                   \n            </div>\n            <b>{{p.numLikes}} likes</b>\n            <br>\n        </div>\n        \n        <div class=\"comments\"style=\" overflow-y: scroll;\">\n            \n            <div *ngIf=\"p.description != null\" id=\"description\" style=\"margin: 20px; font-size: 14px;\">\n                <b [routerLink]=\"['/', p.ownerName]\" style=\"cursor: pointer;\"> {{p.ownerName}}</b> \n                {{p.description}}\n            </div>\n\n            <div *ngFor=\"let comment of p.coments\">\n                <div id={{comment.idComment}} style=\"margin: 20px; font-size: 14px;\">\n                    <span style=\"display: inline-block; width: 80%; overflow: hidden;\">\n                        <b [routerLink]=\"['/', comment.name]\" style=\"cursor: pointer; outline-width: 0;\">{{comment.name}}</b> \n                        {{comment.content}}\n                    </span>\n                    <span *ngIf=\"isLogged() && !comment.liked\" style=\"float: right\" (click)=\"sendLikeComment(comment.idComment, p.idPost)\" class='sm-love'></span>\n                    <span *ngIf=\"isLogged() && comment.liked\" style=\"float: right\" (click)=\"sendDislikeComment(comment.idComment, p.idPost)\" class='sm-loved'></span>\n                </div>\n            </div>\n        </div>\n        <br>\n        <i id=\"date\" style=\"color: gray; font-size: 13px; padding-left: 20px\">{{p.createdAt}}</i>\n\n        <div class=\"comment-section\" style=\"border-bottom: 1px solid #f8f8f8; margin-left: 20px; margin-right: 20px;\">\n            \n            <span class='dot02'></span>\n            <form (submit)=\"sendComment(p.idPost, cmnt.value)\"> \n                <input type='text' id='cmnt' placeholder='Add a comment...' #cmnt name=\"cmnt\">  \n            </form> \n                                       \n        </div>\n      </article>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/secured/feed/feed.component.scss":
/*!**************************************************!*\
  !*** ./src/app/secured/feed/feed.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  min-width: 1000px;\n  width: 100%;\n  position: relative;\n  float: left;\n  padding-top: 60px; }\n\n.titulosec {\n  margin-left: 25%;\n  width: 100%;\n  position: relative;\n  float: left;\n  margin-bottom: 20px; }\n\n#explorar {\n  margin-top: 70px; }\n\n.fotos {\n  margin-left: 25%;\n  width: 1000px;\n  position: relative;\n  float: left; }\n\n.fotos div {\n  width: 33%;\n  position: relative;\n  float: left;\n  margin-left: -40px; }\n\n.fotos div img {\n  width: 200px; }\n\narticle {\n  width: 602px;\n  margin: 0 auto;\n  border: 1px solid #A6A6A6;\n  border-radius: 5px;\n  margin-bottom: 60px;\n  background-color: white; }\n\nheader {\n  display: block;\n  float: left;\n  width: 100%;\n  height: 60px; }\n\n.image {\n  height: auto; }\n\n.likes {\n  height: 55px; }\n\n.comments {\n  height: 206px; }\n\n.comment-section {\n  width: 95%;\n  height: 55px;\n  border-top: 1px solid #A6A6A6; }\n"

/***/ }),

/***/ "./src/app/secured/feed/feed.component.ts":
/*!************************************************!*\
  !*** ./src/app/secured/feed/feed.component.ts ***!
  \************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/follow.service */ "./src/app/service/follow.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _service_CommentService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/CommentService */ "./src/app/service/CommentService.ts");
/* harmony import */ var _service_LikeComment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/LikeComment */ "./src/app/service/LikeComment.ts");
/* harmony import */ var _service_LikeService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/LikeService */ "./src/app/service/LikeService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FeedComponent = /** @class */ (function () {
    function FeedComponent(router, userService, ruta, authenticationService, followService, modalService, postService, commentService, likeCommentService, likeService) {
        this.router = router;
        this.userService = userService;
        this.ruta = ruta;
        this.authenticationService = authenticationService;
        this.followService = followService;
        this.modalService = modalService;
        this.postService = postService;
        this.commentService = commentService;
        this.likeCommentService = likeCommentService;
        this.likeService = likeService;
        this.user = _model_User__WEBPACK_IMPORTED_MODULE_3__["User"].createDummy();
        this.posts = [];
        this.postsSort = [];
        this.array = [];
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.userID = this.authenticationService.logUser.id;
        this.selfFollowedList();
        console.log(this.posts);
    };
    FeedComponent.prototype.formatDate = function () {
        var formattedDate = new Date(this.post.createdAt);
        var options = {
            day: "numeric", month: "long", year: "numeric"
        };
        this.post.createdAt = formattedDate.toLocaleDateString("en-GB", options);
    };
    FeedComponent.prototype.loadPhotosForFeed = function (idUser) {
        var _this = this;
        this.postService.requestPhotosForFeed(idUser).subscribe(function (postFeed) {
            _this.feedPhotos = postFeed;
            console.log(_this.feedPhotos);
            _this.requestPostForFeed(_this.feedPhotos);
            console.log(_this.posts);
        });
    };
    FeedComponent.prototype.requestPostForFeed = function (photos) {
        var _this = this;
        var i = 0;
        var _loop_1 = function (photo) {
            this_1.postService.requestIdPostByIdPostAndLoggin(photo.id, this_1.authenticationService.logUser.id).subscribe(function (postLoad) {
                _this.post = postLoad;
                i = photos.indexOf(photo);
                _this.formatDate();
                _this.posts[i] = _this.post;
            });
        };
        var this_1 = this;
        for (var _i = 0, photos_1 = photos; _i < photos_1.length; _i++) {
            var photo = photos_1[_i];
            _loop_1(photo);
        }
    };
    FeedComponent.prototype.updateFeed = function (idPost) {
        var _this = this;
        this.postService.requestIdPostByIdPostAndLoggin(idPost, this.authenticationService.logUser.id).subscribe(function (postLoad) {
            _this.post = postLoad;
            _this.formatDate();
            var p = _this.posts.filter(function (postSearch) { return (postSearch.idPost === idPost); });
            _this.posts[_this.posts.indexOf(p[0])] = _this.post;
        });
    };
    FeedComponent.prototype.selfFollowedList = function () {
        var _this = this;
        if (this.authenticationService.logStatus) {
            this.userService.getFolloweds(this.authenticationService.logUser.id).subscribe(function (self_followed_list) {
                if (self_followed_list.length > 0)
                    _this.loadPhotosForFeed(_this.userID);
            }, function (error) { return console.error('Error retrieving the self followed list ' + error); });
        }
    };
    FeedComponent.prototype.sendLikeComment = function (comment_id, idPost) {
        if (this.authenticationService.logStatus) {
            this.likeCommentService.submitNewLikeToComment(comment_id, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            this.updateFeed(idPost);
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    FeedComponent.prototype.isLogged = function () {
        return (this.authenticationService.logUser);
    };
    FeedComponent.prototype.sendDislikeComment = function (comment_id, idPost) {
        if (this.authenticationService.logStatus) {
            this.likeCommentService.deleteLikeToComment(comment_id, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            this.updateFeed(idPost);
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    FeedComponent.prototype.sendLike = function (idPost) {
        if (this.authenticationService.logStatus) {
            this.likeService.submitLikeToImage(idPost, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            this.updateFeed(idPost);
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    FeedComponent.prototype.sendDislike = function (idPost) {
        if (this.authenticationService.logStatus) {
            this.likeService.deleteLike(idPost, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            this.updateFeed(idPost);
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    FeedComponent.prototype.sendComment = function (idPost, text) {
        if (this.authenticationService.logStatus) {
            this.commentService.submitNewComment(idPost, this.authenticationService.logUser.id, text).subscribe(function (response) {
                console.log(response);
            });
            console.log('sending comment: ' + text);
            this.cmnt.nativeElement.value = '';
            this.updateFeed(idPost);
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    //no se si hace falta pero esta implementado
    FeedComponent.prototype.deleteComment = function (idComment) {
        if (this.authenticationService.logStatus) {
            this.commentService.deleteCommentById(idComment).subscribe(function (response) {
                console.log(response);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cmnt'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "cmnt", void 0);
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/secured/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/app/secured/feed/feed.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["authService"],
            _service_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _service_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"],
            _service_CommentService__WEBPACK_IMPORTED_MODULE_8__["CommentService"],
            _service_LikeComment__WEBPACK_IMPORTED_MODULE_9__["LikeCommentService"],
            _service_LikeService__WEBPACK_IMPORTED_MODULE_10__["LikeService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/secured/image-modal/image-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/secured/image-modal/image-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: inline-block\">\n    <div class=\"column\" id=\"image_modal\" style=\"height: 600px; float: left;\n    width: 67%;\">\n        <img alt=\"\" [src]=post.photo width=\"600px\" height=\"600px\"/>\n    </div>\n    <div class=\"column\" style=\"float: left;\n    width: 33%;\">\n        <div id=\"userOwner\" style=\"margin: 15px; margin-bottom: 0px\">\n            <div class=\"left\" style=\"border-bottom: 1px solid #f8f8f8;\">\n                <img alt=\"\" [src]=post.photoPerfil width=\"40px\" />\n                <b (click)=\"c('Close click')\" [routerLink]=\"['/', post.ownerName]\" style=\"cursor: pointer; outline-width: 0;\">  {{post.ownerName}}</b>\n\n                <b *ngIf=\"isLogged() && selfFollowCheck(post.idUser) && follow_check.accepted == null\" (click)=\"sendFollow(post.idUser)\"\n                    style=\"cursor: pointer; outline-width: 0;\" class=\"text-primary\"> · Seguir</b>\n                <b *ngIf=\"isLogged() && selfFollowCheck(post.idUser) && follow_check.accepted == false\" (click)=\"sendFollow(post.idUser)\"\n                    style=\"cursor: pointer; outline-width: 0;\"> · Pendiente</b>\n                <b *ngIf=\"isLogged() && selfFollowCheck(post.idUser) && follow_check.accepted == true\" (click)=\"sendUnfollow(post.idUser)\"\n                    style=\"cursor: pointer; outline-width: 0\"> · Seguido</b>\n                <br>\n                <br>\n            </div>\n        </div>\n        <div id=\"comments\" style=\"height: 365px; overflow-y: scroll; width:315px\">\n            <div *ngIf=\"post.description != null\" id=\"description\" style=\"margin: 20px; font-size: 14px;\">\n                <b> {{post.ownerName}}</b> {{post.description}}\n            </div>\n\n            <div *ngFor=\"let comment of post.coments\">\n                <div id={{comment.idComment}} style=\"margin: 20px; font-size: 14px;\">\n                    <span style=\"display: inline-block; width: 80%; overflow: hidden;\">\n                        <b (click)=\"c('Close click')\" [routerLink]=\"['/', comment.name]\" style=\"cursor: pointer; outline-width: 0;\">{{comment.name}}</b> \n                        {{comment.content}}\n                    </span>\n                    <span *ngIf=\"isLogged() && !comment.liked\" style=\"float: right\" (click)=\"sendLikeComment(comment.idComment)\" class='sm-love'></span>\n                    <span *ngIf=\"isLogged() && comment.liked\" style=\"float: right\" (click)=\"sendDislikeComment(comment.idComment)\" class='sm-loved'></span>\n                </div>\n            </div>\n\n        </div>\n        <div id=\"tray_react\" style=\"border-bottom: 1px solid #f8f8f8; border-top: 1px solid #f8f8f8; margin: 20px;\">\n            <div class='react'>\n                <span *ngIf=\"!post.liked\" (click)=\"sendLike()\" class='love'></span>\n                <span *ngIf=\"post.liked\" (click)=\"sendDislike()\" class='loved'></span>\n                &nbsp;\n                <span style=\"cursor: pointer;\" onclick=\"focusComment()\" class='comment'></span>\n                <span style=\"float: right; cursor: pointer;\"  onclick=\"toggleSaved(this)\" class='save'></span>                   \n            </div>\n            <b>{{post.numLikes}} likes</b>\n            <br>\n            <i id=\"date\" style=\"color: gray; font-size: 13px;\">{{post.createdAt}}</i>\n        </div>\n        <div id=\"comment-section\" style=\"border-bottom: 1px solid #f8f8f8; margin-left: 20px; margin-right: 20px;\">\n            <span class='dot02'></span>\n            <form (submit)=\"sendComment(cmnt.value)\">\n                <input type='text' id='cmnt' placeholder='Añade un comentario...' #cmnt name=\"cmnt\">  \n            </form>                              \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/secured/image-modal/image-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/secured/image-modal/image-modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secured/image-modal/image-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/secured/image-modal/image-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalComponent", function() { return ImageModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_PostLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/PostLoad */ "./src/app/model/PostLoad.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_Follow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/Follow */ "./src/app/model/Follow.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_follow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/follow.service */ "./src/app/service/follow.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_CommentService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/CommentService */ "./src/app/service/CommentService.ts");
/* harmony import */ var _service_LikeComment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/LikeComment */ "./src/app/service/LikeComment.ts");
/* harmony import */ var _service_LikeService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/LikeService */ "./src/app/service/LikeService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ImageModalComponent = /** @class */ (function () {
    function ImageModalComponent(router, userService, ruta, authenticationService, followService, modalService, postService, commentService, likeCommentService, likeService) {
        this.router = router;
        this.userService = userService;
        this.ruta = ruta;
        this.authenticationService = authenticationService;
        this.followService = followService;
        this.modalService = modalService;
        this.postService = postService;
        this.commentService = commentService;
        this.likeCommentService = likeCommentService;
        this.likeService = likeService;
        this.post = _model_PostLoad__WEBPACK_IMPORTED_MODULE_2__["PostLoad"].createDummy();
        this.follow_check = _model_Follow__WEBPACK_IMPORTED_MODULE_5__["Follow"].createDummy();
    }
    ;
    ImageModalComponent.prototype.ngOnInit = function () {
        this.AjotitaTest(this.postId);
        this.checkFollowStatus(this.post.idUser);
    };
    ImageModalComponent.prototype.formatDate = function () {
        var formattedDate = new Date(this.post.createdAt);
        var options = {
            day: "numeric", month: "long", year: "numeric"
        };
        this.post.createdAt = formattedDate.toLocaleDateString("en-GB", options);
    };
    ImageModalComponent.prototype.AjotitaTest = function (post_id) {
        var _this = this;
        var user_id;
        if (this.authenticationService.logStatus) {
            user_id = this.authenticationService.logUser.id;
        }
        else {
            user_id = null;
        }
        this.postService.requestIdPostByIdPostAndLoggin(post_id, user_id).subscribe(function (postLoad) {
            _this.post = postLoad;
            _this.formatDate();
            console.log(_this.post);
        });
    };
    ImageModalComponent.prototype.checkFollowStatus = function (followed) {
        var _this = this;
        if (this.authenticationService.logStatus) {
            this.followService.checkFollow(followed, this.authenticationService.logUser.id).subscribe(function (follow_check) {
                _this.follow_check = follow_check;
            }, function (error) { return console.error('error checking follow ' + error); });
        }
    };
    // Follower status checking, will use auth-user followers
    ImageModalComponent.prototype.checkFollowedStatus = function (followed_id) {
        if (this.follow_check.accepted) {
            console.log("followed true");
            return true;
        }
        else {
            return false;
        }
    };
    ImageModalComponent.prototype.isLogged = function () {
        return (this.authenticationService.logUser);
    };
    ImageModalComponent.prototype.selfFollowCheck = function (id) {
        return (id !== this.authenticationService.logUser.id);
    };
    ImageModalComponent.prototype.sendFollow = function (followed_id) {
        var _this = this;
        if (this.authenticationService.logStatus) {
            this.followService.requestFollow(this.authenticationService.logUser.id, followed_id).subscribe(function (response) {
                _this.checkFollowStatus(_this.post.idUser);
            });
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    ImageModalComponent.prototype.sendUnfollow = function (followed_id) {
        var _this = this;
        if (this.authenticationService.logStatus) {
            this.followService.unFollow(this.authenticationService.logUser.id, followed_id).subscribe(function (response) {
                _this.checkFollowStatus(_this.post.idUser);
            });
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    ImageModalComponent.prototype.sendLikeComment = function (comment_id) {
        if (this.authenticationService.logStatus) {
            this.likeCommentService.submitNewLikeToComment(comment_id, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log("Send likeComment" + response);
            });
            //this.likeService.likeComment(this.authenticationService.logUser.id, comment_id).subscribe(
            //    response => {
            //    this.AjotitaTest(this.post.idPost);
            //    }
            //);
            this.AjotitaTest(this.postId);
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    ImageModalComponent.prototype.sendDislikeComment = function (comment_id) {
        if (this.authenticationService.logStatus) {
            this.likeCommentService.deleteLikeToComment(comment_id, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            //this.likeService.dislikeComment(this.authenticationService.logUser.id, comment_id).subscribe(
            //    response => {
            //    this.AjotitaTest(this.post.idPost);
            //    }
            //);
            this.AjotitaTest(this.postId);
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    ImageModalComponent.prototype.sendLike = function () {
        if (this.authenticationService.logStatus) {
            this.likeService.submitLikeToImage(this.post.idPost, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            //this.likeService.likePost(this.authenticationService.logUser.id, this.post.idPost).subscribe(
            //    response => {
            //    this.AjotitaTest(this.post.idPost);
            //    }
            //);
            this.AjotitaTest(this.postId);
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    ImageModalComponent.prototype.sendDislike = function () {
        if (this.authenticationService.logStatus) {
            this.likeService.deleteLike(this.post.idPost, this.authenticationService.logUser.id).subscribe(function (response) {
                console.log(response);
            });
            //this.likeService.dislikePost(this.authenticationService.logUser.id, this.post.idPost).subscribe(
            //    response => {
            //    this.AjotitaTest(this.post.idPost);
            //    }
            //);
            this.AjotitaTest(this.postId);
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    ImageModalComponent.prototype.sendComment = function (text) {
        if (this.authenticationService.logStatus) {
            this.commentService.submitNewComment(this.post.idPost, this.authenticationService.logUser.id, text).subscribe(function (response) {
                //podria solicitar de nuevo todo que me da pereza hacer de una manera eficiente :D
                //this.ngOnInit();
                console.log(response);
            });
            console.log('sending comment: ' + text);
            this.cmnt.nativeElement.value = '';
            this.AjotitaTest(this.postId);
        }
        else {
            this.c('Close click');
            this.ruta.navigate(['login']);
        }
    };
    //no se si hace falta pero esta implementado
    ImageModalComponent.prototype.deleteComment = function (idComment) {
        if (this.authenticationService.logStatus) {
            this.commentService.deleteCommentById(idComment).subscribe(function (response) {
                console.log(response);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageModalComponent.prototype, "postId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageModalComponent.prototype, "c", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageModalComponent.prototype, "d", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cmnt'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageModalComponent.prototype, "cmnt", void 0);
    ImageModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-modal',
            template: __webpack_require__(/*! ./image-modal.component.html */ "./src/app/secured/image-modal/image-modal.component.html"),
            styles: [__webpack_require__(/*! ./image-modal.component.scss */ "./src/app/secured/image-modal/image-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["authService"],
            _service_follow_service__WEBPACK_IMPORTED_MODULE_7__["FollowService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _service_CommentService__WEBPACK_IMPORTED_MODULE_9__["CommentService"],
            _service_LikeComment__WEBPACK_IMPORTED_MODULE_10__["LikeCommentService"],
            _service_LikeService__WEBPACK_IMPORTED_MODULE_11__["LikeService"]])
    ], ImageModalComponent);
    return ImageModalComponent;
}());



/***/ }),

/***/ "./src/app/secured/layout/closePop.component.ts":
/*!******************************************************!*\
  !*** ./src/app/secured/layout/closePop.component.ts ***!
  \******************************************************/
/*! exports provided: ClosePopoverOnClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosePopoverOnClickOutsideDirective", function() { return ClosePopoverOnClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClosePopoverOnClickOutsideDirective = /** @class */ (function () {
    function ClosePopoverOnClickOutsideDirective() {
        this.active = false;
    }
    ClosePopoverOnClickOutsideDirective.prototype.docClicked = function (target) {
        if (!this.popover.isOpen()) {
            this.active = false;
        }
        else {
            // Click that opens popover triggers this. Ignore first click.
            if (!this.active) {
                this.active = true;
            }
            else {
                var cancelClose = false;
                var popoverWindows = document.getElementsByClassName('popup_div');
                for (var i = 0; i < popoverWindows.length; i++) {
                    cancelClose = cancelClose || popoverWindows[i].contains(target) || target.className == 'requests_button' || target.className == 'requests_back_button';
                }
                if (!cancelClose) {
                    this.popover.close();
                }
                // Deactivate if something else closed popover
                this.active = this.popover.isOpen();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('closePopoverOnClickOutside'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"])
    ], ClosePopoverOnClickOutsideDirective.prototype, "popover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClosePopoverOnClickOutsideDirective.prototype, "docClicked", null);
    ClosePopoverOnClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[closePopoverOnClickOutside]'
        })
    ], ClosePopoverOnClickOutsideDirective);
    return ClosePopoverOnClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/secured/layout/layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/secured/layout/layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"layout\" >\n  <div id=\"logo\" routerLink=\"/\" style=\"outline-width: 0;\">\n    <img src=\"assets/images/logo.png\" /><!--logo + feed-->\n  </div>\n  <div id=\"buscadorDiv\">\n    <!--<input value=\"Busca\" id=\"buscador\"/>buscador-->\n\n    <input class=\"XTCLo x3qfX \" type=\"text\" autocapitalize=\"none\" id=\"buscador\"\n    placeholder=\"&#xF002; Search\" style=\"font-family:Arial, FontAwesome\" [(ngModel)]=\"toSearch\" (keypress)=\"loadUsersSearch()\" value=\"\">\n    <span class=\"mlrQa coreSpriteSearchIcon\"></span>\n    <div class=\"aIYm8 coreSpriteSearchClear\" role=\"button\" tabindex=\"0\"></div>\n    <div class=\"resultadoSearch\" *ngIf=\"toSearch\">\n      <div class=\"user\" *ngIf=\"amountFound === 0\">\n        No se han encontrado resultados.\n      </div>\n      <div class=\"user\" (click)=\"changeUser(user.username)\" [routerLink]=\"'/'+user.username\" *ngFor=\"let user of searchResult\">\n        <div class=\"fotoUserSearch\">\n          <img [src]=\"user.photo\" />\n        </div>\n        <div class=\"nameUserSearch\">\n          {{user.username}}\n        </div>\n        <div class=\"usernameUserSearch\">\n          {{user.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div id=\"botones\" *ngIf=\"authenticationService.logUser\">\n    <i class=\"fa fa-compass fa-2x\" id=\"primero\" routerLink=\"/explore\" style=\"outline-width: 0;\"></i><!--explore-->\n\n\n    <i class=\"fa fa-heart fa-2x\" style=\"outline-width: 0;\" [ngbPopover]=\"popContent\" placement=\"bottom\" #p=\"ngbPopover\" [closePopoverOnClickOutside]=\"p\"></i><!--notifications-->\n\n    \n\n    <i class=\"fa fa-user fa-2x\" [routerLink]=\"'/' + profilename\" style=\"outline-width: 0;\"></i><!--profile-->\n  </div>\n  <div id=\"botones\" *ngIf=\"!authenticationService.logUser\">\n    <button class=\"btn btn-primary\" [routerLink]=\"[ '/login']\" style=\"outline-width: 0;\">Conectarse</button>\n    &nbsp;\n    <button class=\"btn btn-primary\" [routerLink]=\"[ '/signup']\" style=\"outline-width: 0;\">Registrarse</button>\n  </div>\n  \n</div>\n\n\n<ng-template #popContent>\n    <div *ngIf=\"showRequests\" id=\"requests_pop\" class=\"popup_div\">\n    <div id=\"requests_back\" style=\"border-bottom: 1px solid #d8d8d8;\">\n        <span class='requests_back_button' (click)=\"toggleRequests()\"></span>\n        <b style=\"padding-left: 35px; padding-top: 5px; position: absolute; text-align: center;\">Peticiones de seguimiento</b>\n    </div>\n    <div id=\"requests\" class=\"popup_div\">\n      <div *ngFor=\"let request of requests\" class=\"column\" style=\"line-height: 5em\">\n        <img alt=\"\" [src]=\"request.actionUser.photo\" style=\"width: 10%;\" />\n        <div style=\"display:inline-block; line-height: 1em\">\n          <b (click)=\"d('Cross click')\" [routerLink]=\"['/', request.actionUser.username]\" style=\"cursor: pointer; outline-width: 0;\">&nbsp;\n          {{request.actionUser.username}}</b>\n          <br>\n          <span style=\"font-size: 14px; color: gray; padding-left: 10px;\">{{request.actionUser.name}}</span>\n        </div>\n        <span style=\"display:inline; float: right;\">\n          <button (click)=\"acceptFollow(request.id)\" class=\"btn btn-primary btn-sm\" style=\"margin-right: 5px\">Aprobar</button>\n          <button (click)=\"hideFollow(request.id)\" class=\"btn btn-outline-secondary btn-sm\">Ignorar</button>\n        </span>\n\n\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"!showRequests\" id=\"content\" style=\"overflow-y:scroll; max-height: 290px\">\n    <div class=\"popup_div\" id=\"follow_notifications\" style=\"margin: 20px; margin-bottom: 0px; font-size: 14px; display: inline-block; height: 65px; border-bottom: 1px solid #d8d8d8;\">\n        <img src=\"assets/images/circle.png\" style=\"width: 10%; padding-bottom: 25px\"/>\n        <b style=\"position: relative; top: -10px; left: -25px; color: white; font-size: 16px;\">{{requestQuantity}}</b>\n        <span style=\"display: inline-block; width: 80%; overflow: hidden;\">            \n            <b class=\"popup_div\" style=\"margin-left: 20px; outline-width: 0;\">Peticiones de seguimiento</b> \n            <br>\n            <a style=\"margin-left: 20px; color:gray\">Aprueba o ignora peticiones de seguimiento</a>\n        </span>\n        <span class='requests_button' (click)=\"toggleRequests()\"></span>\n      </div>\n    \n      <div *ngFor=\"let notification of notifications\" id=\"notifications\">        \n        <div id={{notification.id}} (click)=\"imagePopUp(notification.post.id)\" style=\"margin: 20px; margin-top: 0px; margin-bottom: 0px; padding-top: 20px; font-size: 14px; \n              display: inline-block; height: 75px; border-bottom: 1px solid #d8d8d8; cursor:pointer; outline-width: 0;\">\n            <img [src]=\"notification.actionUser.photo\" style=\"float:left; width: 10%\"/>\n            <span style=\"display: inline-block; width: 70%; overflow: hidden;\">            \n                <b (click)=\"$event.stopPropagation()\" [routerLink]=\"['/', notification.actionUser.name]\" style=\"float:left; margin-left: 20px; margin-right: 10px; cursor: pointer; outline-width: 0;\">{{notification.actionUser.name}}</b> \n                <span *ngIf=\"notification.comment == null\" style=\"display: table-cell;\">\n                    {{notification.message}}. <a style=\"color: gray;\">{{notification.createdString}}</a>\n                </span>\n                <span *ngIf=\"notification.comment != null\" style=\"overflow:hidden; display: table-cell;\">\n                    Ha comentado: {{notification.comment.content}} <a style=\"color: gray;\">{{notification.createdString}}</a>\n                </span>\n            </span>\n            <img [src]=\"notification.post.photo\" style=\"float: right; width: 10%\"/>\n        </div>\n      </div>\n  </div>\n  </ng-template>\n\n  <ng-template #modalImage let-c=\"close\" let-d=\"dismiss\">\n    <app-image-modal postId={{clickedImageId}} [c]=\"this.c\" [d]=\"this.d\"></app-image-modal>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/secured/layout/layout.component.scss":
/*!******************************************************!*\
  !*** ./src/app/secured/layout/layout.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#layout {\n  border-style: solid;\n  border-width: 0.2px;\n  border-color: #BBBBBB;\n  border-left: none;\n  border-top: none;\n  border-right: none;\n  padding-left: 25%;\n  width: 100%;\n  min-width: 1000px;\n  height: 75px;\n  font-family: tahoma; }\n\nimg {\n  width: 120px; }\n\n#botones {\n  padding-top: 20px;\n  width: 20%;\n  position: relative;\n  float: left;\n  margin-left: 150px; }\n\n#logo {\n  padding-top: 23px;\n  width: 10%;\n  position: relative;\n  float: left; }\n\n#buscador {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n  border-radius: 3px; }\n\n#buscador:focus {\n  background-color: white; }\n\n#buscadorDiv {\n  margin-top: 25px;\n  position: relative;\n  float: left;\n  margin-left: 230px; }\n\ni {\n  margin-left: 10%; }\n\ni:hover {\n  cursor: pointer; }\n\n.notifications {\n  width: 500px;\n  height: 364px; }\n\n:host /deep/ .popover {\n  width: 500px !important;\n  height: 300px !important;\n  max-width: 500px !important;\n  min-width: 500px !important;\n  top: 56px !important;\n  left: -340px !important; }\n\n:host /deep/ .popover .arrow {\n  left: 447px !important; }\n\n.requests_button {\n  background-image: url(\"/assets/images/insta_icons.png\");\n  background-position: -321px -295px;\n  height: 30px;\n  width: 24px;\n  display: inline-block;\n  cursor: pointer;\n  outline-width: 0; }\n\n.requests_back_button {\n  background-image: url(\"/assets/images/insta_icons.png\");\n  background-position: -361px -295px;\n  height: 30px;\n  width: 24px;\n  display: inline-block;\n  cursor: pointer;\n  outline-width: 0; }\n\n.XTCLo {\n  border: solid 1px #dbdbdb;\n  border-radius: 3px;\n  color: #262626;\n  outline: 0;\n  text-align: center;\n  padding: 3px 10px 3px 26px;\n  z-index: 2; }\n\n.XTCLo:focus {\n  text-align: left;\n  color: #262626;\n  background-color: white;\n  padding: 3px 10px 3px 26px; }\n\n.mlrQa {\n  left: 11px;\n  position: absolute;\n  top: 9px;\n  z-index: 2; }\n\n.coreSpriteSearchIcon, .coreSpriteSensitivityIcon {\n  background-repeat: no-repeat;\n  background-position: -444px -264px;\n  height: 10px;\n  width: 10px; }\n\n.aIYm8 {\n  z-index: 3;\n  right: 5px;\n  top: 4px; }\n\n.coreSpriteSearchClear {\n  background-position: -405px -399px;\n  height: 20px;\n  width: 20px; }\n\n#resultadoSearch {\n  overflow-y: auto;\n  max-height: 370px;\n  width: 250px;\n  position: absolute;\n  top: 35px;\n  right: -10px;\n  z-index: 5; }\n\n.fotoUserSearch {\n  width: 50px;\n  position: relative;\n  float: left;\n  margin-right: 10px; }\n\n.fotoUserSearch img {\n  width: 50px;\n  height: 50px; }\n\n.nameUserSearch {\n  width: 140px;\n  height: 25px;\n  position: relative;\n  float: left;\n  font-weight: bold; }\n\n.usernameUserSearch {\n  height: 25px;\n  width: 140px;\n  position: relative;\n  float: left;\n  font-weight: 100;\n  color: gray; }\n\n.user {\n  padding-left: 10px;\n  padding-top: 10px;\n  width: 100%;\n  height: 75px;\n  position: relative;\n  float: left;\n  background-color: white;\n  border-bottom: solid #e6e6e6 1px; }\n\n.user:hover {\n  background-color: #ececec; }\n\n.resultadoSearch {\n  overflow-y: auto;\n  max-height: 370px;\n  width: 250px;\n  position: absolute;\n  top: 35px;\n  right: -10px;\n  z-index: 5;\n  display: none; }\n\n.resultadoSearch:hover {\n  display: inline; }\n\n#buscador:focus ~ .resultadoSearch {\n  display: inline; }\n"

/***/ }),

/***/ "./src/app/secured/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/secured/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, authenticationService, notificationService, modalService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
        this.modalService = modalService;
        this.userService = userService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.requestQuantity = 0;
        if (this.authenticationService.logUser) {
            this.profilename = this.authenticationService.logUser.username;
            this.getNotifications();
            this.getRequest();
            this.showRequests = false;
        }
        else {
            this.profilename = null;
        }
        this.showSearch = false;
        this.amountFound = 0;
    };
    LayoutComponent.prototype.getNotifications = function () {
        var _this = this;
        this.notificationService.getNotification(this.authenticationService.logUser.id).subscribe(function (load) {
            _this.notifications = load;
            _this.notifications = _this.notifications.slice().reverse();
            _this.formatDate(_this.notifications);
            console.log("Notifications loaded: " + load);
        });
    };
    LayoutComponent.prototype.getRequest = function () {
        var _this = this;
        this.notificationService.getRequest(this.authenticationService.logUser.id).subscribe(function (load) {
            _this.requests = load;
            _this.requests = _this.requests.slice().reverse();
            _this.requestQuantity = _this.requests.length;
            console.log("Requests loaded: " + load);
            console.log(load);
        });
    };
    LayoutComponent.prototype.formatDate = function (list) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var notification = list_1[_i];
            var time = (new Date).getTime();
            var time_diff = (time - notification.createdAt) / 1000;
            if (time_diff < 6000) {
                notification.createdString = (Math.floor(time_diff / 60) + "m");
            }
            else if (time_diff < 144000) {
                notification.createdString = (Math.floor(time_diff / 1440) + "h");
            }
            else if (time_diff < 720000) {
                notification.createdString = (Math.floor(time_diff / 7200) + "d");
            }
            else {
                notification.createdString = (Math.floor(time_diff / 50400) + "w");
            }
        }
    };
    LayoutComponent.prototype.loadUsersSearch = function () {
        var _this = this;
        this.userService.searchUsers(this.toSearch).subscribe(function (val) {
            _this.searchResult = val;
            _this.amountFound = _this.searchResult.length;
        });
    };
    LayoutComponent.prototype.changeUser = function (usuario) {
        this.toSearch = '';
        this.router.navigate([usuario]);
    };
    LayoutComponent.prototype.buscadorFocus = function () {
        this.showSearch = true;
    };
    LayoutComponent.prototype.buscadorFree = function () {
        this.showSearch = false;
    };
    LayoutComponent.prototype.toggleRequests = function () {
        this.showRequests = !this.showRequests;
    };
    LayoutComponent.prototype.acceptFollow = function (id) {
        var _this = this;
        this.notificationService.accept(id).subscribe(function (result) {
            _this.getRequest();
        });
    };
    LayoutComponent.prototype.hideFollow = function (id) {
        var _this = this;
        this.notificationService.hide(id).subscribe(function (result) {
            _this.getRequest();
        });
    };
    LayoutComponent.prototype.imagePopUp = function (id_image) {
        this.clickedImageId = id_image;
        this.imageRef = this.modalService.open(this.modalImage, { centered: true, size: 'lg', windowClass: 'modal-img' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalImage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayoutComponent.prototype, "modalImage", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/secured/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/secured/layout/layout.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"], _service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/secured/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/secured/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenido\">\n    <div id=\"logo\"><img alt=\"profile image\" [src]=\"user.photo\" width=\"200px\" height=\"200px\"/></div>\n    <div id=\"datosusuario\">\n        <div id=\"datostop\">\n            <div id=\"nick\">{{user?.name}}</div>\n            <div id=\"follow\" *ngIf=self_followed_list>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user?.id) && follow_check.accepted == null\" (click)=\"sendFollow(user?.id)\"\n                    class=\"btn btn-primary btn-sm\">Seguir</button>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user?.id) && follow_check.accepted == false\"\n                    class=\"btn btn-outline-secondary btn-sm\">Pendiente</button>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user?.id) && follow_check.accepted == true\" (click)=\"sendUnfollow(user?.id)\"\n                    class=\"btn btn-outline-secondary btn-sm\">Seguido</button>\n            </div>\n            <div *ngIf=\"isAuthUser()\" id=\"opciones\">\n                <button id=\"botonOpciones\" routerLink=\"/accounts\">Editar Perfil</button>\n                <img src=\"assets/images/settings.png\" (click)=\"settingsPopUp()\" id=\"settingsWheel\" alt=\"settings image\" />\n            </div>\n        </div>\n        <div id=\"datosmid\">\n            <div id=\"publications\"><b>{{perfilPhotos?.length}}</b> publicaciones</div>\n            <div (click)=\"followersPopUp()\" id=\"followers\" style=\"cursor: pointer; outline-width: 0;\"><b>{{followers}}</b>\n                    Seguidores</div>\n            <div (click)=\"followedPopUp()\" id=\"following\" style=\"cursor: pointer; outline-width: 0;\"><b>{{followeds}}</b>\n                Seguidos</div>\n        </div>\n        <br>\n        <br>\n        <div id=\"name\"><b>{{user?.name}}</b></div>\n        <div id=\"bio\">{{user?.bio}}</div>\n    </div>\n    <div *ngIf=\"privacy && (!follow_check.accepted == true && selfFollowCheck(user?.id))\" style=\"background:white;\" id=\"private\">\n        <br>\n        <b style=\"text-align: center;\">Este perfil es privado.</b>\n        <br>\n        <a style=\"text-align: center;\">Sigue a este usuario para ver sus fotos.</a>\n    </div>\n    \n    <div *ngIf=\"!privacy || privacy && follow_check.accepted == true || privacy && !selfFollowCheck(user?.id)\" id=\"fotos\">\n        <div class=\"quadradoTabla\">\n            <div id=\"subirFoto\" (click)=\"uploadPopup()\" class=\"celda\" *ngIf=\"isAuthUser()\">\n            </div>\n            <div class=\"celda\" *ngFor=\"let photo of perfilPhotos\">\n                <div (click)=\"imagePopUp(photo.id)\" class=\"contenedorFoto\">\n                    <div class=\"datosHidden\">\n\n                    </div>\n                    <div class=\"datosFoto\">\n                        <i class=\"fa fa-heart\" ></i>{{photo.numLikes}}\n                        <i class=\"fa fa-comment\" style=\"margin-left: 5%;\"></i>{{photo.numComments}}\n                    </div>\n                    <img [src]=\"photo.photo\" />\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<ng-template #modalFollowed let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"padding-left: 5em\">Seguidos</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div id=\"followed_modal\" class=\"modal-body\" style=\"height: 250px; overflow-y: auto;\">\n        <div *ngFor=\"let user_followed of followed_list\" class=\"column\" style=\"line-height: 4.5em\">\n            <span style=\"display:inline;\">\n                <img alt=\"\" [src]=\"user_followed.photo\" width=\"15%\" />\n            </span>\n\n            <div style=\"display:inline-block; line-height: 1em\">\n                <b (click)=\"d('Cross click')\" [routerLink]=\"['/', user_followed.username]\" style=\"cursor: pointer; outline-width: 0;\">&nbsp;\n                    {{user_followed.username}}</b>\n                <br>\n                <span style=\"font-size: 14px; color: gray; padding-left: 1em\">{{user_followed.name}}</span>\n            </div>\n            <span style=\"display:inline; float: right;\">\n                <button *ngIf=\"isLogged() && selfFollowCheck(user_followed.id) && checkFollowedAcceptedStatus(user_followed.id) == null\" (click)=\"sendFollow(user_followed.id)\"\n                    class=\"btn btn-primary btn-sm\">Seguir</button>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user_followed.id) && checkFollowedAcceptedStatus(user_followed.id) == false\"\n                    class=\"btn btn-outline-secondary btn-sm\">Pendiente</button>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user_followed.id) && checkFollowedAcceptedStatus(user_followed.id)\"\n                    (click)=\"sendUnfollow(user_followed.id)\" class=\"btn btn-outline-secondary btn-sm\">Seguido</button>\n            </span>\n\n\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n    </div>\n</ng-template>\n\n<ng-template #modalUpload let-c=\"close\" let-d=\"dismiss\">\n    <div id=\"contenidoSubirFoto\">\n        <div id=\"tituloSubirFoto\">\n            <a>Subir Imagen</a>\n        </div>\n        <div id=\"inputFoto\">\n            <label for=\"inputFotoHid\" class=\"btn btn-primary btn-sm\">Examinar</label>\n            <input type=\"file\" id=\"inputFotoHid\" style=\"display: none;\" [(ngModel)]=\"image64\" (change)=subirFoto($event)\n                accept=\"image/*\" />\n        </div>\n        <div id=\"espacioFoto\" *ngIf=\"!fotoSubida\">\n            <img id=\"fotoSubir\" alt=\"\" [src]=\"foto\" />\n        </div>\n        <div id=\"descFoto\" *ngIf=\"imagePresent\">\n            <textarea [(ngModel)]=\"descripcionFoto\" id=\"textAreaFoto\">Descripcion</textarea>\n        </div>\n        <div *ngIf=\"imagePresent\" id=\"enviarFoto\">\n            <input type=\"button\" value=\"Enviar\" (click)=\"enviarFoto()\" class=\"btn btn-primary btn-sm\" />\n        </div>\n        <div  style=\"color:green; font-weight: 600; width: 100%; text-align: center; margin-bottom: 20px;\"*ngIf=\"fotoSubida\">\n            <a>Imagen subida</a>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #modalFollowers let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"padding-left: 5em\">Seguidores</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div id=\"followers_modal\" class=\"modal-body\" style=\"height: 250px; overflow-y: auto;\">\n        <div *ngFor=\"let user_following of follower_list\" class=\"column\" style=\"line-height: 4.5em\">\n            <span style=\"display:inline;\">\n                <img alt=\"\" [src]=\"user_following.photo\" width=\"15%\" />\n            </span>\n\n            <div style=\"display:inline-block; line-height: 1em\">\n                <b (click)=\"d('Cross click')\" [routerLink]=\"['/', user_following.username]\" style=\"cursor: pointer; outline-width: 0;\">&nbsp;\n                    {{user_following.username}}</b>\n                <br>\n                <span style=\"font-size: 14px; color: gray; padding-left: 1em\">{{user_following.name}}</span>\n            </div>\n            <span style=\"display:inline; float: right;\">\n                <button *ngIf=\"isLogged() && selfFollowCheck(user_following.id) && checkFollowerAcceptedStatus(user_following.id) == null\" (click)=\"sendFollow(user_following.id)\"\n                    class=\"btn btn-primary btn-sm\">Seguir</button>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user_following.id) && checkFollowerAcceptedStatus(user_following.id) == false\"\n                    class=\"btn btn-outline-secondary btn-sm\">Pendiente</button>\n                <button *ngIf=\"isLogged() && selfFollowCheck(user_following.id) && checkFollowerAcceptedStatus(user_following.id)\"\n                    (click)=\"sendUnfollow(user_following.id)\" class=\"btn btn-outline-secondary btn-sm\">Seguido</button>\n            </span>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n    </div>\n</ng-template>\n\n<ng-template #modalImage let-c=\"close\" let-d=\"dismiss\">\n    <app-image-modal postId={{clickedImageId}} [c]=\"this.c\" [d]=\"this.d\"></app-image-modal>\n</ng-template>\n\n<ng-template #modalSettings let-c=\"close\" let-d=\"dismiss\">\n    <div id=\"settings_modal\" class=\"modal-body\">\n        <div>\n            <button style=\"outline-width: 0;\" routerLink=\"/accounts/password\" (click)=\"d('Cross click')\">Cambiar contraseña</button>\n        </div>\n        <div style=\"outline-width: 0;\" class=\"botonOpt\">\n            <button >Tarjeta de identificación</button>\n        </div>\n        <div style=\"outline-width: 0;\" class=\"botonOpt\">\n            <button >Aplicaciones autorizadas</button>\n        </div>\n        <div style=\"outline-width: 0;\" class=\"botonOpt\">\n            <button >Notificaciones</button>\n        </div>\n        <div style=\"outline-width: 0;\" routerLink=\"/accounts/privacy\" (click)=\"d('Cross click')\" class=\"botonOpt\">\n            <button >Privacidad y seguridad</button>\n        </div>\n        <div style=\"outline-width: 0;\" class=\"botonOpt\">\n            <button (click)=\"logOut()\" (click)=\"d('Cross click')\">Cerrar sesion</button>\n        </div>\n        <div style=\"outline-width: 0;\" id=\"lastOpt\" class=\"botonOpt\">\n            <button (click)=\"d('Cross click')\">Cancelar</button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/secured/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/secured/profile/profile.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (min-width: 640px) and (max-width: 1023px) {\n  #contenido {\n    margin-left: 10px; } }\n\n@media all and (min-width: 1024px) and (max-width: 1280px) {\n  #contenido {\n    margin-left: 12.5%; } }\n\n@media all and (min-width: 1281px) and (max-width: 1599px) {\n  #contenido {\n    margin-left: 19%; } }\n\n@media all and (min-width: 1600px) {\n  #contenido {\n    margin-left: 25%; } }\n\n#contenido {\n  padding-top: 70px;\n  width: 1000px; }\n\n#logo {\n  position: relative;\n  float: left;\n  width: 30%; }\n\n#datosusuario {\n  position: relative;\n  float: left;\n  width: 50%; }\n\n#datostop {\n  margin-bottom: 10px;\n  width: 100%;\n  position: relative;\n  float: left; }\n\n#datosmid {\n  margin-bottom: 80px; }\n\n#nick {\n  position: relative;\n  float: left;\n  font-size: 30px;\n  margin-right: 20px;\n  padding-top: 10px; }\n\n#opciones {\n  padding-top: 10px;\n  flex-shrink: 0;\n  margin-left: 25px; }\n\n#botonOpciones {\n  background-color: transparent;\n  border: 1px solid #dbdbdb;\n  color: #262626;\n  font-size: 14px;\n  text-decoration: none;\n  border-radius: 5px;\n  height: 30px;\n  width: 100px;\n  font-weight: 600; }\n\n#botonOpciones:hover {\n  cursor: pointer; }\n\n#followers {\n  position: relative;\n  float: left;\n  width: 32%; }\n\n#following {\n  position: relative;\n  float: left;\n  width: 32%; }\n\n#publications {\n  position: relative;\n  float: left;\n  width: 32%; }\n\n#fotos {\n  margin-top: 100px;\n  float: left;\n  position: relative;\n  width: 100%; }\n\n#private {\n  margin-top: 100px;\n  float: left;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  height: 150px;\n  border: 1px solid #dedede; }\n\n#subirFoto:hover {\n  cursor: pointer; }\n\n.labels:hover {\n  cursor: pointer; }\n\n#contenidoSubirFoto {\n  min-width: 400px;\n  max-width: 1000;\n  min-height: 80px;\n  max-height: 1000px;\n  padding-right: 2px; }\n\n#tituloSubirFoto {\n  position: relative;\n  width: 100%;\n  float: left;\n  text-align: center;\n  padding: 5px;\n  border-bottom: solid #eeeeee 1px;\n  font-weight: 600; }\n\n#inputFoto {\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 5px;\n  text-align: center; }\n\n#descFoto {\n  width: 100%;\n  position: relative;\n  float: left;\n  padding: 5px; }\n\n#textAreaFoto {\n  width: 100%;\n  height: 79px; }\n\n#espacioFoto {\n  float: left;\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  max-height: 800px;\n  text-align: center; }\n\n#fotoSubir {\n  max-width: 395px;\n  max-height: 395px;\n  text-align: center; }\n\n#enviarFoto {\n  width: 100%;\n  float: left;\n  position: relative;\n  text-align: center;\n  padding: 5px; }\n\n.celda {\n  width: 33%;\n  position: relative;\n  float: left;\n  top: 0;\n  left: 0; }\n\n.celda img {\n  margin-top: 20px;\n  width: 300px;\n  height: 300px;\n  position: relative;\n  top: 0;\n  left: 0; }\n\n.datosFoto {\n  opacity: 1;\n  position: static;\n  text-align: center;\n  width: 300px;\n  padding-top: 48%;\n  position: absolute;\n  float: left;\n  color: white;\n  display: none;\n  font-size: 18px; }\n\n.datosHidden {\n  top: 0;\n  left: 0;\n  margin-top: 20px;\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  float: left;\n  display: none;\n  opacity: 0.5;\n  background-color: black; }\n\n.celda:hover .datosHidden {\n  display: inline;\n  z-index: 2; }\n\n.celda:hover .datosFoto {\n  display: inline;\n  z-index: 3; }\n\n.contenedorFoto {\n  position: relative;\n  width: 100%; }\n\n#settings_modal button:hover {\n  cursor: pointer; }\n\n#botonSettings:hover {\n  cursor: pointer; }\n\n#settingsWheel {\n  width: 60px; }\n\n#settingsWheel:hover {\n  cursor: pointer; }\n\n.botonOpt {\n  margin-top: 15px; }\n\n#settings_modal button {\n  border: none;\n  background-color: white; }\n\n#settings_modal button:hover {\n  cursor: pointer; }\n\n#settings_modal div {\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\n#subirFoto {\n  background-image: url(\"/assets/images/plus.png\");\n  background-size: cover;\n  width: 300px;\n  height: 300px;\n  margin-right: 30px; }\n\n#subirFoto:hover {\n  background-image: url(\"/assets/images/plusHover.png\"); }\n"

/***/ }),

/***/ "./src/app/secured/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/secured/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _model_Follow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/Follow */ "./src/app/model/Follow.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/follow.service */ "./src/app/service/follow.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService, ruta, authenticationService, followService, modalService, postService, notificationService) {
        this.router = router;
        this.userService = userService;
        this.ruta = ruta;
        this.authenticationService = authenticationService;
        this.followService = followService;
        this.modalService = modalService;
        this.postService = postService;
        this.notificationService = notificationService;
        this.user = _model_User__WEBPACK_IMPORTED_MODULE_3__["User"].createDummy();
        this.follow_check = _model_Follow__WEBPACK_IMPORTED_MODULE_4__["Follow"].createDummy();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.profileID = params.profileID;
            _this.loadUser();
            _this.selfFollowedList();
        });
        this.imagePresent = false;
        this.fotoSubida = false;
        this.AjotitaTest();
        this.getNotifications();
        this.getRequest();
    };
    ProfileComponent.prototype.getNotifications = function () {
        this.notificationService.getNotification(this.authenticationService.logUser.id).subscribe(function (load) {
            console.log(load);
        });
    };
    ProfileComponent.prototype.getRequest = function () {
        this.notificationService.getRequest(this.authenticationService.logUser.id).subscribe(function (load) {
            console.log(load);
        });
    };
    ProfileComponent.prototype.loadPhotosForPerfil = function (idUser) {
        var _this = this;
        this.postService.requestPhotosForPerfil(idUser).subscribe(function (postPerfil) {
            _this.perfilPhotos = postPerfil;
            _this.perfilPhotos = _this.perfilPhotos.slice().reverse();
            console.log(_this.perfilPhotos);
        });
    };
    ProfileComponent.prototype.AjotitaTest = function () {
        var _this = this;
        this.postService.requestIdPostByIdPostAndLoggin(1, 6).subscribe(function (postLoad) {
            _this.post = postLoad;
            console.log(_this.post);
        });
    };
    ProfileComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getProfile(this.profileID).subscribe(function (user) {
            _this.user = user;
            _this.loadUserInfo();
            _this.checkFollowStatus(_this.user.id);
            _this.loadPhotosForPerfil(_this.user.id);
            _this.privacy = _this.user.privacity;
        }, function (error) {
            console.error('error retrieving user data ' + error);
            _this.ruta.navigate(['not-found']);
        });
    };
    ProfileComponent.prototype.loadUserInfo = function () {
        var _this = this;
        this.userService.getAmountFolloweds(this.user.id).subscribe(function (followeds) {
            _this.followeds = followeds;
        }, function (error) { return console.error('error retrieving followeds data ' + error); });
        this.userService.getAmountFollowers(this.user.id).subscribe(function (followers) {
            _this.followers = followers;
        }, function (error) { return console.error('error retrieving followers data ' + error); });
        this.userService.getFolloweds(this.user.id).subscribe(function (followed_list) {
            _this.followed_list = followed_list;
        }, function (error) { return console.error('Error retrieving the followed list ' + error); });
        this.userService.getFollowers(this.user.id).subscribe(function (follower_list) {
            _this.follower_list = follower_list;
        }, function (error) { return console.error('Error retrieving the follower list ' + error); });
    };
    ProfileComponent.prototype.isAuthUser = function () {
        // console.log(this.authenticationService.logUser.username +"------"+this.user.username);
        if (this.authenticationService.logUser && this.user) {
            return this.authenticationService.logUser.username === this.user.username;
        }
        return false;
    };
    ProfileComponent.prototype.isLogged = function () {
        if (this.authenticationService.logUser) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.sendFollow = function (followed_id) {
        var _this = this;
        this.followService.requestFollow(this.authenticationService.logUser.id, followed_id).subscribe(function (response) {
            _this.checkFollowStatus(_this.user.id);
            _this.selfFollowedList();
            _this.loadUserInfo();
            _this.loadFollowedStatus();
            _this.loadFollowerStatus();
        });
    };
    ProfileComponent.prototype.sendUnfollow = function (followed_id) {
        var _this = this;
        this.followService.unFollow(this.authenticationService.logUser.id, followed_id).subscribe(function (response) {
            _this.checkFollowedStatus(_this.user.id);
            _this.selfFollowedList();
            _this.loadUserInfo();
            if (followed_id == _this.user.id) {
                _this.follow_check.accepted = null;
            }
            _this.loadFollowedStatus();
            _this.loadFollowerStatus();
        });
    };
    ProfileComponent.prototype.followedPopUp = function () {
        if (this.authenticationService.logUser && this.user) {
            this.modalService.open(this.modalFollowed, { centered: true, size: 'sm', windowClass: 'modal-cs' });
            this.loadFollowedStatus();
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    ProfileComponent.prototype.followersPopUp = function () {
        if (this.authenticationService.logUser && this.user) {
            this.modalService.open(this.modalFollowers, { centered: true, size: 'sm', windowClass: 'modal-cs' });
            this.loadFollowerStatus();
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    // load followed users requests status
    ProfileComponent.prototype.loadFollowedStatus = function () {
        var _this = this;
        this.followed_status = [];
        for (var _i = 0, _a = this.followed_list; _i < _a.length; _i++) {
            var user = _a[_i];
            this.followService.checkFollow(user.id, this.authenticationService.logUser.id).subscribe(function (response) {
                _this.followed_status.push(response);
            });
        }
    };
    ProfileComponent.prototype.loadFollowerStatus = function () {
        var _this = this;
        this.follower_status = [];
        for (var _i = 0, _a = this.follower_list; _i < _a.length; _i++) {
            var user = _a[_i];
            this.followService.checkFollow(user.id, this.authenticationService.logUser.id).subscribe(function (response) {
                _this.follower_status.push(response);
            });
        }
    };
    ProfileComponent.prototype.uploadPopup = function () {
        this.modalService.open(this.modalUpload, { centered: true, size: 'sm', windowClass: 'modal-cs' });
    };
    // Profile button check, called on init
    ProfileComponent.prototype.checkFollowStatus = function (followed) {
        var _this = this;
        if (this.authenticationService.logStatus) {
            this.followService.checkFollow(followed, this.authenticationService.logUser.id).subscribe(function (follow_check) {
                _this.follow_check = follow_check;
            }, function (error) { return console.error('error checking follow ' + error); });
        }
    };
    ProfileComponent.prototype.selfFollowCheck = function (id) {
        return (id !== this.authenticationService.logUser.id);
    };
    // Follower status checking, will use auth-user followers
    ProfileComponent.prototype.checkFollowedStatus = function (followed_id) {
        return (this.self_followed_list.filter(function (user) { return (user.id === followed_id); }).length > 0);
    };
    ProfileComponent.prototype.checkFollowedAcceptedStatus = function (followed_id) {
        var statusFilter = this.followed_status.filter(function (follow) { return (follow.followed === followed_id); });
        if (statusFilter.length > 0) {
            return statusFilter[0].accepted;
        }
        else {
            return null;
        }
    };
    ProfileComponent.prototype.checkFollowerAcceptedStatus = function (follower_id) {
        var statusFilter = this.follower_status.filter(function (follow) { return (follow.followed === follower_id); });
        if (statusFilter.length > 0) {
            return statusFilter[0].accepted;
        }
        else {
            return null;
        }
    };
    //
    ProfileComponent.prototype.selfFollowedList = function () {
        var _this = this;
        if (this.authenticationService.logStatus) {
            this.userService.getFolloweds(this.authenticationService.logUser.id).subscribe(function (self_followed_list) {
                _this.self_followed_list = self_followed_list;
            }, function (error) { return console.error('Error retrieving the self followed list ' + error); });
        }
    };
    ProfileComponent.prototype.subirFoto = function (event) {
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
    ProfileComponent.prototype.enviarFoto = function () {
        var _this = this;
        this.userService.uploadImage(this.foto, this.descripcionFoto, this.authenticationService.logUser.id, new Date()).subscribe(function (resposta) {
            console.log('uploaded!');
            _this.fotoSubida = true;
            _this.imagePresent = false;
            _this.descripcionFoto = '';
            _this.loadPhotosForPerfil(_this.authenticationService.logUser.id);
        });
    };
    ProfileComponent.prototype.imagePopUp = function (id_image) {
        this.clickedImageId = id_image;
        this.imageRef = this.modalService.open(this.modalImage, { centered: true, size: 'lg', windowClass: 'modal-img' });
    };
    ProfileComponent.prototype.closeImage = function () {
        this.imageRef.close();
    };
    ProfileComponent.prototype.settingsPopUp = function () {
        if (this.authenticationService.logUser && this.user) {
            this.modalService.open(this.modalSettings, { centered: true, size: 'sm', windowClass: 'modal-cs' });
        }
        else {
            this.ruta.navigate(['login']);
        }
    };
    ProfileComponent.prototype.logOut = function () {
        this.authenticationService.removeLogin();
        this.ruta.navigate(['login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalFollowed'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "modalFollowed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalFollowers'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "modalFollowers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalUpload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "modalUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalImage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "modalImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalSettings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "modalSettings", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/secured/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/secured/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["authService"],
            _service_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _service_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"],
            _service_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/secured/secured-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/secured/secured-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SecuredRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredRoutingModule", function() { return SecuredRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _secured_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secured.component */ "./src/app/secured/secured.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/secured/profile/profile.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/secured/explore/explore.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/secured/feed/feed.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _secured_component__WEBPACK_IMPORTED_MODULE_2__["SecuredComponent"],
        children: [
            {
                path: 'accounts', loadChildren: './edit-user-profile/edit-user-profile.module#EditUserProfileModule',
                canActivate: [_shared__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            { path: '', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: ':profileID', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] }
        ]
    }
];
var SecuredRoutingModule = /** @class */ (function () {
    function SecuredRoutingModule() {
    }
    SecuredRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SecuredRoutingModule);
    return SecuredRoutingModule;
}());



/***/ }),

/***/ "./src/app/secured/secured.component.html":
/*!************************************************!*\
  !*** ./src/app/secured/secured.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/secured/secured.component.scss":
/*!************************************************!*\
  !*** ./src/app/secured/secured.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secured/secured.component.ts":
/*!**********************************************!*\
  !*** ./src/app/secured/secured.component.ts ***!
  \**********************************************/
/*! exports provided: SecuredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredComponent", function() { return SecuredComponent; });
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

var SecuredComponent = /** @class */ (function () {
    function SecuredComponent() {
    }
    SecuredComponent.prototype.ngOnInit = function () {
    };
    SecuredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secured',
            template: __webpack_require__(/*! ./secured.component.html */ "./src/app/secured/secured.component.html"),
            styles: [__webpack_require__(/*! ./secured.component.scss */ "./src/app/secured/secured.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SecuredComponent);
    return SecuredComponent;
}());



/***/ }),

/***/ "./src/app/secured/secured.module.ts":
/*!*******************************************!*\
  !*** ./src/app/secured/secured.module.ts ***!
  \*******************************************/
/*! exports provided: SecuredModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredModule", function() { return SecuredModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _secured_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secured.component */ "./src/app/secured/secured.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/secured/layout/layout.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/secured/profile/profile.component.ts");
/* harmony import */ var _secured_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secured-routing.module */ "./src/app/secured/secured-routing.module.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/secured/feed/feed.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/secured/explore/explore.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/secured/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-modal/image-modal.component */ "./src/app/secured/image-modal/image-modal.component.ts");
/* harmony import */ var _layout_closePop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/closePop.component */ "./src/app/secured/layout/closePop.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var components = [_secured_component__WEBPACK_IMPORTED_MODULE_2__["SecuredComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_10__["ImageModalComponent"], _layout_closePop_component__WEBPACK_IMPORTED_MODULE_11__["ClosePopoverOnClickOutsideDirective"]];
var SecuredModule = /** @class */ (function () {
    function SecuredModule() {
    }
    SecuredModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _secured_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecuredRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            declarations: [components, _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"], _explore_explore_component__WEBPACK_IMPORTED_MODULE_7__["ExploreComponent"]],
            exports: [components]
        })
    ], SecuredModule);
    return SecuredModule;
}());



/***/ }),

/***/ "./src/app/secured/shared/models/profile.model.ts":
/*!********************************************************!*\
  !*** ./src/app/secured/shared/models/profile.model.ts ***!
  \********************************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
        this.name = 'namnamnam';
        this.nick = 'nomnomnom';
        this.publications = 0;
        this.followers = 0;
        this.following = 0;
        this.pictures = [];
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/secured/shared/profile.service.ts":
/*!***************************************************!*\
  !*** ./src/app/secured/shared/profile.service.ts ***!
  \***************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/profile.model */ "./src/app/secured/shared/models/profile.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.url = 'http://urlalbackend.com';
        this.urlSufix = '/profiles/';
    }
    Object.defineProperty(ProfileService.prototype, "urlToProfile", {
        get: function () {
            return this.url + this.urlToProfile;
        },
        enumerable: true,
        configurable: true
    });
    ProfileService.prototype.getProfile = function (id) {
        /*
        return this.http.get(this.urlToProfile);
        */
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _models_profile_model__WEBPACK_IMPORTED_MODULE_2__["Profile"]());
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/secured/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/secured/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "./src/app/secured/shared/profile.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            declarations: [],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=secured-secured-module.js.map