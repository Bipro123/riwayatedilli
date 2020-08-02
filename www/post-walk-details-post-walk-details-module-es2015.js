(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-walk-details-post-walk-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-walk-details/post-walk-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-walk-details/post-walk-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-button color=\"dark\" class=\"btnback\" (click)=\"back()\">Back</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-align\">\n    <!-- <ion-card class=\"welcome-card\" *ngFor=\"let post of details\">\n      <ion-card-header>\n     \n        <ion-card-title><p>{{post.title.rendered}}</p></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{post.content.rendered}}</p>\n      </ion-card-content>\n    </ion-card> -->\n    <!-- <ion-card class=\"welcome-card\" *ngFor=\"let post of details\">\n  <ion-card-header>\n    <ion-card-title (click)=\"clickrun()\">{{post.title.rendered}}</ion-card-title>\n  </ion-card-header> -->\n\n  <!-- <ion-card-content>\n   <div [innerHTML]=\"post.content.rendered\"></div> --> \n   <!-- <p>{{post.content.rendered}}</p> -->  \n  <!-- </ion-card-content>\n</ion-card> -->\n<!-- <ion-text><h>{{post.title.rendered}}</h></ion-text> -->\n<ion-toolbar class=\"item-content\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-title class=\"headertitle\">{{title}}</ion-title>\n  <ion-item-divider class=\"headerdivider\" color=\"primary\"></ion-item-divider>\n</ion-toolbar>\n\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"archtitle\">Walk Details</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"archclass\" [innerHTML]=\"narrative\"></div> \n   <p class=\"entryfee\" [innerHTML]=\"entryfee\"></p>\n   <p class=\"timeinout\" [innerHTML]=\"timeinout\"></p>\n   <!-- <p>{{post.content.rendered}}</p> -->  \n  </ion-card-content>\n</ion-card>\n<!-- <ion-item class=\"blank\" lines=\"none\"> \n  </ion-item>\n  <ion-fab (click)=\"readyToShare()\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab (click)=\"presentModal()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"md-chatboxes\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/post-walk-details/post-walk-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/post-walk-details/post-walk-details.module.ts ***!
  \***************************************************************/
/*! exports provided: PostwalkdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostwalkdetailsPageModule", function() { return PostwalkdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_walk_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-walk-details.page */ "./src/app/post-walk-details/post-walk-details.page.ts");







let PostwalkdetailsPageModule = class PostwalkdetailsPageModule {
};
PostwalkdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _post_walk_details_page__WEBPACK_IMPORTED_MODULE_6__["PostwalkdetailsPage"]
                }
            ])
        ],
        declarations: [_post_walk_details_page__WEBPACK_IMPORTED_MODULE_6__["PostwalkdetailsPage"]]
    })
], PostwalkdetailsPageModule);



/***/ }),

/***/ "./src/app/post-walk-details/post-walk-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/post-walk-details/post-walk-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quoteclass {\n  font-weight: bold;\n  font-style: italic;\n  font-family: \"GaramondBold\";\n  font-size: 20px;\n  color: black;\n  text-align: left;\n}\n\n.archclass {\n  font-weight: normal;\n  font-size: 17px;\n  color: #000000;\n  text-align: justify;\n}\n\n.narraclass {\n  font-weight: normal;\n  font-size: 17px;\n  color: #000000;\n  text-align: justify;\n}\n\n.referclass {\n  font-weight: normal;\n  font-size: 17px;\n  color: #000000;\n  text-align: left;\n}\n\n.blank {\n  height: 15%;\n}\n\n.share {\n  margin-left: -2px;\n}\n\n.refertitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.narratitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.quote {\n  margin-top: 60px;\n}\n\n.archtitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.headerdivider {\n  margin-top: 0px;\n  margin-left: -2px;\n  min-height: 0.1px !important;\n}\n\n.headertitle {\n  text-align: center;\n  padding-bottom: 10px;\n  color: #2e1901;\n}\n\n.item-content {\n  position: fixed;\n  background-color: #ffffff;\n  text-align: justify;\n}\n\n.itemgrp {\n  position: fixed;\n  background-color: white;\n  text-align: justify;\n}\n\n.content-align {\n  text-align: justify;\n}\n\n.btnback {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC13YWxrLWRldGFpbHMvQzpcXFVzZXJzXFxXSU5cXERlc2t0b3BcXHRlc3RcXGNhbWVyYWFwcDEvc3JjXFxhcHBcXHBvc3Qtd2Fsay1kZXRhaWxzXFxwb3N0LXdhbGstZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3Qtd2Fsay1kZXRhaWxzL3Bvc3Qtd2Fsay1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0VEOztBREFBO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0Q7O0FEREE7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNJRDs7QURGQTtFQUNDLFdBQUE7QUNLRDs7QURGQTtFQUNDLGlCQUFBO0FDS0Q7O0FERkE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDS0Q7O0FESEE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDTUQ7O0FESkE7RUFDQyxnQkFBQTtBQ09EOztBRExBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtBQ1FEOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNTRjs7QURMQTtFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUUQ7O0FETkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0MsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNVRDs7QURSQTtFQUNDLG1CQUFBO0FDV0Q7O0FEVEE7RUFDQyxZQUFBO0FDWUQiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXdhbGstZGV0YWlscy9wb3N0LXdhbGstZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGVjbGFzc3tcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Zm9udC1mYW1pbHk6ICdHYXJhbW9uZEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbi5hcmNoY2xhc3N7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG59XHJcbi5uYXJyYWNsYXNze1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG5cdHRleHQtYWxpZ246anVzdGlmeTtcclxufVxyXG4ucmVmZXJjbGFzc3tcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHR0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuLmJsYW5re1xyXG5cdGhlaWdodDogMTUlO1xyXG59XHJcblxyXG4uc2hhcmV7XHJcblx0bWFyZ2luLWxlZnQgOiAtMnB4O1xyXG59XHJcblxyXG4ucmVmZXJ0aXRsZXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5uYXJyYXRpdGxle1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnF1b3Rle1xyXG5cdG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLmFyY2h0aXRsZXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5oZWFkZXJkaXZpZGVyeyBcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgbWluLWhlaWdodDogMC4xcHghaW1wb3J0YW50O1xyXG59XHJcbi5wYWdldG9waGVhZHtcclxufVxyXG4uaGVhZGVydGl0bGV7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdGNvbG9yOiAjMmUxOTAxO1xyXG59XHJcbi5pdGVtLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG59XHJcbi5pdGVtZ3Jwe1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbn1cclxuLmNvbnRlbnQtYWxpZ257XHJcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG59XHJcbi5idG5iYWNre1xyXG5cdGZsb2F0OiByaWdodDtcclxufSIsIi5xdW90ZWNsYXNzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IFwiR2FyYW1vbmRCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYXJjaGNsYXNzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5hcnJhY2xhc3Mge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ucmVmZXJjbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ibGFuayB7XG4gIGhlaWdodDogMTUlO1xufVxuXG4uc2hhcmUge1xuICBtYXJnaW4tbGVmdDogLTJweDtcbn1cblxuLnJlZmVydGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5hcnJhdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnF1b3RlIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmFyY2h0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIG1pbi1oZWlnaHQ6IDAuMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMmUxOTAxO1xufVxuXG4uaXRlbS1jb250ZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uaXRlbWdycCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jb250ZW50LWFsaWduIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmJ0bmJhY2sge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/post-walk-details/post-walk-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/post-walk-details/post-walk-details.page.ts ***!
  \*************************************************************/
/*! exports provided: PostwalkdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostwalkdetailsPage", function() { return PostwalkdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _comment_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment/comment.page */ "./src/app/comment/comment.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");












// import { HttpHeaders } from '@angular/common/http';
let PostwalkdetailsPage = class PostwalkdetailsPage {
    constructor(navCtrl, socialSharing, toastController, platform, loadingCtrl, http, route, router, modal, storage) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.route = route;
        this.router = router;
        this.modal = modal;
        this.storage = storage;
        this.isLoading = false;
        // this.postid =this.route.snapshot.paramMap.get('id');
        this.route.params.subscribe((params) => {
            this.postid = params.id;
        });
        storage.get('postlist').then((val) => {
            this.details = Array.of(val);
            // for(let post of this.details){
            //    var amg=post.content.rendered;
            //    this.title=post.title.rendered;
            //  }
            var amg = this.details[0][this.postid]['content'];
            this.title = this.details[0][this.postid]['title'];
            let parser = new DOMParser();
            let parsedHtml = parser.parseFromString(amg, 'text/html');
            // console.log(parsedHtml);
            this.narrative = parsedHtml.getElementById("walk").innerHTML;
            this.timeinout = parsedHtml.getElementById("timeinout").innerHTML;
            this.entryfee = parsedHtml.getElementById("entryfee").innerHTML;
            // this.loadingdismiss(); 
        }, error => {
            // this.presentToast();           
        });
    }
    back() {
        this.router.navigate(['/heritage-walks']);
    }
    // comment(){
    //   let formdata=new FormData();
    //   formdata.append('post',this.postid);
    //   formdata.append('author_name','Biprt');
    //   formdata.append('author_email','djkjd@gmail.com');
    //   formdata.append('content','Doodle');
    //   this.http.post('http://riwayatedilli.com/site/wp-json/wp/v2/comments',formdata).subscribe(data=>{
    //       console.log(data);
    //   },error=>{
    //     console.log("Error");
    //   });
    // }
    // newpost(){
    //   let newpo=new FormData();
    //   newpo.append('title','test from ionic');
    //   newpo.append('content','Show Data');
    //   let headers = new HttpHeaders({
    //     'Authorization': 'Basic cml3YXlhdGVkaWxsaTpSaXdheWF0ZWRpbGwmJjIwMTk='});
    //   let options = { headers: headers };
    //   this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts',newpo,options).subscribe(data=>{
    //       console.log(data);
    //   },error=>{
    //     console.log("Error");
    //   });
    // }
    readyToShare() {
        var options = {
            title: 'Riwayat-e-Dill',
            message: this.title,
            subject: '',
            files: '',
            url: 'https://riwayatedilli.com/site/?p=' + this.postid,
        };
        this.socialSharing.shareWithOptions(options);
    }
    ngOnDestroy() {
        // this.loadingdismiss();
        // this.backbttunsub();
    }
    // backbttsub()
    // {
    //   this.platform.backButton.subscribe(async ()=>{
    //             if(this.isLoading==true)
    //             {
    //               this.loadingdismiss();
    //             }
    //             this.navCtrl.back(); 
    //            });
    // }
    // backbttunsub(){
    //   this.platform.backButton.unsubscribe();
    // }
    // goBack()
    // {
    //  		this.router.navigateByUrl('/cities-of-delhi');
    // }
    loadingPresent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: "Please wait until data is loaded",
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    loadingdismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    ionViewDidEnter() {
        // this.backbttsub();
    }
    ionViewWillEnter() {
        // alert("is entering");
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No Internet Connection or Data not found',
                duration: 2000,
                position: "middle",
                color: "primary",
                showCloseButton: true,
                closeButtonText: "Reload"
            });
            toast.onDidDismiss().then((data) => {
                // alert('Reload');
            });
            toast.present();
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let newmodal = yield this.modal.create({
                component: _comment_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"],
                componentProps: {
                    'postid': this.postid,
                },
                cssClass: 'my-comment-modal-css'
            });
            return yield newmodal.present();
        });
    }
    ngOnInit() {
        this.postid = this.route.snapshot.paramMap.get('id');
    }
};
PostwalkdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
PostwalkdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postwalkdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-walk-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-walk-details/post-walk-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-walk-details.page.scss */ "./src/app/post-walk-details/post-walk-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
], PostwalkdetailsPage);



/***/ })

}]);