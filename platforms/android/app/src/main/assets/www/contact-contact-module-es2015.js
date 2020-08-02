(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n                <img class=\"home_head\" src=\"../assets/icon/contact_toolbar_head.png\" width=\"130px\" align=\"middle\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <form (ngSubmit)=\"loadContentPage()\">\n      <ion-item>\n         <ion-searchbar placeholder=\"Search Content by mail\" type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-searchbar>\n      </ion-item>\n    </form>\n\n    <ion-card class=\"welcome-card\" *ngFor=\"let post of posts\">\n      <ion-card-header>\n        <ion-card-title>{{post.subject}}</ion-card-title>\n        <ion-card-subtitle>Name : {{post.name}}</ion-card-subtitle>\n        <ion-card-subtitle>Phone : {{post.phone}}</ion-card-subtitle>\n        <ion-card-subtitle>Email : {{post.email}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{post.desc}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-fab (click)=\"presentModal()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"md-add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n    <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-input placeholder=\"Name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Subject\" type=\"text\" [(ngModel)]=\"subject\" name=\"subject\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Phone\" type=\"text\" [(ngModel)]=\"phone\" name=\"phone\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder=\"Description\" [(ngModel)]=\"desc\" name=\"desc\"></ion-textarea>\n      </ion-item>\n      \n      <ion-button expand=\"full\" color=\"tertiary\" type=\"submit\">Submit</ion-button>\n    </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _contactform_contactform_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contactform/contactform.page */ "./src/app/contactform/contactform.page.ts");








let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]
                }
            ])
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"], _contactform_contactform_page__WEBPACK_IMPORTED_MODULE_7__["ContactFormPage"]],
        entryComponents: [_contactform_contactform_page__WEBPACK_IMPORTED_MODULE_7__["ContactFormPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home_head {\n  font-size: 0.9rem;\n  padding-top: 0.1rem;\n  padding-left: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXFdJTlxcRGVza3RvcFxcdGVzdFxcY2FtZXJhYXBwMS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9oZWFke1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0cGFkZGluZy10b3A6IDAuMXJlbTtcblx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtXG59XG4iLCIuaG9tZV9oZWFkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctdG9wOiAwLjFyZW07XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _contactform_contactform_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contactform/contactform.page */ "./src/app/contactform/contactform.page.ts");








let ContactPage = class ContactPage {
    constructor(navCtrl, http, toastController, loadingCtrl, modal) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
    }
    ngOnInit() {
    }
    loadContentPage() {
        let newpo = new FormData();
        newpo.append('email', this.email);
        this.showToast("Please wait untill data is loading...");
        this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/fetch/contact', newpo).subscribe(data => {
            //console.log(data);
            this.posts = data;
            this.loadingdismiss();
        }, error => {
            this.showToast("No Internet Connection or Data not found");
            this.loadingdismiss();
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let newmodal = yield this.modal.create({
                component: _contactform_contactform_page__WEBPACK_IMPORTED_MODULE_5__["ContactFormPage"],
                componentProps: {},
                cssClass: 'my-comment-modal-css'
            });
            return yield newmodal.present();
        });
    }
    logForm() {
        /*console.log(this.name);
        console.log(this.email);
        console.log(this.phone);*/
        /*let newpo=new FormData();
        newpo.append('name',this.name);
        newpo.append('email',this.email);
        newpo.append('phone',this.phone);
        newpo.append('desc',this.desc);
    
        let headers = new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded'
        });
        
        this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/submit/contact',newpo,headers).subscribe(data=>{
            console.log(data);
            this.isEmailSent=data;
            if(this.isEmailSent){
              this.showToast("Mail Sent,Contacting you shortly.");
            }
            else{
              this.showToast("Mail can not sent, please try after sometime");
            }
        },error=>{
          this.showToast("Error");
        });*/
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: "middle",
                color: "primary",
                showCloseButton: true,
                closeButtonText: "Reload"
            });
            toast.onDidDismiss().then((data) => {
                //this.loadContentPage();
            });
            toast.present();
        });
    }
    loadingdismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ContactPage);



/***/ }),

/***/ "./src/app/contactform/contactform.page.scss":
/*!***************************************************!*\
  !*** ./src/app/contactform/contactform.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home_head {\n  font-size: 0.9rem;\n  padding-top: 0.1rem;\n  padding-left: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGZvcm0vQzpcXFVzZXJzXFxXSU5cXERlc2t0b3BcXHRlc3RcXGNhbWVyYWFwcDEvc3JjXFxhcHBcXGNvbnRhY3Rmb3JtXFxjb250YWN0Zm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3Rmb3JtL2NvbnRhY3Rmb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdGZvcm0vY29udGFjdGZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfaGVhZHtcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdHBhZGRpbmctdG9wOiAwLjFyZW07XG5cdHBhZGRpbmctbGVmdDogMC43NXJlbVxufVxuIiwiLmhvbWVfaGVhZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/contactform/contactform.page.ts":
/*!*************************************************!*\
  !*** ./src/app/contactform/contactform.page.ts ***!
  \*************************************************/
/*! exports provided: ContactFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormPage", function() { return ContactFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ContactFormPage = class ContactFormPage {
    constructor(navCtrl, modal, http, toastController) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.http = http;
        this.toastController = toastController;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modal.dismiss();
        });
    }
    logForm() {
        let newpo = new FormData();
        newpo.append('name', this.name);
        newpo.append('email', this.email);
        newpo.append('phone', this.phone);
        newpo.append('desc', this.desc);
        newpo.append('subject', this.subject);
        this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/submit/contact', newpo).subscribe(data => {
            //console.log(data);
            this.isEmailSent = data;
            if (this.isEmailSent == 1) {
                this.showToast("Mail Sent,Contacting you shortly.");
            }
            else if (this.isEmailSent == 2) {
                this.showToast("Mail can not sent, please try after sometime.");
            }
            else {
                this.showToast("Email ID not registered with us.");
            }
        }, error => {
            this.showToast("Error");
        });
        this.closeModal();
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: "top",
                color: "primary",
                showCloseButton: true,
                closeButtonText: "Reload"
            });
            toast.onDidDismiss().then((data) => {
            });
            toast.present();
        });
    }
};
ContactFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ContactFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactform.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactform.page.scss */ "./src/app/contactform/contactform.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ContactFormPage);



/***/ })

}]);