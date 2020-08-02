(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associated-people-associated-people-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/associated-people/associated-people.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/associated-people/associated-people.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n          <img class=\"home_head\" src=\"../assets/icon/people_toolbar_head.png\" width=\"205px\" align=\"middle\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <ion-card class=\"welcome-card\" *ngFor=\"let post of posts\">\n      <ion-card-header>\n     \n        <ion-card-title><p>{{post.name}}</p></ion-card-title>\n        <img class=\"avatar\" src=\"{{post.image_url}}\">\n      </ion-card-header>\n      <ion-card-content>\n         <div class=\"bio-details\">{{post.bio}}</div>\n      </ion-card-content>\n    </ion-card>\n<!-- <ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Aman Gopal Sureka</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/aman_380-x-380px.jpg\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"bio-details\">\n      Solution architect for IT infrastructure and manufacturing process automation.  Consultant on a variety of open-standards software solutions for ERP, CRM, Remote Resource Management and Network Diagnostics and maintenance.\n   </div>  \n  </ion-card-content>\n</ion-card> -->\n<!-- <ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Aditi Chaudhary (Concept & Content)</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/Aditi.jpg\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"bio-details\">\n      Aditi Chaudhary is a postgraduate student at Deccan College, Pune\n      majoring in Archaeology and Ancient Indian History and Culture. She received her Bachelor’s degree with honours in History from University of Delhi. Her interest areas include history, material heritage, art and culture.\n   </div>  \n  </ion-card-content>\n</ion-card>\n\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Debasish Roy (Desing Concept)</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/Debashish_380-x380px.jpg\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div>Following a passion since childhood and living it as a profession has been the greatest gift of my life! Starting from the school time sketchbooks through the canvas of life, to the vision of experiences that fill my mind now, it's always been a psychedelic roller coaster ride.</div>  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Arnab Baul (Technology)</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/Arnab_380-x-380px.jpg\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div>Arnab Baul is software Professionals, having 9 years of experience. He received his MCA Degree from WBUT. </div>  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Rohan Ghosh (Technology)</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/rohan_380-x380px.jpg\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div>Rohan Ghosh received his Bachelor’s Degree in Technology from MAKUT, West Bengal. His interest area includes bike riding,listining music.</div>  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Biprajit Saha Roy (Technology)</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/biprajit_380-x-380px.jpg\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div>Biprajit Saha Roy received his Bachelor’s Degree in Technology from MAKUT, West Bengal. His interest area includes electronics and learning new web technologies. </div>  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"card-header\">Sumonto Pyne (Design)</ion-card-title>\n    <img   class=\"avatar\" src=\"../assets/icon/male-avatar.png\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div>Sumonto is pursuing garaduantion. He is passionate in web portal and mobile app design.  </div>  \n  </ion-card-content>\n</ion-card> -->\n\n\n\n\n\n\n\n <!--  <button ion-button (click)=\"startBackgroundGeolocation()\">Start Background Geolocation</button>\n    <button ion-button (click)=\"stopBackgroundGeolocation()\">Stop Background Geolocation</button> -->\n    <!-- <ion-card class=\"welcome-card\">\n      <img src=\"/assets/shapes.svg\" alt=\"\" />\n      <ion-card-header>\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\n        <ion-card-title>Welcome to Ionic</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label>Resources</ion-label>\n      </ion-list-header>\n      <ion-item href=\"https://ionicframework.com/docs/\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label>Ionic Documentation</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n        <ion-label>Scaffold Out Your App</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n        <ion-label>Change Your App Layout</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n        <ion-label>Theme Your App</ion-label>\n      </ion-item>\n    </ion-list> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/associated-people/associated-people.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/associated-people/associated-people.module.ts ***!
  \***************************************************************/
/*! exports provided: AssociatedPeoplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatedPeoplePageModule", function() { return AssociatedPeoplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _associated_people_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./associated-people.page */ "./src/app/associated-people/associated-people.page.ts");







let AssociatedPeoplePageModule = class AssociatedPeoplePageModule {
};
AssociatedPeoplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _associated_people_page__WEBPACK_IMPORTED_MODULE_6__["AssociatedPeoplePage"]
                }
            ])
        ],
        declarations: [_associated_people_page__WEBPACK_IMPORTED_MODULE_6__["AssociatedPeoplePage"]]
    })
], AssociatedPeoplePageModule);



/***/ }),

/***/ "./src/app/associated-people/associated-people.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/associated-people/associated-people.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home_head {\n  font-size: 0.9rem;\n  padding-top: 0.1rem;\n  padding-left: 0.75rem;\n}\n\n.avatar {\n  padding-top: 0.1rem;\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n\n.card-header {\n  padding-top: 0.1rem;\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n\n.bio-details {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRlZC1wZW9wbGUvQzpcXFVzZXJzXFxXSU5cXERlc2t0b3BcXHRlc3RcXGNhbWVyYWFwcDEvc3JjXFxhcHBcXGFzc29jaWF0ZWQtcGVvcGxlXFxhc3NvY2lhdGVkLXBlb3BsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fzc29jaWF0ZWQtcGVvcGxlL2Fzc29jaWF0ZWQtcGVvcGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NEOztBRENBO0VBQ0UsbUJBQUE7RUFDRCxzQkFBQTtFQUNBLHVCQUFBO0FDRUQ7O0FEQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHRDs7QURBQTtFQUNDLG1CQUFBO0FDR0QiLCJmaWxlIjoic3JjL2FwcC9hc3NvY2lhdGVkLXBlb3BsZS9hc3NvY2lhdGVkLXBlb3BsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9oZWFke1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0cGFkZGluZy10b3A6IDAuMXJlbTtcblx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xufVxuLmF2YXRhcntcblx0XHRwYWRkaW5nLXRvcDogMC4xcmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDAuMzc1cmVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAwLjM3NXJlbTtcbn1cbi5jYXJkLWhlYWRlcntcblx0cGFkZGluZy10b3A6IDAuMXJlbTtcblx0cGFkZGluZy1sZWZ0OiA0LjAwcmVtO1xuXHRwYWRkaW5nLXJpZ2h0OiA0LjAwcmVtO1x0XG59XG5cbi5iaW8tZGV0YWlsc3tcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xufVxuIiwiLmhvbWVfaGVhZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59XG5cbi5hdmF0YXIge1xuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMzc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjM3NXJlbTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDAuMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuXG4uYmlvLWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/associated-people/associated-people.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/associated-people/associated-people.page.ts ***!
  \*************************************************************/
/*! exports provided: AssociatedPeoplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatedPeoplePage", function() { return AssociatedPeoplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");









let AssociatedPeoplePage = class AssociatedPeoplePage {
    constructor(navCtrl, platform, loadingCtrl, http, route, router, toastController) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.isLoading = false;
        this.http.get('https://riwayatedilli.com/site/wp-json/wp/v2/fetch/postbycategory/535').subscribe(data => {
            this.posts = data;
            //console.log(this.posts);
            this.loadingdismiss();
        }, error => {
            this.loadingdismiss();
            this.presentToast();
        });
    }
    backbttsub() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isLoading == true) {
                this.loadingdismiss();
            }
            this.navCtrl.back();
        }));
    }
    backbttunsub() {
        this.platform.backButton.unsubscribe();
    }
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
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No Internet Connection or Data not found',
                duration: 2000,
                position: "middle",
                color: "primary"
            });
            toast.present();
        });
    }
};
AssociatedPeoplePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AssociatedPeoplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-associatedpeople',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./associated-people.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/associated-people/associated-people.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./associated-people.page.scss */ "./src/app/associated-people/associated-people.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], AssociatedPeoplePage);



/***/ })

}]);